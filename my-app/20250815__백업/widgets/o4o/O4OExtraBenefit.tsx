'use client';
import { Collapse, Heading, Stack, Text, TextList } from '@/shared/ui';

interface O4OExtraBenefitProps {
  /** 비회원 여부(기본: false) */
  guest?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

export const O4OExtraBenefit = ({ guest = false, className }: O4OExtraBenefitProps) => {
  // ✅ TextList 데이터
  const textList = [
    '추가 혜택은 메뉴별로 상이하거나 적용되지 않을 수 있습니다.',
    '회원 주문 시에만 적립됩니다.',
  ];

  return (
    <Collapse variant="graybox" defaultOpen className={className}>
      <Collapse.Control>
        <Heading as="h2" size="5" weight="bold" indent>
          추가혜택
        </Heading>
      </Collapse.Control>
      <Collapse.Content>
        <Stack type="between">
          <Heading size="2" weight="regular" color="gray1">
            H.Point 적립
          </Heading>
          <Text as="span" size="4" weight="semibold">
            기본 0.1% 적립
          </Text>
        </Stack>
        {guest ? (
          <TextList
            data={
              textList.map((info) => ({
                text: info,
                textProps: { color: 'gray2' },
              })) ?? []
            }
            variant="info"
            margin="2"
          />
        ) : (
          <Text size="3" color="gray2" className="ncp-mt-x6">
            추가 혜택은 메뉴별로 상이하거나 적용되지 않을 수 있습니다.
          </Text>
        )}
      </Collapse.Content>
    </Collapse>
  );
};

O4OExtraBenefit.displayName = 'O4OExtraBenefit';
