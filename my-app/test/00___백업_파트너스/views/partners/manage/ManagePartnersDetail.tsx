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
  Select,
  Heading,
  Stack,
} from '@shared/ui';
import styles from './ManagePartnersDetail.module.scss';

// 테이블 목록 샘플 데이터
const mockTableListArray = Array.from({ length: 12 }).map((_, i) => ({
  id: `tbl-${i + 1}`,
  href: '#',
  name: `블랙 릴랙스드 롱 슬리브 셔츠 ${i + 1}`,
  views: 999999,
  orders: 999999,
  sales: 9999999,
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
  // 조회기간 선택 상태
  const [dateSelected, setDateSelected] = useState('option1');

  // 데이터 없음 화면확인 경로설정용 코드
  const searchParams = useSearchParams();
  const isNoData = searchParams.has('nodata');
  // mock 데이터 가져오기
  const tableData = isNoData ? [] : mockTableListData;

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
        <Select
          options={[
            { value: 'option1', label: '2025년 08월' },
            { value: 'option2', label: '2025년 09월' },
          ]}
          value={dateSelected}
          onChange={setDateSelected}
          size="large"
        />
        <div className={styles.counts}>
          <div className={styles.item}>
            <Heading size="3" color="gray1" weight="regular" indent>
              지급 금액
            </Heading>
            <Stack type="between">
              <Text as="em" color="primary" weight="bold" indent className={styles.accent}>
                123,456,700,000원
              </Text>
              <Flag data={{ label: '예정', color: 'dark2' }} />
            </Stack>
          </div>
          <div className={styles.item}>
            <Heading size="3" color="gray1" weight="regular" indent>
              상품 구매 수
            </Heading>
            <Text as="em" size="8" color="primary" weight="bold" indent>
              10건
            </Text>
          </div>
          <div className={styles.item}>
            <Heading size="3" color="gray1" weight="regular" indent>
              실적 확정 수
            </Heading>
            <Text as="em" size="8" color="primary" weight="bold" indent>
              8건
            </Text>
          </div>
        </div>
        <Box size="3" className={styles.infoBox}>
          <InfoList variant="between" gap="row16">
            <InfoItem
              title={
                <Text as="span" weight="regular">
                  집계 기간
                </Text>
              }
              content={
                <Text as="em" weight="regular">
                  2025.08.01 ~ 2025.08.30
                </Text>
              }
            />
            <InfoItem
              title={
                <Text as="span" weight="regular">
                  실적 확정 예정일
                </Text>
              }
              content={
                <Text as="em" weight="regular">
                  2025.09.30
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
                <Text as="em" weight="regular">
                  2025.10.10
                </Text>
              }
            />
          </InfoList>
        </Box>
        <TextList
          data={[
            '지급 금액은 입금일까지 변동될 수 있으며, 취소·반품된 주문은 실적에서 자동 제외됩니다. 최종 지급액은 주문 확정시점에 따라 다를 수 있습니다.',
            '부정 유입(자가 구매, 비정상 클릭 등)으로 판단된 건은 실적 및 수익에서 제외됩니다.',
            '모든 수치는 당월 합계 기준이며, 정산 계좌 미등록 시 지급이 보류될 수 있습니다.',
          ]}
          variant="info"
          className="ncp-mt-x6"
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
              <col style={{ width: '32%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '22%' }} />
              <col style={{ width: '24%' }} />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.Cell colHeader>상품명</Table.Cell>
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
