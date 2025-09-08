import { useState } from 'react';
import { Button } from '@shared/ui';
import { ProdCardList, ProdCardItemProps } from './ProdCardList';
import styles from './ProdPreviewList.module.scss';

// ProdCardItemProps에 공개 정보를 추가한 타입
export type ProdPreviewItemProps = ProdCardItemProps & {
  /** 공개 정보 */
  preview: {
    date: string;
    isOpen: boolean;
    isNotified: boolean;
  };
};

interface ProdPreviewListProps {
  /** 선공개 상품 데이터 배열 */
  data: ProdPreviewItemProps[];
  /** ProdCardList의 모든 props */
  [key: string]: any;
}

export const ProdPreviewList = ({ data, ...prodCardListProps }: ProdPreviewListProps) => {
  const [previewData, setPreviewData] = useState(data);

  const toggleNotify = (index: number) => {
    setPreviewData((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              preview: {
                ...item.preview,
                isNotified: !item.preview.isNotified,
              },
            }
          : item
      )
    );
  };

  const getPreviewLabel = (preview: { date: string; isOpen: boolean }) => {
    const d = new Date(preview.date);
    const formatted = `${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}시`;
    return preview.isOpen ? `${formatted} 오픈` : `${formatted} 오픈 예정`;
  };

  // 선공개 알림 버튼 설정
  const getNotifyButton = (preview: { isOpen: boolean; isNotified: boolean }) => {
    if (preview.isOpen) {
      return {
        disabled: true,
        icon: undefined,
        variant: 'secondary' as const,
      };
    }
    return preview.isNotified
      ? {
          disabled: false,
          icon: 'bellOn' as const,
          variant: 'secondary' as const,
        }
      : { disabled: false, icon: 'bell' as const, variant: 'primary' as const };
  };

  const dataWithAlarm: ProdCardItemProps[] = previewData.map((item, index) => {
    const { preview, ...restItem } = item;
    const buttonInfo = getNotifyButton(preview);

    return {
      ...restItem,
      buttonSlot: (
        <div className={styles.button}>
          <Button
            prefixIcon={buttonInfo.icon}
            variant={buttonInfo.variant}
            disabled={buttonInfo.disabled}
            aria-pressed={preview.isNotified ? 'false' : 'true'}
            onClick={() => toggleNotify(index)}
          >
            {getPreviewLabel(preview)}
          </Button>
        </div>
      ),
    };
  });

  return <ProdCardList {...prodCardListProps} data={dataWithAlarm} />;
};

ProdPreviewList.displayName = 'ProdPreviewList';
