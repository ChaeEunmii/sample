import { Heading, Text } from '@/shared/ui';
import GiftList, { GiftItemType } from '@/widgets/promotion/GiftList';

import styles from './EventRewardBox.module.scss';

type rewardCouponType = {
  value: string;
  desc: string;
};

export type rewardType =
  | { type: 'coupon' | 'point'; item: rewardCouponType }
  | { type: 'gift'; item: GiftItemType };

export const EventReward = ({ data }: { data: rewardCouponType }) => {
  return (
    <div className={styles.coupon}>
      <Text size="3" color="white" className={styles.type}>
        COUPON
      </Text>
      <Heading as="strong" size="7" color="white" className={styles.value}>
        {data.value}
      </Heading>
      <Text size="3" color="white" className={styles.desc}>
        {data.desc}
      </Text>
    </div>
  );
};

export const EventRewardBox = ({ reward }: { reward: rewardType }) => {
  if (reward.type === 'gift') {
    return <GiftList variant="referral" data={reward.item} />;
  } else {
    return <EventReward data={reward.item} />;
  }
};
