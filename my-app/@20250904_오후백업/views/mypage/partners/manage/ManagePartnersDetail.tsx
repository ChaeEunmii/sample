'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { formatNumber } from '@/shared/utils/ui';
import {
  Text,
  TextList,
  Box,
  InfoList,
  InfoItem,
  Flag,
  Table,
  Icon,
  Empty,
  Button,
} from '@shared/ui';
import CalendarNav from '@/views/mypage/partners/manage/shop/component/CalendarNav';
import styles from './ManagePartnersDetail.module.scss';

// 테이블 목록 샘플 데이터
const mockTableListArray = Array.from({ length: 12 }).map((_, i) => ({
  id: `tbl-${i + 1}`,
  href: '#',
  name: `블랙 릴랙스드 롱 슬리브 셔츠 ${i + 1}`,
  views: 999999,
  orders: 999999,
  sales: 999999,
}));
const mockTableListData = [
  ...mockTableListArray,
  {
    id: 'tbl-id',
    href: '#',
    name: `블랙 릴랙스드 롱 슬리브 셔츠`,
    views: 1000,
    orders: 1000,
    sales: 1000,
  },
];

export function ManagePartnersDetail() {
  // 데이터 없음 화면확인 경로설정용 코드
  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata');
  // mock 데이터 가져오기
  const tableData = isNoData ? [] : mockTableListData;

  // 문자열 대신 유틸 함수로 초기값 설정
  const createDate = (y: number, m: number, d: number) => new Date(y, m - 1, d);
  const [month, setMonth] = useState(() => createDate(2025, 10, 1));
  // 달력 월 변경 핸들러
  const handleMonthChange = (next: Date, ym: { year: number; month: number }) => {
    console.log('월 변경: ', ym.year, ym.month);
    setMonth(next);
  };

  // 테이블 정렬 상태 (초기값: sales 기준 내림차순)
  const [sort, setSort] = useState<{ key: string | null; dir: 'asc' | 'desc' | null }>({
    key: 'sales',
    dir: 'desc',
  });

  // 더보기 관련 상태
  const [visibleCount, setVisibleCount] = useState(10);
  const hasMore = tableData.length > visibleCount;
  // 더보기 버튼 핸들러
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <Container showBack title="활동 상세 실적">
      <Contents className={styles.layout}>
        <CalendarNav
          value={month}
          onChange={handleMonthChange}
          minMonth={new Date('2024-01-01')}
          maxMonth={new Date('2025-12-01')}
        />
        <Box size="3" margin="0" className={styles.infoBox}>
          <InfoList variant="between">
            <InfoItem
              title={
                <Text as="span" weight="regular">
                  집계 기간
                </Text>
              }
              content={
                <Text as="em" weight="semibold">
                  2025.08.01 ~ 2025.08.30
                </Text>
              }
            />
            <InfoItem
              title={
                <Text as="span" weight="regular">
                  입금 예정일
                </Text>
              }
              content={
                <Text as="em" weight="semibold">
                  2025.09.22
                </Text>
              }
            />
            <InfoItem
              title={
                <div className={styles.amount}>
                  <Text as="span" weight="regular">
                    지급 금액
                  </Text>
                  <Flag
                    data={{
                      color: 'dark2',
                      label: '예정',
                    }}
                  />
                </div>
              }
              content={
                <Text as="em" weight="semibold">
                  123,456,700,000원
                </Text>
              }
            />
          </InfoList>
        </Box>
        <div className={styles.counts}>
          <Box className={styles.box}>
            <Text color="gray2">링크 조회 수</Text>
            <Text as="strong" weight="semibold">
              0건
            </Text>
          </Box>
          <Box className={styles.box}>
            <Text color="gray2">상품 구매 수</Text>
            <Text as="strong" weight="semibold">
              0건
            </Text>
          </Box>
          <Box className={styles.box}>
            <Text color="gray2">실적 확정 수</Text>
            <Text as="strong" weight="semibold">
              0건
            </Text>
          </Box>
        </div>
        <TextList
          data={[
            '정산 기준일 이전에 취소되거나 반품된 주문은 실적에서 자동 제외돼요.',
            '배송 완료 후에 반품 가능 기간이 남아있는 주문은 지급 대상에서 제외될 수 있어요.',
            '부정 유입(자가 구매, 비정상 클릭 등)으로 판단된 건은 실적 및 수익에서 제외돼요.',
            '지급 예정 금액은 정산 확정일까지 변동될 수 있으며, 최종 지급액은 다를 수 있어요.',
          ]}
          variant="info"
          className="ncp-mt-m"
        />
        <div className={styles.flush}>
          <Table
            sortable
            variant="borderless"
            className={styles.custom}
            sort={sort}
            onSortChange={setSort}
          >
            <Table.ColGroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.Cell colHeader className="ncp-text-left">
                  상품명
                </Table.Cell>
                <Table.SortCell sortKey="views">조회수</Table.SortCell>
                <Table.SortCell sortKey="orders">주문수</Table.SortCell>
                <Table.SortCell sortKey="sales">실적</Table.SortCell>
              </Table.Row>
            </Table.Head>
            <Table.Body visibleCount={visibleCount}>
              {tableData.length > 0 ? (
                tableData.map((item, idx) => (
                  <Table.Row key={idx}>
                    <Table.Cell className="ncp-text-left">
                      <a href={item.href} className={styles.tblLink}>
                        <span>{item.name}</span>
                        <Icon name="arrowRight" size="xsmall" />
                      </a>
                    </Table.Cell>
                    <Table.Cell dataKey="views" sortValue={item.views}>
                      {formatNumber(item.views)}건
                    </Table.Cell>
                    <Table.Cell dataKey="orders" sortValue={item.orders}>
                      {formatNumber(item.orders)}건
                    </Table.Cell>
                    <Table.Cell dataKey="sales" sortValue={item.sales}>
                      {formatNumber(item.sales)}원
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={4} className={styles.empty}>
                    <Empty title="아직 집계된 활동이 없어요" variant="minDisplay" />
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
          {hasMore && (
            <div className={styles.btns}>
              <Button
                size="small"
                suffixIcon="arrowDown"
                variant="tertiary"
                round
                onClick={handleShowMore}
              >
                더보기
              </Button>
            </div>
          )}
        </div>
      </Contents>
    </Container>
  );
}
