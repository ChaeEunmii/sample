'use client';

import React, { useState } from 'react';
import { ButtonArea, Heading, Icon, SelectDrawer, Stack, Text, TextButton } from '@/shared/ui';
import { formatDate, formatNumber, formatPrice } from '@/shared/utils/ui';
import { ExtendedO4OItem } from '@/widgets/product/O4OList';
import { O4OItem, O4OItemType } from '@/widgets/product/O4OItem';
import { ReservationStatusButtons } from './ReservationStatusButtons';
import { O4OOrderMenus, O4OOrderMenuItemType } from './O4OOrderMenus';
// 스타일
import styles from './ReservedList.module.scss';
import clsx from 'clsx';

// ✅ 예약/오더 상태 케이스
export enum ReservationStatus {
  VisitPlannedEntry = 'VISIT_PLANNED_ENTRY', // 방문예정 - 바로입장
  VisitPlannedWaiting = 'VISIT_PLANNED_WAITING', // 방문예정 - 대기중
  VisitCompleted = 'VISIT_COMPLETED', // 방문 완료
  VisitCancelled = 'VISIT_CANCELLED', // 방문 취소
  StoreChecking = 'STORE_CHECKING', // 매장 확인중
  ReservationConfirmed = 'RESERVATION_CONFIRMED', // 예약 확정
  ReservationPending = 'RESERVATION_PENDING', // 예약중/예약확정 - 예약취소 불가
  OrderCompleted = 'ORDER_COMPLETED', // 주문완료
  OrderCancelled = 'ORDER_CANCELLED', // 주문취소
  Reservation = 'RESERVATION', // 예약일
  Order = 'ORDER', // 주문일
}

// ✅ 상태 타이틀 매핑 객체
export const reservationStatusTitle: Record<ReservationStatus, string> = {
  [ReservationStatus.VisitPlannedEntry]: '방문예정', // 방문예정 - 바로입장
  [ReservationStatus.VisitPlannedWaiting]: '방문예정', // 방문예정 - 대기중
  [ReservationStatus.VisitCompleted]: '방문완료', // 방문 완료
  [ReservationStatus.VisitCancelled]: '방문취소', // 방문 취소
  [ReservationStatus.StoreChecking]: '매장 확인중', // 매장 확인중
  [ReservationStatus.ReservationConfirmed]: '예약확정', // 예약 확정
  [ReservationStatus.ReservationPending]: '예약확정', // 예약중/예약확정 - 예약취소 불가
  [ReservationStatus.OrderCompleted]: '주문완료', // 주문완료
  [ReservationStatus.OrderCancelled]: '주문취소', // 주문취소
  [ReservationStatus.Reservation]: '예약일', // 예약일
  [ReservationStatus.Order]: '주문일', // 주문일
};

interface InfoBarItem {
  label: string;
  value: string | React.ReactNode;
  hideLabel?: boolean;
}

export interface ReservedItem extends O4OItemType {
  /** 타입(웨이팅, 예약, 테이블오더) */
  type?: 'waiting' | 'booking' | 'torder';
  /** 주문 그룹(한 그룹으로 묶을 경우 사용) */
  groupId?: string;
  /** 예약/오더 상태 */
  status?: ReservationStatus;
  /** 날짜, 시간(예: 202512241530) */
  dateTime?: string;
  /** 인원 */
  guestCount?: number;
  /** 웨이팅 정보 */
  waitingInfo?: InfoBarItem[];
  /** 위치 */
  location?: string;
  /** 예약금 */
  deposit?: number;
  /** 리뷰 작성 여부(방문 완료인 경우에 사용) */
  isReviewed?: boolean;
  /** 주문한 메뉴(oneline type 메뉴) */
  orderItems?: O4OOrderMenuItemType[];
}

export interface ReservedListProps {
  data?: ReservedItem[];
  /** 마이페이지 > 나의 활동 > 리뷰 페이지인지 체크 */
  isReview?: boolean;
  /** SelectDrawer 사용 여부 */
  showSelectDrawer?: boolean;
  /** empty 컴포넌트를 렌더링 하는 함수 */
  empty?: () => React.ReactNode;
  /** 상단 정보 숨김 여부 */
  hideTopInfo?: boolean;
  /** 상단 카운팅 숨김 여부 */
  hideCount?: boolean;
  /** 버튼 숨김 여부 */
  hideBtns?: boolean;
  /** 마진상단 값 */
  marginTop?: '0';
}

