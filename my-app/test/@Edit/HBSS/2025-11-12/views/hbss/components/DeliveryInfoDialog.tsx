import { Dialog, Button, TitleBar, Text, ButtonArea } from '@shared/ui';
import { TitleWithInfoStack } from '@views/hbss/components/TitleWithInfoStack';
import { TitleWithInfo } from '@views/hbss/components/TitleWithInfo';
import { TitleWithInfoProd } from '@/views/hbss/components/TitleWithInfoProd';
import { TitleWithInfoAddr } from '@/views/hbss/components/TitleWithInfoAddr';
import { InformationBox } from '@views/hbss/components/InformationBox';
import styles from './DeliveryInfo.module.scss';

interface DeliveryInfoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeliveryInfoDialog({ isOpen, onClose }: DeliveryInfoDialogProps) {
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
        <TitleWithInfoProd
          data={{
            brand: '브랜드명',
            name: '상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명',
            quantity: 2,
          }}
        />
        <TitleWithInfoProd
          data={{
            name: '더 건강한 브런치 슬라이스 닭가슴살 [0000]',
            quantity: 2,
            price: 123456,
          }}
        />
        <TitleWithInfoAddr type="free" onClick={() => console.log('배송지 입력')} />
        <TitleWithInfoAddr
          type="filled"
          data={{
            name: '김현대',
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          onClick={() => console.log('배송지 수정')}
        />
        <TitleWithInfoAddr
          type="filled"
          data={{
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          onClick={() => console.log('배송지 수정')}
        />
        <TitleWithInfoAddr
          type="filled"
          data={{
            name: '김현대',
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
            note: '부재 시 경비실에 맡겨 주세요.',
          }}
          onClick={() => console.log('배송지 수정')}
        />
        <TitleWithInfoAddr
          type="filled"
          data={{
            name: '김현대',
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          showEdit
        />
        <TitleWithInfoAddr
          type="filled"
          data={{
            defaultAddress: '서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          showEdit
        />
        <TitleWithInfoAddr type="free" />
        <TitleWithInfoAddr
          type="free"
          data={{
            name: '김현대',
          }}
        />
        <TitleWithInfoAddr
          type="filled"
          data={{
            name: '김현대',
            defaultAddress: '(01345) 서울특별시 강남구 테헤란로 32-1',
            detailAddress: '강남 푸르지오 헤리티지 리버뷰 아파트 1004동 1004호',
          }}
          showEdit
        />
      </TitleWithInfoStack>
      <br />
      <br />
      <br />
      <br />

      <TitleBar type="docs" title="받으시는 분" />
      <TitleWithInfo title="이름" content="김현대" />
      <TitleWithInfo title="연락처" content="010-****-5678" />
      <TitleWithInfo title="전화번호" content="-" />
      <TitleWithInfo
        title="상품명"
        content={
          <div className={styles.product}>
            <Text size="5" className={styles.prdName}>
              [브랜드명] 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명
              상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명 상품명
            </Text>
            <Text as="span" size="4" color="gray2">
              2개
            </Text>
          </div>
        }
      />
      <TitleWithInfo title="금액" content="1,500,000원" />
      <TitleWithInfo title="배송 예정일" content="선물 받으시는 고객님과 확인 예정입니다." />
      <TitleBar type="docs" title="배송 현황" />
      <TitleWithInfo
        type="free"
        title="배송지"
        content={
          <ButtonArea margin="0">
            <Button variant="tertiary" suffixIcon="arrowRight">
              배송지를 입력해 주세요
            </Button>
          </ButtonArea>
        }
      />
      <TitleWithInfo title="상품명" content="상품명" />
      <TitleWithInfo title="배송 예정일" content="선물 받으시는 고객님과 확인 예정입니다." />
      <TitleWithInfo title="배송 요청 사항" content="부재 시 현관문 앞에 놓아주세요." />
      {/* <TitleWithInfo title="배송지">
        <ButtonArea margin="0">
          <Button variant="tertiary" suffixIcon="arrowRight">
            배송지를 입력해 주세요
          </Button>
        </ButtonArea>
      </TitleWithInfo> */}
      {/* 안내드립니다 */}
      <InformationBox
        content="명절기간 많은 배송 물량으로 예정일보다 늦게 배송될 수 있다는 점 양해 부탁드립니다."
        margin="3"
      />
      <InformationBox
        content={[
          '새벽 배송으로 받기를 선택하셨다면, 정확한 공동현관 비밀번호를 입력해 주세요.',
          '입력하신 방법으로 출입이 불가할 경우, 부득이하게 1층 공동현관 앞에 배송될 수 있습니다.',
        ]}
      />
    </Dialog>
  );
}
