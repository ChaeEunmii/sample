'use client';

import { useState } from 'react';
import { Flag } from '@shared/ui';
import { useAlert } from '@shared/contexts/AlertContext';
import { useToast } from '@shared/contexts/ToastContext';
import type { SubscriptionPayment } from '@widgets/order/SubscriptionPaymentMethod';
import { PaymentMethodCard } from '@widgets/payment';
import styles from './PaymentMethodCardList.module.scss';

// 타입 확장 (선택불가 추가)
export type ExtendedPayment = Pick<SubscriptionPayment, 'id' | 'label' | 'cardNumber' | 'brand'> & {
  disabled?: boolean;
};

export interface PaymentMethodCardListProps {
  /** 정기구독 결제 수단 */
  data: ExtendedPayment[];
  /** 선택된 id 목록*/
  selectedIds?: string[];
  /** 비제어 초기값 */
  defaultSelectedIds?: string[];
  /** 선택 변경 이벤트 */
  onChangeSelected?: (ids: string[]) => void;
  /** 선택 최대 개수 (기본 2) */
  maxSelect?: number;
  /** 렌더 모드 (보기 | 순위선택)*/
  mode?: 'view' | 'rank';
}

export function PaymentMethodCardList({
  data,
  selectedIds,
  defaultSelectedIds,
  onChangeSelected,
  maxSelect = 2,
  mode = 'view',
}: PaymentMethodCardListProps) {
  const { showAlert } = useAlert();
  const { showToast } = useToast();

  // controlled 여부
  const isControlled = selectedIds !== undefined;

  // 비제어 내부 상태 (ids)
  const [internalIds, setInternalIds] = useState<string[]>(defaultSelectedIds ?? []);

  // 현재 사용될 선택 id 목록
  const ids = isControlled ? (selectedIds as string[]) : internalIds;

  // 선택 업데이트 유틸
  const update = (next: string[]) => {
    if (!isControlled) setInternalIds(next);
    onChangeSelected?.(next);
  };

  // 선택 핸들러
  const handleSelect = (method: ExtendedPayment) => {
    if (mode === 'view') return; // view 모드일 땐 동작 안 함

    // 비활성
    if (method.disabled) {
      showToast('이 결제수단은 선택할 수 없어요.');
      return;
    }
    // 이미 선택
    const already = ids.includes(method.id);
    if (already) {
      const next = ids.filter((id) => id !== method.id);
      update(next);
      showToast('결제수단에서 선택해제되었어요.');
      return;
    }
    // 최대 개수 초과
    if (ids.length >= maxSelect) {
      showAlert({
        message: `정기구독을 위한 결제수단은\n최대 ${maxSelect}개까지 선택이 가능해요\n먼저 선택한 결제수단을 다시 선택하면\n해제가 가능합니다`,
        onConfirm: () => {},
        showCancel: false,
        labelProps: { confirm: '확인' },
      });
      return;
    }
    // 새로 선택
    update([...ids, method.id]);
    showToast('결제수단으로 선택되었어요.');
  };

  return (
    <ul className={styles.list}>
      {data.map((method) => {
        // 선택된 위치
        const order = ids.findIndex((id) => id === method.id);
        // 선택 여부
        const isSelected = order > -1;

        return (
          <li key={method.id} className={styles.item}>
            <PaymentMethodCard
              as={mode === 'view' ? 'div' : 'button'}
              data={method}
              disabled={method.disabled}
              isSelected={isSelected}
              onClick={() => handleSelect(method)}
              sideSlot={
                mode === 'rank' &&
                isSelected && (
                  <Flag
                    data={{ color: 'dark2', label: `${order + 1}순위` }}
                    className={styles.flag}
                  />
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
}
