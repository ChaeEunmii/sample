// 컴포넌트
import { Image, Heading, Link, Text, Button, Flag } from '@shared/ui';
// 스타일
import styles from './LiveCard.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

interface LiveCardProps {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  date?: {
    date: string;
    time: string;
  };
  href: string;
  isNotified?: boolean;
  onToggle?: (value: boolean) => void;
  type?: 'horizontal' | 'vertical';
  live?: boolean;
  rsvp?: boolean;
}

export const LiveCard = ({
  image,
  title,
  date,
  href,
  isNotified = false,
  onToggle,
  type = 'horizontal',
  live = false,
  rsvp = false,
}: LiveCardProps) => {
  const [notified, setNotified] = useState(isNotified);

  const handleToggle = () => {
    const newValue = !notified;
    setNotified(newValue);
    onToggle?.(newValue);
  };

  const getLiveCardFlag = () => {
    if (!live && !rsvp) return;
    const baseFlags = [];

    if (live)
      baseFlags.push({
        color: 'red' as const,
        label: 'Live',
      });

    if (rsvp)
      baseFlags.push({
        color: 'black' as const,
        label: 'RSVP',
      });

    return baseFlags;
  };
  const liveFlags = getLiveCardFlag();

  return (
    <div className={clsx(styles.root, type && styles[type])}>
      <Link href={href} className={styles.thumb} type="block">
        <Image className={styles.link} {...image} />
        {liveFlags && <Flag data={liveFlags} className={styles.flag} radius="br" />}
      </Link>

      <div className={styles.detail}>
        <Link href={href} type="block" className={styles.link}>
          <Heading className={styles.title}>{title}</Heading>
          {date && (
            <Text className={styles.date} color="gray3">
              {date.date}
              <span className={styles.separator} aria-hidden="true"></span>
              {date.time}
            </Text>
          )}
        </Link>

        <Button
          className={styles.notified}
          prefixIcon={notified ? 'bellOn' : 'bell'}
          variant={notified ? 'secondary' : 'primary'}
          size="smaller"
          onClick={handleToggle}
        >
          {notified ? '알림신청' : '알림받기'}
        </Button>
      </div>
    </div>
  );
};
