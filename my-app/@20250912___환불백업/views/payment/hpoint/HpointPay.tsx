'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import { MethodType } from '@/views/mypage/payment/hpoint/history/HistoryItem';
import { PaymentMethod } from '@/views/mypage/payment/hpoint/method/PaymentMethod';
import { UsageHistory } from '@/views/mypage/payment/hpoint/history/UsageHistory';
import { MethodSelectDrawer } from '@/widgets/payment';
import ReceiptViewDialog from '@/views/mypage/payment/hpoint/components/ReceiptViewDialog';
import styles from './HpointPay.module.scss';
import { mockHpayMethodList, mockHpayHistoryList } from '@mocks/mypage';

// 결제수단 하단 버튼 링크 리스트
const links = [
  {
    label: '결제 비밀번호 변경',
    onClick: () => console.log('결제 비밀번호 변경 클릭'),
  },
  {
    label: '원터치 결제 설정',
    onClick: () => console.log('원터치 결제 설정 클릭'),
  },
  {
    label: 'H.Point Pay 이용약관 및 정책',
    onClick: () => console.log('H.Point Pay 이용약관 및 정책 클릭'),
  },
];

export default function HpointPay() {
  const searchParams = useSearchParams();
  // 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isTab2 = searchParams.has('tab2');

  const [isMethodSelectDrawerOpen, setIsMethodSelectDrawerOpen] = useState(false); // 등록할 결제수단 선택(D)
  const [isReceiptViewDialog, setIsReceiptViewDialog] = useState(false); // 영수증 (L)
  const [isMethodType, setIsMethodType] = useState<MethodType>(); // 현재 클릭한 아이템의 결제수단 타입 상태

  // 탭
  const [activeIndex, setActiveIndex] = useState(!isTab2 ? 0 : 1);
  const tabItems = [{ label: '결제수단' }, { label: '사용내역' }];

  // mock 데이터 가져오기
  const HpayHistoryData = isNoData ? [] : mockHpayHistoryList;
  const HpayMethodData = mockHpayMethodList;

  // 결제수단 목록 데이터 상태
  const [payments, setPayments] = useState(HpayMethodData);

  // 기본카드(isDefault) id 상태 초기값
  const [viewDefaultId, setViewDefaultId] = useState<string | undefined>(
    mockHpayMethodList.find((p) => p.isDefault)?.id
  );

  return (
    <Container title="H.Point Pay" showBack>
      <Contents className={styles.layout}>
        <div className={styles.sticky}>
          <Tabs activeTab={activeIndex} onTabChange={(i) => setActiveIndex(i)} data={tabItems} />
        </div>
        {/* 결제수단 */}
        {activeIndex === 0 && (
          <PaymentMethod
            data={payments}
            viewDefaultId={viewDefaultId}
            onChangeViewDefault={(id) => {
              // 기본카드 변경 시: 해당 id를 기본으로 지정하고 목록 상태 업데이트
              setViewDefaultId(id);
              setPayments((prev) => prev.map((p) => ({ ...p, isDefault: p.id === id })));
            }}
            onDeleteViewItem={(id) => {
              // 카드 삭제 시: 목록에서 제거하고, 삭제된 카드가 기본이면 기본 해제
              setPayments((prev) => prev.filter((p) => p.id !== id));
              if (viewDefaultId === id) setViewDefaultId(undefined);
            }}
            onClickAdd={() => setIsMethodSelectDrawerOpen(true)} // '새로등록하기' 버튼 클릭시
            links={links} // 하단 링크 주입
            className="ncp-mt-m"
          />
        )}
        {/* 사용내역 */}
        {activeIndex === 1 && (
          <UsageHistory
            data={HpayHistoryData}
            onReceiptClick={(item) => {
              console.log(item.id, ': 영수증 호출 버튼 클릭');
              setIsReceiptViewDialog(true);
              setIsMethodType(item.methodType);
            }}
          />
        )}

        {/* 등록할 결제수단 선택 (L) */}
        <MethodSelectDrawer
          isOpen={isMethodSelectDrawerOpen}
          onClose={() => setIsMethodSelectDrawerOpen(false)}
          hideInstantPay
          // hideBankAccount
        />
        {/* 영수증 (L)*/}
        <ReceiptViewDialog
          isOpen={isReceiptViewDialog}
          onClose={() => setIsReceiptViewDialog(false)}
          type={isMethodType}
        />
      </Contents>
    </Container>
  );
}
