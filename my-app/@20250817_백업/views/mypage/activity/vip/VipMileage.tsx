import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  Box,
  ButtonArea,
  Button,
  InfoList,
  InfoItem,
  Text,
  Stack,
  TextList,
  Link,
} from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import styles from './VipMileage.module.scss';

export default function DepositMain() {
  return (
    <Container showBack title="VIP 마일리지">
      <Contents className={styles.layout}>
        <TitleArea
          title="2025 VIP 마일리지"
          bottomSlot={
            <>
              <Stack className="ncp-w-full">
                <Box margin="0" size="3" className="ncp-w-full">
                  <InfoList variant="between" gap="row16">
                    <InfoItem
                      title={
                        <Text as="span" size="5" color="gray2">
                          명품 마일리지
                        </Text>
                      }
                      content={
                        <Text as="strong" size="5" color="primary" weight="semibold">
                          10,000,000점
                        </Text>
                      }
                    />
                    <InfoItem
                      title={
                        <Text as="span" size="5" color="gray2">
                          패션&라이프 마일리지
                        </Text>
                      }
                      content={
                        <Text as="strong" size="5" color="primary" weight="semibold">
                          235.11점
                        </Text>
                      }
                    />
                  </InfoList>
                </Box>
                <ButtonArea vertical margin="1" className="ncp-w-full">
                  <Button suffixIcon="openNew" variant="primary">
                    마일리지 전환하기
                  </Button>
                  <Button suffixIcon="openNew">적립/사용 내역 확인하기</Button>
                </ButtonArea>
              </Stack>
            </>
          }
        />
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              '현대백화점에서 한 해동안 적립한 마일리지에 따라 상품군별 두가지로 리워드를 드립니다.',
              '현대백화점, NCP에서 구매한 금액은 상품군별로 적립되면, 현대아울렛에서 구매한 금액은 모두 패션 라이프 마일리지로 적립됩니다.',
              '결제수단별 마일리지 적립 기준이 상이하며, 일부 매장 및 상품은 마일리지 50% 적립 혹은 적립 제외됩니다.',
              '리워드 수령 후 구매 취소로 적립 마일리지가 회수되는 경우, 이미 수령하신 상품권 혹은 해당 금액을 반납하셔야 합니다.',
              '개인 신용 및 카드상태에 따라 마일리지 적립 및 리워드 제공이 제한될 수 있습니다.',
              '당해년도 적립 마일리지는 그 다음해 3월 이후 자동 소멸됩니다.',
              <>
                상품군별 적립 마일리지는{' '}
                <Link href="#" variant="underline" type="inline">
                  현대백화점 홈페이지
                </Link>{' '}
                또는 각 점 회원서비스 센터를 통해 확인하실 수 있습니다.
              </>,
            ]}
            variant="info"
          />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
