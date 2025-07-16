import { Link, Image, Flag, Heading, Checkbox } from '@shared/ui';
import { ProdGem } from '@widgets/product/ProdGem';
import { flagType } from '@widgets/brand/BrandBar';
import clsx from 'clsx';
import styles from './BrandCard.module.scss';

export interface BrandCardProps {
  /** 브랜드 고유 ID */
  id: string;
  /** 브랜드 링크 */
  href?: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 브랜드명 */
  brand: string;
  /** 브랜드 유형 플래그 */
  flag?: flagType;
  /** 젬 정보 */
  gem?: {
    isActive: boolean;
    onChange: (brandId: string, isActive: boolean) => void;
  };
  /** 체크 정보 */
  check?: {
    isSelected: boolean;
    onChange: (brandId: string, isSelected: boolean) => void;
  };
  /** 추가 클래스 */
  className?: string;
}

// CardTag 컴포넌트 : href 여부에 따라 감싸는 태그 변경
type CardTagProps = Pick<BrandCardProps, 'id' | 'href' | 'check'> & {
  className?: string;
  children: React.ReactNode;
};
const CardTag = ({ id, href, check, className, children }: CardTagProps) => {
  // href 있는경우 Link로 감싸기
  if (href) {
    return (
      <Link href={href} type="block" className={className}>
        {children}
      </Link>
    );
  }
  // href 없고 check 있으면 버튼 역할 부여 및 접근성 추가
  if (check) {
    return (
      <div
        className={className}
        role="button"
        tabIndex={0}
        aria-pressed={check.isSelected}
        aria-label="브랜드 선택"
        onClick={() => check.onChange(id, !check.isSelected)}
      >
        {children}
      </div>
    );
  }
  // href 없고 check 없으면 그냥 div
  return <div className={className}>{children}</div>;
};

export const BrandCard = ({
  id,
  href,
  image,
  brand,
  flag,
  gem,
  check,
  className,
  ...props
}: BrandCardProps) => {
  // 브랜드 유형 플래그 :  공식/일반/셀러샵
  const brandFlag = [];
  if (flag === 'official') {
    brandFlag.push({ color: 'gray2' as const, label: '공식' });
  }
  if (flag === 'sellerShop') {
    brandFlag.push({ color: 'gray2' as const, label: '셀러샵' });
  }

  return (
    <div className={clsx(styles.root, className)} {...props}>
      {check && (
        <Checkbox
          checked={check.isSelected}
          onChange={(e) => check.onChange(id, e.target.checked)}
          onClick={(e) => e.stopPropagation()} // 이벤트 버블링 방지
          label="브랜드 선택"
          hideLabel
          className={styles.checkbox}
        />
      )}
      <CardTag href={href} className={styles.thumb} id={id} check={check}>
        <Image src={image.src} alt={image.alt} />
        <div className={styles.info}>
          <div className={styles.top}>
            {flag && flag !== 'normal' && <Flag data={brandFlag} className={styles.flag} />}
          </div>
          <div className={styles.title}>
            <Heading as="strong" className={styles.brand}>
              {brand}
            </Heading>
          </div>
        </div>
      </CardTag>
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

BrandCard.displayName = 'BrandCard';
