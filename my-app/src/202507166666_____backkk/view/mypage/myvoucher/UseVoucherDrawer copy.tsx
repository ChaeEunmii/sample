'use client';

import { Drawer, Button, Collapse, Heading, TextList } from '@shared/ui';
import { VoucherCard } from '@/widgets/coupon/VoucherCard';
import { VoucherDetailInfo } from '@views/mypage/myvoucher/components/VoucherDetailInfo';
import { mockVoucherCard } from '@mocks/mypage';
import styles from './UseVoucherDrawer.module.scss';

//컬렉션선택 상품
type collectionSelect = {
  /** 고유 ID */
  id: string | number;
  /** 컬렉션명 */
  label: string;
  /** 이미지 정보 */
  image: {
    src: string;
    alt: string;
  };
  /** 상품 카운트 */
  product: number;
  /** 브랜드 카운트 */
  brand: number;
  /** 공개/비공개여부 */
  isLock?: boolean;
};
interface UseVoucherDrawerProps {
  /** 컬렉션 목록 데이터 */
  data?: collectionSelect[];
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 선택 상태 및 변경 콜백 */
  selection?: {
    activeIds: (string | number)[];
    onChange: (selectedIds: (string | number)[]) => void;
  };
}

export default function UseVoucherDrawer({ isOpen, onClose }: UseVoucherDrawerProps) {
  //바우처 카드데이터 테스트
  const testCardData = {
    ...mockVoucherCard,
    status: 'used' as const,
  };

  return (
    <Drawer
      title="바우처 사용하기"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
      footer={
        <>
          <Button variant="primary" size="large" onClick={onClose}>
            사용하기
          </Button>
        </>
      }
    >
      <div className={styles.root}>
        <div className={styles.voucher}>
          <VoucherCard
            {...testCardData}
            bottomSlot={
              <VoucherDetailInfo
                items={[
                  { label: '픽업장소', value: '더현대서울 비오템' },
                  { label: '주문번호', value: '2505040100737373' },
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
                ]}
              />
            }
          />
        </div>
        <Collapse variant="section">
          <Collapse.Control>
            <Heading size="5">상세정보</Heading>
          </Collapse.Control>
          <Collapse.Content>
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
