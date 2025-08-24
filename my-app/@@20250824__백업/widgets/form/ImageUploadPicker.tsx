'use client';

import { useRef, useState } from 'react';
import { Drawer, Icon, IconName, Text, ImageUploader } from '@shared/ui';
import { ImageFile } from '@shared/ui/blocks/ImageUploader';
import styles from './ImageUploadPicker.module.scss';

/**
 * - ImageUploader와 동일한 props를 그대로 받음
 * - 업로드 버튼 클릭 시 onRequestPick을 통해 Drawer를 열고,
 *   Drawer 내에서 작업선택 하여 첨부하는 방식
 */
export type ImageUploadPickerProps = React.ComponentProps<typeof ImageUploader> & {
  /** 외부에 이미지 변경 필요 시 */
  onChange?: (images: ImageFile[]) => void;
};

export const ImageUploadPicker = ({
  // ImageUploader와 동일한 props들을 그대로 받는다.
  onChange,
  ...restProps
}: ImageUploadPickerProps) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  // ImageUploader가 제공한 openFileDialog 헬퍼를 저장
  const openFileDialogRef = useRef<null | (() => void)>(null);

  // 작업 선택 Drawer 버튼 목록
  const pickerOptions = [
    {
      label: '카메라',
      icon: 'camera',
      onClick: () => {
        setIsPickerOpen(false);
        // 카메라 실행 로직
        openFileDialogRef.current?.(); // 임시
      },
    },
    {
      label: '앨범',
      icon: 'album',
      onClick: () => {
        setIsPickerOpen(false);
        // 앨범 실행 로직
        openFileDialogRef.current?.(); // 임시
      },
    },
  ];

  return (
    <>
      {/* 공통 컴퍼넌트에 onRequestPick */}
      <ImageUploader
        {...restProps}
        onChange={onChange}
        onRequestPick={({ openFileDialog }) => {
          // 업로드 버튼 클릭 시 Drawer 열고, 헬퍼 보관
          openFileDialogRef.current = openFileDialog;
          setIsPickerOpen(true);
        }}
      />

      {/* 작업선택 (D) */}
      <Drawer title="작업선택" isOpen={isPickerOpen} onClose={() => setIsPickerOpen(false)}>
        <div className={styles.btns}>
          {pickerOptions.map(({ label, icon, onClick }) => (
            <button key={icon} type="button" className={styles.btn} onClick={onClick}>
              <span className={styles.icon}>
                <Icon name={icon as IconName} size="large" />
              </span>
              <Text as="span" size="3">
                {label}
              </Text>
            </button>
          ))}
        </div>
      </Drawer>
    </>
  );
};

ImageUploadPicker.displayName = 'ImageUploadPicker';
