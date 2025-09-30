import { Heading, Avatar, ButtonArea, Button } from '@shared/ui';
import styles from './ShopTopBar.module.scss';

export interface partnersShopMeta {
  /** 고유 ID */
  id: string | number;
  /** 사용자 이름 */
  name: string;
  /** 사용자 사진 */
  image?: {
    src: string;
    alt?: string;
  };
}

interface ShopTopBarProps {
  /** 데이터 */
  data: partnersShopMeta;
  /** 바로가기 버튼 콜백 */
  onClickGoButton?: () => void;
}

export const ShopTopBar = ({ data, onClickGoButton }: ShopTopBarProps) => {
  const { name, image } = data;

  return (
    <div className={styles.topBar}>
      <div className={styles.info}>
        <Avatar src={image?.src} alt={image?.alt} />
        <Heading as="strong" color="black" size="8" weight="bold" indent>
          {name}
        </Heading>
      </div>
      <ButtonArea margin="1">
        <Button variant="tertiary" suffixIcon="arrowRight" onClick={onClickGoButton}>
          미스페이스 바로가기
        </Button>
      </ButtonArea>
    </div>
  );
};
