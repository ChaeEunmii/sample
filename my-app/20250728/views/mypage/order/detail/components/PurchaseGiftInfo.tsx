import { Section } from '@shared/ui';
import clsx from 'clsx';
import styles from './PurchaseGiftInfo.module.scss';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';

/** 
    '구매 사은품' 영역
*/

interface GiftList {
  id: string;
  items: OrderItemType[];
}

interface PurchaseGiftInfoProps {
  /** 유형 */
  variant?: 'normal' | 'collapse';
  /** 상단보더여부 */
  borderTop?: boolean;
  /** 사은품 데이터 */
  data: GiftList[];
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const PurchaseGiftInfo = ({
  variant = 'collapse',
  borderTop = true,
  data,
  className,
}: PurchaseGiftInfoProps) => {
  return (
    <Section
      title="구매 사은품"
      variant={variant}
      marginTop={variant === 'normal' ? '2' : undefined}
      level={variant === 'normal' ? '2' : '1'}
      flush
      borderTop={borderTop}
      className={clsx(styles.section, className)}
    >
      <OrderItem items={data[0].items} showOrderCount isOrderGift />
    </Section>
  );
};
