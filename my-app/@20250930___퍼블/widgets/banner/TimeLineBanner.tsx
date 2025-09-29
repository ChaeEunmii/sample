// 컴포넌트
import { Image, Heading, Text, Flag, Link } from '@shared/ui';
import { formatMonthDateDay, toDate } from '@/shared/utils/ui';
// 스타일
import clsx from 'clsx';
import styles from './TimeLineBanner.module.scss';
// 타입
import { BannerImage } from './bannerType';

// 상태 (오픈예정 | 진행중 | 종료)
type TimeLineStatus = 'wait' | 'active' | 'ended';

// 상태별 플래그 설정
const flagMap: Record<TimeLineStatus, { label: string; color: 'gray' | 'green2' | 'gray4' }> = {
  wait: { label: '오픈예정', color: 'gray' },
  active: { label: '진행중', color: 'green2' },
  ended: { label: '종료', color: 'gray4' },
};

export interface TimeLineBannerProps {
  /** ID */
  id?: string;
  /** 상태 */
  status?: TimeLineStatus;
  /** 날짜 */
  date: { start: Date | string; end: Date | string };
  /** 배너 타이틀 */
  title?: string;
  /** 사업소명 */
  place?: string;
  /** 배너 이미지 */
  image?: BannerImage;
  /** 배너 링크 (없으면 div) */
  href?: string;
  /** 클릭 가능여부 */
  clickable?: boolean;
}

export const TimeLineBanner = ({
  id,
  status,
  date,
  title,
  place,
  image,
  href,
  clickable,
}: TimeLineBannerProps) => {
  // dim 처리 여부
  const dimed = status === 'wait' || status === 'ended';

  // 날짜 설정
  const startDate = toDate(date.start);
  const endDate = toDate(date.end);

  const dateText = (d?: Date | string) => {
    if (!d) return '';
    const s = formatMonthDateDay(toDate(d)); // "07.01 화"
    const [monthDay, weekday] = s.split(/\s+/);
    return `${monthDay}(${weekday})`; // "07.01(화)"
  };

  // 썸네일 라벨
  const labelDefs = [
    { label: '오픈예정', show: status === 'wait' },
    { label: '종료', show: status === 'ended' },
  ] as const;

  const thumbLabels = labelDefs
    .filter(({ show }) => show)
    .map(({ label }) => (
      <div key={label} className={styles.thumbLabel}>
        <Text as="span" size="3">
          {label}
        </Text>
      </div>
    ));

  // 공통 콘텐츠
  const innerContent = (
    <>
      <div className={styles.content}>
        {status && <Flag data={flagMap[status]} className={styles.flag} />}
        {startDate && endDate && (
          <Text
            as="span"
            size="3"
            color={!dimed ? 'gray2' : 'gray3'}
            weight="medium"
            indent
            className={styles.date}
          >
            {dateText(startDate)} ~ {dateText(endDate)}
          </Text>
        )}
        {(title || place) && (
          <div className={styles.title}>
            {title && (
              <Heading
                size="4"
                color={!dimed ? 'black' : 'gray3'}
                weight="semibold"
                indent
                className={styles.tit}
              >
                {title}
              </Heading>
            )}
            {place && (
              <Text as="span" size="3" color="gray3" indent className={styles.place}>
                {place}
              </Text>
            )}
          </div>
        )}
      </div>
      {image && (
        <div className={clsx(styles.thumb, dimed && styles.opacity)}>
          <Image {...image} className={styles.image} />
          {thumbLabels}
        </div>
      )}
    </>
  );

  return (
    <div className={clsx(styles.root)} id={id}>
      {href && clickable ? (
        <Link type="block" href={href} className={styles.link}>
          {innerContent}
        </Link>
      ) : (
        <div className={styles.link}>{innerContent}</div>
      )}
    </div>
  );
};

TimeLineBanner.displayName = 'TimeLineBanner';
