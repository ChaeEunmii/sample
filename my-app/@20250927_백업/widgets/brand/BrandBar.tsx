import { Link, Avatar, Flag, Heading, Text, Icon } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import clsx from 'clsx';
import styles from './BrandBar.module.scss';

// 브랜드 유형 플래그 :  공식/일반/셀러샵
export type flagType = 'official' | 'normal' | 'sellerShop';

export interface BrandBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'slot'> {
  /* 스타일 변형 */
  variant?: 'default' | 'showroom' | 'detail' | 'branch' | 'store';
  /* 브랜드 아이디 */
  id: string;
  /** 브랜드 링크 */
  href?: string;
  /** 브랜드 이미지 */
  image?: {
    src: string;
    alt?: string;
  };
  /** 브랜드명 */
  name: string;
  /** 브랜드 한글명 */
  namekor?: string;
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

const Wrapper = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  if (href) {
    return (
      <Link href={href || '#'} type="block" className={styles.wrap}>
        {children}
      </Link>
    );
  }
  return <div className={styles.wrap}>{children}</div>;
};

export const BrandBar = ({
  variant,
  id,
  href,
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
      <Wrapper href={href}>
        <div className={styles.title}>
          <Avatar
            type="brand"
            // 브랜드 이미지 O : 이미지
            {...(image && {
              src: image.src,
              alt: image.alt,
            })}
            // 브랜드 이미지 X : 이니셜
            {...(!image && { initial: name })}
            className={styles.avatar}
          />
          <div className={styles.info}>
            <div className={styles.top}>
              <Heading as="strong" className={styles.name}>
                {name}
              </Heading>
              {variant === 'detail' && (
                <Icon name="arrowRight" size="xsmall" className={styles.nameArrow} />
              )}
              {flag && flag !== 'normal' && <Flag data={brandFlag} className={styles.flag} />}
            </div>
            {namekor && (
              <Text as="strong" className={styles.nameKor}>
                {namekor}
              </Text>
            )}
          </div>
        </div>
        {slot && <div className={styles.side}>{slot}</div>}
      </Wrapper>
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
