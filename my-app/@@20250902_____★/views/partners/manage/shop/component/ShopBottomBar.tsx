import { Text, ButtonArea } from '@shared/ui';
import styles from './ShopBottomBar.module.scss';

interface ShopBottomBarProps {
  content?: string;
}

// 기본 문구
const DEFAULT_CONTENT =
  '파트너스샵에서 상품을 구매하는 경우, 상품 구매로 발생한 수익의 일부가 파트너스에게 제공됩니다.';

export const ShopBottomBar = ({ content = DEFAULT_CONTENT }: ShopBottomBarProps) => {
  return (
    <ButtonArea type="sticky" className={styles.bottom}>
      <Text size="4" color="gray3">
        {content}
      </Text>
    </ButtonArea>
  );
};
