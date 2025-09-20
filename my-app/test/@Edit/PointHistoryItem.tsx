import { useLayoutEffect, useRef, useState } from 'react';
import { Text, Heading, TextButton } from '@shared/ui';
import { formatNumber, formatDate } from '@/shared/utils/ui';
import styles from './PointHistoryItem.module.scss';

//'적립' | '적립예정' | '사용' | '소멸'
export type HistoryType = 'earn' | 'expected' | 'use' | 'expire';
export const historyTypeLabelMap: Record<HistoryType, string> = {
  earn: '적립',
  expected: '적립예정',
  use: '사용',
  expire: '소멸',
};

interface PointHistoryItemProps {
  data: {
    /** 고유 ID */
    id: string;
    /** 타이틀 */
    title: string;
    /** 포인트 */
    amount: number;
    /** 발생일 */
    date: string;
    /** 주문번호 */
    orderId?: string;
    /** 타입 */
    type?: HistoryType;
    /** 적립예정일 */
    expectedDate?: string;
    /** 더머니 여부(rsvp) */
    theMoney?: boolean;
  };
}

export function PointHistoryItem({ data }: PointHistoryItemProps) {
  const { title, amount, date, orderId, type, expectedDate, theMoney } = data;
  // '적립' 혹은 '적립예정' 여부
  const isEarnedOrPending = type === 'earn' || type === 'expected';
  const isUsedOrExpired = type === 'use' || type === 'expire';

  // 접미사 너비 측정 테스트
  // ----- 말줄임(클램프) 여부 & suffix 폭 -----
  const titleRef = useRef<HTMLSpanElement>(null);
  const suffixAbsRef = useRef<HTMLSpanElement>(null);
  const [isClamped, setIsClamped] = useState(false);
  const [suffixW, setSuffixW] = useState(0);

  useLayoutEffect(() => {
    let raf = 0;

    const measure = () => {
      if (titleRef.current) {
        const el = titleRef.current;
        const clamped = el.scrollHeight > el.clientHeight + 1;
        setIsClamped((prev) => (prev !== clamped ? clamped : prev));
      }
      if (suffixAbsRef.current) {
        const w = Math.ceil(suffixAbsRef.current.getBoundingClientRect().width);
        setSuffixW((prev) => (prev !== w ? w : prev));
      }
    };

    // rAF 보정: 레이아웃 반영 후 측정
    const measureNext = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };

    // 폰트 로딩 후에도 프레임 하나 뒤에 재측정
    if ('fonts' in document && document.fonts.ready) {
      document.fonts.ready.then(measureNext).catch(() => {});
    }

    // 초기 측정도 rAF로
    measureNext();

    // 제목 영역 관찰
    const roTitle = titleRef.current ? new ResizeObserver(measureNext) : null;
    roTitle?.observe(titleRef.current!);

    // suffix는 초기엔 없을 수 있음(조건부 렌더), 있으면 관찰
    const roSuffix = suffixAbsRef.current ? new ResizeObserver(measureNext) : null;
    if (suffixAbsRef.current) roSuffix?.observe(suffixAbsRef.current);

    // 윈도우 변화
    window.addEventListener('resize', measureNext);
    window.addEventListener('orientationchange', measureNext);

    // DevTools 텍스트 수정 대응
    let mo: MutationObserver | null = null;
    if (titleRef.current) {
      mo = new MutationObserver(measureNext);
      mo.observe(titleRef.current, { characterData: true, childList: true, subtree: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      roTitle?.disconnect?.();
      roSuffix?.disconnect?.();
      mo?.disconnect();
      window.removeEventListener('resize', measureNext);
      window.removeEventListener('orientationchange', measureNext);
    };
    // devtools 수정을 잡기 위해 deps는 비움(참조 대상 고정)
  }, []);

  return (
    <li className={styles.item}>
      {/* 상단 영역*/}
      <div className={styles.top}>
        <div
          className={`${styles.titleWrap} ${isClamped ? styles.clamped : styles.inline}`}
          style={isClamped ? { ['--suffix-w' as string]: `${suffixW}px` } : undefined}
        >
          <Heading as="strong" className={styles.tit}>
            <span ref={titleRef} className={styles.titText}>
              {title}
              {!isClamped && type && (
                <span className={styles.suffixInline}> 구매취소 포인트 적립취소</span>
              )}
            </span>
          </Heading>

          {/* 클램프일 때만 렌더 */}
          {isClamped && type && (
            <span ref={suffixAbsRef} className={styles.suffixAbs} aria-hidden>
              ...구매취소 포인트 적립취소
            </span>
          )}
        </div>
        <Text as="strong" className={styles.point} color={isEarnedOrPending ? 'point' : undefined}>
          {isEarnedOrPending && '+'}
          {isUsedOrExpired && '-'}
          {formatNumber(amount)}P
        </Text>
      </div>
      {/* 중간 영역*/}
      <div className={styles.infos}>
        <div className={styles.left}>
          <ul className={styles.list}>
            <li>{formatDate(date, 'dot')}</li>
            <li>{orderId}</li>
          </ul>
        </div>
        <Text as="strong" size="3" weight="regular" color={isEarnedOrPending ? 'point' : undefined}>
          {type ? historyTypeLabelMap[type] : ''}
        </Text>
      </div>
      {/* 하단 영역 */}
      <div className={styles.bottom}>
        {expectedDate && !theMoney && (
          <div className={styles.expected}>
            <p className={styles.txt}>적립예정일 {formatDate(expectedDate, 'dot')}</p>
          </div>
        )}
        {theMoney && (
          <TextButton variant="underline" size="1" color="gray3" className={styles.theMoney}>
            더머니 받기
          </TextButton>
        )}
      </div>
    </li>
  );
}
