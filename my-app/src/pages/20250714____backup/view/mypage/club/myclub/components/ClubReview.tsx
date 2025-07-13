import { Collapse, Heading, TextButton, ButtonArea } from '@shared/ui';
import styles from './ClubView.module.scss';

export interface ReviewSData {
  id: string;
  productName: string;
  options: string;
  date: string;
  imageUrl: string;
}

interface ClubReviewProps {
  data: ReviewSData[];
}

export const ClubReview = ({ data }: ClubReviewProps) => {
  return (
    <Collapse variant="section" className={styles.collapse}>
      <Collapse.Control>
        <Heading className={styles.tit}>작성 가능한 리뷰</Heading>
      </Collapse.Control>
      <Collapse.Content>
        {data.length === 0 ? (
          <p>작성 가능한 리뷰가 없습니다.</p>
        ) : (
          <ul>
            {data.map((review) => (
              <li key={review.id}>{review.productName}</li>
            ))}
          </ul>
        )}
        <ButtonArea margin="2" align="center">
          <TextButton size="1" suffixIcon="arrowRight">
            전체 리뷰 보기
          </TextButton>
        </ButtonArea>
      </Collapse.Content>
    </Collapse>
  );
};
