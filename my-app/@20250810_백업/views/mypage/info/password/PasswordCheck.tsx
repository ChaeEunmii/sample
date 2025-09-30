import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, ButtonArea, Button, FormArea, FormItem, Input } from '@shared/ui';

export default function LoginLog() {
  return (
    <Container showBack title="비밀번호 확인">
      <Contents>
        <TitleArea
          title={
            <>
              고객님의 개인정보 보호를 위해
              <br />
              비밀번호를 다시 한번 입력해 주세요
            </>
          }
          description={<>비밀번호가 타인에게 노출되지 않도록 항상 주의해 주세요.</>}
        />
        <FormArea type="vertical">
          <FormItem label="비밀번호">
            <Input type="password" placeholder="비밀번호 입력" size="large" />
          </FormItem>
        </FormArea>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          확인
        </Button>
      </ButtonArea>
    </Container>
  );
}
