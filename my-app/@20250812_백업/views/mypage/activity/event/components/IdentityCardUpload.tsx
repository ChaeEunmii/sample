'use client';

import { useRef, useState } from 'react';
import { TextList, Button, Box, Text } from '@shared/ui';
import styles from './IdentityCardUpload.module.scss';

export const IdentityCardUpload = () => {
  // 파일 입력 요소에 접근하기 위한 ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // 선택된 파일 이름 상태
  const [fileName, setFileName] = useState<string>('');

  // '파일 업로드' 버튼 클릭 시 숨겨진 input 클릭 트리거
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // 파일 선택 시 파일명 상태 저장
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className={styles.wrap}>
      {fileName && (
        <Box color="point" className={styles.box}>
          <Text size="5" color="primary" weight="medium">
            {fileName}
          </Text>
        </Box>
      )}
      <Button variant="tertiary" onClick={handleUploadClick}>
        파일 업로드
      </Button>
      {/* 숨겨진 파일 입력 필드 */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/jpg"
        onChange={handleFileChange}
        className={styles.hiddenInput}
        hidden
      />
      <TextList
        data={[
          '신분증 (주민등록증/운전면허증)은 반드시 앞면을 복사/촬영 해주세요.',
          '파일당 최대 10MB까지 등록할 수 있습니다. (파일형식 : JPG, JPEG, PNG)',
        ]}
        variant="info"
        className="ncp-mt-m"
      />
    </div>
  );
};
