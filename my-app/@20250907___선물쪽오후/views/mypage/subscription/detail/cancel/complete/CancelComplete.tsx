import { Container, Contents } from '@widgets/layout/Container';
import {
  Text,
  TitleArea,
  TextList,
  Box,
  InfoList,
  InfoItem,
  ButtonArea,
  Button,
  Link,
} from '@shared/ui';

export default function CancelComplete() {
  return (
    <Container showBack title="정기구독 해지 완료">
      <Contents>
        <TitleArea
          title={<>구독이 종료되었습니다</>}
          description={
            <>
              그동안 구독해 주셔서 감사드려요.
              <br />
              앞으로 보다 만족스러운 서비스로 다시 만날 수 있도록
              <br />
              노력하겠습니다.
            </>
          }
          className="ncp-mb-x0"
        />
        <Box size="3" className="ncp-mt-m">
          <InfoList variant="stacked">
            <InfoItem
              title={
                <Text size="4" color="gray2">
                  정기구독 기간
                </Text>
              }
              content={<Text size="4">2025.01.01 ~ 2025.12.25</Text>}
            />
          </InfoList>
        </Box>
        <TextList
          data={[
            '해지 전 결제 예정일에 자동 결제되거나 상품 준비중인 경우, 별도로 주문/배송 조회에서 확인 후 취소를 진행해 주세요. ',
            <>
              해지하신 정기구독 상세의{' '}
              <Link href="#" variant="underline" type="inline">
                전체 구독 일정
              </Link>
              에서도 확인이 가능해요.
            </>,
          ]}
          variant="info"
          className="ncp-mt-m"
        />
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">주문/배송 조회</Button>
        <Button variant="primary" size="large">
          구독관리 목록으로
        </Button>
      </ButtonArea>
    </Container>
  );
}
