import { Drawer, Button, FormArea, FormItem, Input } from '@shared/ui';

interface RecipientInfoEditDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function RecipientInfoEditDrawer({ isOpen, onClose }: RecipientInfoEditDrawerProps) {
  return (
    <Drawer
      title="받으시는 분 편집"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            저장
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="이름" required>
          <Input value="김현대" />
        </FormItem>
        <FormItem label="전화번호" required>
          <Input value="010-1234-5678" />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
