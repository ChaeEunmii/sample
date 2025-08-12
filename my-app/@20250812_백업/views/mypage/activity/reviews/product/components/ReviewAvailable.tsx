'use client';

import { useState, useMemo } from 'react';
import {
  Button,
  ButtonArea,
  Empty,
  Select,
  Stack,
  Text,
  TextButton,
  TitleBar,
  Tabs,
  Flag,
} from '@shared/ui';
import { formatDate } from '@shared/utils/ui';
import { OrderItem } from '@/widgets/product';
import { OrderItemType } from '@/widgets/product/OrderItem';
import styles from './ReviewAvailable.module.scss';
import ProdReviewGuideDialog from '@/views/mypage/activity/reviews/components/ProdReviewGuideDialog';

// 기간 정렬 옵션
const periodOptions = [
  { label: '최근주문순', value: 'option1' },
  { label: '기한임박순', value: 'option2' },
];

// 리뷰 타입 ( 일반 | 한달사용 | 선물 | 체험단 )
export type OrderReviewType = 'general' | 'monthly' | 'gift' | 'trial';

// 플래그 지정
export const reviewFlagMap: Partial<Record<OrderReviewType, { label: string; color: 'green2' }>> = {
  trial: { label: '체험단', color: 'green2' },
};

// 리뷰 유형별 정보
interface ReviewMeta {
  /** 리뷰 타입 */
  type: OrderReviewType;
  /** 최대 적립 포인트  */
  point?: number;
  /** 작성 기한까지 남은 일수 (D-숫자) */
  dueDays?: number;
  /** 포인트 지급 가능 여부 */
  rewardable?: boolean;
}

// 리뷰 작성 가능한 리뷰 정보
export interface ReviewAvailableItem {
  /** 상품 아이템 (OrderItem) */
  orderItem: OrderItemType;
  /** 구매일 */
  purchasedAt?: string;
  /** 리뷰 유형별 정보 */
  info: ReviewMeta;
  /** 선물 받은 경우, 보낸 사람 */
  fromUser?: string;
}

interface ReviewAvailableProps {
  /** 리뷰 작성 가능한 리뷰 배열 */
  data: ReviewAvailableItem[];
}

