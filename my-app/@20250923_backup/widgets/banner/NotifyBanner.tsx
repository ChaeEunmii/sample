// 컴포넌트
import { Image, Link, Button, Heading, Text } from '@/shared/ui';
// 스타일
import styles from './NotifyBanner.module.scss';
import clsx from 'clsx';
// 유틸
import { formatNumber, toDate } from '@shared/utils/ui';
// 타입
import { BannerImage } from './bannerType';
import { useState, useEffect } from 'react';

export interface NotifyBannerProps {
  id: string;
  /** 배너 이미지 */
  image: BannerImage;
  title: React.ReactNode;
  href?: string;
  liveAt: Date | string;
  notification?: {
    isActive: boolean;
    count?: number;
    onToggle?: (id: string) => void;
  };
}

export const NotifyBanner = ({
  id,
  image,
  title,
  href,
  liveAt,
  notification,
}: NotifyBannerProps) => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const liveTime = toDate(liveAt);

  // 1초마다 업데이트
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 시간 포맷팅
  const formatTimeDisplay = () => {
    const formatTime = (milliseconds: number) => {
      const hours = Math.floor(milliseconds / (1000 * 60 * 60));
      const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const formatDate = () => {
      const month = liveTime.getMonth() + 1;
      const date = liveTime.getDate();
      const hour = liveTime.getHours();
      return `${month}월 ${date}일 ${hour}시 오픈`;
    };

    if (!currentTime) {
      return formatDate();
    }

    const timeDiff = liveTime.getTime() - currentTime.getTime();
    const isLive = timeDiff <= 0;
    const isLast24h = timeDiff > 0 && timeDiff <= 24 * 60 * 60 * 1000;

    if (isLive) {
      return `LIVE ${formatTime(Math.abs(timeDiff))}`;
    } else if (isLast24h) {
      return formatTime(timeDiff);
    } else {
      return formatDate();
    }
  };

  const handleToggle = () => {
    notification?.onToggle?.(id);
  };

  return (
    <div className={clsx(styles.root)}>
      <Link href={href || '#'} type="block" className={styles.link}>
        <Image {...image} className={styles.image} />
        <div className={styles.detail}>
          <Text as="strong" weight="semibold">
            {formatTimeDisplay()}
          </Text>
          <Heading size="7" ellipsis={2}>
            {title}
          </Heading>
        </div>
      </Link>
      <div className={styles.notify}>
        <Button
          size="smaller"
          prefixIcon="bell"
          variant={notification?.isActive ? 'secondary' : 'primary'}
          onClick={handleToggle}
        >
          {notification?.isActive ? '신청완료' : '알림받기'}
        </Button>
        {notification?.count! >= 100 && (
          <Text as="span" size="3" weight="medium">
            {formatNumber(notification?.count || 0, 'user')} 신청 중
          </Text>
        )}
      </div>
    </div>
  );
};
