// CaptchaBox.tsx

import React from 'react';

interface CaptchaBoxProps {
  imageUrl: string;               // 보안문자 이미지 URL
  value: string;                  // 입력값 (Controlled)
  onChange: (value: string) => void; // 입력값 변경 핸들러
  onRefresh: () => void;          // 새로고침 버튼 클릭
  onPlayAudio?: () => void;       // 소리듣기 버튼 클릭 (optional)
  disabled?: boolean;             // 입력 비활성화 여부
}

export const CaptchaBox: React.FC<CaptchaBoxProps> = ({
  imageUrl,
  value,
  onChange,
  onRefresh,
  onPlayAudio,
  disabled = false,
}) => {
  return (
    <div className="captcha-box">
      <div className="captcha-box__top">
        <img
          src={imageUrl}
          alt="보안문자"
          className="captcha-box__image"
        />
        <button
          type="button"
          className="captcha-box__button"
          onClick={onRefresh}
          aria-label="새로고침"
        >
          🔄
        </button>
        {onPlayAudio && (
          <button
            type="button"
            className="captcha-box__button"
            onClick={onPlayAudio}
            aria-label="음성으로 듣기"
          >
            🔊
          </button>
        )}
      </div>
      <input
        type="text"
        className="captcha-box__input"
        placeholder="보안문자를 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};