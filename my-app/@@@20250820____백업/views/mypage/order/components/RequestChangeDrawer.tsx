import { Drawer, Button, Textarea, FormArea, FormItem, Input } from '@shared/ui';

interface RequestChangeDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function RequestChangeDrawer({ isOpen, onClose }: RequestChangeDrawerProps) {
  return (
    <Drawer
      title="요청사항 변경"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            저장하기
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="상담받을 연락처" required>
          <Input disabled value="010-1234-5678" />
        </FormItem>
        <FormItem label="상담 요청 사항">
          <Textarea
            value="방문드릴 때 가능하면 앞 자리로 배정 받을 수 있을까요? 같이 가는 어머니가 시력이랑 청력이 좀 안좋으셔서요. 이번에 방문 신청한거 당첨 되었다고 말씀드리니까 너무 기뻐하시더라고요. 꼭 좀 부탁드려요 "
            maxLength={200}
          />
        </FormItem>
      </FormArea>
    </Drawer>
  );
}
