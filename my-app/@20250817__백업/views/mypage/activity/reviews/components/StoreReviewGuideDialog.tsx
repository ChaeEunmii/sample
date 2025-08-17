import { Dialog, Text, TitleBar, TextList } from '@shared/ui';
import styles from './StoreReviewGuide.module.scss';

interface StoreReviewGuideDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StoreReviewGuideDialog({ isOpen, onClose }: StoreReviewGuideDialogProps) {
  return (
    <Dialog title="리뷰 작성안내" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.wrap}>
        <Text size="5" weight="medium" reading indent>
          실제 사용 모습이 담긴 사진이나 사용 후 느낀 점 등을 자세히 작성해 주시면 다른 고객에게 큰
          도움이 됩니다.
        </Text>
        <TitleBar type="docs" title="리뷰 안내사항" level="3" />
        <TextList
          data={[
            '상품과 관련이 없는 내용이나 사진, 무의미한 문자 반복, 욕설 및 비방, 동일 리뷰 복사, 타인의 리뷰에서 도용한 사진, 화면 캡처 등의 내용이 포함된  리뷰는 별로 안내 없이 게시가 제한되거나 삭제, 적립된 혜택이 회수될 수 있습니다.  ',
            '부적절한 리뷰 내용으로 3회 이상 신고가 접수된 리뷰는 별도 안내 없이 미노출 처리될 수 있습니다.  ',
            '리뷰 작성 기간과 관련한 별도의 안내는 발송되지 않습니다.',
          ]}
        />
      </div>
    </Dialog>
  );
}
