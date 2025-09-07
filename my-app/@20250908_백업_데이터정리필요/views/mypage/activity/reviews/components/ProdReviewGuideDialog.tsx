import { Dialog, Text, TitleBar, TextList, Table } from '@shared/ui';
import styles from './ProdReviewGuide.module.scss';

interface ProdReviewGuideDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProdReviewGuideDialog({ isOpen, onClose }: ProdReviewGuideDialogProps) {
  return (
    <Dialog title="리뷰 작성안내" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.wrap}>
        <Text size="5" weight="medium" reading indent>
          실제 사용 모습이 담긴 사진이나 사용 후 느낀 점 등을 자세히 작성해 주시면 다른 고객에게 큰
          도움이 됩니다.
        </Text>
        <Text size="3" color="gray3" indent>
          리뷰를 작성해 주시면 항목에 따라 H.Point를 적립해 드려요.
        </Text>
        <TitleBar type="docs" title="리뷰 유형별 적립금" level="2" />
        <Table className="ncp-mt-s">
          <Table.Caption>리뷰 유형별 적립금을 나타냅니다.</Table.Caption>
          <Table.Head>
            <Table.Row>
              <Table.Cell colHeader>유형</Table.Cell>
              <Table.Cell colHeader>텍스트</Table.Cell>
              <Table.Cell colHeader>포토</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                일반 리뷰
                <br />
                받은 선물 리뷰
              </Table.Cell>
              <Table.Cell>100P</Table.Cell>
              <Table.Cell>200P</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>한달사용 리뷰</Table.Cell>
              <Table.Cell>100P</Table.Cell>
              <Table.Cell>200P</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <TitleBar type="docs" title="리뷰 안내사항" level="3" />
        <TextList
          data={[
            '일반 리뷰/받은 선물 리뷰는 배송 완료 후 30일까지 작성 가능하며 작성 완료 시 H.Point가 지급됩니다.',
            '한달사용 리뷰는 기간 제한 없이 작성 가능하며 배송 완료 후 31일~60일까지 작성 완료 시에만 H.Point가 지급됩니다.',
            '최초 등록된 리뷰 기준으로 H.Point가 지급됩니다.',
            '상품과 관련이 없는 내용이나 사진, 무의미한 문자 반복, 욕설 및 비방, 동일 리뷰 복사, 타인의 리뷰에서 도용한 사진, 화면 캡처 등의 내용이 포함된 리뷰는 별도 안내 없이 게시가 제한되거나 삭제, 적립된 혜택이 회수될 수 있습니다.',
            '부적절한 리뷰 내용으로 3회 이상 신고가 접수된 리뷰는 별도 안내 없이 미노출 처리될 수 있습니다.  ',
            '리뷰 작성 기간과 관련한 별도의 안내는 발송되지 않습니다.',
          ]}
        />
      </div>
    </Dialog>
  );
}
