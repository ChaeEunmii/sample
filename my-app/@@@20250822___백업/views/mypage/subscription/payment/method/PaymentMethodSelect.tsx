import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  ButtonArea,
  Button,
  Line,
  Heading,
  Text,
  TextList,
  Link,
  TitleBar,
  TextButton,
} from '@shared/ui';
import styles from './PaymentMethodSelect.module.scss';

export default function PaymentMethodSelect() {
  return (
    <Container showBack title="정기구독 결제수단 선택">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              정기구독을 위한 결제수단을
              <br />
              선택해 주세요
            </>
          }
          description="기본 하나 이상, 최대 2개까지 선택한 순서대로 결제수단이 설정됩니다."
        />
        <TitleBar
          type="docs"
          level="2"
          title={<>정기구독 결제 수단 (2/2)</>}
          side={
            <TextButton variant="underline" size="1" color="gray3">
              새로 등록하기
            </TextButton>
          }
        />
        {/* 컴퍼넌트 만들 것___Start */}
        <ul className={styles.list}>
          <li className={styles.item}>
            <Text as="span" color="gray2" size="5" weight="medium">
              현대백화점 카드
            </Text>
            <Text as="span" color="gray2" size="5" weight="medium">
              1234 5678 **** ****
            </Text>
          </li>
        </ul>
        {/* 컴퍼넌트 만들 것___End */}
        <Line variant="bold" margin="4" />
        <Heading size="3" weight="semibold" color="black">
          주의사항
        </Heading>
        <TextList
          data={[
            <>
              <Link href="#" variant="underline" type="inline">
                마이페이지 &gt; H.Point Pay
              </Link>
              에 등록된 결제수단을 정기 구독의 결제수단으로 선택하실 수 있어요.
            </>,
            '단, 현대백화점 카드는 일부  상품에서  결제 수단으로 사용할 수 없습니다. 등록 시 유의해 주세요.',
            '결제 수단을 삭제하기 위해서는 해당 결제수단을 이용중인 구독(진행중)을 모두 해지해 주셔야 합니다.',
            '2순위 결제수단이 등록된 상태에서 1순위 결제수단을 선택 해제하면 2순위 결제수단이 1순위가 됩니다.',
          ]}
          className="ncp-mt-xs"
        />
        <ButtonArea>
          <Button variant="primary" size="large">
            선택완료
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
