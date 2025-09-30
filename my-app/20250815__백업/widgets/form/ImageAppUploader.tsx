'use client';

import { useState } from 'react';
import { ImageUploader, Drawer, Text, Icon } from '@shared/ui';
import styles from './ImageAppUploader.module.scss';
// import clsx from 'clsx';

// 이미지 가져오는 방식 (default: button)
type pickerType = 'button' | 'drawer';

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
export type ImageAppUploaderProps = {
  type?: 'grid' | 'swiper';
  /** 파일가져오는 방식 */
  pickerType?: pickerType;
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
};

export const ImageAppUploader = ({
  type = 'grid',
  pickerType = 'button',
  columns = 3,
  maxFiles = 5,
  maxFileSizeMb = 10,
  infoList,
  className,
  onChange,
  defaultValue = [],
}: ImageAppUploaderProps) => {
  // 작업선택 Drawer 상태
  const [isUploadMethodDrawer, setIsUploadMethodDrawer] = useState(false);

  // 이미지 가져오는 방식 drawer 인 경우
  const isPickerDrawer = pickerType === 'drawer';

  return (
    <>
      <ImageUploader
        type={type}
        pickerType={pickerType}
        columns={columns}
        maxFiles={maxFiles}
        maxFileSizeMb={maxFileSizeMb}
        infoList={infoList}
        className={className}
        onChange={onChange}
        defaultValue={defaultValue}
      />

      {/* 작업선택 (D) (pickerType drawer 일때 사용) */}
      {isPickerDrawer && (
        <Drawer
          title="작업선택"
          isOpen={isUploadMethodDrawer}
          onClose={() => setIsUploadMethodDrawer(false)}
        >
          <div className={styles.drawer}>
            <ul className={styles.btns}>
              <li>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => {
                    setIsUploadMethodDrawer(false);
                    // fileInputRef.current?.click(); // 임시
                  }}
                >
                  <span className={styles.icon}>
                    <Icon name="camera" size="large" />
                  </span>
                  <Text as="span" size="3">
                    카메라
                  </Text>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => {
                    setIsUploadMethodDrawer(false);
                    // fileInputRef.current?.click(); // 임시
                  }}
                >
                  <span className={styles.icon}>
                    <Icon name="album" size="large" />
                  </span>
                  <Text as="span" size="3">
                    앨범
                  </Text>
                </button>
              </li>
            </ul>
          </div>
        </Drawer>
      )}
    </>
  );
};

ImageAppUploader.displayName = 'ImageAppUploader';
