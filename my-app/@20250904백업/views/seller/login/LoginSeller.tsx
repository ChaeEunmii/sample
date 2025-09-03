import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, TitleBar, FormArea, FormItem, Input, TextButton } from '@shared/ui';
import styles from './LoginSeller.module.scss';

export default function LoginSeller() {
  return (
    <Container showBack title="판매자 로그인">
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="판매자 로그인" />
        <FormArea>
          <FormItem label="사업자 번호">
            <Input title="사업자 번호" type="number" size="large" />
          </FormItem>
          <FormItem label="비밀번호">
            <Input title="비밀번호" type="password" size="large" />
          </FormItem>
        </FormArea>
        <div className={styles.actions}>
          <TextButton color="gray3" size="1" variant="underline">
            비밀번호 초기화
          </TextButton>
        </div>
        <ButtonArea margin="1">
          <Button variant="primary">로그인</Button>
        </ButtonArea>
        <TitleBar type="docs" title="판매자 가입하고 입점신청 하세요" className="ncp-mt-xxl" />
        <ButtonArea margin="1">
          <Button>판매자 가입하기</Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
