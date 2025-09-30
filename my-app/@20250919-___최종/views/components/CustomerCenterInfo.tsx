import { Heading, Line, Stack, Text, TextButton } from '@/shared/ui';
import styles from './CustomerCenterInfo.module.scss';
import { Fragment } from 'react';

interface CustomerCenterInfoProps {
  /** rsvp 고객센터 여부(기본: false) */
  rsvp?: boolean;
  className?: string;
}

export const CustomerCenterInfo = ({ rsvp = false, className }: CustomerCenterInfoProps) => {
  const info = [
    ...(rsvp ? [{ title: 'RSVP 고객센터', tel: '1800-7967' }] : []),
    { title: '고객센터', tel: '1800-2233' },
  ];
  return (
    <div className={className}>
      {info.map((item, index) => (
        <Fragment key={index}>
          {rsvp && index !== 0 && <Line margin="3" />}
          <div className={styles.centerItem}>
            <div className={styles.infoArea}>
              <Heading size="5" weight="bold">
                {item.title}
              </Heading>
              <TextButton
                color="gray1"
                href={`tel:${item.tel}`}
                size="1"
                target="_blank"
                variant="underline"
                className="ncp-weight-semibold"
              >
                {item.tel}
              </TextButton>
            </div>
            <Text color="gray3">연중무휴 09:00~21:00</Text>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

CustomerCenterInfo.displayName = 'CustomerCenterInfo';
