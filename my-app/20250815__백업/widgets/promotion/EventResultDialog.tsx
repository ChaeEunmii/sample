import { Box, Dialog, Table } from '@shared/ui';
import styles from './EventListBanner.module.scss';
import { mockEventWinnerData } from '@/mocks/event';
import { Text } from '@/shared/ui';
import { maskEmail, maskName, maskText } from '@/shared/utils/ui';

interface CrossDiscountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

/** 임시 내 정보 */
const myInfo = {
  name: '박현대',
  userId: undefined,
  userEmail: 'dlapdlfdbwj@gmail.com',
  phoneNumber: '1234',
};

export default function CrossDiscountDialog({ isOpen, onClose }: CrossDiscountDialogProps) {
  const data = mockEventWinnerData;

  /** 내가 당첨자인 경우 highlight를 위한 정보 일치 여부 탐색 */
  const isMyRow = (row: (typeof data)[0]) => {
    if (row.name !== myInfo.name || row.phoneNumber !== myInfo.phoneNumber) return false;
    if (row.userId) {
      return row.userId === myInfo.userId;
    }
    return row.userEmail === myInfo.userEmail;
  };

  /** data를 isMyRow가 true인 row가 앞으로 오도록 정렬 */
  const sortedData = [...data].sort((a, b) => {
    // isMyRow(a)가 true면 -1(앞), false면 1(뒤)
    if (isMyRow(a) && !isMyRow(b)) return -1;
    if (!isMyRow(a) && isMyRow(b)) return 1;
    return 0;
  });

  return (
    <Dialog
      title="당첨자 리스트"
      isOpen={isOpen}
      onClose={onClose}
      bodyClassName={styles.dialog}
      showClose
      maximize
    >
      {/* 고정 텍스트 영역 */}
      <Text weight="medium">
        안녕하세요. NCP 고객님!
        <br />
        4월 14일 ~ 4월 20일 진행한 &lt;딥퍼랑스 체험 이벤트&gt; 당첨자 안내 드립니다!
      </Text>
      <Box color="point" size="3">
        <Text as="strong" weight="semibold">
          당첨 선물
        </Text>
        <Text as="strong" weight="semibold" color="point">
          퍼퓸 드 바디워시 머스키우드 본품 300ml 15명
        </Text>
        <Text size="4" color="gray2">
          하단 부분 당첨자 리스트 확인 부탁드립니다.
        </Text>
      </Box>

      {/* 어드민에서 받는 텍스트 영역 */}
      <Text color="gray2" className="ncp-mt-s">
        경품은 이미 등록해 주신 기본배송지로 자동 발송됩니다. 경품은 당첨자 발표일로부터 2주일 이내
        발송됩니다. 상품평 등록 : 배송완료 후 주문확인/배송조회 화면에서 상품평 등록 체험단 상품
        수령 후 2주 이내로 상품평을 꼭 등록해주세요. 상품평 미등록시 차후 이벤트 참여에 제한이 있을
        수 있습니다.
      </Text>

      {/* 당첨자 테이블 */}
      <Table className={styles.winnerTable}>
        <Table.Caption>지점 별 재고 수량 목록 테이블로 상품, 재고수량을 나타냅니다.</Table.Caption>
        <Table.ColGroup>
          <col style={{ width: '97px' }} />
          <col style={{ width: '87px' }} />
          <col style={{ width: '159px' }} />
        </Table.ColGroup>
        <Table.Head>
          <Table.Row>
            <Table.Cell colHeader>이름/아이디</Table.Cell>
            <Table.Cell colHeader>전화번호(뒷4자리)</Table.Cell>
            <Table.Cell colHeader>경품</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map((row, idx) => (
            <Table.Row key={idx} point={isMyRow(row) ? true : undefined}>
              <Table.Cell>
                {maskName(row.name)}
                <br />
                {row.userId ? maskText(row.userId) : row.userEmail ? maskEmail(row.userEmail) : ''}
              </Table.Cell>
              <Table.Cell>{row.phoneNumber}</Table.Cell>
              <Table.Cell>{row.prize}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Dialog>
  );
}
