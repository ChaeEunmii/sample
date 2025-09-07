'use client';
import {
  Button,
  ButtonArea,
  FormArea,
  FormItem,
  Input,
  Link,
  Text,
  TextList,
  TitleBar,
} from '@/shared/ui';
import { Container, Contents } from '@/widgets/layout/Container';

export const TorderGuestOrderForm = () => {
  return (
    <Container title="주문 내역 조회(비회원)">
      <Contents>
        <Text weight="medium" indent reading className="ncp-mt-m">
          로그인 없이 비회원으로 주문하신 고객님께서는 <br />
          다음 안내에 따라 비회원 주문을 조회하실 수 있습니다.
        </Text>
        <TitleBar title="아래의 주문정보를 입력해주세요" />
        <FormArea>
          <FormItem label="주문번호" error="주문번호를 입력해주세요">
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input title="주문번호" size="large" />
          </FormItem>
          <FormItem label="고객명" error="고객명을 입력해주세요">
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input title="고객명" size="large" />
          </FormItem>
          <FormItem label="휴대폰번호" error="휴대폰번호를 입력해주세요">
            {/* 에러인 경우 invalid 속성 추가 */}
            <Input title="휴대폰번호(“-”를 제외하고 입력해주세요)" size="large" />
          </FormItem>
        </FormArea>
        <ButtonArea margin="3">
          <Button variant="primary" size="large">
            주문조회
          </Button>
        </ButtonArea>
        <TextList
          data={[
            '주문번호는 주문 시 발송된 알림톡에서 확인 가능합니다.',
            <>
              알림톡을 삭제, 분실하셨다면 고객센터{' '}
              <Link href="tel:18002233" variant="underline" type="inline">
                1800-2233
              </Link>
              으로 문의 주세요.
            </>,
          ]}
          variant="info"
          className="ncp-mt-l"
        />
      </Contents>
    </Container>
  );
};

TorderGuestOrderForm.displayName = 'TorderGuestOrderForm';
