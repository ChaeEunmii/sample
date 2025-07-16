'use client';

import { useState } from 'react';
import { Input, Button, Stack } from '@shared/ui';
import clsx from 'clsx';
import styles from './Captcha.module.scss';

interface CaptchaProps {
  // 부모 컴포넌트로 캡차 값 전달
  onChange?: (field: string, value: string) => void;
}

export const Captcha = ({ onChange }: CaptchaProps) => {
  const [captchaValue, setCaptchaValue] = useState('');
  // 캡차(임시)
  const [captchaUrl, setCaptchaUrl] = useState('/images/sample_captcha.png');

  // 새로고침
  const handleRefreshCaptcha = () => {
    console.log('새로고침 버튼 클릭');
    setCaptchaUrl('/images/sample_captcha.png');
  };

  // 음성 안내
  const handlePlayAudio = () => {
    console.log('음성안내 버튼 클릭');
  };

  // 입력값 변경 시 부모 컴포넌트에 전달
  const handleCaptchaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaValue(value);
    onChange?.('captchaValue', value); // 부모 컴포넌트로 캡차 값 전달
  };

  return (
    <>
      <div className={clsx(styles.root, styles.captchaWrap)}>
        <div className={styles.captcha}>
          {/* 보안문자 영역(임시) */}
          <img src={captchaUrl} alt="보안문자" />
        </div>
        <Stack type="field">
          <Input
            title="보안숫자"
            placeholder="보안숫자"
            value={captchaValue}
            onChange={handleCaptchaInputChange}
            size="large"
          />
          <Button
            iconOnly="sound"
            variant="tertiary"
            className="ncp-w-auto"
            onClick={handlePlayAudio}
            size="large"
          >
            음성안내
          </Button>
          <Button
            iconOnly="refresh"
            variant="tertiary"
            className="ncp-w-auto"
            onClick={handleRefreshCaptcha}
            size="large"
          >
            새로고침
          </Button>
        </Stack>
      </div>
    </>
  );
};

Captcha.displayName = 'Captcha';
