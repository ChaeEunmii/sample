'use client';

import { Drawer, Button, Collapse, Heading, TextList } from '@shared/ui';
import {
  VoucherCard,
  VoucherCardProps,
  VoucherStatus,
} from '@views/mypage/myvoucher/components/VoucherCard';
import {
  VoucherDetailInfo,
  VoucherDetailInfoItem,
} from '@views/mypage/myvoucher/components/VoucherDetailInfo';
import { mockVoucherCard } from '@mocks/mypage';
import styles from './UseVoucherDrawer.module.scss';

// 케이스 1: 사용 가능 상태
const case1Items: VoucherDetailInfoItem[] = [
  { label: '발행일', value: '2025.07.01' },
  { label: '유효기간', value: '2025.12.31' },
];

// 케이스 2: 사용 완료 상태
const case2Items: VoucherDetailInfoItem[] = [
  { label: '사용일', value: '2025.07.10' },
  { label: '사용처', value: '서울 매장' },
];

// 케이스 3: 기간 만료 상태
const case3Items: VoucherDetailInfoItem[] = [
  { label: '만료일', value: '2025.06.30' },
  { label: '환불 불가', value: '예' },
];

interface UseVoucherDrawerProps {
  /** Drawer가 열려있는지 여부 */
  isOpen: boolean;
  /** Drawer 닫기 함수 */
  onClose: () => void;
  /** 외부에서 실제 바우처 카드 데이터 전달 시 사용하는 옵션 프로퍼티 */
  voucherData?: VoucherCardProps;
}

export default function UseVoucherDrawer({
  isOpen,
  onClose,
  voucherData, // 외부에서 전달되는 바우처 카드 데이터 (있으면 우선 사용)
}: UseVoucherDrawerProps) {
  // voucherData가 있으면 그걸 기본 데이터로 사용, 없으면 mock 데이터 사용
  const baseData = voucherData ?? mockVoucherCard;

  // '사용 가능' 상태일 때만 하단에 '사용하기' 버튼 표시
  const isAvailable = baseData.status === 'available';

  // 예시로 상태에 따라 아이템을 바꾸는 로직
  const voucherStatus: VoucherStatus = 'available'; // 실제로는 props나 상태 등에서 받음

  let detailItems: VoucherDetailInfoItem[];
  switch (voucherStatus) {
    case 'available':
      detailItems = case1Items;
      break;
    case 'used':
      detailItems = case2Items;
      break;
    case 'expired':
      detailItems = case3Items;
      break;
    default:
      detailItems = [];
  }

  return (
    <Drawer
      title="바우처 사용하기" // Drawer 제목
      isOpen={isOpen} // 열림 상태 제어
      onClose={onClose} // 닫기 이벤트 핸들러
      className={styles.termsAgreeDrawer}
      // 하단 영역: 사용 가능일 때만 '사용하기' 버튼 노출
      footer={
        isAvailable ? (
          <Button variant="primary" size="large" onClick={onClose}>
            사용하기
          </Button>
        ) : null
      }
    >
      <div className={styles.root}>
        <div className={styles.voucher}>
          {/* VoucherCard 컴포넌트 렌더링
              - sampleCardData를 props로 전달하여 카드 정보 표시
              - bottomSlot에 상세정보 및 액션 버튼 영역 전달 */}
          <VoucherCard {...baseData} bottomSlot={<VoucherDetailInfo items={detailItems} />} />
        </div>

        {/* 상세정보 영역 - Collapse 컴포넌트로 접기/펼치기 가능 */}
        <Collapse variant="section">
          <Collapse.Control>
            <Heading size="5">상세정보</Heading>
          </Collapse.Control>
          <Collapse.Content>
            {/* 상세정보 텍스트 리스트 */}
            <TextList
              data={[
                '상품 상세와 동일한 콘텐츠 노출 됩니다.',
                '상품 상세와 동일한 콘텐츠 노출 됩니다.',
              ]}
              variant="info"
            />
          </Collapse.Content>
        </Collapse>
      </div>
    </Drawer>
  );
}
