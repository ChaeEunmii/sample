// 라이브러리
import { useState } from 'react';
// 유틸
import { textColor } from '@shared/utils/ui';
// 컴포넌트
import { Image, Text, Grid, Carousel, Link, Drawer, IconButton } from '@shared/ui';
// 스타일
import styles from './IconBanner.module.scss';
import clsx from 'clsx';
// 타입
import { TextWithColor } from './bannerType';

export interface IconBannerProps {
  data: {
    /** 배너 타이틀 */
    title: TextWithColor;
    /** 배너 이미지 */
    image: string;
    /** 배너 링크 */
    href: string;
  }[];
  /** 배너 타입 */
  iconType?: 'round' | 'square';
  /** 배너 변형 타입 */
  variant?: 'grid' | 'swiper' | 'more';
  /** 그리드 컬럼 수 */
  columns?: number;
  className?: string;
}

export const IconBanner = ({
  data,
  iconType = 'round',
  variant = 'grid',
  columns,
  className,
}: IconBannerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const rootClass = clsx(styles.root, iconType && styles[iconType], className);

  // 아이콘 배너 렌더링
  const renderIcons = data.map(({ title, image, href }, index) => (
    <Link key={index} href={href} className={styles.link}>
      <Image src={image} className={styles.image} />
      <Text as="strong" className={styles.title} style={textColor(title.color)}>
        {title.text}
      </Text>
    </Link>
  ));

  // 그리드 형태
  if (variant === 'grid') {
    return (
      <Grid columns={columns} className={rootClass} gutter={(columns ?? 1) >= 5 ? 10 : 12}>
        {renderIcons}
      </Grid>
    );
  }

  // 더보기 형태
  if (variant === 'more') {
    return (
      <>
        <Grid columns={4} className={rootClass} gutter={12}>
          {renderIcons.slice(0, 4)}

          {/* 더보기 버튼 */}
          {data.length > 4 && (
            <div className={styles.buttons}>
              <IconButton
                name="plus"
                size="small"
                className={styles.more}
                onClick={() => setIsDrawerOpen(true)}
              />
            </div>
          )}
        </Grid>
        <Drawer title="더보기" isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <Grid columns={4} className={clsx(iconType && styles[iconType])} gutter={'12px 16px'}>
            {renderIcons}
          </Grid>
        </Drawer>
      </>
    );
  }

  // 스와이퍼 형태
  if (variant === 'swiper') {
    return (
      <Carousel
        slides={renderIcons}
        className={rootClass}
        slidesPerView={columns}
        spaceBetween={12}
      />
    );
  }

  return (
    <Grid columns={columns} className={rootClass}>
      {renderIcons}
    </Grid>
  );
};

IconBanner.displayName = 'IconBanner';
