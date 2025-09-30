import { Section } from '@shared/ui';
import { DeliveryGroup } from '@/views/mypage/components/DeliveryGroup';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import clsx from 'clsx';
import styles from './SubscriptionProducts.module.scss';
/** 
    '정기구독 상품' 영역
*/

interface SubscriptionProductsProps {
  /** 섹션 타이틀 */
  title?: string;
  /** 주문 상품 데이터 */
  data?: OrderDeliveryData[];
  /** 추가 클래스 */
  className?: string;
  /** 커스텀 렌더링 영역 */
  children?: React.ReactNode;
}

export const SubscriptionProducts = ({
  title = '정기구독 상품',
  data,
  className,
  children,
}: SubscriptionProductsProps) => {
  const hasData = data && data.length > 0;

  // data도 없고 children도 없으면 렌더링하지 않음
  if (!hasData && !children) return null;

  return (
    <Section
      title={title}
      variant="collapse"
      level="1"
      flush
      borderTop
      defaultOpen
      className={clsx(styles.section, className)}
    >
      {/* 주문 상품 리스트 */}
      {hasData && (
        <DeliveryGroup
          data={data}
          viewType="detail"
          onButtonClick={(action, item) => {
            console.log('Clicked:', action, item);
          }}
        />
      )}
      {/* 커스텀 children 영역 */}
      {children}
    </Section>
  );
};
