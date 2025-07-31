'use client';

import { useState } from 'react';
import { Dialog, TitleArea, TitleBar, Button, Text, TextList } from '@shared/ui';
import { GiftRadioGroup } from '@views/mypage/membership/components/GiftRadioGroup';
import { ConfirmInfoSection } from '@views/mypage/point/components/ConfirmInfoSection';
import { mockGiftImage, mockGiftImage2 } from '@mocks/mypage';

// 기프트 라디오 옵션
export const giftOptions = [
  {
    value: '1',
    image: mockGiftImage,
    label: '과일 종합 꾸러미',
  },
  {
    value: '2',
    image: mockGiftImage,
    label: '야채 종합 꾸러미',
  },
  {
    value: '3',
    image: mockGiftImage2,
    label: '농산물 셋트 랜덤 기프트',
  },
];

interface ProductChangeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductChangeDialog({ isOpen, onClose }: ProductChangeDialogProps) {
  const [selectedGift, setSelectedGift] = useState<string>('');

  return (
    <Dialog
      title="정기배송 상품 변경 신청"
      footer={
        <Button variant="primary" size="large">
          선택하기
        </Button>
      }
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
    >
      <TitleArea
        topSlot={
          <Text size="5" weight="semibold">
            현재 이용중
          </Text>
        }
        title={
          <>
            HiHi 멤버십 프라임
            <br />
            이번 달 기프트는 과일 꾸러미예요
          </>
        }
      />
      <TitleBar title="다음 회차부터 받을 기프트를 선택해 주세요" type="docs" level="2" />
      <TextList
        data={[
          '매월 받고 싶은 혜택 한 가지를 미리 고를 수 있어요.',
          '변경하지 않으면 저번 달과 동일한 기프트가 배송돼요.',
        ]}
        variant="level2"
      />
      <GiftRadioGroup
        options={giftOptions}
        value={selectedGift}
        onChange={(val) => {
          console.log('선택된 기프트 값:', val);
          setSelectedGift(val);
        }}
      />
      {/* 확인해주세요 */}
      <ConfirmInfoSection>
        <TextList
          data={[
            '선택한 기프트 유형에 따라 상품이 정기배송됩니다.',
            '선택한 기프트 구성에 따라 매월 발송되는 상품은 변경될 수 있습니다.',
            '기프트는 정기결제일 기준 7일 후 영업일에 발송됩니다. (주말/공휴일 제외)',
            '정기배송일 변경이 필요하신 경우 고객센터(1800-2233)를 이용해주세요.',
          ]}
          variant="info"
        />
      </ConfirmInfoSection>
    </Dialog>
  );
}
