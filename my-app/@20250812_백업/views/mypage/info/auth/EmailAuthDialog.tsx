import { Dialog, TitleArea, FormArea, FormItem, Input, Button } from '@shared/ui';

interface EmailAuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailAuthDialog({ isOpen, onClose }: EmailAuthDialogProps) {
  return (
    <Dialog
      title="이메일 인증"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <>
          <Button size="large">취소</Button>
          <Button variant="primary" size="large">
            인증메일 발송
          </Button>
        </>
      }
    >
      <TitleArea
        title={
          <>
            회원정보에 등록된
            <br />
            이메일로 인증해 주세요!
          </>
        }
        description="이메일 주소는 마이페이지>회원정보변경에서 변경하실 수 있습니다."
      />
      <FormArea>
        <FormItem
          label="제목"
          desc={
            <>
              인증메일이 발송되었습니다.
              <br />
              이메일을 확인하시고 인증완료 버튼을 눌러주세요.
            </>
          }
        >
          <Input type="email" title="이메일" value="abc1234@gmail.com" size="large" disabled />
        </FormItem>
      </FormArea>
    </Dialog>
  );
}
