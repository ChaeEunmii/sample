'use client';

import { useRef, useState } from 'react';
import { Stack, Input, Button, IconButton } from '@shared/ui';

import styles from './UploaderField.module.scss';
import clsx from 'clsx';

interface UploaderFieldProps {
  /** FormItem이 주입하는 id */
  id?: string;
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
  /** 파일찾기 버튼 스타일, 현재 variant:default 에서 사용 */
  buttonVariant?: React.ComponentProps<typeof Button>['variant'];
  /** 파일 입력 라벨 */
  label?: string;
  /** 입력창 placeholder (변경 시) */
  placeholder?: string;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 파일 입력 필드의 name 속성 */
  name?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** invalid 여부 */
  invalid?: boolean;
  /** 등록 버튼명 */
  submitText?: string;
  /** 등록 버튼 클릭 이벤트 핸들러 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UploaderField: React.FC<UploaderFieldProps> = ({
  id,
  variant = 'default',
  onChange,
  accept,
  multiple = false,
  buttonText = '찾아보기',
  buttonVariant,
  label = '파일 선택',
  placeholder = '파일을 선택해주세요.',
  className,
  name = 'file',
  disabled = false,
  invalid = false,
  submitText = '등록',
  onClick,
}: UploaderFieldProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const hasValue = Boolean(fileName); // 파일명이 있으면 true, 없으면 false

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
      <Stack
        type="field"
        className={clsx(variant && styles[variant], invalid && styles.invalid, className)}
      >
        {variant === 'default' ? (
          <>
            <div className={styles.inputArea}>
              <Input
                type="text"
                id={id}
                value={fileName}
                placeholder={placeholder}
                title={label}
                size="large"
                readOnly
                className={styles.input}
              />
              {hasValue && (
                <IconButton name="delete" className={styles.clear} onClick={handleFileClear}>
                  지우기
                </IconButton>
              )}
            </div>

            <Button
              size="large"
              variant={buttonVariant ?? 'primary'}
              onClick={handleButtonClick}
              disabled={disabled}
            >
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
                  id={id}
                  type="text"
                  value={fileName}
                  placeholder={placeholder}
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
