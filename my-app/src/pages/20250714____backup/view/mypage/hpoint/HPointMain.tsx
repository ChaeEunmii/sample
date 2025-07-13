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
  Heading,
  Tabs,
  TextButton,
  Button,
  Empty,
  Line,
  Collapse,
  TextList,
} from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import styles from './HPointMain.module.scss';
import { HPointHistoryItem, HistoryType } from '@views/mypage/hpoint/component/HPointHistoryItem';
import { periodOptions, mockHPointData } from '@mocks/mypage';

// 탭
export const tabItems: { label: string; type: HistoryType | 'all' }[] = [
  { label: '전체', type: 'all' },
  { label: '적립', type: 'earn' },
  { label: '적립예정', type: 'expected' },
  { label: '사용', type: 'use' },
  { label: '소멸', type: 'expire' },
];

export default function HPointMain() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const summaryData = mockHPointData.summary;
  const historyData = isNoData ? [] : mockHPointData.histories;

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
    <Container showBack title="H.Point">
      <Contents className={styles.layout}>
        <TitleArea
          variant="1"
          topSlot={<Text size="4">사용 가능한 H.Point</Text>}
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
                      {summaryData.expireSoon}P
                    </TextButton>
                  }
                />
              </InfoList>
            </Box>
          }
        />
        <Stack type="between" className={styles.total}>
          <Text size="6" weight="medium" color="gray2">
            총 <em className="ncp-font-weight-semibold">{historyData.length}개</em>
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
        <Tabs
          data={tabItems}
          variant="texts"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
        />
        {/* 목록 */}
        {filteredList.length > 0 ? (
          <>
            <ul className={styles.pointList}>
              {filteredList.map((item) => (
                <HPointHistoryItem key={item.id} data={item} />
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
        <div className={styles.confirm}>
          <Line />
          <Collapse variant="section">
            <Collapse.Control>
              <Heading size="5">확인해주세요</Heading>
            </Collapse.Control>
            <Collapse.Content>
              <TextList
                data={[
                  'NCP 상품 구매로 적립된 H.Point의 유효기간은 5년입니다.',
                  '이벤트 또는 프로모션을 통해 적립된 H.Point는 유효기간이 각각 다를 수 있습니다.',
                  'NCP에서 지급된 H.Point의 소멸 및 소멸 예정 내역만 조회할 수 있습니다.',
                  '타 계열사에서 적립된 H.Point는 H.Point 앱에서 확인해 주세요.',
                ]}
                variant="info"
              />
              <div className="ncp-text-right ncp-mt-s">
                <TextButton color="gray1" size="1" variant="underline">
                  H.Point APP 바로가기
                </TextButton>
              </div>
            </Collapse.Content>
          </Collapse>
        </div>
      </Contents>
    </Container>
  );
}
