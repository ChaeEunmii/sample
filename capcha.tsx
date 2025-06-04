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



// LoginForm.tsx

import React, { useState, useEffect } from 'react';
import { CaptchaBox } from './CaptchaBox';

export const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    captcha: '',
  });

  const [captchaImageUrl, setCaptchaImageUrl] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');

  // 보안문자 이미지 불러오기
  const fetchCaptcha = () => {
    // 임시 예시: 백엔드에서 이미지 URL과 토큰을 받아온다고 가정
    const randomId = Math.random().toString(36).substring(2);
    setCaptchaToken(randomId);
    setCaptchaImageUrl(`/api/captcha/image/${randomId}`);
  };

  useEffect(() => {
    fetchCaptcha(); // 초기 보안문자 불러오기
  }, []);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 서버로 form + captchaToken 함께 전송
    const payload = {
      ...form,
      captchaToken,
    };

    console.log('제출할 데이터:', payload);
    // fetch('/api/login', { method: 'POST', body: JSON.stringify(payload) }) ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디
        <input
          type="text"
          value={form.username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
      </label>

      <label>
        비밀번호
        <input
          type="password"
          value={form.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </label>

      {/* 📌 보안문자 입력 필드 */}
      <CaptchaBox
        imageUrl={captchaImageUrl}
        value={form.captcha}
        onChange={(val) => handleChange('captcha', val)}
        onRefresh={fetchCaptcha}
        onPlayAudio={() => alert('소리듣기 실행')}
      />

      <button type="submit">로그인</button>
    </form>
  );
};