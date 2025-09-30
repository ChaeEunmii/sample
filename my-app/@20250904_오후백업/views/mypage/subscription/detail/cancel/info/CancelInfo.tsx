import { Container, Contents } from '@widgets/layout/Container';
import {
  TitleArea,
  ButtonArea,
  Button,
  TitleBar,
  TextList,
  Text,
  Line,
  Box,
  InfoList,
  InfoItem,
  Link,
} from '@shared/ui';
import styles from './CancelInfo.module.scss';
// 위젯
import { RoundProductItem } from '@widgets/order/RoundProductItem';
import { mockProductInfoItem } from '@/mocks/subscription';

// 유의 사항 내용
const cancelNotices = [
  {
    text: '해지 후에는, 다시 구독을 하려면 새로 구독을 신청해주셔야 합니다.',
  },
  {
    text: '회차별로 다른 상품을 드리는 구독은, 새로 구독 신청을 하더라도 이미 기간이 지난 경우, 이전 회차의 상품은 받으실 수 없어요.',
  },
  {
    text: (
      <>
        해지 전 먼저 결제가 완료된 정기 구독 주문은{' '}
        <Link href="#" variant="underline" type="inline">
          마이페이지 &gt; 주문/배송
        </Link>
        메뉴에서 별도로 취소를 신청해 주세요. 취소되지 않은 주문이 상품 준비 후 배송이 진행되면,
        취소가 아닌 반품을 신청해야 할 수 있어요. 해지 후 꼭 주문/배송 메뉴를 확인해 주세요.
      </>
    ),
  },
];

export default function CancelInfo() {
  // 임시 데이터
  const product = mockProductInfoItem;

  return (
    <Container showBack title="정기구독 해지 안내">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              앗! 구독 해지 전에
              <br />
              고민해 주세요
            </>
          }
          description={
            <>
              회차 건너뛰기를 해서 구독을 다음 회차로 미루거나
              <br />
              구독 설정에서 주기를 변경할 수 있어요.
            </>
          }
          bottomSlot={
            <>
              <Box size="3" margin="0" className="ncp-w-full">
                <InfoList variant="stacked">
                  <InfoItem
                    title={
                      <Text size="4" color="gray2">
                        총 이용회차
                      </Text>
                    }
                    content={<Text size="4">12회/10회</Text>}
                  />
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
            </>
          }
          className="ncp-mb-x0"
        />
        {/* 다음 회차 상품 */}
        <TitleBar type="docs" level="2" title="다음 회차에는 이 상품이 기다리고 있어요." />
        <RoundProductItem data={product} className="ncp-mt-x0" />
        {/* 구분선 */}
        <Line variant="bold" className="ncp-mt-xl" />
        {/* 유의 사항 */}
        <TitleBar type="docs" level="2" title="정기구독 해지 시 유의사항" className="ncp-mt-m" />
        <TextList
          data={cancelNotices.map((item) => ({
            text: item.text,
            textProps: { color: 'gray3' },
          }))}
        />
        <ButtonArea>
          <Button size="large">계속 이용하기</Button>
          <Button variant="primary" size="large">
            해지 신청하기
          </Button>
        </ButtonArea>
      </Contents>
    </Container>
  );
}
