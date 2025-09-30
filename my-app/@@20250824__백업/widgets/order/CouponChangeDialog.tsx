import {
  Button,
  Dialog,
  FormArea,
  FormItem,
  InfoItem,
  InfoList,
  Line,
  Select,
  Text,
  TitleBar,
} from '@shared/ui';
import clsx from 'clsx';
import styles from './CouponChangeDialog.module.scss';
import { DiscountSwitchBox } from '@/widgets/form';
import { Section } from '@/shared/ui/blocks/Section';
import { OrderItem } from '@/widgets/product';
import { useState } from 'react';
import { mockOrderList } from '@/mocks/order';

interface CouponChangeDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const CouponChangeDialog = ({
  isOpen = false,
  onClose,
  className,
}: CouponChangeDialogProps) => {
  // 임시 데이터
  const orders = mockOrderList; // 주문상품
  // 상태 관리
  const [selected, setSelected] = useState('');
  const [discountChecked, setDiscountChecked] = useState(true); // 최대 할인 적용 SwitchBox

  // const [commonCoupon, setCommonCoupon] = useState<string | null>(null); // 일반할인 쿠폰
  // const [basicCoupon, setBasicCoupon] = useState<string | null>(null); // 더할인 쿠폰
  // const [plusCoupon, setPlusCoupon] = useState<string | null>(null); // 더플러스 쿠폰
  // const [surpriseCoupon, setSurpriseCoupon] = useState<string | null>(null); // 깜짝할인 쿠폰
  // const [preDiscountType, setPreDiscountType] = useState<'선할인' | '적립' | null>('선할인'); // 선할인 or 적립

  // const isCommonSelected = !!commonCoupon;
  // const isBasicSelected = !!basicCoupon;
  // const isSurpriseSelected = !!surpriseCoupon;
  // const isPreDiscountSelected = !!preDiscountType;

  return (
    <Dialog
      title="주문 상품"
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <>
          <Button size="large" variant="primary">
            총 7,000,000원 할인쿠폰 적용하기
          </Button>
        </>
      }
      className={clsx(styles.coponChangeDialog, className)}
      maximize
      showClose
    >
      <div className={styles.content}>
        <DiscountSwitchBox checked={discountChecked} onChange={setDiscountChecked} />

        <OrderItem
          items={orders[0].sellers[1].items}
          gap="40"
          priceVariant
          showOrderCount
          isDefault
          orderSlot={(item) => (
            <>
              <div className={styles.slotBox}>
                <FormArea type="vertical" className={styles.formBox}>
                  <FormItem
                    label="더할인"
                    side={
                      <Text
                        size="4"
                        weight={discountChecked ? 'semibold' : 'regular'}
                        color={discountChecked ? 'point' : 'gray3'}
                      >
                        {discountChecked ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '더할인 쿠폰명' },
                        { value: 'option2', label: '더할인 쿠폰명' },
                      ]}
                      size="large"
                      value={selected}
                      onChange={setSelected}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="일반할인"
                    side={
                      <Text
                        size="4"
                        weight={discountChecked ? 'semibold' : 'regular'}
                        color={discountChecked ? 'point' : 'gray3'}
                      >
                        {discountChecked ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '일반할인 쿠폰명' },
                        { value: 'option2', label: '일반할인 쿠폰명' },
                      ]}
                      size="large"
                      value={selected}
                      onChange={setSelected}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="더플러스"
                    side={
                      <Text
                        size="4"
                        weight={discountChecked ? 'semibold' : 'regular'}
                        color={discountChecked ? 'point' : 'gray3'}
                      >
                        {discountChecked ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '더플러스 쿠폰명' },
                        { value: 'option2', label: '더플러스 쿠폰명' },
                      ]}
                      size="large"
                      value={selected}
                      onChange={setSelected}
                      placeholder="선택해 주세요"
                      disabled={!discountChecked}
                    />
                  </FormItem>
                  <FormItem
                    label="깜짝할인(TC)"
                    side={
                      <Text
                        size="4"
                        weight={discountChecked ? 'semibold' : 'regular'}
                        color={discountChecked ? 'point' : 'gray3'}
                      >
                        {discountChecked ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '깜짝할인(TC) 쿠폰명' },
                        { value: 'option2', label: '깜짝할인(TC) 쿠폰명' },
                      ]}
                      size="large"
                      value={selected}
                      onChange={setSelected}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="선할인 / H.point 적립"
                    side={
                      <Text
                        size="4"
                        weight={discountChecked ? 'semibold' : 'regular'}
                        color={discountChecked ? 'point' : 'gray3'}
                      >
                        {discountChecked ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '선할인 7,000d원 적용' },
                        { value: 'option2', label: 'H.point 적립 10,000p' },
                      ]}
                      size="large"
                      value={selected}
                      onChange={setSelected}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                </FormArea>
                <InfoList variant="between" className={styles.totalCoupon}>
                  <InfoItem
                    title="상품쿠폰"
                    content={
                      <Text size="6" weight="bold">
                        {discountChecked ? '-3,000,000원' : '선택 안 함'}
                      </Text>
                    }
                  />
                  <InfoItem
                    title="장바구니 쿠폰"
                    content={
                      <Text size="6" color="gray3">
                        {discountChecked ? '-3,000,000원' : '선택 안 함'}
                      </Text>
                    }
                  />
                </InfoList>
              </div>
            </>
          )}
          className={styles.orderItemList}
        />

        {/* [case] 적용 가능한 쿠폰이 없는 경우 */}
        <OrderItem
          items={orders[0].sellers[1].items}
          gap="40"
          priceVariant
          showOrderCount
          isDefault
          orderSlot={(item) => (
            <>
              <div className={styles.slotBox}>
                <InfoList variant="between" className={styles.totalCoupon}>
                  <InfoItem
                    title="상품쿠폰"
                    content={
                      <Text size="6" color="gray3">
                        사용 가능한 쿠폰 없음
                      </Text>
                    }
                  />
                  <InfoItem
                    title="장바구니 쿠폰"
                    content={
                      <Text size="6" color="gray3">
                        사용 가능한 쿠폰 없음
                      </Text>
                    }
                  />
                </InfoList>
              </div>
            </>
          )}
          className={styles.orderItemList}
        />

        <Line variant="bold" />
        <Section
          title="장바구니 쿠폰"
          side="적용 대상 상품 2"
          variant="normal"
          className={styles.cartCoupon}
        >
          <FormArea type="vertical" className={styles.formBox}>
            <FormItem
              label="쿠폰 적용"
              side={
                <Text size="4" weight="semibold" color="point">
                  -1,000,000원
                </Text>
              }
            >
              <Select
                options={[
                  { value: 'option1', label: '장바구니 쿠폰명' },
                  { value: 'option2', label: '장바구니 쿠폰명' },
                ]}
                size="large"
                value={selected}
                onChange={setSelected}
                placeholder="선택해 주세요"
              />
            </FormItem>
          </FormArea>
        </Section>
      </div>
    </Dialog>
  );
};

CouponChangeDialog.displayName = 'CouponChangeDialog';
