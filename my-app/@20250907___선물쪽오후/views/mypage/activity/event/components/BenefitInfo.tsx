'use client';

import { Collapse, Heading } from '@/shared/ui';

interface BenefitInfoProps {
  title?: string;
  children?: React.ReactNode;
}

export const BenefitInfo = ({ title = '2월의 혜택보기', children }: BenefitInfoProps) => {
  return (
    <Collapse variant="section" marginTop="1">
      <Collapse.Control border>
        <Heading size="5" indent>
          {title}
        </Heading>
      </Collapse.Control>
      <Collapse.Content>{children}</Collapse.Content>
    </Collapse>
  );
};
