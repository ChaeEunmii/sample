import { Drawer, Button, TextList, Link, Text, FormArea, FormItem, Input } from '@shared/ui';
import styles from './LoginPwReset.module.scss';

interface LoginPwResetDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
}

export default function LoginPwResetDrawer({ isOpen, onClose }: LoginPwResetDrawerProps) {
  return (
    <Drawer
      title="비밀번호 초기화"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large" onClick={onClose}>
            닫기
          </Button>
          <Button variant="primary" size="large" onClick={onClose}>
            신규 비밀번호 받기
          </Button>
        </>
      }
    >
      <FormArea type="vertical">
        <FormItem label="사업자 번호를 입력해 주세요.">
          <Input type="number" placeholder="숫자만 입력(10자리)" size="large" />
        </FormItem>
      </FormArea>
      <TextList
        data={[
          '판매자 가입시 입력한 휴대폰번호로 초기화된 비밀번호가 발송됩니다.',
          <>
            비밀번호 확인이 어려우실 경우 아래에 번호로 문의해 주시기 바랍니다.{' '}
            <Text as="span" color="gray1">
              (문의{' '}
              <Link href="tel:0221432677" variant="underline" type="inline" className={styles.call}>
                02-2143-2677
              </Link>
            </Text>
            )
          </>,
        ]}
        variant="level2"
        margin="2"
      />
    </Drawer>
  );
}
