import { Dialog, Button, ButtonArea, Text, FormArea, FormItem, Input, Checkbox } from '@shared/ui';
import styles from './RefundAccount.module.scss';

interface RefundAccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RefundAccountDialog({ isOpen, onClose }: RefundAccountDialogProps) {
  return (
    <Dialog title="환불 계좌 등록/수정" isOpen={isOpen} onClose={onClose} showClose maximize>
      <div className={styles.wrap}>
        <Text size="3" color="gray3">
          환불 처리를 위해 계좌 정보를 수집, 이용하며 입력하신 정보는 환불 목적으로만 이용됩니다.
        </Text>
        <FormArea type="vertical">
          <FormItem label="예금주" error="공백을 제외한 한글로 입력 가능합니다">
            <Input invalid placeholder="예금주명 입력" size="large" />
          </FormItem>
          <FormItem label="입금 은행 선택">
            <Input placeholder="예금주명 입력" size="large" />
          </FormItem>
          <FormItem label="계좌번호" error="숫자 형식으로만 입력 가능합니다">
            <Input invalid placeholder="계좌번호를 -없이 숫자로만 입력" size="large" />
          </FormItem>
          <FormItem error="약관에 동의해 주세요">
            <Checkbox label="개인정보 수집 및 이용에 대한 동의 (필수)" invalid />
          </FormItem>
        </FormArea>
      </div>
      <ButtonArea>
        <Button variant="tertiary">계좌 인증 및 등록</Button>
      </ButtonArea>
    </Dialog>
  );
}
