import { Heading, Text, TextButton, Radio } from '@shared/ui';
import clsx from 'clsx';
import styles from './DeliveryAddressItem.module.scss';

// ko: 한국어, en: 영어, zh: 중국어, ja: 일본어
export type Lang = 'ko' | 'en' | 'zh' | 'ja';

// 라벨 주입 시 타입 (수정/삭제/기본배송지)
export type ItemLabels = {
  edit: string;
  delete: string;
  defaultBadge: string;
};
// 기본 라벨(labels 주입시 그것으로 대체됨) 임시
const LABELS: Record<Lang, { edit: string; delete: string; defaultBadge: string }> = {
  ko: { edit: '수정', delete: '삭제', defaultBadge: '기본 배송지' },
  en: { edit: 'Modify', delete: 'Delete', defaultBadge: 'Default address' },
  zh: { edit: 'Modify', delete: 'Delete', defaultBadge: 'Default address' },
  ja: { edit: 'Modify', delete: 'Delete', defaultBadge: 'Default address' },
};

export interface DeliveryAddressData {
  /**고유 id */
  id: string;
  /** 타이틀 (우리집, 직장 등) */
  title?: string;
  /** 이름 */
  name: string;
  /** 기본배송지 여부 */
  isDefault?: boolean;
  /** 전화번호 */
  phones: string[];
  /** 주소 */
  address: string;
  /** 추가 정보 (ex. 새벽배송 안내, 공동현관 비밀번호 등) */
  subInfos?: string[];
}

export interface DeliveryAddressItemProps {
  /** 주소 데이터 */
  data: DeliveryAddressData;
  /** 주입이 없을 때 사용할 기본 라벨 언어 */
  lang?: Lang;
  /** label 문구를 직접 주입 (주입 시 최우선) */
  labels?: Partial<ItemLabels>;
  /** 추가적인 클래스 */
  className?: string;
  /** 수정  */
  onEdit?: (data: DeliveryAddressData) => void;
  /** 삭제  */
  onDelete?: (data: DeliveryAddressData) => void;
  /** 선택 모드: radio만 우선 지원 */
  mode?: 'radio';
  /** 선택 상태 제어 */
  selection?: {
    selectedIds: Array<string | number>;
    onChange: (nextSelectedIds: Array<string | number>) => void;
  };
  /** 라디오 그룹명 (필요시 사용) */
  radioGroupName?: string;
}

export const DeliveryAddressItem = ({
  data,
  lang = 'ko',
  labels,
  onEdit,
  onDelete,
  mode,
  selection,
  radioGroupName,
  className,
}: DeliveryAddressItemProps) => {
  // data 구조 분해
  const { title, name, isDefault, phones = [], address, subInfos = [] } = data;

  // 최종 라벨: 주입 > 기본
  const base = LABELS[lang] ?? LABELS.ko;
  const L: ItemLabels = { ...base, ...(labels ?? {}) };

  // 수정 버튼 클릭 핸들러
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(data);
  };
  // 삭제 버튼 클릭 핸들러
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(data);
  };

  // 선택 상태 계산
  const id = data.id;
  const selected =
    mode === 'radio' &&
    id != null &&
    (selection?.selectedIds ?? []).some((v) => String(v) === String(id));

  // 라디오 선택 핸들러
  const handleSelect = () => {
    if (mode !== 'radio' || id == null || !selection) return;
    selection.onChange([id]); // 단일 선택
  };

  // 라디오가 title 없을 때 참조할 본문 요소 id
  const srDescId = `addr-${String(id)}-desc`;

  return (
    <div className={clsx(styles.root, className)}>
      {/* titWrap: radio 모드면 항상, non-radio면 title 있을 때만 */}
      {mode === 'radio' ? (
        <div className={styles.titWrap}>
          <Radio
            name={radioGroupName ?? 'delivery-address'}
            value={id}
            checked={!!selected}
            onChange={handleSelect}
            label={title ?? 'Address'}
            aria-label={title ? undefined : 'Address'}
            aria-describedby={title ? undefined : srDescId} // title이 없을 때 본문 name과 연결
            hideLabel={!title}
            className={styles.check}
          />
        </div>
      ) : (
        title && (
          <div className={styles.titWrap}>
            <Heading className={styles.tit}>{title}</Heading>
          </div>
        )
      )}
      {/* 내용 */}
      <div className={styles.cont}>
        {/* 상단 영역 */}
        <div className={styles.top}>
          {/* 이름 + 제어버튼 영역 */}
          <div className={styles.info}>
            <div className={styles.texts}>
              <Text as="span" size="5" weight="medium" id={srDescId}>
                {name}
              </Text>
              {isDefault && (
                <Text as="span" size="3" weight="medium" color="point" className={styles.default}>
                  {L.defaultBadge}
                </Text>
              )}
            </div>
            <div className={styles.btns}>
              <TextButton variant="underline" size="1" color="gray3" onClick={handleEditClick}>
                {L.edit}
              </TextButton>
              {!isDefault && (
                <TextButton variant="underline" size="1" color="gray3" onClick={handleDeleteClick}>
                  {L.delete}
                </TextButton>
              )}
            </div>
          </div>
          {/* 전화번호 영역 */}
          <div className={styles.phones}>
            {phones.map((phone, i) => (
              <Text key={i} as="span" size="5" className={styles.phone}>
                {phone}
              </Text>
            ))}
          </div>
          {/* 주소 영역 */}
          <Text as="span" size="4" color="gray2" reading indent>
            {address}
          </Text>
        </div>
        {/* 하단 추가정보 */}
        {subInfos.length > 0 && (
          <div className={styles.bottom}>
            {subInfos.map((info, i) => (
              <Text key={i} as="span" size="4">
                {info}
              </Text>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

DeliveryAddressItem.displayName = 'DeliveryAddressItem';
