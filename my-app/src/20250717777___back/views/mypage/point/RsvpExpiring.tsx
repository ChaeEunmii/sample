'use client';

import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleArea, Stack, Heading, Empty, Line, Collapse, TextList } from '@shared/ui';
import { formatNumber } from '@/shared/utils/ui';
import { PointExpiringItem } from '@/views/mypage/point/components/PointExpiringItem';
import styles from './PointExpiring.module.scss';
import { mockRsvpPointExpiringData } from '@mocks/mypage';

export default function RsvpExpiring() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  // mock 데이터 변수에 할당
  const summaryData = mockRsvpPointExpiringData.summary;
  const historyData = isNoData ? [] : mockRsvpPointExpiringData.histories;
  if (isNoData) {
    summaryData.expiring = 0;
  }

  return (
    <Container showBack title="소멸예정 포인트">
      <Contents className={styles.layout}>
        <TitleArea
          variant="1"
          topSlot={<Text size="4">소멸예정 RSVP Point (14일 이내)</Text>}
          title={<>{formatNumber(summaryData.expiring)}P</>}
        />
        <Stack type="between" className={styles.total}>
          <Text size="6" weight="medium" color="gray2">
            총 <em className="ncp-font-weight-semibold">{historyData.length}개</em>
          </Text>
          <Text as="strong" size="4" weight="regular">
            2025.01.01~2025.01.14
          </Text>
        </Stack>
        {/* 목록 */}
        {historyData.length > 0 ? (
          <>
            <ul className={styles.pointList}>
              {historyData.map((item) => (
                <PointExpiringItem key={item.id} data={item} />
              ))}
            </ul>
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
                  '적립된 RSVP 포인트는 적립 월 기준 60개월 경과 후 익월 1일 소멸되며 프로모션 포인트는 일단위로 소멸됩니다.',
                  'RSVP 포인트는 일부 상품에는 사용이 제한될 수 있습니다.',
                ]}
                variant="info"
              />
            </Collapse.Content>
          </Collapse>
        </div>
      </Contents>
    </Container>
  );
}
