import { RadioGroup, Image } from '@shared/ui';
import styles from './GiftRadioGroup.module.scss';
import clsx from 'clsx';

interface GiftRadioGroupProps {
  /** 추가 클래스명 */
  className?: string;
}

export const GiftRadioGroup = ({ className }: GiftRadioGroupProps) => {
  return (
    <>
      <RadioGroup
        className={clsx(styles.root, styles.imgRadio, className)}
        name="gift-select"
        options={[
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/dummy/@sample_food_01.png"
                  alt="과일 종합 꾸러미"
                  className={styles.image}
                />
                과일 종합 꾸러미
              </div>
            ),
            value: '1',
          },
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/dummy/@sample_food_01.png"
                  alt="과일 종합 꾸러미"
                  className={styles.image}
                />
                과일 종합 꾸러미
              </div>
            ),
            value: '2',
          },
          {
            label: (
              <div className={styles.thumbLabel}>
                <Image
                  src="/images/img_gift.png"
                  alt="농산물 셋트 랜덤 기프트"
                  className={styles.image}
                />
                농산물 셋트 랜덤 기프트
              </div>
            ),
            value: '3',
          },
        ]}
        vertical
      />
    </>
  );
};
