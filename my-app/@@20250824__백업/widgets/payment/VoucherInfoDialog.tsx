import { Dialog, Text, TextList, Tabs, Box } from '@shared/ui';
import styles from './VoucherInfoDialog.module.scss';

interface VoucherInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoucherInfoDialog = ({ isOpen, onClose }: VoucherInfoDialogProps) => {
  return (
    <Dialog title="지류 상품권 사용방법" isOpen={isOpen} onClose={onClose} showClose maximize>
      <Tabs
        data={[
          {
            content: (
              <>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <Text weight="semibold">대상 : 현대백화점 상품권</Text>
                    <ol className={styles.list}>
                      <li>집에서 가까운 현대백화점을 방문</li>
                      <li>현대백화점 상품권데스크 방문 (상품권, 신분증 지참)</li>
                      <li>전환신청 및 등록 (본인만 가능, 대리인 불가)</li>
                      <li>전환금 부여 (신청등록 후 , 익일부여 예정)</li>
                      <li>NCP에서 결제</li>
                    </ol>
                  </div>
                  <div className={styles.noti}>
                    <Text color="gray3" weight="semibold">
                      유의사항
                    </Text>
                    <Box className="ncp-mt-xs">
                      <TextList
                        data={[
                          <>
                            현금 환불은 전환금액의 60%이상 사용시 가능합니다.
                            <br />
                            (단, 1만원 권 이하는 80% 이상)
                          </>,
                          '전환한도는 ID 1개당 월 1천만원으로 한정합니다.',
                        ]}
                        variant="level2"
                      />
                    </Box>
                  </div>
                </div>
              </>
            ),
            label: '현대백화점 방문 후 전환',
          },
          {
            content: (
              <>
                <div className={styles.content}>
                  <div className={styles.info}>
                    <Text weight="semibold">
                      대상 : 현대백화점, 삼성, 현대오일뱅크, SK, 국민관광, GS칼텍스, 대명상품권
                    </Text>
                    <ol className={styles.list}>
                      <li>해당 상품권 선택하여 주문완료</li>
                      <li>우편물에 주문번호를 적고 유가증권등기로 아래 주소로 발송</li>
                      <li>상품권 접수 후 주문처리 완료</li>
                    </ol>
                    <Text color="gray2" reading className={styles.address}>
                      [주소] 06181 서울 강남구 테헤란로 98길 12 9층 재경팀 상품권 담당자 앞
                    </Text>
                  </div>
                  <div className={styles.noti}>
                    <Text color="gray3" weight="semibold">
                      주의사항
                    </Text>
                    <Box className="ncp-mt-xs">
                      <TextList
                        data={[
                          '유가증권등기 발송 시 주문고객과 동일한 이름으로 발송하셔야 합니다.',
                          '서로 다른 상품권과 함께 사용하실 수 없습니다.',
                          '결제잔액에 대해서는 예치금으로 전환되며, 향후 NCP에서 사용가능합니다. (단, 상품권 금액의 60%이상 결제하신 잔액에 대해서는 상담원을 통해 환불요청하실 경우, 즉시 환불 해 드립니다.)',
                          '유가증권등기로 보내지 않을 경우 발생하는 문제에 대해 책임을 지지 않습니다.',
                          '기프트 선물카드(신용카드)는 지류상품권이 아닙니다. 상기주소로 보내셔도 결제가 불가하니, 유의하시기 바랍니다.',
                        ]}
                        variant="level2"
                      />
                    </Box>
                  </div>
                </div>
              </>
            ),
            label: '유가 증권 등기 우편',
          },
        ]}
        defaultActive={0}
      />
    </Dialog>
  );
};
VoucherInfoDialog.displayName = 'VoucherInfoDialog';
