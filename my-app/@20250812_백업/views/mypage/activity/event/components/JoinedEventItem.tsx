import { Heading, Flag, ButtonArea, Button } from '@shared/ui';
import { formatDate } from '@/shared/utils/ui';
import styles from './JoinedEventItem.module.scss';

// '당첨' | '미당첨' | '응모'
type HistoryType = 'won' | 'lost' | 'applied';

// '당첨' 상태별 버튼 렌더 타입
type WonStatus = 'pending' | 'submitted' | 'closed';

export const historyTypeLabelMap: Record<HistoryType, string> = {
  won: '당첨',
  lost: '미당첨',
  applied: '응모',
};

// type별 flag color 매핑
const historyTypeColorMap: Record<HistoryType, string> = {
  won: 'green2',
  lost: 'gray',
  applied: 'white',
};

interface JoinedEventItemProps {
  data: {
    /** 고유 ID */
    id: string;
    /** 타이틀 */
    title: string;
    /** 이벤트 시작일 */
    eventStartDate: string;
    /** 이벤트 종료일 */
    eventEndDate: string;
    /** 당첨자 발표일 */
    winnerAnnounceDate: string;
    /** 타입 */
    type?: HistoryType;
    /** won일 때 사용하는 버튼 상태 */
    status?: WonStatus;
    /** 당첨자 안내 보기 노출 여부*/
    showGuide?: boolean;
  };
}

export function JoinedEventItem({ data }: JoinedEventItemProps) {
  const { title, eventStartDate, eventEndDate, winnerAnnounceDate, type } = data;

  // 버튼 렌더링
  const renderButtons = () => {
    //당첨
    if (type === 'won') {
      switch (data.status) {
        case 'pending':
          return (
            <ButtonArea className={styles.btns}>
              <Button size="medium" variant="tertiary">
                당첨자 안내 보기
              </Button>
              <Button size="medium" variant="primary">
                당첨자 정보입력
              </Button>
            </ButtonArea>
          );
        case 'submitted':
          return (
            <ButtonArea className={styles.btns}>
              <Button size="medium" variant="tertiary">
                당첨자 안내 보기
              </Button>
              <Button size="medium" disabled>
                마감 되었습니다
              </Button>
            </ButtonArea>
          );
        case 'closed':
        default:
          return (
            <ButtonArea className={styles.btns}>
              <Button size="medium" disabled>
                마감 되었습니다
              </Button>
            </ButtonArea>
          );
      }
    }
    // 미당첨
    if (type === 'lost') {
      if (data.showGuide) {
        return (
          <ButtonArea className={styles.btns}>
            <Button size="medium" variant="tertiary">
              당첨자 안내 보기
            </Button>
          </ButtonArea>
        );
      } else {
        return null;
      }
    }
    return null;
  };

  return (
    <li className={styles.item}>
      <div className={styles.top}>
        <Heading as="strong" className={styles.tit}>
          {title}
        </Heading>
        <div className={styles.side}>
          {type && (
            <Flag
              data={{
                color: historyTypeColorMap[type] as 'green2' | 'gray' | 'white',
                label: historyTypeLabelMap[type],
              }}
              size="large"
            />
          )}
        </div>
      </div>
      <div className={styles.infos}>
        <ul className={styles.list}>
          {/* 이벤트 기간 */}
          <li>
            이벤트 기간 : {formatDate(eventStartDate, 'dot')}~{formatDate(eventEndDate, 'dot')}
          </li>
          {/* 당첨자 발표 */}
          <li>당첨자 발표 : {formatDate(winnerAnnounceDate, 'dot')}</li>
        </ul>
      </div>
      <div className={styles.bottom}>{renderButtons()}</div>
    </li>
  );
}
