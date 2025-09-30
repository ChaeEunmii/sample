'use client';

import { Heading, Text, Box, InfoList, InfoItem, Accordion } from '@shared/ui';
import { formatPrice } from '@/shared/utils/ui';
import styles from './HistoryMembershipList.module.scss';
import { mockMembershipHistoryList } from '@mocks/mypage';

// 멤버십 이용 내역 타입
type membershipHistory = {
  /** 고유 ID */
  id: string | number;
  /** 이용 내역 타이틀 */
  label: string;
  /** 이용 상태 */
  state: string;
  /** 이력 발생일 */
  updateDate: string;
  /** 이용 내역 정보 */
  infos: {
    startDate: string;
    endDate: string;
    cancelConfirmedDate: string;
    paymentAmount: number;
    payMethod: string;
    cancelReason: string;
  };
};

interface HistoryMembershipListProps {
  /** 이용내역 목록 데이터 */
  data: membershipHistory[];
}

export const HistoryMembershipList = ({
  data = mockMembershipHistoryList,
}: HistoryMembershipListProps) => {
  return (
    <>
      <div className={styles.layout}>
        <Accordion
          variant="info"
          data={data.map((item, idx) => ({
            id: `history-${idx + 1}`,
            label: (
              <div className={styles.history}>
                <Heading as="strong" className={styles.tit}>
                  {item.label}
                </Heading>
                <ul className={styles.infos}>
                  <li>{item.state}</li>
                  <li>{item.updateDate}</li>
                </ul>
              </div>
            ),
            content: (
              <Box size="3" className={styles.infobox}>
                <InfoList variant="stacked">
                  <InfoItem
                    title={<Text color="gray2">이용 기간</Text>}
                    content={
                      <Text weight="medium">
                        {item.infos.startDate}~{item.infos.endDate}
                      </Text>
                    }
                  />
                  <InfoItem
                    title={<Text color="gray2">해지 확정일</Text>}
                    content={<Text weight="medium">{item.infos.cancelConfirmedDate}</Text>}
                  />
                  <InfoItem
                    title={<Text color="gray2">결제 금액</Text>}
                    content={<Text weight="semibold">{formatPrice(item.infos.paymentAmount)}</Text>}
                  />
                  <InfoItem
                    title={<Text color="gray2">결제 수단</Text>}
                    content={<Text weight="medium">{item.infos.payMethod}</Text>}
                  />
                  <InfoItem
                    title={<Text color="gray2">해지 내용</Text>}
                    content={<Text weight="medium">{item.infos.cancelReason}</Text>}
                  />
                </InfoList>
              </Box>
            ),
          }))}
        />
      </div>
    </>
  );
};
