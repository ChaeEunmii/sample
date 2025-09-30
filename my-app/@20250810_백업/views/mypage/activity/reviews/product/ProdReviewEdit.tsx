'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import {
  ButtonArea,
  Button,
  Flag,
  Textarea,
  TextButton,
  ImageUploader,
  Section,
  FormArea,
  FormItem,
  Chip,
} from '@shared/ui';
import { StarRating } from '@views/mypage/activity/components/StarRating';
import { OrderItem } from '@/widgets/product';
import styles from './ProdReview.module.scss';

// 상품 임시데이터
const productData = {
  id: 'product-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: 'koy',
  title: '코이 블룸 글로우 로션 토너 150ml',
  orderOptions: ['150ml', '스킨로션', '건성피부용', '블루'],
};

export default function ProdReviewEdit() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [evaluation, setEvaluation] = useState<string>('');

  const handleEvaluation = (value: string) => {
    setEvaluation(value);
  };

  const handleExpand = () => setIsExpanded(!isExpanded);

  return (
    <Container showBack title="상품 리뷰 수정">
      <Contents className={styles.wrap}>
        <OrderItem
          items={[productData]}
          orderTopSlot={(item) => (
            <>
              <span className="ncp-blind">{item.id}</span>
              <Flag
                data={{
                  color: 'green2',
                  label: '체험단',
                }}
              />
            </>
          )}
          isVerticalCenter
          hideThumbLabel
        />
        <StarRating />
        <Section variant="section" title="각 항목별로 상품을 평가해 주세요 (필수)" marginTop="4">
          <FormArea type="vertical" gap="3">
            <FormItem title="지속력">
              <Chip
                selected={evaluation}
                onChange={handleEvaluation}
                columns={'auto'}
                size="small"
                data={[
                  {
                    label: '오래가요',
                    value: 'option1',
                  },
                  {
                    label: '보통이예요',
                    value: 'option2',
                  },
                  {
                    label: '짧아요',
                    value: 'option3',
                  },
                ]}
                name="review-1"
              />
            </FormItem>
            <FormItem title="보습력">
              <Chip
                selected={evaluation}
                onChange={handleEvaluation}
                columns={'auto'}
                size="small"
                data={[
                  {
                    label: '좋아요',
                    value: 'option1',
                  },
                  {
                    label: '보통이예요',
                    value: 'option2',
                  },
                  {
                    label: '별로예요',
                    value: 'option3',
                  },
                ]}
                name="review-2"
              />
            </FormItem>
            <FormItem title="디자인">
              <Chip
                selected={evaluation}
                onChange={handleEvaluation}
                columns={'auto'}
                size="small"
                data={[
                  {
                    label: '마음에 들어요',
                    value: 'option1',
                  },
                  {
                    label: '보통이예요',
                    value: 'option2',
                  },
                  {
                    label: '별로예요',
                    value: 'option3',
                  },
                ]}
                name="review-3"
              />
            </FormItem>
            <FormItem title="무게">
              <Chip
                selected={evaluation}
                onChange={handleEvaluation}
                columns={'auto'}
                size="small"
                data={[
                  {
                    label: '가벼워요',
                    value: 'option1',
                  },
                  {
                    label: '보통이예요',
                    value: 'option2',
                  },
                  {
                    label: '무거워요',
                    value: 'option3',
                  },
                ]}
                name="review-4"
              />
            </FormItem>
          </FormArea>
          <div className={styles.more}>
            <TextButton
              suffixIcon={isExpanded ? 'arrowUp' : 'arrowDown'}
              iconSize="xsmall"
              color="gray3"
              onClick={handleExpand}
            >
              {isExpanded ? '접기' : '펼치기'}
            </TextButton>
          </div>
        </Section>
        <Section
          variant="section"
          title="꿀팁 가득! 자세한 리뷰를 작성해 보세요 (필수)"
          marginTop="4"
        >
          <Textarea
            value="항상 여기서 주문하고 있어요. 원래 비오템 아쿠아파워세트 사용했는데, 아침에는 올인원이 편하다고 함께 주문해 달라고 해서 항상 여기서 주문하고 있어요.  사용해 보니 좋다고 하네요."
            maxLength={2000}
          />
        </Section>
        <Section variant="section" title="이미지 첨부" marginTop="4">
          <ImageUploader
            infoList={[
              '사진은 최대 8장까지, 10MB 이하의 이미지만 업로드 가능합니다.',
              '체험단 리뷰 작성 시 최소 2장 이상의 이미지를 등록해야 합니다.',
            ]}
          />
        </Section>
      </Contents>
      <ButtonArea type="sticky">
        <Button size="large">취소</Button>
        <Button variant="primary" size="large">
          등록
        </Button>
      </ButtonArea>
    </Container>
  );
}
