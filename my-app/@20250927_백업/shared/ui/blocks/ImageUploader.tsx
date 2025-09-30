'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { TextList, Image, Grid, IconButton, Icon, Text } from '@shared/ui';
import styles from './ImageUploader.module.scss';
import clsx from 'clsx';

export type ImageFile = {
  /** ID */
  id: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt?: string;
  };
  /** 파일 */
  file: File | null;
};

/** 컴포넌트 Props 정의 */
export type ImageUploaderProps = {
  type?: 'grid' | 'swiper';
  /** 그리드 컬럼 수 (grid 타입일 때만 사용) */
  columns?: number;
  /** 최대 업로드 이미지 수 */
  maxFiles?: number;
  /** 업로드 허용 최대 파일 용량 (MB) */
  maxFileSizeMb?: number;
  /** 안내 문구 리스트 */
  infoList?: string[];
  /** 추가 클래스명 */
  className?: string;
  /** 이미지 상태 변경 시 콜백 */
  onChange?: (images: ImageFile[]) => void;
  /** 초기 이미지 값 */
  defaultValue?: ImageFile[];
  /** 부모에서 Drawer 열어서 첨부 하고 싶을 때 사용 */
  onRequestPick?: (helpers: { openFileDialog: () => void }) => void;
  /** 버튼 스타일 카메라 아이콘으로 변경 여부(기본: false) */
  isCameraButton?: boolean;
};

export const ImageUploader = ({
  type = 'grid',
  columns = 3,
  maxFiles = 5,
  maxFileSizeMb = 10,
  infoList,
  className,
  onChange,
  defaultValue = [],
  onRequestPick,
  isCameraButton = false,
}: ImageUploaderProps) => {
  // 업로드된 이미지 목록 상태 (defaultValue가 있으면 최대 maxFiles 개까지만 잘라서 초기화)
  const [images, setImages] = useState<ImageFile[]>(() => (defaultValue ?? []).slice(0, maxFiles));
  // 스와이퍼 위치 관리
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  // 숨겨진 input file 참조
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 숨겨둔 input 클릭해 파일 선택창 여는 헬퍼
  const openFileDialog = () => fileInputRef.current?.click();

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

    // Swiper 맨 끝으로 이동
    if (type === 'swiper' && swiperInstance) {
      setTimeout(() => {
        swiperInstance.slideTo(totalImages.length);
      }, 0);
    }

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

  // 업로드 버튼 클릭 → 부모가 onRequestPick 주면 호출, 없으면 기존 로직 그대로 사용
  const handleUploadClick = () => {
    if (onRequestPick) onRequestPick({ openFileDialog });
    else handleClickUpload(); // 기존 로직 그대로 사용
  };

  // 기본 안내 문구 정의
  const DEFAULT_INFO_LIST = [
    '파일당 최대 10MB까지 등록할 수 있습니다. (파일형식: JPG, JPEG, PNG)',
    '첨부파일은 최대 5장까지 등록 가능합니다.',
    '반드시 반품 사유에 해당하는 이미지를 첨부해 주세요.',
  ];
  // 안내문구 렌더
  const renderTextList = infoList && infoList.length > 0 ? infoList : DEFAULT_INFO_LIST;

  // 이미지 아이템 렌더링 함수
  const renderImageItem = (img: ImageFile) => (
    <div key={img.id} className={styles.item}>
      {/* 업로드된 이미지 */}
      <Image src={img.image.src} alt={img.image.alt || '이미지'} className={styles.img} />

      {/* 삭제 버튼 */}
      <IconButton
        name="deleteBg"
        onClick={() => handleRemoveImage(img.id)}
        className={styles.delete}
      >
        삭제
      </IconButton>
    </div>
  );

  // onRequestPick 이미지 첨부 방식인 경우 (버튼 디자인변경)
  const isPickerUpload = onRequestPick;

  // 업로드 버튼 렌더링 함수
  const renderUploadButton = () => (
    <button type="button" onClick={handleUploadClick} className={styles.control}>
      <Icon
        size={isPickerUpload || isCameraButton ? 'large' : 'medium'}
        name={isPickerUpload || isCameraButton ? 'camera' : 'plus'}
      />
      <Text as="span" size="3" color="gray3">
        {isPickerUpload || isCameraButton ? (
          <>
            <span className={styles.point}>{images.length}</span> / {maxFiles}
          </>
        ) : (
          <>
            (<span className={styles.point}>{images.length}</span>/{maxFiles})
          </>
        )}
      </Text>
    </button>
  );

  return (
    <>
      {/* 이미지 목록 영역 */}
      {type === 'grid' ? (
        // Grid 타입
        <Grid columns={columns} gutter={8} className={clsx(styles.list, className)}>
          {images.map(renderImageItem)}
          {/* 업로드 버튼 (최대 수 미만일 때만 표시) */}
          {images.length < maxFiles && renderUploadButton()}
        </Grid>
      ) : (
        // Swiper 타입
        <Swiper
          slidesPerView="auto"
          className={clsx(styles.swiper, className)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className={styles.swiperItem}>
              {renderImageItem(img)}
            </SwiperSlide>
          ))}
          {/* 업로드 버튼 (최대 수 미만일 때만 표시) */}
          {images.length < maxFiles && (
            <SwiperSlide className={styles.swiperItem}>{renderUploadButton()}</SwiperSlide>
          )}
        </Swiper>
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

      {/* 안내 문구 리스트 (grid 타입일 때만 표시) */}
      {type === 'grid' && renderTextList.length > 0 && (
        <TextList data={renderTextList} variant="info" className={styles.info} />
      )}
    </>
  );
};

ImageUploader.displayName = 'ImageUploader';
