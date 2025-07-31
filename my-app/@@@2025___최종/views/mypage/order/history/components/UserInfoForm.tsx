import {
  FormArea,
  FormItem,
  Input,
  CheckboxGroup,
  ButtonArea,
  Button,
  Stack,
  TextButton,
  Text,
  TextList,
  Link,
} from '@shared/ui';
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
      <div className={styles.actions}>
        <CheckboxGroup
          name="example-default"
          options={[
            {
              label: '아이디 저장',
              value: '1',
            },
            {
              label: '자동 로그인',
              value: '2',
            },
          ]}
        />
        <ButtonArea>
          <Button variant="primary">확인</Button>
        </ButtonArea>
      </div>
      <Stack className={styles.btns}>
        <TextButton variant="underline" size="1" color="gray3">
          아이디/비밀번호 찾기
        </TextButton>
        <TextButton variant="underline" size="1" color="gray3">
          통합회원 가입하기
        </TextButton>
      </Stack>
      <TextList
        data={[
          '과거 더현대닷컴 통합회원 로그인 정보를 입력해 주세요.',
          <>
            인증이 되지 않는다면, 고객센터{' '}
            <Link href="tel:01012345678" variant="underline" type="inline" className={styles.call}>
              1800-2233
            </Link>
            으로 문의 부탁드려요.
          </>,
        ]}
        variant="info"
        className="ncp-mt-xl"
      />
    </>
  );
}
