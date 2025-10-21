'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAlert } from '@shared/contexts/AlertContext';
import { Container, Contents } from '@widgets/layout/Container';
import { ButtonArea, Button, Section, TextList, Radio, Text, Dialog, Empty } from '@/shared/ui';
import { OrderTopInfo, CouponReceiver } from '@views/mypage/order/detail/components';
import { RefundAccountInfo, ClaimProdList } from '@views/mypage/claims/components';
import { RefundInfo } from '@views/mypage/order/detail/components';
import styles from './CancelRequest.module.scss';

import { mockCommonOrder } from '@mocks/claims';
// mock 데이터
const mockMethodsData = [
  {
    id: 'card-01',
    label: '현금으로 환불 환불카드',
    subLabel: '90~95%',
  },
  {
    id: 'card-02',
    label: 'H.Point로 환불',
    subLabel: '100%',
  },
];

// 상품 임시데이터
const productData = {
  id: 'product-1',
  href: '#',
  image: {
    src: '/images/dummy/@sample_product_01.png',
    alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
  },
  brand: 'QWER',
  title: '현대백화점 슈퍼스테이지 26 QWER & 김계란',
  price: {
    current: 23456780,
    original: 23456780,
  },
  orderOptions: ['옵션 1', '옵션 2', '옵션 3', '옵션 4'],
  quantity: 1,
};
const productDataItems = [
  {
    id: 'claim',
    items: [
      {
        ...productData,
        id: 'claim-1',
      },
    ],
  },
];

// 쿠폰 받으시는 분 샘플데이터
const mockCouponReceiver = [
  {
    id: 'receiver-1',
    name: '김*대',
    phone: '010-****-5678',
    coupons: [
      {
        id: 'coupon-1',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20250101',
        status: 'waiting' as const, //사용대기
        sentRemain: 3,
      },
      {
        id: 'coupon-2',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20250101',
        status: 'waiting' as const, //사용대기
        sentRemain: 3,
      },
      {
        id: 'coupon-3',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'expired' as const, //기간만료
      },
      {
        id: 'coupon-4',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'cancel_apply' as const, //취소요청
      },
      {
        id: 'coupon-5',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'cancel_completed' as const, //취소완료
      },
      {
        id: 'coupon-6',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'used' as const, //사용완료
      },
    ],
  },
  {
    id: 'receiver-2',
    name: '김*대',
    phone: '010-****-5678',
    coupons: [
      {
        id: 'coupon-2-1',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'waiting' as const, //사용대기
      },
      {
        id: 'coupon-2-2',
        number: 'AB123456789012345678',
        start: '20250101',
        due: '20251231',
        status: 'expired' as const, //기간만료
      },
    ],
  },
];

export default function CancelRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const { showAlert } = useAlert();

  // 화면 상태 (멀티구분용)
  const searchParams = useSearchParams();
  const isMulti = searchParams.has('multi');

  const [selected, setSelected] = useState<string>(''); // 기본 수단
  // mock 데이터 가져오기
  const methodsData = mockMethodsData;

  // 라디오 선택 변경 핸들러
  const handleSelect = (id: string) => {
    setSelected(id);
    console.log('[선택한 환불수단 id]:', id);
  };

  // mock 데이터 가져오기
  const { topInfo, returner } = mockCommonOrder;
  // 단독 상품 샘플데이터
  const cancelProdData = productDataItems;

  return (
    <Container showBack title="취소 요청">
      <Contents className={styles.layout}>
        {/* 상단 주문정보 */}
        <OrderTopInfo info={topInfo} onCopy={(text) => console.log(text)} sideSlot="e쿠폰" />
        <Section title="주문상품" variant="normal" level="1" flush borderTop>
          <ClaimProdList
            type="list"
            title="취소 요청할 쿠폰을 선택해 주세요"
            data={cancelProdData}
          />
        </Section>
        {/* 쿠폰 받으시는 분 */}
        <CouponReceiver
          mode="select"
          data={isMulti ? mockCouponReceiver : [mockCouponReceiver[0]]}
          hideCollapse
        />
        {/* 환불수단 선택 */}
        <Section title="환불수단 선택" variant="normal" level="1" flush borderTop>
          <ul className={styles.methods}>
            {methodsData.map((method) => (
              <li key={method.id} className={styles.item}>
                <Radio
                  name="method"
                  value={method.id}
                  checked={selected === method.id}
                  onChange={() => handleSelect(method.id)}
                  label={
                    <div className={styles.rdoLabel}>
                      {method.label}
                      <Text as="span" color="gray3" weight="regular">
                        {method.subLabel}
                      </Text>
                    </div>
                  }
                />
              </li>
            ))}
          </ul>
          <TextList
            variant="info"
            data={[
              '유효기간이 초과된 쿠폰을 취소하는 경우, 아래와 같이 금액과 기간에 따라 환불금액에서 일부 차감됩니다.',
              '1년 미만 : 결제수단으로 100% 환불',
              {
                text: '1년 초과 - 현금으로 환불 선택 :',
                children: ['결제금액이 5만원 이하 10% 차감', '결제금액이 5만원 초과 5% 차감'],
              },
              '1년 초과 - H.Point로 환불 선택 : 100% 환불',
            ]}
            className={styles.info}
          />
        </Section>
        {/* 환불 계좌 안내 */}
        <RefundAccountInfo
          data={returner}
          noticeText="결제하신 수단으로 환불이 불가하여, 등록하신 계좌로 환불됩니다."
        />
        {/* 위약금 안내 */}
        <Section title="위약금 안내" variant="normal" level="1" flush borderTop>
          <TextList
            data={[
              '일부 e쿠폰의 경우 취소로 인해 위약금이 발생할 수 있습니다.',
              '상담원 연락 후 안내에 따라 위약금을 입금해 주세요.',
              '원활한 취소와 환불을 위해 모르시는 번호로 연락을 받게 될 경우 끊거나, 차단하지 말고 받아주세요.',
            ]}
            variant="info"
          />
        </Section>
        {/* 예상 환불 정보 */}
        <RefundInfo
          variant="normal"
          title="예상 환불 정보"
          totalTitle="총 예상 환불금액"
          data={{
            refundItems: [
              {
                id: 'refund-product',
                label: '환불 상품금액',
                price: 123456700000,
              },
            ],
            refundTotals: [
              { id: 'credit-card', label: '신용카드', price: 123450 },
              { id: 'hpoint', label: 'H.Point', price: 123450 },
            ],
            totalAmount: 123450,
          }}
        />
        {/* 버튼 영역 */}
        <ButtonArea>
          <Button size="large">이전으로</Button>
          <Button
            variant="primary"
            size="large"
            onClick={() => {
              showAlert({
                message: '이 내용으로 주문을 취소요청 하시곘어요?',
                onConfirm: () => setIsOpen(true),
                showCancel: true,
                labelProps: { confirm: '확인', cancel: '취소' },
              });
            }}
          >
            취소 요청
          </Button>
        </ButtonArea>
      </Contents>
      {/* 취소 요청 완료 (L) */}
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} showClose maximize>
        <Empty
          title="취소 요청이 완료되었습니다."
          desc={`e쿠폰의 환불은 상담사의 확인 후 진행될 예정입니다\n환불은 결제 수단에 따라 최대 7일 정도 기간이 소요될 수 있습니다\n조금만 기다려주세요`}
          buttons={<Button variant="primary">주문 목록으로</Button>}
        />
      </Dialog>
    </Container>
  );
}
