import clsx from 'clsx';
import { Drawer, Button, Text, Input, FormArea, FormItem } from '@shared/ui';
import styles from './StorepickGiftDrawer.module.scss';

interface StorepickGiftDrawerProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const StorepickGiftDrawer = ({ isOpen, onClose, className }: StorepickGiftDrawerProps) => {
  return (
    <Drawer
      title="스토어픽 선물하기"
      collapsible
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          확인
        </Button>
      }
      className={clsx(styles.optionChange, className)}
    >
      <div className={styles.content}>
        <Text size="4" color="gray2">
          스토어픽 교환권을 타인에게 선물하실 수 있습니다. <br />
          받는 사람에게 문자로 교환권이 발송됩니다. (매장 승인 이후)
        </Text>
        <FormArea type="vertical" className={styles.giftForm}>
          <FormItem label="받는 분" error="실명을 입력해 주세요. (공백제외)" required>
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input placeholder="선물 받는 분의 실명을 입력해 주세요" size="medium" />
          </FormItem>
          <FormItem label="연락처" error="연락처를 숫자만 입력해 주세요." required>
            <Input placeholder="숫자만 입력해 주세요 (공백없이)" size="medium" />
          </FormItem>
          <FormItem label="선물메세지" required>
            <Input placeholder="선물 메세지를 입력해 주세요" size="medium" />
          </FormItem>
        </FormArea>
      </div>
    </Drawer>
  );
};

StorepickGiftDrawer.displayName = 'StorepickGiftDrawer';
