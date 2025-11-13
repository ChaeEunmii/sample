import { Dialog, Button, TitleBar } from '@shared/ui';
import {
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
  TitleWithInfoAddr,
  InformationBox,
} from '@views/hbss/components';

/**
 * 배송정보 자세히 보기 (L) - 받으시는 분
 */

interface DeliveryInfoReceiverDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryInfoReceiverDialog({ isOpen, onClose }: DeliveryInfoReceiverDialogProps) {
  return (
    <Dialog
      title="배송정보 자세히 보기"
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        <Button variant="primary" size="large" onClick={onClose}>
          닫기
        </Button>
      }
    >
      <TitleBar type="docs" title="보내시는 분" className="ncp-mt-l" />
      <TitleWithInfoStack>
        <TitleWithInfo title="보내시는 분 이름" content="김현대" />
        <TitleWithInfo title="회사명" content="현대백화점" />
      </TitleWithInfoStack>
      <TitleBar type="docs" title="배송 현황" />
      <TitleWithInfoStack>
        <TitleWithInfoAddr type="free" onClick={() => console.log('배송지 입력')} />
        <TitleWithInfoAddr
          type="filled"
          data={{
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          onClick={() => console.log('배송지 수정')}
        />
        <TitleWithInfoProd
          data={{
            brand: '브랜드명',
            name: '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
            quantity: 2,
          }}
          nameLine={2}
        />
        <TitleWithInfo title="배송 예정일" content="선물 받으시는 고객님과 확인 예정입니다." />
        <TitleWithInfo title="배송 예정일" content="2025년 13월 25일 (목)" />
        <TitleWithInfo title="배송 요청 사항" content="부재 시 현관문 앞에 놓아주세요." />
      </TitleWithInfoStack>
      {/* 안내드립니다 */}
      <InformationBox
        content="명절기간 많은 배송 물량으로 예정일보다 늦게 배송될 수 있다는 점 양해 부탁드립니다."
        margin="3"
      />
    </Dialog>
  );
}
