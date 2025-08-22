'use client';

import { useSearchParams } from 'next/navigation';
import { Text, TextButton } from '@/shared/ui';
import { mockAddressItem } from '@/mocks/address';
import styles from './AddressInfoBox.module.scss';
import clsx from 'clsx';

interface AddressInfoBoxProps {
  /** 주소 숨김 여부 */
  hideAddress?: boolean;
  /** 핸드폰 번호 사용 여부 */
  showMail?: boolean;
  /** 변경 버튼 사용 여부 */
  isChangeButton?: boolean;
  /** 변경 버튼 position 해제 */
  disablePosition?: boolean;
  /** 버튼 내용 변경 */
  changeButtonText?: string;
  /** 기본 배송지 여부 */
  isDefaultAddress?: boolean;
  /** 내부 패딩 삭제 여부 */
  removePadding?: boolean;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가적인 컨텐츠 */
  slot?: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const AddressInfoBox = ({
  hideAddress = false,
  showMail = false,
  isChangeButton = false,
  disablePosition = false,
  removePadding = false,
  changeButtonText,
  isDefaultAddress = false,
  onClick,
  slot,
  className,
}: AddressInfoBoxProps) => {
  // 화면상태
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const isStatus1 = status === 'status1'; // 국외
  const isStatus2 = status === 'status2'; // 국내

  // 임시 데이터
  const address = mockAddressItem;

  return (
    <div className={clsx(styles.root, removePadding && styles.removePadding, className)}>
      {address ? (
        <>
          <div className={styles.info}>
            <Text as="span" size="5" weight="semibold">
              {address.name}
            </Text>
            {isDefaultAddress && (
              <Text as="span" size="3" weight="semibold" color="point">
                기본 배송지
              </Text>
            )}
            <Text as="span" size="5" className={clsx(isDefaultAddress && styles.phone)}>
              {address.phone}
            </Text>
          </div>
          {!hideAddress && (
            <>
              <Text size="5" color="gray1">
                {address.defaultAddress}
              </Text>
              <Text size="5" color="gray1" className={styles.detailedAddress}>
                {address.detailedAddress}
              </Text>
            </>
          )}
          {showMail && (
            <Text size="5" color="gray1">
              {address.mail}
            </Text>
          )}
        </>
      ) : (
        <Text size="5" weight="semibold">
          배송지를 입력해주세요
        </Text>
      )}

      {slot && slot}

      {isChangeButton && (
        <TextButton
          color="gray3"
          onClick={onClick}
          size="1"
          variant="underline"
          className={clsx(styles.changeButton, disablePosition && styles.disablePosition)}
        >
          {changeButtonText ? changeButtonText : isStatus1 ? 'Modify' : '변경'}
        </TextButton>
      )}
    </div>
  );
};
AddressInfoBox.displayName = 'AddressInfoBox';
