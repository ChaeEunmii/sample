'use client';

import React from 'react';
import { ButtonArea, Button, Text } from '@shared/ui';
import { GiftReceiverInfo } from '@/views/mypage/order/detail/components';
import { GiftBoxItem } from '@/views/mypage/components/GiftBoxItem';
import type { OrderItemType } from '@widgets/product/OrderItem';
import type { SentMessageCardData } from '@/widgets/form/MessageCardForm';
import { MessageCardInfo } from '@/views/mypage/gift/components/MessageCardInfo';
import clsx from 'clsx';
import styles from './GiftBoxReceiver.module.scss';

/**
 *
 * 선물함 보낸 상세에서 받는분 단일/멀티 타이틀 포함 영역 컴퍼넌트
 * - sentCard 가 있으면 보낸카드 렌더 (MessageCardForm 바탕으로 작성된 MessageCardInfo)
 * - canResend true일경우 재발송버튼 + 안내문구 렌더
 *
 */

export interface GiftReceiverGroup {
  /** ID */
  id?: string;
  /** 받는자 정보 */
  receiver: { name: string; phone: string };
  /** 주문아이템 목록 */
  orderData: OrderItemType[];
  /** 재발송 가능 여부 */
  canResend?: boolean;
  /** 보낸 카드 데이터  */
  sentCard?: SentMessageCardData;
}

interface GiftBoxReceiverProps {
  /** 데이터 단일 또는 배열 모두 허용 */
  data: GiftReceiverGroup | GiftReceiverGroup[];
  /** 타이틀 교체용 */
  title?: string;
  /** 재발송 클릭 핸들러 */
  onResend?: (group: GiftReceiverGroup) => void | Promise<void>;
  /** 추가적인 클래스 */
  className?: string;
}

export function GiftBoxReceiver({
  data,
  title = '받는 분',
  onResend,
  className,
}: GiftBoxReceiverProps) {
  const isSingle = !Array.isArray(data); // 단일
  const list = Array.isArray(data) ? data : [data]; //멀티

  // 타이틀설정
  const getTitle = (idx: number) => {
    if (isSingle) return title ?? '받는 분';
    // 다중: 기본 '받는 분 {n}', 타이틀이 있으면 `${title} {n}`
    const base = title ?? '받는 분';
    return `${base} ${idx + 1}`;
  };

  // 반복 렌더
  const renderReceiver = (group: GiftReceiverGroup, idx: number) => (
    <GiftReceiverInfo
      key={group.id ?? `receiver-${idx}`}
      title={getTitle(idx)}
      name={group.receiver.name}
      phone={group.receiver.phone}
      hideCollapse
      borderTop={false}
      hideGiftBoxBtn
      bottomSlot={
        <>
          <div className={styles.bottomSlot}>
            {/* 보낸 카드: sentCard 있을 때만 */}
            {group.sentCard && <MessageCardInfo sentData={group.sentCard} hideTitleBar />}
            {/* 재발송 버튼 */}
            {group.canResend && (
              <div className={styles.btns}>
                <ButtonArea margin="0">
                  <Button
                    variant="tertiary"
                    onClick={() => onResend?.(group)}
                    aria-label={`${group.receiver.name}님에게 선물 메시지 재발송`}
                  >
                    선물 메세지 재발송
                  </Button>
                </ButtonArea>
                <Text size="3" color="gray3" indent>
                  재발송은 1회만 가능합니다.
                </Text>
              </div>
            )}
          </div>
        </>
      }
    >
      <GiftBoxItem
        data={group.orderData}
        viewType="detail"
        onButtonClick={(action, item) => console.log('버튼 클릭:', action, item)}
        hideStatusBtns
        hidePrice
      />
    </GiftReceiverInfo>
  );

  return <>{<div className={clsx(styles.root, className)}>{list.map(renderReceiver)}</div>}</>;
}
