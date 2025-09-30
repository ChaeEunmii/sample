'use client';

import React from 'react';
// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Heading, Text, Link, Image } from '@shared/ui';
// 스타일
import styles from './ColorSetupBanner.module.scss';
import clsx from 'clsx';
// 타입
import { BannerImage, TextWithColor } from './bannerType';

export interface ColorSetupBannerProps {
  /** 배너 타이틀 */
  title?: TextWithColor;
  /** 배너 서브 타이틀 */
  subtitle?: TextWithColor;
  /** 배너 이미지 */
  image?: BannerImage;
  /** 키워드 */
  keywords?: string[];
  /** 배너 링크 */
  href: string;
  /** 정의된 컬러케이스 사용 */
  colorType?: 'black' | 'lime';
  /** 배너 배경 색상(colorType 미사용시) */
  color?: string;
}
export const ColorSetupBanner = ({
  title,
  subtitle,
  image,
  keywords,
  href,
  colorType,
  color,
}: ColorSetupBannerProps) => {
  const bannerStyle = !colorType && color ? { backgroundColor: color } : undefined;

  return (
    <div
      className={clsx(styles.root, colorType && styles[`type-${colorType}`])}
      style={bannerStyle}
    >
      <Link href={href} className={styles.link}>
        {image && <Image {...image} className={styles.image} />}
        <div className={styles.top}>
          {title?.text && (
            <Heading className={styles.title} style={textColor(title.color)}>
              {title.text}
            </Heading>
          )}
          {subtitle?.text && (
            <Text as="span" className={styles.subtitle} style={textColor(subtitle.color)}>
              {subtitle.text}
            </Text>
          )}
        </div>
        {/* 키워드 */}
        {keywords && keywords.length > 0 && (
          <div className={styles.keywords}>
            {keywords.map((kw, idx) => (
              <React.Fragment key={idx}>
                <span className={styles.keyword}>{kw}</span>
                {idx < keywords.length - 1 && (
                  <span aria-hidden="true" className={styles.separator}></span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </Link>
    </div>
  );
};

ColorSetupBanner.displayName = 'ColorSetupBanner';
