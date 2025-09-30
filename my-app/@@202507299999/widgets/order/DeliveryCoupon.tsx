'use client';
import { useState } from 'react';
import { FormArea, FormItem, Select, Text } from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './DeliveryCoupon.module.scss';

export const DeliveryCoupon = () => {
  const [selected, setSelected] = useState('');

  return (
    <>
      <Section
        title="배송비 쿠폰"
        suffix={
          <Text as="span" weight="medium">
            2개
          </Text>
        }
        variant="collapse"
        defaultOpen
        className={styles.deliveryCoupon}
      >
        <FormArea type="vertical">
          <FormItem
            label={
              <div className={styles.labelBox}>
                <Text color="gray2" weight="medium" className={styles.ellipsis}>
                  상품명 상품명 상품명 상품명
                </Text>
                <Text color="gray2">외 6개</Text>
              </div>
            }
            suffix={
              <Text as="span" color="gray2">
                35,000원
              </Text>
            }
            side={
              <Text as="span" color="gray3">
                0원
              </Text>
            }
          >
            <Select
              options={[
                { value: 'option1', label: '배송비 쿠폰명 1' },
                { value: 'option2', label: '배송비 쿠폰명 2' },
                { value: 'option3', label: '배송비 쿠폰명 3' },
              ]}
              value={selected}
              onChange={setSelected}
              placeholder="쿠폰을 선택해 주세요"
            />
          </FormItem>
          <FormItem
            label={
              <div className={styles.labelBox}>
                <Text color="gray2" weight="medium" className={styles.ellipsis}>
                  상품명 상품명 상품명 상품명
                </Text>
                <Text color="gray2">외 6개</Text>
              </div>
            }
            suffix={<Text as="span">5,000원</Text>}
            side={
              <Text as="span" size="4" weight="semibold" color="point">
                -5,000원
              </Text>
            }
          >
            <Select
              options={[
                { value: 'option1', label: '배송비 쿠폰명 1' },
                { value: 'option2', label: '배송비 쿠폰명 2' },
                { value: 'option3', label: '배송비 쿠폰명 3' },
              ]}
              value={selected}
              onChange={setSelected}
              placeholder="쿠폰을 선택해 주세요"
            />
          </FormItem>
        </FormArea>
      </Section>
    </>
  );
};
DeliveryCoupon.displayName = 'DeliveryCoupon';
