'use client';

import { useRef, useState } from 'react';
import { Drawer, Icon, Text, ImageUploader } from '@shared/ui';
import { ImageFile } from '@shared/ui/blocks/ImageUploader';
import styles from './ImageUploadPicker.module.scss';

/**
 * - ImageUploader와 동일한 props를 그대로 받음
 * - 업로드 버튼 클릭 시 onRequestPick을 통해 Drawer를 열고,
 *   Drawer 내에서 선택하면 내부 openFileDialog()를 호출해 파일 선택창을 띄움
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
        <div className={styles.drawer}>
          <ul className={styles.btns}>
            <li>
              <button
                type="button"
                className={styles.btn}
                onClick={() => {
                  setIsPickerOpen(false);
                  // (실제 카메라 처리 필요 시)
                  openFileDialogRef.current?.(); // 임시
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
                  setIsPickerOpen(false);
                  openFileDialogRef.current?.(); // 임시
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
    </>
  );
};

ImageUploadPicker.displayName = 'ImageUploadPicker';
