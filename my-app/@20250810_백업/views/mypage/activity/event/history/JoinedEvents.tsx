'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  TextList,
  Box,
  Stack,
  Text,
  Switch,
  Select,
  Empty,
  TextButton,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import { JoinedEventItem } from '@views/mypage/activity/event/components/JoinedEventItem';
import styles from './JoinedEvents.module.scss';
import { mockJoinedEventsData } from '@/mocks/myactivity';

// 기간 정렬 옵션
const periodOptions = [
  {
    label: '1개월',
    value: 'option1',
  },
  {
    label: '3개월',
    value: 'option2',
  },
  {
    label: '6개월',
    value: 'option3',
  },
  {
    label: '전체',
    value: 'option4',
  },
];

export default function JoinedEvents() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const historyData = isNoData ? [] : mockJoinedEventsData;

  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');
  // 당첨 내역만 보기
  const [isDepositSwitch, setIsDepositSwitch] = useState(false);

  // 당첨 내역만 보기 상태에 따라 데이터 필터링
  const filteredList = isDepositSwitch
    ? historyData.filter((item) => item.type === 'won')
    : historyData;

  return (
    <Container showBack title="나의 이벤트 참여내역">
      <Contents className={styles.layout}>
        <ButtonArea vertical margin="3">
          <Button>옥션/래플 참여 현황 바로가기</Button>
          {!isNoData && <Button>출석체크 전월 기록 확인하기</Button>}
        </ButtonArea>
        <Box className={styles.box}>
          <Stack type="between">
            <Text as="label" htmlFor="depositView" size="5" weight="semibold">
              당첨 내역만 보기
            </Text>
            <Switch
              id="depositView"
              checked={isDepositSwitch}
              onChange={(e) => setIsDepositSwitch(e.target.checked)}
            />
          </Stack>
        </Box>
        <Stack type="between" className={styles.total}>
          <Text size="4" weight="medium" color="gray2">
            총 {historyData.length}개
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
                <JoinedEventItem key={item.id} data={item} />
              ))}
            </ul>
            <div className={styles.btns}>
              <TextButton size="1" suffixIcon="arrowDown">
                더보기
              </TextButton>
            </div>
          </>
        ) : (
          <>
            {/* 내역 없음 */}
            <div className={styles.hasEmpty}>
              <Empty
                title="참여한 이벤트가 없어요."
                desc="이벤트에 참여하시고 다양한 혜택을 받아보세요."
                buttons={
                  <>
                    <Button variant="primary">이벤트 보러가기</Button>
                  </>
                }
              ></Empty>
            </div>
          </>
        )}
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              '최근 1년동안 참여하신 이벤트를 확인을 할 수 있습니다.',
              '참여한 이벤트의 참여일, 당첨여부 확인이 가능합니다.',
              '이벤트 참여 이력은 참여일 기준으로 1년 동안 보관됩니다.',
              '이벤트 당첨시 회원 정보로 배송 되오니 회원 정보를 정확히 확인해 주시기 바랍니다.',
            ]}
            variant="level2"
          />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
