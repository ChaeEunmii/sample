'use client';

import { useState, useRef } from 'react';
import { TextList, TitleBar, Image, Grid, IconButton, Icon } from '@shared/ui';
import styles from './ImageUpload.module.scss';

type ImageFile = {
  /** ID */
  id: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 파일 */
  file: File;
};

/** 컴포넌트 Props 정의 */
export type ImageUploadProps = {
  /** 최대 업로드 이미지 수 */
  maxFiles?: number;
  /** 업로드 허용 최대 파일 용량 (MB) */
  maxFileSizeMb?: number;
  /** 상단 타이틀 */
  title?: string;
  /** 안내 문구 리스트 */
  infoList?: string[];
  /** 이미지 상태 변경 시 콜백 */
  onChange?: (images: ImageFile[]) => void;
};

export const ImageUpload = ({
  maxFiles = 5,
  maxFileSizeMb = 10,
  title = '이미지 첨부',
  infoList,
  onChange,
}: ImageUploadProps) => {
  // 업로드된 이미지 목록 상태
  const [images, setImages] = useState<ImageFile[]>([]);
  // 숨겨진 input file 참조
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 파일 추가 이벤트 핸들러
  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const newImages: ImageFile[] = [];

    for (const file of fileArray) {
      // 파일 확장자 체크
      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        alert('JPG, JPEG, PNG 파일만 업로드 가능합니다.');
        continue;
      }

      // 파일 크기 제한 체크
      if (file.size > maxFileSizeMb * 1024 * 1024) {
        alert(`파일당 최대 ${maxFileSizeMb}MB까지만 업로드 가능합니다.`);
        continue;
      }

      // 미리보기용 Object URL 생성
      const objectURL = URL.createObjectURL(file);

      newImages.push({
        id: objectURL, // id는 Object URL로 임시 사용
        image: {
          src: objectURL,
          alt: file.name,
        },
        file,
      });
    }

    // 기존 이미지 + 새 이미지 합쳐서 maxFiles 수 제한 적용
    const totalImages = [...images, ...newImages].slice(0, maxFiles);
    setImages(totalImages);
    onChange?.(totalImages);

    // 파일 input 초기화 (같은 파일 다시 선택 가능하게 함)
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // 개별 이미지 삭제 핸들러
  const handleRemoveImage = (id: string) => {
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);
    onChange?.(updated);
  };

  // 숨겨진 input 클릭 유도
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  // 기본 안내 문구 정의
  const DEFAULT_INFO_LIST = [
    '파일당 최대 10MB까지 등록할 수 있습니다. (파일형식: JPG, JPEG, PNG)',
    '첨부파일은 최대 5장까지 등록 가능합니다.',
    '반드시 반품 사유에 해당하는 이미지를 첨부해 주세요.',
  ];
  // 안내문구 렌더
  const renderTextList = infoList && infoList.length > 0 ? infoList : DEFAULT_INFO_LIST;

  return (
    <div>
      {/* 상단 타이틀 */}
      <TitleBar type="docs" title={title} />

      {/* 이미지 목록 영역 (3컬럼 그리드) */}
      <Grid columns={3} gutter={8} className={styles.list}>
        {images.map((img) => (
          <div key={img.id} className={styles.item}>
            {/* 업로드된 이미지 */}
            <Image src={img.image.src} alt={img.image.alt || 'preview'} className={styles.img} />

            {/* 삭제 버튼 */}
            <IconButton
              size="large"
              name="deleteBg"
              onClick={() => handleRemoveImage(img.id)}
              className={styles.delete}
            >
              삭제
            </IconButton>
          </div>
        ))}

        {/* 업로드 버튼 (최대 수 미만일 때만 표시) */}
        {images.length < maxFiles && (
          <button type="button" onClick={handleClickUpload} className={styles.control}>
            <Icon size="medium" name="plus" />
            <div style={{ fontSize: 12 }}>{`${images.length} / ${maxFiles}`}</div>
          </button>
        )}

        {/* 숨겨진 파일 입력 필드 */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleAddImage}
          accept="image/jpeg,image/png,image/jpg"
          multiple
          hidden
        />
      </Grid>

      {/* 안내 문구 리스트 */}
      {renderTextList.length > 0 && (
        <TextList data={renderTextList} variant="info" className={styles.info} />
      )}
    </div>
  );
};
