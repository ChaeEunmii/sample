import { Heading, InfoList, InfoItem } from '@shared/ui';
import clsx from 'clsx';
import styles from './ReceiptInfoSection.module.scss';

export interface ReceiptField {
  label: string;
  value: React.ReactNode;
  /** 강조 표시: true는 강한 강조, 'small'은 작은 강조 */
  highlight?: boolean | 'small';
}

interface ReceiptInfoSectionProps {
  /** 섹션 제목 (없으면 제목 없이 렌더링) */
  title?: string;
  /** 단일 그룹 필드 배열 (groups 없을 때 사용) */
  items?: ReceiptField[];
  /** 다중 그룹 필드 배열 (groups 우선 사용) */
  groups?: ReceiptField[][];
  /** 하단 추가 슬롯 */
  bottomSlot?: React.ReactNode;
  /** 추가 클래스 이름 */
  className?: string;
}

export function ReceiptInfoSection({
  title,
  items,
  groups,
  bottomSlot,
  className,
}: ReceiptInfoSectionProps) {
  // groups가 있으면 그대로 사용, 없으면 items를 단일 그룹으로 감싸고, 둘 다 없으면 빈 배열
  const renderGroups = groups ?? (items ? [items] : []);

  return (
    <div className={clsx(styles.root, className)}>
      {/* 상단 타이틀 */}
      {title && (
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
      )}
      {/* 그룹별 InfoList 렌더링 */}
      <div className={styles.groups}>
        {renderGroups.map((group, gIdx) => (
          <div key={gIdx} className={styles.group}>
            <InfoList variant="between">
              {group.map(({ label, value, highlight = false }, idx) => {
                const getHighlightClass = (base: string) => {
                  if (highlight === true) return styles[`${base}Point`];
                  if (highlight === 'small') return styles[`${base}PointSmall`];
                  return undefined;
                };

                return (
                  <InfoItem
                    key={`${label}-${gIdx}-${idx}`}
                    title={
                      <strong className={clsx(styles.infoTit, getHighlightClass('tit'))}>
                        {label}
                      </strong>
                    }
                    content={
                      <span className={clsx(styles.infoCont, getHighlightClass('cont'))}>
                        {value}
                      </span>
                    }
                  />
                );
              })}
            </InfoList>
          </div>
        ))}
      </div>
      {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
    </div>
  );
}
