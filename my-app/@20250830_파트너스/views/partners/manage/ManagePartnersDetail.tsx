'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { formatNumber } from '@/shared/utils/ui';
import { Text, TextList, Box, InfoList, InfoItem, Flag, Table, Icon } from '@shared/ui';
import CalendarNav from '@views/mypage/partners/manage/shop/component/CalendarNav';
import styles from './ManagePartnersDetail.module.scss';

const productData = [
  { name: '다이아몬드 목걸이', views: 50, orders: 12, sales: 10000 },
  { name: '가죽 지갑', views: 200, orders: 30, sales: 50000 },
  { name: '나일론 백팩', views: 120, orders: 25, sales: 30000 },
  { name: '블랙 릴랙스드 롱 슬리브 셔츠', views: 120, orders: 25, sales: 30000 },
];

export function ManagePartnersDetail() {
  const createDate = (y: number, m: number, d: number) => new Date(y, m - 1, d);
  // 문자열 대신 유틸 함수로 초기값 설정
  const [month, setMonth] = useState(() => createDate(2025, 10, 1));

  // 달력 월 변경 핸들러
  const handleMonthChange = (next: Date, ym: { year: number; month: number }) => {
    console.log('월 변경: ', ym.year, ym.month);
    setMonth(next);
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
                  2025/08.01 ~ 2025.08.30
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
          <Table sortable variant="borderless" className={styles.custom}>
            <Table.ColGroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '20%' }} />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.SortCell sortKey="name" className="ncp-text-left">
                  상품명
                </Table.SortCell>
                <Table.SortCell sortKey="views">조회수</Table.SortCell>
                <Table.SortCell sortKey="orders">주문수</Table.SortCell>
                <Table.SortCell sortKey="sales">실적</Table.SortCell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {productData.map((item, idx) => (
                <Table.Row key={idx}>
                  <Table.Cell dataKey="name" className="ncp-text-left">
                    <a href="#" className={styles.tblLink}>
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
              ))}
            </Table.Body>
          </Table>
        </div>
      </Contents>
    </Container>
  );
}
