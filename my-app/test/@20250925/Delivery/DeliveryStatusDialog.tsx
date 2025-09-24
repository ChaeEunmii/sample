import { Dialog, Text, Empty, Button } from '@shared/ui';
import { DeliveryParcel, DeliveryParcelProps } from './DeliveryParcel';
import styles from './DeliveryStatus.module.scss';

// 배송 유형 정의 = parcel: 택배 배송 | early: 새벽/당일 배송 | quick: 퀵 배송 | ems: EMS 배송
type DeliveryCase = 'parcel' | 'early' | 'quick' | 'ems';

interface DeliveryStatusDialogProps {
  isOpen: boolean;
  onClose: () => void;
  /** 렌더링 할 배송 유형 지정 (기본 parcel) */
  type?: DeliveryCase;
  /** 조회 불가 여부 (기본 false) */
  isEmpty?: boolean;
  /** 택배배송 데이터 (type === 'parcel'일 때 사용) */
  parcelData?: DeliveryParcelProps;
}

export default function DeliveryStatusDialog({
  isOpen,
  onClose,
  type = 'parcel',
  isEmpty = false,
  parcelData,
}: DeliveryStatusDialogProps) {
  // 조회 렌더링
  const renderApiArea = () => {
    if (type === 'parcel') {
      return (
        <div className={styles.parcel}>{parcelData && <DeliveryParcel {...parcelData} />}</div>
      );
    }

    if (type === 'early') {
      return (
        <div className={styles.early}>
          <div className={styles.msg}>
            <span className={styles.date}>12월 25일 (목) 16:51</span>
            <strong className={styles.infoTxt}>새벽/당일배송이 완료 되었습니다.</strong>
          </div>
          <div className={styles.view}>
            <img src="/images/dummy/@sample_delivery.png" alt="" />
          </div>
        </div>
      );
    }
    return (
      <div className={styles.api}>
        <p className="ncp-text-center">API 호출영역</p>
      </div>
    );
  };
  // 조회불가 상태 렌더링
  const renderEmptyByType = () => {
    // EMS 배송의경우
    if (type === 'ems') {
      return (
        <Empty
          title={`지금은 배송 정보를 불러올 수 없어요.\n잠시만 기다려주세요.`}
          desc={
            <Text as="span" color="gray1" size="5" weight="medium">
              We are currently unable to retrieve the delivery
              <br />
              information. Please wait a moment.
            </Text>
          }
          buttons={<Button variant="primary">1:1 문의</Button>}
        />
      );
    }
    return (
      <Empty
        title={`지금은 배송 정보를 불러올 수 없어요.\n잠시만 기다려주세요.`}
        buttons={<Button variant="primary">1:1 문의</Button>}
      />
    );
  };

  // 팝업 타이틀 설정
  const dialogTitle = type === 'early' ? '수령사진 확인' : '배송조회';

  return (
    <Dialog
      title={dialogTitle}
      isOpen={isOpen}
      onClose={onClose}
      showClose
      maximize
      footer={
        type === 'early' && !isEmpty ? (
          <Button variant="primary" size="large" onClick={onClose}>
            닫기
          </Button>
        ) : undefined
      }
    >
      <div className={styles.wrap}>{isEmpty ? renderEmptyByType() : renderApiArea()}</div>
    </Dialog>
  );
}
