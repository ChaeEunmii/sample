'use client';

import { Drawer, Button, Collapse, Heading, TextList } from '@shared/ui';
import { VoucherCard, VoucherCardProps } from '@/widgets/coupon/VoucherCard';
import {
  VoucherDetailInfo,
  VoucherDetailInfoItem,
} from '@views/mypage/myvoucher/components/VoucherDetailInfo';
import { mockVoucherCard } from '@mocks/mypage';
import styles from './UseVoucherDrawer.module.scss';

// 바우처 하단 어드민등록 정보 구성 샘플데이터
const mockVoucherDetailInfo: VoucherDetailInfoItem[] = [
  { label: '타이틀', value: '어드민에 등록된 구성항목 기준으로 타이틀, 내용이 테이블 내 노출' },
  { label: '타이틀', value: '어드민에 등록된 구성항목 기준으로 타이틀, 내용이 테이블 내 노출' },
  {
    label: '유의사항',
    value: (
      <>
        상품상세에서 입력한 경우에만 노출됩니다.
        <br />
        미입력 시 하이픈(-)
      </>
    ),
  },
];

interface UseVoucherDrawerProps {
  /** Drawer가 열려있는지 여부 */
  isOpen: boolean;
  /** Drawer 닫기 함수 */
  onClose: () => void;
  /** 외부에서 실제 바우처 카드 데이터 전달 시 사용하는 옵션 프로퍼티 */
  voucherData?: VoucherCardProps;
}

export default function UseVoucherDrawer({ isOpen, onClose, voucherData }: UseVoucherDrawerProps) {
  // voucherData가 있으면 데이터로 사용, 없으면 mock 데이터 사용
  const baseData = voucherData ?? mockVoucherCard;

  // '사용 가능' 상태일 때만 하단에 '사용하기' 버튼 표시
  const isAvailable = baseData.status === 'available';

  return (
    <Drawer
      title="바우처 사용하기"
      isOpen={isOpen}
      onClose={onClose}
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
          <VoucherCard
            {...baseData}
            bottomSlot={<VoucherDetailInfo items={mockVoucherDetailInfo} />}
          />
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
