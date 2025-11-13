import { Dialog, Button, TitleBar } from '@shared/ui';
import {
  TitleWithInfoStack,
  TitleWithInfo,
  TitleWithInfoProd,
  InformationBox,
} from '@views/hbss/components';

/**
 * 배송정보 자세히 보기 (L) - 보내시는 분
 */

interface DeliveryInfoSenderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryInfoSenderDialog({ isOpen, onClose }: DeliveryInfoSenderDialogProps) {
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
        <TitleWithInfo title="이름" content="김현대" />
        <TitleWithInfo title="회사명" content="현대백화점" />
        <TitleWithInfo title="연락처" content="010-1234-5678" />
        <TitleWithInfo title="접수일자" content="2025년 12월 25일" />
      </TitleWithInfoStack>
      <TitleBar type="docs" title="받으시는 분" />
      <TitleWithInfoStack>
        <TitleWithInfo title="이름" content="김현대" />
        <TitleWithInfo title="연락처" content="010-****-5678" />
        <TitleWithInfo title="전화번호" content="-" />
        <TitleWithInfoProd
          data={{
            brand: '브랜드명',
            name: '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
            quantity: 2,
          }}
          nameLine={2}
        />
        <TitleWithInfo title="금액" content="1,500,000원" />
        <TitleWithInfo title="배송 예정일" content="선물 받으시는 고객님과 확인 예정입니다." />
        <TitleWithInfo title="배송 예정일" content="2025년 13월 25일 (목)" />
      </TitleWithInfoStack>
      {/* 안내드립니다 */}
      <InformationBox
        content="명절기간 많은 배송 물량으로 예정일보다 늦게 배송될 수 있다는 점 양해 부탁드립니다."
        margin="3"
      />
    </Dialog>
  );
}
