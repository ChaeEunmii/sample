import React, { useState } from 'react';
import { Text, Flag, Empty } from '@shared/ui';

import styles from './EventListBanner.module.scss';
import { mockEventResultDatas } from '@/mocks/event';
import { FlagItemType } from '@/shared/ui/base/Flag';
import EventResultDialog from './EventResultDialog';
import { formatDate } from '@/shared/utils/ui';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface CardType {
  id: string;
  /** 이벤트 타이틀 */
  title: string;
  /** 이벤트 기간 */
  date: string;
  /** 이벤트 : 당첨 발표일, H.Point : 지급 예정일 */
  resultDate: string;
}

/** 임시 당첨 목록 */
const myEventList = [
  { id: 'event-1', win: true },
  { id: 'event-2', win: false },
  { id: 'event-4', win: false },
  { id: 'event-5', win: false },
];

interface EventResultBannerProps {
  viewType?: 'all' | 'mine';
}

export default function EventResultBanner({ viewType = 'all' }: EventResultBannerProps) {
  const searchParams = useSearchParams();

  /** 로그인 여부 */
  const isLogin = searchParams.has('login');
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');

  /** 당첨자 리스트 팝업 */
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /** mock 데이터 */
  const data = isNoData ? [] : mockEventResultDatas;

  /** 참여한 이벤트 필터링 */
  let filteredResults = data;
  if (viewType === 'mine') {
    filteredResults = data.filter((card) => myEventList.some((item) => item.id === card.id));
  }

  return (
    <>
      {/* 이벤트 카드 */}
      <div className={styles.data}>
        {filteredResults.length > 0 ? (
          filteredResults.map((card: CardType) => {
            const myEvent = myEventList.find((item) => item.id === card.id);

            return (
              <button
                key={card.id}
                className={clsx(styles.card, styles[`card-result`])}
                onClick={() => setIsDialogOpen(true)}
              >
                <Text as="strong" weight="semibold" className={styles.title}>
                  {card.title}
                </Text>
                <Text as="span" className={styles.date} size="3" color="gray3">
                  이벤트 기간 : {card.date}
                </Text>
                <Text as="span" className={styles.resultDate} size="3" color="gray3">
                  당첨자 발표 : {formatDate(card.resultDate, 'dot')}
                </Text>
                {isLogin && myEvent && (
                  <Flag
                    className={styles.badge}
                    data={
                      {
                        label: myEvent.win ? '당첨' : '미당첨',
                        color: myEvent.win ? 'green2' : 'gray',
                      } as FlagItemType
                    }
                  />
                )}
              </button>
            );
          })
        ) : (
          <Empty
            title={`${viewType === 'mine' ? '참여하신 ' : ''}이벤트가 없습니다.`}
            style={{ marginBlock: '100px' }}
          />
        )}
      </div>
      <EventResultDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}
