'use client';

import { Drawer, Button, FormArea, FormItem, Textarea } from '@shared/ui';
import styles from './CancelReasonDrawer.module.scss';

interface SelectCollectionDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function SelectCollectionDrawer({ isOpen, onClose }: SelectCollectionDrawerProps) {
  return (
    <Drawer
      title="해지하는 이유를 남겨주세요"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
      footer={
        <>
          <Button variant="primary" size="large">
            저장하기
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="해지 사유">
          <Textarea
            placeholder="남겨주신 의견을 참고하여 더 좋은 서비스를 만들겠습니다."
            maxLength={200}
          />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
