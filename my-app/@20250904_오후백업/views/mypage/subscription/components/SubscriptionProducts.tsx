'use client';

import { useState } from 'react';
import { Section } from '@shared/ui';
import type { OrderItemType } from '@widgets/product/OrderItem';
import { SubscriptionSettingsDialog } from '@/widgets/order';
import { SubscriptionItem } from '@views/mypage/components';
import clsx from 'clsx';
import styles from './SubscriptionProducts.module.scss';
/** 
    '정기구독 상품' 영역
*/

interface SubscriptionProductsProps {
  /** 섹션 타이틀 */
  title?: string;
  /** 주문 상품 데이터 */
  data?: OrderItemType[];
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
  // 정기구독 설정 (L)
  const [isSubscriptionSettingsDialogOpen, setIsSubscriptionSettingsDialogOpen] = useState(false);

  const hasData = data && data.length > 0;

  // data도 없고 children도 없으면 렌더링하지 않음
  if (!hasData && !children) return null;

  return (
    <>
      <Section
        title={title}
        variant="collapse"
        level="1"
        flush
        borderTop
        defaultOpen
        className={clsx(styles.section, className)}
      >
        {/* 정기구독 주문 상품 */}
        {hasData && (
          <SubscriptionItem
            data={data}
            viewType="detail"
            onButtonClick={(action, item) => {
              // '일정 설정' 버튼 클릭
              if (action === 'setSchedule') {
                setIsSubscriptionSettingsDialogOpen(true);
              } else {
                console.log('Clicked:', action, item);
              }
            }}
          />
        )}
        {/* 커스텀 children 영역 */}
        {children}
      </Section>

      {/* 정기구독 설정 (L) */}
      <SubscriptionSettingsDialog
        isOpen={isSubscriptionSettingsDialogOpen}
        onClose={() => setIsSubscriptionSettingsDialogOpen(false)}
        isChange // 변경 여부
        defaultValues={{
          period: 'month6',
          interval: 'weekly2',
          weekday: ['mon', 'thu'],
        }}
      />
    </>
  );
};
