'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  Box,
  InfoList,
  InfoItem,
  Text,
  TitleArea,
  Stack,
  Select,
  Tabs,
  TextButton,
  Button,
  Empty,
  TextList,
} from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { ConfirmInfoSection } from '@views/mypage/point/components/ConfirmInfoSection';
import { PointHistoryItem, HistoryType } from '@/views/mypage/point/components/PointHistoryItem';
import styles from './PointMain.module.scss';
import { mockRsvpPointData } from '@mocks/mypage';

// 기간 정렬 옵션
export const periodOptions = [
  {
    label: '1주일',
    value: 'option1',
  },
  {
    label: '1개월',
    value: 'option2',
  },
  {
    label: '3개월',
    value: 'option3',
  },
  {
    label: '6개월',
    value: 'option4',
  },
  {
    label: '12개월',
    value: 'option5',
  },
];

// 탭
export const tabItems: { label: string; type: HistoryType | 'all' }[] = [
  { label: '전체', type: 'all' },
  { label: '적립', type: 'earn' },
  { label: '적립예정', type: 'expected' },
  { label: '사용', type: 'use' },
  { label: '소멸', type: 'expire' },
];

export default function RsvpMain() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const summaryData = mockRsvpPointData.summary;
  const historyData = isNoData ? [] : mockRsvpPointData.histories;

  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');

  // 탭
  const [clickedTab, setClickedTab] = useState(0);
  // 탭이 'all'이면 전체, 아니면 해당 타입만 필터링
  const currentType = tabItems[clickedTab].type;
  const filteredList = historyData.filter(
    (item) => currentType === 'all' || item.type === currentType
  );

  return (
    <Container showBack title="RSVP 포인트">
      <Contents className={styles.layout}>
        <TitleArea
          level="1"
          topSlot={<Text size="4">사용 가능한 RSVP Point </Text>}
          title={<>{formatNumber(summaryData.available + summaryData.expected)}P</>}
          bottomSlot={
            <Box size="2" className="ncp-w-full ncp-mt-x0">
              <InfoList variant="between" gap="row16">
                <InfoItem
                  title="사용가능"
                  content={<Text weight="semibold">{formatNumber(summaryData.available)}P</Text>}
                />
                <InfoItem
                  title="적립예정"
                  content={<Text weight="semibold">{formatNumber(summaryData.expected)}P</Text>}
                />
                <InfoItem
                  title="소멸예정(14일 이내)"
                  content={
                    <TextButton
                      color="gray1"
                      size="2"
                      suffixIcon="arrowRight"
                      variant="bold"
                      className={styles.textBtn}
                    >
                      {formatNumber(summaryData.expireSoon)}P
                    </TextButton>
                  }
                />
              </InfoList>
            </Box>
          }
        />
        <Tabs
          data={tabItems}
          variant="texts"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
        />
        <Stack type="between" className={styles.total}>
          <Text size="4" weight="regular" color="gray2">
            총 <em>{historyData.length}</em>개
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
        {filteredList.length > 0 ? (
          <>
            <ul className={styles.pointList}>
              {filteredList.map((item) => (
                <PointHistoryItem key={item.id} data={item} />
              ))}
            </ul>
            <div className={styles.btns}>
              <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
                더보기
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* 내역 없음 */}
            <div className={styles.hasEmpty}>
              <Empty title="내역이 없어요" />
            </div>
          </>
        )}
        {/* 확인해주세요 */}
        <ConfirmInfoSection>
          <TextList
            data={[
              'RSVP 포인트는 RSVP 회원에게만 적립 및 사용이 가능합니다.',
              'RSVP 포인트는 일부 상품에는 사용이 제한될 수 있습니다.',
            ]}
            variant="info"
          />
        </ConfirmInfoSection>
      </Contents>
    </Container>
  );
}
