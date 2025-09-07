'use client';

import { useState } from 'react';
import { formatDate } from '@shared/utils/ui';
import {
  Text,
  Stack,
  Switch,
  Line,
  Flag,
  ButtonArea,
  Button,
  TextButton,
  TextList,
  Empty,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import styles from './RestockAlarm.module.scss';

// 재입고 알림 타입 (입고대기 중 | 알림 해제 | 입고 완료)
type AlarmStatus = 'waiting' | 'canceled' | 'completed';

interface RestockMeta {
  status: AlarmStatus;
  /** 화면에 노출할 단일 날짜(신청일/해제일 등 상황에 맞게 주입) */
  date?: string;
}
export interface RestockAlarmData {
  /** 상품 정보 */
  orderItem: OrderItemType;
  /** 재입고 정보 */
  meta: RestockMeta;
}

interface RestockAlarmProps {
  data: RestockAlarmData[];
}

const flagMap: Record<AlarmStatus, { label: string; color: 'gray3' | 'dark2' }> = {
  waiting: { label: '입고대기중', color: 'gray3' },
  canceled: { label: '입고대기중', color: 'gray3' }, // 알림 해제 배지는 동일
  completed: { label: '입고 완료', color: 'dark2' },
};

export function RestockAlarm({ data }: RestockAlarmProps) {
  // 재입고알림 스위치상태
  const [isRestockAlram, setIsRestockAlram] = useState(true);

  // OrderItem 콜백에서 사용
  const getMetaById = (id: string) => data.find((d) => d.orderItem.id === id)?.meta;

  // status에 따라 라벨만 결정, 날짜는 단일 meta.date 사용
  const getTop = (meta?: RestockMeta) => {
    const label = meta?.status === 'canceled' ? '해제일' : '신청일';
    return { label, date: meta?.date };
  };

  // 버튼 렌더링
  const renderButtons = (meta?: RestockMeta) => {
    switch (meta?.status) {
      case 'waiting':
        return (
          <ButtonArea margin="0" vertical>
            <Button disabled={!isRestockAlram}>알림 해제</Button>
          </ButtonArea>
        );
      case 'canceled':
        return (
          <ButtonArea margin="0" vertical>
            <Button variant="primary" disabled={!isRestockAlram}>
              알림 재신청
            </Button>
          </ButtonArea>
        );
      case 'completed':
        return null; // 설계서: 버튼 없음
      default:
        return null;
    }
  };

  // 데이터 없는 경우
  const isEmpty = data.length === 0;

  return (
    <>
      {!isEmpty && (
        <>
          <Stack type="between">
            <Text as="label" htmlFor="restock-alram" size="5" weight="bold">
              재입고 알림 받기
            </Text>
            <Switch
              id="restock-alram"
              checked={isRestockAlram}
              onChange={(e) => setIsRestockAlram(e.target.checked)}
            />
          </Stack>
          {!isRestockAlram && (
            <Text size="3" color="gray2">
              재입고 알림 받기 OFF 상태에서는 재입고 알림이
              <br />
              발송되지 않습니다. 다시 받고 싶으시면 알림을 켜주세요.
            </Text>
          )}
          <Line variant="bold" margin={!isRestockAlram ? '5' : '3'} />
        </>
      )}
      {!isEmpty ? (
        <>
          <OrderItem
            items={data.map((d) => d.orderItem)}
            orderTopData={(item) => {
              const meta = getMetaById(item.id);
              const { label, date } = getTop(meta);
              return (
                <Text as="span" size="4" color="gray3" weight="medium">
                  {label} {formatDate(date, 'dot', true)}
                </Text>
              );
            }}
            orderTopSlot={(item) => {
              const meta = getMetaById(item.id);
              if (!meta) return null;
              return <Flag data={flagMap[meta.status]} />;
            }}
            orderSlot={(item) => renderButtons(getMetaById(item.id))}
            hideThumbLabel
            hidePrice
            isDelete
            disableList={!isRestockAlram}
          />
          <div className={styles.more}>
            <TextButton suffixIcon="arrowDown" iconSize="xsmall">
              더보기
            </TextButton>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <Empty
            variant="minDisplay"
            title="등록된 쇼핑 알림이 없어요."
            buttons={
              <>
                <Button variant="primary">샵메인 바로가기</Button>
              </>
            }
          />
        </div>
      )}
      {/* 확인해주세요 */}
      <ConfirmInfo>
        <TextList
          data={[
            '재입고 알림 서비스는 신청 후 1년동안 유지됩니다.',
            '구매 시점에 따라 최종 결제 금액 및 옵션 등 상품의 정보가 상이할 수 있습니다.',
            '소량 재입고 되거나 구매가 한꺼번에 몰릴 경우 재입고 알림 후에도 품절로 표기될 수 있습니다',
            '재입고 신청이 되어도 재입고 알림 받기를 OFF 하시면 알림을 받을 수 없습니다.',
          ]}
          variant="info"
        />
      </ConfirmInfo>
    </>
  );
}
