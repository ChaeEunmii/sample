'use client';

import { Drawer, ButtonArea, Button, Collapse, Heading, TextList } from '@shared/ui';
import { VoucherCard } from '@views/mypage/myvoucher/components/VoucherCard';
import { VoucherDetailInfo } from '@views/mypage/myvoucher/components/VoucherDetailInfo';
import { mockVoucherCard } from '@mocks/mypage';
import styles from './UseVoucherDrawer.module.scss';

interface UseVoucherDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 화면보기용 타입*/
  type?: 'available' | 'used' | 'expired';
}

export default function UseVoucherDrawer({
  isOpen,
  onClose,
  type = 'available',
}: UseVoucherDrawerProps) {
  //바우처 상세 화면보기용 (추후개발시 삭제)
  const isAvailable = type === 'available'; //사용가능
  const isUsed = type === 'used'; //사용완료
  const isExpired = type === 'expired'; //기간만료

  const sampleCardData = isAvailable
    ? { ...mockVoucherCard }
    : isUsed
      ? { ...mockVoucherCard, status: 'used' as const }
      : isExpired
        ? { ...mockVoucherCard, status: 'expired' as const }
        : { ...mockVoucherCard };

  return (
    <Drawer
      title="바우처 사용하기"
      isOpen={isOpen}
      onClose={onClose}
      className={styles.termsAgreeDrawer}
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
            {...sampleCardData}
            bottomSlot={
              <>
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
                <ButtonArea margin="1">
                  <Button variant="tertiary">예약취소</Button>
                  <Button variant="tertiary">예약변경</Button>
                </ButtonArea>
              </>
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