export const ReservedList = ({
  data,
  isReview = false,
  showSelectDrawer = false,
  empty,
  hideTopInfo = false,
  hideCount = false,
  hideBtns = false,
  marginTop,
}: ReservedListProps) => {
  // ✅ 상태 관리
  const [sortValue, setSortValue] = useState('latest'); // 정렬 기준 Drawer

  // ✅ 목록 총 개수
  const total = data?.length ?? 0;

  // ✅ 정렬 기준 Drawer 데이터
  const sortOptions = [
    {
      label: '최근 이용순',
      value: 'latest',
    },
    {
      label: '과거 이용순',
      value: 'oldest',
    },
  ];

  // ✅ data 배열을 groupId 기준으로 묶기
  const groupedData = data?.reduce<Record<string, ReservedItem[]>>((acc, item) => {
    const groupKey = item.groupId ?? item.id; // groupId 없으면 id 기준
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});

  const InfoBar = ({
    data = [],
    className,
  }: {
    data: InfoBarItem[] | React.ReactNode[];
    className?: string;
  }) => {
    if (data.length === 0) return null;

    return (
      <ul className={clsx(styles.info, className)}>
        {data.map((item, index) => (
          <li key={index} className={styles.infoItem}>
            {React.isValidElement(item) ? (
              item
            ) : (
              <>
                <Text
                  as="span"
                  size="4"
                  color="gray2"
                  className={clsx((item as InfoBarItem).hideLabel && 'ncp-blind')}
                >
                  {(item as InfoBarItem).label}
                </Text>
                <Text
                  as="span"
                  size="4"
                  weight="semibold"
                  color={(item as InfoBarItem).label === '나의 순서' ? 'point' : 'gray2'}
                >
                  {(item as InfoBarItem).value}
                </Text>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {!hideCount && (
        <Stack type="between">
          <Text size="4" color="gray2">
            총 {formatNumber(total)}건
          </Text>
          {showSelectDrawer && (
            <SelectDrawer
              title="정렬 기준"
              options={sortOptions}
              value={sortValue}
              onChange={setSortValue}
              variant="filter"
            />
          )}
        </Stack>
      )}
      {(data?.length ?? 0) > 0 ? (
        <ul className={clsx(styles.resevedList, marginTop && styles[`marginTop${marginTop}`])}>
          {groupedData &&
            Object.entries(groupedData).map(([groupId, groupItems]) => (
              <li key={groupId} className={styles.groupWrapper}>
                {groupItems.map((item, index) => {
                  // ✅ 예약/오더 상태 케이스가 방문완료 or 방문취소 or 예약일 or 주문일인지 체크
                  const isVisitEnded =
                    item.status === 'VISIT_COMPLETED' ||
                    item.status === 'VISIT_CANCELLED' ||
                    item.status === 'ORDER_CANCELLED' ||
                    item.status === 'RESERVATION' ||
                    item.status === 'ORDER';

                  // ✅ 예약/오더 상태 케이스가 방문완료 or 방문취소 or 예약일 or 주문일이면 reservationStatusTitle 옆 날짜 노출
                  const showDate = isVisitEnded && item.date;

                  return (
                    <React.Fragment key={item.id}>
                      {/* 그룹일 때 상단 Stack은 첫 번째 아이템만 렌더링 */}
                      {index === 0 && !hideTopInfo && (
                        <Stack type="between" className="ncp-mb-x6">
                          <Text
                            as="span"
                            size="4"
                            weight="medium"
                            color={isVisitEnded ? 'gray3' : 'gray1'}
                          >
                            {reservationStatusTitle[item.status as ReservationStatus]}
                            {showDate && <Text as="span"> {formatDate(item.date, 'dot')}</Text>}
                            {item.type === 'booking' && item.status === 'RESERVATION_CONFIRMED' && (
                              <Text as="span" weight="semibold" color="point">
                                {' '}
                                D-DAY
                              </Text>
                            )}
                          </Text>

                          {(item.status === 'ORDER_COMPLETED' ||
                            item.status === 'ORDER_CANCELLED') && (
                            <TextButton
                              color="gray3"
                              size="1"
                              variant="bold"
                              suffixIcon="arrowRight"
                              iconSize="xsmall"
                            >
                              주문상세
                            </TextButton>
                          )}
                        </Stack>
                      )}

                      <O4OItem
                        item={item}
                        variant="store"
                        titleSlot={(resevedItem: ReservedItem) =>
                          !isReview &&
                          (resevedItem.dateTime || resevedItem.guestCount) && (
                            <Heading size="3" weight="semibold" className={styles.titleSlot}>
                              <span>{formatDate(resevedItem.dateTime, 'dot', false)}</span>
                              <span>
                                {resevedItem.guestCount &&
                                  formatNumber(resevedItem.guestCount, 'user')}
                              </span>
                            </Heading>
                          )
                        }
                        itemOptions={(resevedItem: ReservedItem) => {
                          const showOptions =
                            resevedItem.info ||
                            resevedItem.waitingInfo ||
                            resevedItem.location ||
                            resevedItem.deposit;

                          return (
                            <>
                              {showOptions && (
                                <div
                                  className={clsx(styles.options, isReview && styles.reviewOptions)}
                                >
                                  {resevedItem.waitingInfo && (
                                    <InfoBar data={resevedItem.waitingInfo} />
                                  )}

                                  {resevedItem.info && (
                                    <Text as="span" size="4" color="gray2">
                                      {resevedItem.info}
                                    </Text>
                                  )}

                                  {!isReview && resevedItem.location && (
                                    <Text as="span" size="4" color="gray2">
                                      {resevedItem.location}
                                    </Text>
                                  )}

                                  {isReview &&
                                    (resevedItem.dateTime ||
                                      resevedItem.guestCount ||
                                      resevedItem.location) && (
                                      <div className={styles.reviewInfoBox}>
                                        <Text as="span" size="4" color="gray2">
                                          {formatDate(resevedItem.dateTime, 'dot', false)}
                                        </Text>

                                        {resevedItem.guestCount && (
                                          <Text as="span" size="4" color="gray2">
                                            {formatNumber(resevedItem.guestCount, 'user')}
                                          </Text>
                                        )}

                                        {resevedItem.location && (
                                          <Text as="span" size="4" color="gray2">
                                            {resevedItem.location}
                                          </Text>
                                        )}
                                      </div>
                                    )}

                                  {resevedItem.deposit && (
                                    <div className={styles.deposit}>
                                      <Text as="span" size="4" color="gray2">
                                        예약금
                                      </Text>
                                      <Text as="span" size="4" color="gray2">
                                        {formatPrice(resevedItem.deposit)}
                                      </Text>
                                    </div>
                                  )}

                                  {!isReview && resevedItem.type === 'torder' && (
                                    <O4OOrderMenus
                                      data={resevedItem.orderItems ?? []}
                                      gap="4"
                                      color="gray2"
                                      ordeOptions={(torderItem: ExtendedO4OItem) => (
                                        <>
                                          {torderItem.options?.map((option, index) => (
                                            <Text key={index} as="span" size="4" color="gray3">
                                              - {option}
                                            </Text>
                                          ))}
                                        </>
                                      )}
                                    />
                                  )}
                                </div>
                              )}
                            </>
                          );
                        }}
                        className={clsx(index > 0 && styles.groupItem)}
                      />

                      {/* 하단 버튼/안내 문구 */}
                      {item.status === 'RESERVATION_PENDING' ? (
                        <Text className={styles.noti}>
                          <Icon name="caution" size="small" />
                          예약을 취소하시려면 매장으로 연락 부탁드립니다
                        </Text>
                      ) : (
                        !hideBtns &&
                        item.status !== 'ORDER_COMPLETED' &&
                        item.status !== 'ORDER_CANCELLED' && (
                          <ButtonArea margin="1">
                            <ReservationStatusButtons
                              type={item.type}
                              status={item.status}
                              isReviewed={item.isReviewed}
                            />
                          </ButtonArea>
                        )
                      )}
                    </React.Fragment>
                  );
                })}
              </li>
            ))}
        </ul>
      ) : (
        empty && empty()
      )}
    </>
  );
};

ReservedList.displayName = 'ReservedList';
