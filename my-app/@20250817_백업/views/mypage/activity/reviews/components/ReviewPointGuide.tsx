'use client';

import { Section, Box, Heading, Text, TextList, TextButton } from '@shared/ui';

type ReviewPointGuideProps = {
  /** 적립기한 표시 (예: "2025.08.15 (D-30)") */
  pointDeadline?: string;
  /** 안내 목록 */
  guideList?: string[];
  /** 안내 버튼 클릭 핸들러 */
  onClickGuide?: () => void;
};

const DEFAULT_GUIDE_LIST = [
  '일반 상품평 : 100P / 포토 상품평 : 200P',
  '클럽 가입자인 경우 가입일 이후 주문 건 & 클럽별 해당 MD상품 구매 고객 한정 추가 적립해 드립니다.',
  '체험단은 적립되지 않습니다.',
];

export function ReviewPointGuide({
  pointDeadline = '2025.08.15 (D-30)',
  guideList = DEFAULT_GUIDE_LIST,
  onClickGuide,
}: ReviewPointGuideProps) {
  return (
    <Section variant="section" title="H.Point 적립 안내" marginTop="4">
      <Box size="3">
        <Heading as="strong" size="3" weight="medium">
          H.Point 적립기한{' '}
          <Text color="point" as="span">
            {pointDeadline}
          </Text>
        </Heading>
        <TextList data={guideList} variant="level2" />
      </Box>
      <div className="ncp-mt-m ncp-text-right">
        <TextButton variant="underline" size="1" color="gray3" onClick={onClickGuide}>
          리뷰 작성 안내
        </TextButton>
      </div>
    </Section>
  );
}
