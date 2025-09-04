'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import {
  TextList,
  Text,
  TitleArea,
  Stack,
  Select,
  Button,
  Empty,
  Box,
  Heading,
  Switch,
  Tooltip,
  Link,
} from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { DepositItem } from '@/views/mypage/deposit/components/DepositItem';
import styles from './DepositMain.module.scss';
import { mockDepositData } from '@mocks/mypage';

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
];

export default function DepositMain() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const summaryData = isNoData
    ? { ...mockDepositData.summary, deposit: 0 }
    : mockDepositData.summary;
  const historyData = isNoData ? [] : mockDepositData.histories;

  // 기간 정렬
  const [sortBrandValue, setSortBrandValue] = useState('option1');
  // 예치내역만 보기
  const [isDepositSwitch, setIsDepositSwitch] = useState(false);

  // 예치내역만 보기 상태에 따라 데이터 필터링
  const filteredList = isDepositSwitch
    ? historyData.filter((item) => item.type === 'deposit')
    : historyData;

  return (
    <Container showBack title="예치금">
      <Contents className={styles.layout}>
        <TitleArea
          level="1"
          topSlot={
            <>
              <div className={styles.tipTit}>
                <Text size="4">보유한 예치금</Text>
                <Tooltip className={styles.tip} placement="bottom" boxClass={styles.tipBox}>
                  <Heading size="1" weight="semibold">
                    예치금 이용안내
                  </Heading>
                  <TextList
                    data={[
                      {
                        textProps: { color: 'white' },
                        text: '전환한 상품권의 60% 이상 사용 시 잔액에 한해 환불이 가능합니다.',
                      },
                      {
                        textProps: { color: 'white' },
                        text: '가입자와 동일한 명의의 계좌로만 환불이 가능합니다.',
                      },
                      {
                        textProps: { color: 'white' },
                        text: (
                          <>
                            회원탈퇴 시 상품권을 60% 이상 사용하지 않아, 환불 및 탈퇴가 불가할 경우
                            고객센터{' '}
                            <Link href="tel:01012345678" className={styles.call}>
                              1800-2233
                            </Link>{' '}
                            로 문의해주시기 바랍니다.
                          </>
                        ),
                      },
                    ]}
                  />
                </Tooltip>
              </div>
            </>
          }
          title={<>{formatNumber(summaryData.deposit)}P</>}
        />
        <Box>
          <Stack type="between">
            <Text as="label" htmlFor="depositView" size="5" weight="semibold">
              예치내역만 보기
            </Text>
            <Switch
              id="depositView"
              checked={isDepositSwitch}
              onChange={(e) => setIsDepositSwitch(e.target.checked)}
            />
          </Stack>
        </Box>
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
                <DepositItem key={item.id} data={item} />
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
      </Contents>
    </Container>
  );
}
