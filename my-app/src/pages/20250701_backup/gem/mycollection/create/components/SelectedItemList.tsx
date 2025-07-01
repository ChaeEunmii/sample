'use client';

import { IconButton, Image } from '@shared/ui';
import styles from './SelectedItemList.module.scss';

interface Item {
  /** 고유 ID */
  id: string | number;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
}

interface SelectedItemListProps {
  /** 아이템 목록 */
  data: Item[];
  /** 삭제 콜백 */
  onRemove?: (id: string | number) => void;
}

const SelectedItemList = ({ data, onRemove }: SelectedItemListProps) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id} className={styles.item}>
          <Image src={item.image.src} alt={item.image.alt} />
          <IconButton
            size="large"
            name="delete"
            onClick={() => onRemove?.(item.id)}
            className={styles.delete}
          >
            삭제
          </IconButton>
        </li>
      ))}
    </ul>
  );
};

export default SelectedItemList;
