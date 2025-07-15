'use client';

import { useRef, useState } from 'react';
import { Stack, Input, Button, IconButton } from '@shared/ui';

import styles from './UploaderField.module.scss';
import clsx from 'clsx';

interface UploaderFieldProps {
  /** 업로더 스타일 변형 */
  variant?: 'default' | 'upload' | string;
  /** 파일 선택 시 콜백 함수 */
  onChange?: (files: FileList | null) => void;
  /** 허용할 파일 확장자 (예: '.jpg,.png,.pdf') */
  accept?: string;
  /** 여러 파일 선택 허용 여부 */
  multiple?: boolean;
  /** 파일 찾기 버튼 텍스트 */
  buttonText?: string;
  /** 파일 입력 라벨 */
  label?: string;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 파일 입력 필드의 name 속성 */
  name?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 등록 버튼명 */
  submitText?: string;
  /** 등록 버튼 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UploaderField: React.FC<UploaderFieldProps> = ({
  variant = 'default',
  onChange,
  accept,
  multiple = false,
  buttonText = '찾아보기',
  label = '파일 선택',
  className,
  name = 'file',
  disabled = false,
  submitText = '등록',
  onClick,
}: UploaderFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      // 파일 이름 표시 설정
      if (files.length === 1) {
        setFileName(files[0].name);
      } else {
        setFileName(`${files.length}개 파일 선택됨`);
      }

      // 콜백 호출
      if (onChange) {
        onChange(files);
      }
    } else {
      setFileName('');
      if (onChange) {
        onChange(null);
      }
    }
  };

  const handleFileClear = () => {
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      <Stack type="field" className={clsx(variant && styles[variant], className)}>
        {variant === 'default' ? (
          <>
            <div className={styles.inputArea}>
              <Input
                type="text"
                value={fileName}
                placeholder="파일을 선택해주세요."
                title={label}
                size="large"
                readOnly
                className={styles.input}
              />
              <IconButton name="delete" className={styles.clear} onClick={handleFileClear}>
                지우기
              </IconButton>
            </div>

            <Button size="large" variant="primary" onClick={handleButtonClick} disabled={disabled}>
              {buttonText}
            </Button>
          </>
        ) : (
          <>
            <Button
              prefixIcon="search"
              size="large"
              variant="secondary"
              onClick={handleButtonClick}
              disabled={disabled}
              className={clsx(variant === 'upload' && styles.uploadButton)}
            >
              {buttonText}
            </Button>

            <Stack className={styles.bottombox}>
              <div className={styles.inputArea}>
                <Input
                  type="text"
                  value={fileName}
                  placeholder="파일을 선택해주세요."
                  title={label}
                  size="large"
                  readOnly
                  className={styles.input}
                />
                <IconButton name="delete" className={styles.clear} onClick={handleFileClear}>
                  지우기
                </IconButton>
              </div>

              <Button size="large" variant="primary" onClick={onClick} disabled={disabled}>
                {submitText}
              </Button>
            </Stack>
          </>
        )}
        {/* 숨겨진 파일 입력 필드 */}
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
          name={name}
          disabled={disabled}
          hidden
        />
      </Stack>
    </>
  );
};

UploaderField.displayName = 'UploaderField';
