import { Link, Avatar, Flag, Heading, Text } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import clsx from 'clsx';
import styles from './BrandBar.module.scss';

// 브랜드 유형 플래그 :  공식/일반/셀러샵
export type flagType = 'official' | 'normal' | 'sellerShop';

export interface BrandBarProps {
  /* 스타일 변형 */
  variant?: 'default' | 'showroom';
  /* 브랜드 아이디 */
  id: string;
  /** 브랜드 링크 */
  href?: string;
  /** 브랜드 이미지 */
  image: {
    src: string;
    alt: string;
  };
  /** 브랜드명 */
  name: string;
  /** 브랜드 한글명 */
  namekor: string;
  /** 브랜드 유형 플래그 */
  flag?: flagType;
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (id: string, isActive: boolean) => void;
  };
  /** 우측 추가적인 컨텐츠 */
  slot?: React.ReactNode;
  /** 추가 클래스 */
  className?: string;
}

export const BrandBar = ({
  variant,
  id,
  href = '#',
  image,
  name,
  namekor,
  flag,
  gem,
  slot,
  className,
  ...props
}: BrandBarProps) => {
  // 브랜드 유형 플래그 :  공식/일반/셀러샵
  const brandFlag = [];
  if (flag === 'official') {
    brandFlag.push({ color: 'gray2' as const, label: '공식' });
  }
  if (flag === 'sellerShop') {
    brandFlag.push({ color: 'gray2' as const, label: '셀러샵' });
  }

  return (
    <div
      className={clsx(styles.root, variant && variant !== 'default' && styles[variant], className)}
      {...props}
    >
      <Link href={href ?? '#'} type="block" className={styles.wrap}>
        <div className={styles.title}>
          <Avatar type="brand" src={image.src} alt={image.alt} className={styles.avatar} />
          <div className={styles.info}>
            <div className={styles.top}>
              <Heading as="strong" className={styles.name}>
                {name}
              </Heading>
              {flag && flag !== 'normal' && <Flag data={brandFlag} className={styles.flag} />}
            </div>
            <Text as="strong" className={styles.nameKor}>
              {namekor}
            </Text>
          </div>
        </div>
        <div className={styles.side}>{slot && slot}</div>
      </Link>
      {gem && (
        <ProdGem
          isActive={gem.isActive}
          onChange={(isActive) => gem.onChange(id, isActive)}
          className={styles.gem}
        />
      )}
    </div>
  );
};

BrandBar.displayName = 'BrandBar';
