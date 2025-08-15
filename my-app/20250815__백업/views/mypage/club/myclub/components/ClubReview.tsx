import { Collapse, Heading, TextButton, ButtonArea, Button, Empty } from '@shared/ui';
import styles from './ClubView.module.scss';
import { OrderItem } from '@widgets/product';

export interface ReviewSData {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  brand: string;
  title: string;
  orderOptions?: string[];
  info?: {
    buyDate: string;
  };
  rsvp: boolean;
  price: {
    current: number;
  };
  stock: number;
  quantity: number;
}

interface ClubReviewProps {
  data: ReviewSData[];
}

export const ClubReview = ({ data }: ClubReviewProps) => {
  // 작성가능한 리뷰 항목
  const reviewData = data;

  return (
    <>
      <Collapse variant="section" className={styles.collapse} defaultOpen>
        <Collapse.Control border>
          <Heading indent className={styles.tit}>
            작성 가능한 리뷰
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          {reviewData.length === 0 ? (
            <div className={styles.noReview}>
              <Empty
                title="작성할 리뷰가 없어요."
                buttons={
                  <>
                    <Button variant="primary">리뷰쓰고 H.Point 적립</Button>
                  </>
                }
              />
            </div>
          ) : (
            <>
              {/* '장바구니/주문서' 에서 사용하는 컴퍼넌트  */}
              <OrderItem
                items={reviewData}
                orderSlot={(item) => (
                  <>
                    {/* 샘플 입니다 */}
                    {item.id === 'review-2' ? (
                      <Button variant="tertiary">한달 리뷰 쓰기</Button>
                    ) : (
                      <Button variant="tertiary">리뷰쓰기</Button>
                    )}
                  </>
                )}
                className={styles.orderItemList}
                hidePrice
              />
              <ButtonArea margin="2" align="center">
                <TextButton size="1" suffixIcon="arrowRight">
                  전체 리뷰 보기
                </TextButton>
              </ButtonArea>
            </>
          )}
        </Collapse.Content>
      </Collapse>
    </>
  );
};
