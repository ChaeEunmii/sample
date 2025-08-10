'use client';

import { useState } from 'react';
import {
  Text,
  Stack,
  Switch,
  Line,
  Checkbox,
  Box,
  Tabs,
  IconButton,
  TextList,
  ButtonArea,
  Button,
  TextButton,
  Empty,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import { formatDate } from '@shared/utils/ui';
import styles from './LiveAlarm.module.scss';

// LIVE 알림 상태 타입 정의 (방송전 | 알림 해제 | 방송중 | 방송종료 | 방송종료(재방송 불가))
type LiveStatus = 'upcoming' | 'canceled' | 'onair' | 'replay' | 'ended';
// LIVE 알림 메타 정보
interface LiveMeta {
  /** LIVE 상태 */
  status?: LiveStatus;
  /** 방송일시 */
  date?: string;
}

// '방송별 알림' 데이터
export interface LiveShowData {
  /** 상품 정보 */
  orderItem: OrderItemType;
  /** LIVE 정보 */
  meta?: LiveMeta;
}

// '내가 팔로우한 LIVE' 데이터
export interface FollowedData {
  id: string;
  name: string;
}

interface LiveAlarmProps {
  /** '방송별 알림' 데이터 */
  data: LiveShowData[];
  /** '내가 팔로우한 LIVE' 데이터 */
  follows: FollowedData[];
}

export function LiveAlarm({ data, follows }: LiveAlarmProps) {
  const [isLiveAlarm, setIsLiveAlarm] = useState(true);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const tabItems = [{ label: '방송별 알림' }, { label: '내가 팔로우한 LIVE' }];

  // OrderItem 콜백에서 사용
  const findMeta = (items: LiveShowData[], id: string) =>
    items.find((d) => d.orderItem.id === id)?.meta;

  // 버튼 렌더링
  const renderButtons = (meta?: LiveMeta) => {
    switch (meta?.status) {
      case 'upcoming':
        return (
          <ButtonArea margin="0" vertical>
            <Button>알림 해제</Button>
          </ButtonArea>
        );
      case 'canceled':
        return (
          <ButtonArea margin="0" vertical>
            <Button variant="primary">알림 재신청</Button>
          </ButtonArea>
        );
      case 'onair':
        return (
          <ButtonArea margin="0" vertical>
            <Button variant="primary">방송 보기</Button>
          </ButtonArea>
        );
      case 'replay':
        return (
          <ButtonArea margin="0" vertical>
            <Button variant="primary">방송 다시보기</Button>
          </ButtonArea>
        );
      case 'ended':
        return (
          <ButtonArea margin="0" vertical>
            <Button disabled>종료된 방송입니다</Button>
          </ButtonArea>
        );
      default:
        return null;
    }
  };

  // 데이터 없는 경우
  const isEmpty = data.length === 0;

  return (
    <>
      <Stack type="between">
        <Text as="label" htmlFor="depositView" size="5" weight="bold">
          LIVE 알림 받기
        </Text>
        <Switch
          id="live-alram"
          checked={isLiveAlarm}
          onChange={(e) => setIsLiveAlarm(e.target.checked)}
        />
      </Stack>

      <Text size="3" color="gray2">
        LIVE 알림 신청시 해당 상품의 LIVE 시점에 방송 알림을 발송합니다.
      </Text>

      <Line variant="bold" margin="5" />

      <Checkbox label="모든 LIVE 알림 받기" checked disabled={!isLiveAlarm} />

      <Box>
        <Text size="3" color="gray2">
          방송별/브랜드별 알림 신청을 하지 않아도 모든 LIVE 알림을 받을 수 있습니다.
        </Text>
      </Box>

      <Tabs
        activeTab={activeIndex2}
        variant="buttons"
        onTabChange={(i) => setActiveIndex2(i)}
        data={tabItems}
        className="ncp-mt-l"
      />
      {/* 방송별 알림 */}
      {activeIndex2 === 0 && (
        <>
          {!isEmpty ? (
            <>
              <OrderItem
                items={data.map((d) => d.orderItem)}
                orderTopData={(item) => {
                  const meta = findMeta(data, item.id);
                  return (
                    <Text as="span" size="4" color="gray3" weight="medium">
                      방송일시 {formatDate(meta?.date, 'dot', true)}
                    </Text>
                  );
                }}
                orderSlot={(item) => renderButtons(findMeta(data, item.id))}
                hideThumbLabel
                hidePrice
                isVerticalCenter
                isDelete
                className={!isLiveAlarm ? styles.disabled : undefined}
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
                title="등록된 LIVE 알림이 없어요"
                buttons={
                  <>
                    <Button variant="primary">LIVE 보러가기</Button>
                  </>
                }
              />
            </div>
          )}
        </>
      )}
      {/* 내가 팔로우한 LIVE */}
      {activeIndex2 === 1 && (
        <>
          {follows.length > 0 ? (
            <ul className={styles.lives}>
              {follows.map((ch) => (
                <li key={ch.id}>
                  {ch.name}
                  <IconButton name="close" size="small">
                    삭제
                  </IconButton>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <Empty
                variant="minDisplay"
                title="신청중인 LIVE 알림이 없어요."
                buttons={<Button variant="primary">LIVE 보러가기</Button>}
              />
            </div>
          )}
        </>
      )}
      {/* 확인해주세요 */}
      <ConfirmInfo>
        <TextList
          data={[
            'LIVE 알림 서비스는 신청 후 1년동안 유지됩니다.',
            '구매 시점에 따라 최종 결제 금액 및 옵션 등 상품의 정보가 상이할 수 있습니다.',
            'LIVE 신청이 되어도 LIVE 알림 받기를 OFF 하시면 알림을 받을 수 없습니다.',
          ]}
          variant="info"
        />
      </ConfirmInfo>
    </>
  );
}
