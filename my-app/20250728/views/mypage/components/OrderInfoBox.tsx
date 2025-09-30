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
  /** 복사 시 실행되는 콜백 */
  onCopy?: (copiedText: string) => void;
}

export const OrderInfoBox = ({ title, content, isCopy, sideSlot, onCopy }: OrderInfoBoxProps) => {
  // 복사 버튼 클릭 시 실행되는 핸들러
  const handleCopy = () => {
    // content가 문자열(string)일 경우에만 복사 대상 텍스트로 사용
    const textToCopy = typeof content === 'string' ? content : '';
    // 복사할 텍스트가 존재하고, onCopy 콜백이 정의되어 있을 경우에만 실행
    if (textToCopy && onCopy) {
      onCopy(textToCopy);
    }
  };

  return (
    <Box margin="0" variant="green" className={styles.root}>
      <div className={styles.left}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <div className={styles.cont}>
          <Text color="point">{content}</Text>
          {isCopy && (
            <>
              <IconButton
                name="copy"
                size="small"
                className={styles.copy}
                aria-label="복사"
                onClick={handleCopy}
              />
            </>
          )}
        </div>
      </div>
      {sideSlot && <div className={styles.side}>{sideSlot}</div>}
    </Box>
  );
};
