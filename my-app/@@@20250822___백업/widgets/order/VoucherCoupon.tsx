'use client';

import { useState } from 'react';
import { Text, Button, FormArea, FormItem, Input, Heading, Select, TextButton } from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './VoucherCoupon.module.scss';
import { mockAddressItem } from '@/mocks/address';

export const VoucherCoupon = () => {
  // 임시 데이터
  const addr = mockAddressItem;
  // 상태 관리
  const [formItems, setFormItems] = useState<string[]>(['item-1']); // 받는 분 추가/삭제(기본 아이템 1개 항상 노출)
  const [selected, setSelected] = useState('option1'); // 수량 select

  const handleAdd = () => {
    setFormItems((prev) => [...prev, `item-${prev.length + 1}`]);
  };

  const handleRemove = (index: number) => {
    // 첫 번째 form 아이템(index 0)은 삭제 불가
    if (index === 0) return;

    setFormItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Section
        title="모바일 쿠폰 받는 분"
        suffix={
          <>
            <Text as="span" size="5" weight="medium">
              3명
            </Text>
          </>
        }
        variant="collapse"
        defaultOpen
      >
        {formItems.map((item, index) => (
          <div key={item} className={styles.box}>
            <div className={styles.topbox}>
              <Heading as="h3" size="3" weight="semibold" indent>
                받는 분 {index + 1}
              </Heading>
              {index !== 0 && (
                <TextButton
                  color="gray3"
                  onClick={() => handleRemove(index)}
                  size="1"
                  variant="underline"
                >
                  삭제
                </TextButton>
              )}
            </div>
            <FormArea type="vertical" className={styles.formbox}>
              <FormItem label="이름" error={index !== 0 ? '이름을 입력해 주세요.' : ''} required>
                {/* 에러인 경우 invalid 속성 추가 */}
                <Input
                  type="text"
                  name="name"
                  defaultValue={index !== 0 ? '' : addr.name}
                  placeholder="이름을 입력해 주세요"
                />
              </FormItem>
              <FormItem
                label="휴대폰번호"
                error={index !== 0 ? '휴대폰번호를 입력해 주세요.' : ''}
                required
              >
                {/* 에러인 경우 invalid 속성 추가 */}
                <Input
                  type="tel"
                  name="tel"
                  defaultValue={index !== 0 ? '' : addr.phone}
                  placeholder="숫자만 입력해 주세요 (공백없이)"
                />
              </FormItem>
              <FormItem label="수량" error={index !== 0 ? '에러메시지 영역입니다.' : ''} required>
                {/* 에러인 경우 invalid 속성 추가 */}
                <Select
                  options={[
                    { value: 'option1', label: '1' },
                    { value: 'option2', label: '2' },
                    { value: 'option3', label: '3' },
                  ]}
                  value={selected}
                  onChange={setSelected}
                />
              </FormItem>
            </FormArea>
          </div>
        ))}

        <div className={styles.buttonbox}>
          <Button
            round
            size="small"
            variant="tertiary"
            onClick={handleAdd}
            className={styles.addButton}
          >
            받는 분 추가하기
          </Button>
        </div>
      </Section>
    </>
  );
};
VoucherCoupon.displayName = 'VoucherCoupon';
