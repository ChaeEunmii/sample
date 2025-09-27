import { Accordion, Image, Text } from '@shared/ui';
import styles from './AccordionBanner.module.scss';
import clsx from 'clsx';

interface AccordionBannerProps {
  data: {
    title: string;
    subtitle?: React.ReactNode;
    image?: { src: string; alt?: string };
  }[];
  defaultActive?: number;
  className?: string;
}

export const AccordionBanner = ({ data, defaultActive, className }: AccordionBannerProps) => {
  const accordionData = data.map((item) => ({
    label: item.title,
    content: (
      <>
        {item.image && (
          <Image src={item.image.src} alt={item.image.alt || ''} className={styles.image} />
        )}
        {item.subtitle && <Text reading>{item.subtitle}</Text>}
      </>
    ),
  }));

  return (
    <Accordion
      variant="info"
      className={clsx(styles.root, className)}
      data={accordionData}
      defaultId={defaultActive}
    />
  );
};
