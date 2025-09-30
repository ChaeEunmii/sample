import { ReactNode } from 'react';

// 이미지 타입
export interface BannerImage {
  src: string;
  alt?: string;
  figure?: boolean;
}

// 이미지/비디오 포괄 타입
export interface BannerMedia extends BannerImage {
  poster?: string;
}

// 배너 텍스트 옵션 포함 타입
export interface TextWithColor {
  text?: ReactNode;
  color?: string;
}

export type BannerTextAlign = 'left' | 'center' | 'right';
