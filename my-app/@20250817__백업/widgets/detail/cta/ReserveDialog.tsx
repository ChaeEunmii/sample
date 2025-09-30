import { Dialog, Link, Table, Text, TextList } from '@shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './DetailCTA.module.scss';
import { formatDate } from '@/shared/utils/ui';
import { mockProdCsSellerData } from '@/mocks/detail';

interface ReserveDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReserveDialog({ isOpen, onClose }: ReserveDialogProps) {
  const { item } = useProdDetail();

  return (
    <Dialog title={'예약 구매 안내'} isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles['dialog-reserve']}>
        <TextList
          className={styles.textList}
          data={[
            '구매 하시는 상품 중 예약 구매 상품이 포함 되어 있습니다.',
            '아래 예약구매상품을 확인하시기 바랍니다.',
          ]}
        />
        <Text size="7" weight="bold" className={styles.option}>
          {item.title}
        </Text>
        <Table direction="vertical" className={styles.table}>
          <Table.Caption>
            식품 정보를 담은 테이블로 원산지/제조국, 주원료원산지, 주원료명 등을 나타냅니다.
          </Table.Caption>
          <Table.ColGroup>
            <col style={{ width: '137px' }} />
            <col />
          </Table.ColGroup>
          <Table.Body>
            <Table.Row>
              <Table.Cell rowHeader>판매기간</Table.Cell>
              <Table.Cell>
                {formatDate(item.preOrder.start)} ~ {formatDate(item.preOrder.end)}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell rowHeader>배송시작일</Table.Cell>
              <Table.Cell>
                {formatDate(item.preOrderDelivery.start)} ~ {formatDate(item.preOrderDelivery.end)}
                <br />
                (사정에 따라 배송일은 변경될 수 있습니다.)
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell rowHeader>고객안내</Table.Cell>
              <Table.Cell>
                상품에 대한 문의는 Q&A에 남겨주시면, 확인 즉시 답변 드리겠습니다. 그 외 문의는
                고객센터로 연락바랍니다.
                <br />
                <br />
                고객센터 :&nbsp;
                <Link variant="underline" href={`tel: ${mockProdCsSellerData.csNumber.value}`}>
                  {mockProdCsSellerData.csNumber.value}
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Dialog>
  );
}
