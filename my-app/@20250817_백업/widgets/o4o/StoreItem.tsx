'use client';

import { Link, Image, Text, Heading } from '@/shared/ui';
import clsx from 'clsx';
import styles from './StoreItem.module.scss';

interface StoreItem {
  /** 아이템 ID */
  id: string;
  /** 아이템 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 매장명 */
  title: string;
  /** 층수 */
  floor?: string;
  /** 메징 소개 */
  desc?: string;
  /** 링크 비활성화 옵션 */
  disableLink?: boolean;
}

// 내부 컴포넌트: 링크(href)가 있으면 Link 컴포넌트, 링크 비홣성화 옵션(disableLink)이 true면 children만 렌더링
interface StoreTagProps {
  href: string;
  /** 링크 비활성화 옵션 */
  disableLink?: boolean;
  /** 추가 클래스명 */
  className?: string;
  /** 렌더링할 자식 요소 */
  children: React.ReactNode;
}
const StoreTag = ({ href, disableLink = false, className, children }: StoreTagProps) =>
  href && !disableLink ? (
    <Link href={href} type="block" className={className}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );

interface StoreItemProps {
  /** 매장 정보 데이터 */
  data: StoreItem;
  /** 추가 클래스명 */
  className?: string;
}

export const StoreItem = ({ data, className }: StoreItemProps) => {
  return (
    <div className={clsx(styles.root, className)}>
      <StoreTag href={data.href ?? '#'} disableLink={data.disableLink}>
        <div className={clsx(styles.thumb, data.disableLink && styles.dimed)}>
          <Image
            src={data.image.src}
            alt={`${data.image.alt} 매장 사진`}
            className={styles.imgBox}
          />
          {data.disableLink && (
            <div className={styles.thumbLabel}>
              <Text as="span" size="3">
                준비중입니다
              </Text>
            </div>
          )}
        </div>
        <div className={styles.storeTitle}>
          <Heading size="5">{data.title}</Heading>
          <Text as="span" color="gray3" indent className={styles.floor}>
            {data.floor}
          </Text>
        </div>
        <Text color="gray2" indent>
          {data.desc}
        </Text>
      </StoreTag>
    </div>
  );
};

StoreItem.displayName = 'StoreItem';
