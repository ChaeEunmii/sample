import { Text } from '@shared/ui';
import { Display, DisplayProps } from './Display';

export interface MLBN037Props extends DisplayProps {
  description?: React.ReactNode;
}

export const MLBN037 = ({
  title,
  subtitle,
  description,
  moreUrl,
  titleAlign,
  margin,
}: MLBN037Props) => {
  return (
    <Display
      title={title}
      subtitle={subtitle}
      moreUrl={moreUrl}
      margin={margin}
      titleAlign={titleAlign}
    >
      {description && (
        <Text as="div" size="4" indent>
          {description}
        </Text>
      )}
    </Display>
  );
};
MLBN037.displayName = 'MLBN037';
