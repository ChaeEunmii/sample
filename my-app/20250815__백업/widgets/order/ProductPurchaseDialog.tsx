import clsx from 'clsx';
import { Dialog, InfoItem, InfoList, Text, TitleBar } from '@shared/ui';

interface ProductPurchaseDialogProps {
  data: {
    /** 모달 제목 */
    title: string;
    /** 구독 상품명 */
    name: string;
    /** 한글표시사항 */
    image?: {
      src: string;
      alt: string;
    };
  };
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const ProductPurchaseDialog = ({
  data,
  isOpen = false,
  onClose,
  className,
}: ProductPurchaseDialogProps) => {
  // 구매정보 안내
  const purchaseInfo = [
    {
      title: '식품 등의 표시 · 광고에 관한 법률에 따른 표시 사항',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '제품명',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '식품의 유형',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '생산자 및 소재지(수입품의 경우 생산자, 수입자 및 제조국)',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '제조년월일, 소비기한 또는 품질유지기한',
      content:
        '구독 상품으로, 신청 고객별 구독 기간/배송주기/배송회차별 상품구성이 상이하며,구독 회차별 주문량에 따라 브랜드(생산자)가 제조/수급하여 포장 및 배송되므로, 주문 시점에는 고객님께 배송될 상품의 정확한 소비기한(유통기한)/생산년도/생산년월일/포장일 파악이 어렵습니다. 상품 제조/수급 및 재고 현황에 따라 순차적으로 배송되며, 기타 관련 문의는 브랜드 대표번호로 연락 바랍니다.',
    },
    {
      title: '포장단위별 내용물의 용량(중량), 수량',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '유전자변형식품에 해당하는 경우의 표시',
      content: '해당없음',
    },
    {
      title: '유전자변형식품에 해당하는 경우의 표시',
      content: '해당없음',
    },
    {
      title: '소비자상담 관련 전화번호',
      content: (
        <>
          <a href="tel:1800-2233">1800-2233</a> (연중무휴 오전 9시 ~ 오후 6시까지 운영)
        </>
      ),
    },
    {
      title: '소비자 안전을 위한 주의사항',
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: "수입식품에 해당하는 경우 '수입식품안전관리특별법에 따른 수입신고를 필함'의 문구",
      content: '상품 상세 혹은 이미지 참조',
    },
    {
      title: '한글표시사항',
      content: <img src={data.image?.src} alt={data.image?.alt} className="ncp-mt-s" />,
    },
  ];
  return (
    <Dialog
      title={data.title}
      isOpen={isOpen}
      onClose={onClose}
      maximize
      showClose
      className={clsx(className)}
    >
      <TitleBar level="2" title={data.name} className="" />
      <InfoList variant="default" gap="row24" indent>
        {purchaseInfo.map((item, index) => (
          <InfoItem
            key={index}
            title={item.title}
            content={
              <Text color="gray2" size="4" className="ncp-mt-xs">
                {item.content}
              </Text>
            }
          />
        ))}
      </InfoList>
    </Dialog>
  );
};

ProductPurchaseDialog.displayName = 'ProductPurchaseDialog';
