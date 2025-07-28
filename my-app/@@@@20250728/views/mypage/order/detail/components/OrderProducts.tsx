import { Section } from '@shared/ui';
import { DeliveryGroupList } from '@/views/mypage/components/DeliveryGroupList';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import clsx from 'clsx';
import styles from './OrderProducts.module.scss';
/** 
    '주문상품' 영역
*/

interface OrderProductsProps {
  /** 섹션 타이틀 */
  title?: string;
  /** 주문 상품 데이터 */
  data?: OrderDeliveryData[];
  /** 추가 클래스 */
  className?: string;
  /** 커스텀 렌더링 영역 */
  children?: React.ReactNode;
}

export const OrderProducts = ({
  title = '주문상품',
  data,
  className,
  children,
}: OrderProductsProps) => {
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
      className={clsx(styles.section, className)}
    >
      {/* 주문 상품 리스트 (DeliveryGroupList 사용시*/}
      {hasData && (
        <DeliveryGroupList
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
