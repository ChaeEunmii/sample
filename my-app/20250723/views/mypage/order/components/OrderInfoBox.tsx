import { Box, IconButton, Heading, Text } from '@shared/ui';
import styles from './OrderInfoBox.module.scss';

interface OrderInfoBoxProps {
  /** title */
  title?: string;
  /** content */
  content: React.ReactNode;
  /** 복사 버튼 유무 */
  isCopy?: boolean;
  /** sideSlot */
  sideSlot?: React.ReactNode;
}

export const OrderInfoBox = ({ title, content, isCopy, sideSlot }: OrderInfoBoxProps) => {
  return (
    <Box variant="green" className={styles.root}>
      <div className={styles.left}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <div className={styles.cont}>
          <Text color="point">{content}</Text>
          {isCopy && (
            <>
              <IconButton name="copy" size="small" className={styles.copy} aria-label="복사" />
            </>
          )}
        </div>
      </div>
      {sideSlot && <div className={styles.side}>{sideSlot}</div>}
    </Box>
  );
};
