import { Drawer, Button } from '@shared/ui';
import { OrderItem } from '@widgets/product';
import { OrderInfoBox } from '@views/mypage/components/OrderInfoBox';
import { OrderProductWithMeta } from '@/views/mypage/order/detail/components';
import { OrderDeliveryData } from '@/views/mypage/components/DeliveryGroup';
import { mockOrderDetailItemsCase } from '@mocks/myorder';
import styles from './ExchangeItem.module.scss';

interface ExchangeItemDrawerProps {
  /** 열림 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 상태: 조회 | 픽업완료 | 사용 */
  status?: 'view' | 'picked' | 'use';
}

export default function ExchangeItemDrawer({
  isOpen,
  onClose,
  status = 'view',
}: ExchangeItemDrawerProps) {
  // 상태저장
  const isStatusView = status === 'view';
  const isStatusPicked = status === 'picked';
  const isStatusUse = status === 'use';

  // footer 구성
  const renderFooter = () => {
    if (isStatusPicked) return undefined;
    return (
      <>
        {isStatusView && (
          <Button variant="primary" size="large">
            교환권 재발송
          </Button>
        )}
        {isStatusUse && (
          <Button variant="primary" size="large">
            교환권 사용
          </Button>
        )}
      </>
    );
  };

  // 주문상품
  const orderData = mockOrderDetailItemsCase as OrderDeliveryData[];
  // 스토어픽 오더 샘플 가져옴 (mockOrderDetailList)
  const storepickOrder =
    orderData.find((d) => d.id === 'order-detail-storepickOrder') ?? orderData[0];

  // 스토어픽 임시데이터
  const mockPickup = {
    info: {
      name: '김*대',
      phone: '010-****-5678',
      pickupDate: '2025년 12월 25일 토요일',
      isConfirmed: true, //확정여부
      message: '함께 해줘서 늘 감사해요. 그동안 고마웠고, 앞으로도 주욱 함께 해요. 😊 -HD-',
    },
    orderData: storepickOrder,
  };

  // 상품 임시데이터
  const productData = {
    id: 'product-1',
    image: {
      src: '/images/dummy/@sample_product_01.png',
      alt: '네이비 캐시미어 니트 스웨터 착용 이미지 2',
    },
    brand: '쿼드쎄라',
    title: '포헤르츠 3D 부스터 마스크 젤 80g',
    orderOptions: ['100ml', 'FREE'],
    ...(isStatusPicked && { pickupDone: true }),
  };

  return (
    <Drawer
      title="교환권"
      isOpen={isOpen}
      onClose={onClose}
      footer={renderFooter()}
      className={styles.drawer}
    >
      <div className={styles.info}>
        <OrderInfoBox title="교환권 번호" content="825874" disabled={isStatusPicked} />
        {/* 장바구니/주문서에서 사용하는 모듈 */}
        <OrderItem
          items={[
            {
              id: productData.id,
              image: productData.image,
              brand: productData.brand,
              title: productData.title,
              orderOptions: productData.orderOptions,
              pickupDone: productData.pickupDone,
            },
          ]}
          isVerticalCenter
        />
      </div>
      <div className={styles.cont}>
        <OrderProductWithMeta
          variant="store"
          mode="contentOnly" //컨텐츠 만보이는 mode로 실행
          data={mockPickup.info}
          onSelectPickupDate={(value) => console.log('선택됨:', value)}
          onClickConfirmPickupDate={() => console.log(`변경 버튼 클릭`)}
        />
      </div>
    </Drawer>
  );
}
