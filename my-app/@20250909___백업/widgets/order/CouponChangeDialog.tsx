import { ChangeEvent, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  FormArea,
  FormItem,
  InfoItem,
  InfoList,
  Input,
  Line,
  Select,
  Stack,
  Text,
} from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { DiscountSwitchBox } from '@/widgets/form';
import { OrderItem } from '@/widgets/product';
import clsx from 'clsx';
import styles from './CouponChangeDialog.module.scss';
import { mockOrderList } from '@/mocks/order';

interface CouponChangeDialogProps {
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

interface SelectValues {
  [key: string]: string; // key: 셀렉트 고유 id, value: 선택 값
}

const initialSelectValues: SelectValues = {
  select1: 'option1',
  select2: 'option2',
  select3: '',
  select4: '',
  select5: '',
  select10: 'option1',
};

export const CouponChangeDialog = ({
  isOpen = false,
  onClose,
  className,
}: CouponChangeDialogProps) => {
  // 임시 데이터
  const orders = mockOrderList; // 주문상품
  // 상태 관리
  const [discountChecked, setDiscountChecked] = useState(true); // 최대 할인 적용 SwitchBox
  const [inputValue, setInputValue] = useState('1234'); // 프로모션 코드 input
  const [selectValues, setSelectValues] = useState(initialSelectValues);

  useEffect(() => {
    if (!discountChecked) {
      // false: 초기화
      setSelectValues({
        select1: '',
        select2: '',
        select10: '',
      });
    } else {
      // true: 초기값으로 원복
      setSelectValues(initialSelectValues);
    }
  }, [discountChecked]);

  const handleSelectChange = (id: string, value: string) => {
    setSelectValues((prev) => ({ ...prev, [id]: value }));
  };

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
                        weight={selectValues['select1'] ? 'semibold' : 'regular'}
                        color={selectValues['select1'] ? 'point' : 'gray3'}
                      >
                        {selectValues['select1'] ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '더할인 쿠폰명 1' },
                        { value: 'option2', label: '더할인 쿠폰명 2' },
                      ]}
                      size="large"
                      value={selectValues['select1']}
                      onChange={(value) => handleSelectChange('select1', value)}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="일반할인"
                    side={
                      <Text
                        size="4"
                        weight={selectValues['select2'] ? 'semibold' : 'regular'}
                        color={selectValues['select2'] ? 'point' : 'gray3'}
                      >
                        {selectValues['select2'] ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '일반할인 쿠폰명 1' },
                        { value: 'option2', label: '일반할인 쿠폰명 2' },
                      ]}
                      size="large"
                      value={selectValues['select2']}
                      onChange={(value) => handleSelectChange('select2', value)}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="더플러스"
                    side={
                      <Text
                        size="4"
                        weight={selectValues['select3'] ? 'semibold' : 'regular'}
                        color={selectValues['select3'] ? 'point' : 'gray3'}
                      >
                        {selectValues['select3'] ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '더플러스 쿠폰명 1' },
                        { value: 'option2', label: '더플러스 쿠폰명 2' },
                      ]}
                      size="large"
                      value={selectValues['select3']}
                      onChange={(value) => handleSelectChange('select3', value)}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="깜짝할인(TC)"
                    side={
                      <Text
                        size="4"
                        weight={selectValues['select4'] ? 'semibold' : 'regular'}
                        color={selectValues['select4'] ? 'point' : 'gray3'}
                      >
                        {selectValues['select4'] ? '-1,000,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '깜짝할인(TC) 쿠폰명 1' },
                        { value: 'option2', label: '깜짝할인(TC) 쿠폰명 2' },
                      ]}
                      size="large"
                      value={selectValues['select4']}
                      onChange={(value) => handleSelectChange('select4', value)}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="선할인 / H.point 적립"
                    side={
                      <Text
                        size="4"
                        weight={selectValues['select5'] ? 'semibold' : 'regular'}
                        color={selectValues['select5'] ? 'point' : 'gray3'}
                      >
                        {selectValues['select5'] ? '-7,000원' : '0원'}
                      </Text>
                    }
                  >
                    <Select
                      options={[
                        { value: 'option1', label: '선할인 7,000원 적용' },
                        { value: 'option2', label: 'H.point 적립 10,000p' },
                      ]}
                      size="large"
                      value={selectValues['select5']}
                      onChange={(value) => handleSelectChange('select5', value)}
                      disabled={!discountChecked || selectValues['select5'] === ''}
                      placeholder="선택해 주세요"
                    />
                  </FormItem>
                  <FormItem
                    label="프로모션 코드"
                    side={
                      <Text size="4" weight="regular" color="gray3">
                        0원
                      </Text>
                    }
                    error="프로모션 번호를 정확히 입력해 주세요"
                  >
                    <Stack type="field">
                      <Input size="large" placeholder="프로모션 코드를 입력해 주세요" invalid />
                      <Button variant="primary" size="large">
                        적용
                      </Button>
                    </Stack>
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
                      <Text size="6" weight="bold">
                        {discountChecked ? '-3,000,000원' : '선택 안 함'}
                      </Text>
                    }
                  />
                  <InfoItem
                    title="프로모션코드"
                    content={
                      <Text size="6" weight="bold">
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

        {/* [case] 적용 가능한 쿠폰이 없는 경우(케이스 확인을 위한 영역으로 실제 개발시 삭제) */}
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
                    label="프로모션 코드"
                    side={
                      <Text size="4" weight="semibold" color="point">
                        -10,000원
                      </Text>
                    }
                  >
                    <Stack type="field">
                      <Input
                        size="large"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="프로모션 코드를 입력해 주세요"
                      />
                      <Button variant="primary" size="large" disabled={inputValue === '1234'}>
                        적용
                      </Button>
                    </Stack>
                  </FormItem>
                </FormArea>
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
                  <InfoItem
                    title="프로모션코드"
                    content={
                      <Text size="6" weight="bold">
                        선택 안 함
                      </Text>
                    }
                  />
                </InfoList>
              </div>
            </>
          )}
          className={clsx(styles.orderItemList, styles.dummyItemList)}
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
                <Text
                  size="4"
                  weight={selectValues['select10'] ? 'semibold' : 'regular'}
                  color={selectValues['select10'] ? 'point' : 'gray3'}
                >
                  {selectValues['select10'] ? '-1,000,000원' : '0원'}
                </Text>
              }
            >
              <Select
                options={[
                  { value: 'option1', label: '장바구니 쿠폰명 1' },
                  { value: 'option2', label: '장바구니 쿠폰명 2' },
                ]}
                size="large"
                value={selectValues['select10']}
                onChange={(value) => handleSelectChange('select10', value)}
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
