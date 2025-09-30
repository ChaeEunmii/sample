import clsx from 'clsx';
import { Dialog, Empty, Stack } from '@shared/ui';
import { RoundProduct, RoundProductItem } from './RoundProductItem';
import { SubscriptionNoticeList } from './SubscriptionNoticeList';

interface ProductPurchaseDialogProps {
  data?: RoundProduct[];
  /** 오픈 확인 여부 */
  isOpen: boolean;
  /** 닫기 함수 */
  onClose: () => void;
  /** 추가적인 CSS 클래스명 */
  className?: string;
}

export const SubscriptionRoundProductDialog = ({
  data,
  isOpen = false,
  onClose,
  className,
}: ProductPurchaseDialogProps) => {
  return (
    <Dialog
      title="회차별 구성상품 보기"
      isOpen={isOpen}
      onClose={onClose}
      maximize
      showClose
      className={clsx(className)}
    >
      {Array.isArray(data) && data.length > 0 ? (
        <>
          {data.map((item, index) => (
            <RoundProductItem key={index} data={item} />
          ))}
          <SubscriptionNoticeList className="ncp-mt-s" />
        </>
      ) : (
        <Empty
          title="회차별 상품 정보가 없습니다"
          desc={
            <>
              상품 상세 설명을 확인해 주시고, <br />
              판매자에게 문의 부탁드려요.
            </>
          }
        />
      )}
    </Dialog>
  );
};

SubscriptionRoundProductDialog.displayName = 'SubscriptionRoundProductDialog';
