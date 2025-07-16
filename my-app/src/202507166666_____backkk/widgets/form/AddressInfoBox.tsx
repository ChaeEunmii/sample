'use client';

import { useSearchParams } from 'next/navigation';
import { Text, TextButton } from '@/shared/ui';
import { mockAddressItem } from '@/mocks/address';
import styles from './AddressInfoBox.module.scss';
import clsx from 'clsx';

interface AddressInfoBoxProps {
  /** 주소 숨김 여부 */
  hideAddress?: boolean;
  /** 주소 영역 텍스트 컬러 변경 */
  changeColor?: boolean;
  /** 변경 버튼 사용 여부 */
  isChangeButton?: boolean;
  /** 버튼 내용 변경 */
  changeButtonText?: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
  /** 추가적인 컨텐츠 */
  slot?: React.ReactNode;
  /** 추가적인 클래스 이름 */
  className?: string;
}

export const AddressInfoBox = ({
  hideAddress = false,
  changeColor = false,
  isChangeButton = false,
  changeButtonText,
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
    <div className={clsx(styles.root, className)}>
      {address ? (
        <>
          <div className={styles.info}>
            <Text as="span" size="5" weight="semibold">
              {address.name}
            </Text>
            <Text as="span" size="5">
              {address.phone}
            </Text>
          </div>
          {!hideAddress && (
            <>
              <Text size="5" color={changeColor ? 'gray2' : 'gray1'}>
                {address.defaultAddress}
              </Text>
              <Text
                size="5"
                color={changeColor ? 'gray2' : 'gray1'}
                className={styles.detailedAddress}
              >
                {address.detailedAddress}
              </Text>
            </>
          )}
        </>
      ) : (
        <Text size="5" weight="semibold">
          배송지를 입력해주세요
        </Text>
      )}

      {slot && slot}

      {(isChangeButton || changeButtonText) && (
        <TextButton
          color="gray3"
          onClick={onClick}
          size="1"
          variant="underline"
          className={clsx(styles.changeButton)}
        >
          {changeButtonText ? changeButtonText : isStatus1 ? 'Modify' : '변경'}
        </TextButton>
      )}
    </div>
  );
};
AddressInfoBox.displayName = 'AddressInfoBox';
