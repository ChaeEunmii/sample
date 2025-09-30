import { Heading, Text } from '@shared/ui';
import { Display, DisplayProps } from '@widgets/display/Display';

export interface CO_IF_TX_02Props extends DisplayProps {
  data: {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
  };
}

export const CO_IF_TX_02 = ({ title, subtitle, moreUrl, margin, data }: CO_IF_TX_02Props) => {
  return (
    <Display title={title} subtitle={subtitle} moreUrl={moreUrl} margin={margin}>
      {data.title && (
        <Heading size="5" indent>
          {data.title}
        </Heading>
      )}
      {data.subtitle && (
        <Text color="gray1" reading indent>
          {data.subtitle}
        </Text>
      )}
      {data.description && (
        <Text size="4" color="gray2" reading indent>
          {data.description}
        </Text>
      )}
    </Display>
  );
};
CO_IF_TX_02.displayName = 'CO_IF_TX_02';