export default function ReviewAvailable({ data }: ReviewAvailableProps) {
  // 리뷰작성안내 팝업 상태
  const [isProdReviewGuideDialog, setIsProdReviewGuideDialog] = useState(false);
  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');
  // 탭 상태
  const [activeIndex, setActiveIndex] = useState(0);

  // 탭 항목
  const tabItems = [
    { label: '일반' },
    { label: '한달사용' },
    { label: '받은 선물' },
    { label: '체험단' },
  ];

  // index, 리뷰 타입 매핑
  const reviewTypeMap: Record<number, OrderReviewType> = {
    0: 'general',
    1: 'monthly',
    2: 'gift',
    3: 'trial',
  };

  // 현재 선택된 리뷰 타입
  const selectedType = reviewTypeMap[activeIndex];

  // 현재 탭에 해당하는 아이템만 필터링
  const filteredData = data.filter((item) => item.info && item.info.type === selectedType);

  // 현재 탭의 rewardable한 리뷰들의 포인트 총합 계산
  const totalPoint = filteredData.reduce((acc, cur) => {
    const { point = 0, rewardable } = cur.info ?? {};
    return acc + (rewardable ? point : 0);
  }, 0);

  // 타이틀 렌더링
  const RewardTitle = ({ totalPoint }: { totalPoint: number }) => {
    return totalPoint > 0 ? (
      <>
        리뷰 작성하고
        <br />
        <Text as="em" color="point" weight="bold">
          최대 {totalPoint.toLocaleString()}P
        </Text>{' '}
        받아가세요
      </>
    ) : (
      <>
        구매하신 상품의
        <br />
        리뷰를 작성해 보세요
      </>
    );
  };

  // 주문상품 ID 기준 매핑
  const matchedMap = useMemo(() => {
    const map = new Map<string, ReviewAvailableItem>();
    filteredData.forEach((item) => {
      map.set(item.orderItem.id, item);
    });
    return map;
  }, [filteredData]);

  // 주문상품에 해당하는 리뷰 데이터 반환
  const getMatched = (item: OrderItemType) => matchedMap.get(item.id);

  return (
    <>
      <Tabs
        activeTab={activeIndex}
        variant="buttons"
        onTabChange={(i) => setActiveIndex(i)}
        data={tabItems}
      />
      <div className={styles.top}>
        <TitleBar
          type="docs"
          title={<RewardTitle totalPoint={totalPoint} />}
          level="1"
          className={styles.titBar}
        />
        <TextButton
          variant="underline"
          size="1"
          color="gray3"
          className={styles.infoBtn}
          onClick={() => setIsProdReviewGuideDialog(true)}
        >
          리뷰 작성안내
        </TextButton>
      </div>
      <Stack type="between" className={styles.total}>
        <Text size="4" weight="regular" color="gray2">
          총 {filteredData.length}개
        </Text>
        <Select
          title="정렬"
          options={periodOptions}
          value={sortBrandValue}
          onChange={setSortBrandValue}
          variant="ghost"
          placeholder="기간 선택"
          className={styles.select}
        />
      </Stack>
      {/* 목록 */}
      {filteredData.length > 0 ? (
        <>
          <OrderItem
            items={filteredData.map((d) => d.orderItem)}
            titleProps={{
              line: 1,
            }}
            orderTopData={(item) => {
              const matched = getMatched(item);
              if (!matched) return null;
              const { purchasedAt, info, fromUser } = matched;

              return (
                <Stack type="between">
                  <Text as="span" size="4" color="gray3" weight="medium">
                    구매일 {formatDate(purchasedAt, 'dot', true)}
                  </Text>
                  {info?.type === 'gift' && fromUser && (
                    <Text as="span" size="4" color="gray3" weight="medium">
                      From. {fromUser}님
                    </Text>
                  )}
                </Stack>
              );
            }}
            orderTopSlot={(item) => {
              const type = getMatched(item)?.info?.type;
              if (!type || !reviewFlagMap[type]) return null; // flagMap에 없으면 표시 안 함

              const { label, color } = reviewFlagMap[type]!;
              return <Flag data={{ label, color }} />;
            }}
            orderSlot={(item) => {
              const info = getMatched(item)?.info;
              if (!info) return null;

              const { type, point, dueDays = 0, rewardable = false } = info;
              const typeLabelMap: Record<OrderReviewType, string> = {
                general: '리뷰 쓰기',
                monthly: '한달 리뷰 쓰기',
                gift: '선물 리뷰 쓰기',
                trial: '체험단 리뷰쓰기',
              };

              const label = type ? typeLabelMap[type] : '';
              const isTrialExpired = type === 'trial' && !rewardable;

              return (
                <ButtonArea vertical margin="0">
                  <Button variant="tertiary" disabled={isTrialExpired}>
                    {isTrialExpired ? (
                      '작성 기간 만료'
                    ) : rewardable ? (
                      <>
                        {`D-${dueDays} `}
                        {label}
                        {point && (
                          <Text as="span" color="point">
                            {' '}
                            (최대 {point}P 적립)
                          </Text>
                        )}
                      </>
                    ) : (
                      label
                    )}
                  </Button>
                </ButtonArea>
              );
            }}
            hideThumbLabel
            hidePrice
            isVerticalCenter
          />
          <div className="ncp-text-center ncp-mt-l">
            <TextButton suffixIcon="arrowDown" iconSize="xsmall">
              더보기
            </TextButton>
          </div>
        </>
      ) : (
        <Empty
          variant="minDisplay"
          title="작성 가능한 리뷰가 없어요"
          buttons={<Button variant="primary">샵메인 바로가기</Button>}
        />
      )}
      {/* 리뷰 작성안내 (L) */}
      <ProdReviewGuideDialog
        isOpen={isProdReviewGuideDialog}
        onClose={() => setIsProdReviewGuideDialog(false)}
      />
    </>
  );
}
