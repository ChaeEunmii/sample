'use client';
// 라이브러리
import { useState, useEffect } from 'react';
// 컴포넌트
import { Avatar, Icon } from '@shared/ui';
// 스타일
import styles from './MeUploader.module.scss';
import clsx from 'clsx';

interface MeUploaderProps {
  onChange?: (file: File) => void;
  className?: string;
}

export const MeUploader = ({ onChange, className }: MeUploaderProps) => {
  const [src, setSrc] = useState('');

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (src) URL.revokeObjectURL(src);
      setSrc(URL.createObjectURL(file));
      onChange?.(file);
    }
  };

  // 언마운트 시 정리(메모리누수 위험)
  useEffect(() => {
    return () => {
      if (src) URL.revokeObjectURL(src);
    };
  }, []);

  return (
    <div className={clsx(styles.root, className)}>
      <Avatar src={src || '/images/no_avatar.png'} alt="프로필 사진" type="mespace" />

      <label className={styles.button}>
        <Icon name="camera" label="사진 탐색" size="small" />
        <input type="file" accept="image/*" onChange={fileChange} className={styles.input} />
      </label>
    </div>
  );
};
