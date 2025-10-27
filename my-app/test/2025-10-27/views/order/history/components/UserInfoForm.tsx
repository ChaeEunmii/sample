import { FormArea, FormItem, Input, ButtonArea, Button, Stack, TextButton, Text } from '@shared/ui';
import styles from './UserInfoForm.module.scss';

export default function UserInfoForm() {
  return (
    <>
      <Text size="5" color="gray2">
        통합회원으로 전환 후에는 인증 없이 조회가 가능해요.
      </Text>
      <FormArea>
        <FormItem>
          <Input title="아이디" placeholder="아이디" size="large" />
        </FormItem>
        <FormItem>
          <Input type="password" title="비밀번호" placeholder="비밀번호" reveal size="large" />
        </FormItem>
      </FormArea>
      <ButtonArea margin="1">
        <Button variant="primary">확인</Button>
      </ButtonArea>
      <Stack className={styles.btns}>
        <TextButton variant="underline" size="1" color="gray3">
          아이디/비밀번호 찾기
        </TextButton>
        <TextButton variant="underline" size="1" color="gray3">
          통합회원 전환
        </TextButton>
      </Stack>
    </>
  );
}
