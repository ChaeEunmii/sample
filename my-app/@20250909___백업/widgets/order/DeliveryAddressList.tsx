import { Empty } from '@shared/ui';
import {
  DeliveryAddressItem,
  DeliveryAddressData,
  Lang,
  ItemLabels,
} from '@widgets/order/DeliveryAddressItem';
import clsx from 'clsx';
import styles from './DeliveryAddressList.module.scss';

export interface DeliveryAddressListProps {
  /** 주소 데이터 */
  data: DeliveryAddressData[];
  /** 주입이 없을 때 사용할 기본 라벨 언어 */
  lang?: Lang;
  /** Empty 문구를 직접 주입 (있으면 lang 라벨보다 우선) */
  emptyText?: string;
  /** label 문구를 직접 주입 */
  itemLabels?: Partial<ItemLabels>;
  /** 추가적인 클래스 */
  className?: string;
  /** 수정  */
  onEdit?: (data: DeliveryAddressData, index: number) => void;
  /** 삭제  */
  onDelete?: (data: DeliveryAddressData, index: number) => void;
  /** 좌우여백 제거 */
  flush?: boolean;
  /** 선택 모드: radio만 우선 지원 */
  mode?: 'radio';
  /** 선택 상태 제어 */
  selection?: {
    selectedIds: Array<string | number>;
    onChange: (nextSelectedIds: Array<string | number>) => void;
  };
  /** 라디오 그룹명 (필요시)*/
  radioGroupName?: string;
}

// 언어별 Empty 기본 문구(emptyText 주입시 그것으로 대체됨) 임시
const LABELS: Record<Lang, { text: string }> = {
  ko: { text: '등록된 배송지가 없어요.' },
  en: { text: 'Please add a shipping address to continue.' },
  zh: { text: 'Please add a shipping address to continue.' },
  ja: { text: 'Please add a shipping address to continue.' },
};

export const DeliveryAddressList = ({
  data,
  lang = 'ko',
  emptyText,
  itemLabels,
  className,
  onEdit,
  onDelete,
  flush,
  mode,
  selection,
  radioGroupName,
}: DeliveryAddressListProps) => {
  // 최종 라벨 결정 (props > LABELS)
  const text = emptyText ?? LABELS[lang].text;

  if (!data.length) {
    return <Empty title={text} />;
  }

  return (
    <ul className={clsx(styles.list, flush && styles.flush, className)}>
      {data.map((addr, idx) => (
        <li key={addr.id ?? `addr-${idx}`} className={styles.item}>
          <DeliveryAddressItem
            data={addr}
            lang={lang}
            labels={itemLabels}
            onEdit={onEdit ? () => onEdit(addr, idx) : undefined}
            onDelete={onDelete ? () => onDelete(addr, idx) : undefined}
            mode={mode}
            selection={selection}
            radioGroupName={radioGroupName ?? `delivery-address-${idx}`}
          />
        </li>
      ))}
    </ul>
  );
};

DeliveryAddressList.displayName = 'DeliveryAddressList';
