'use client';

import { Heading, Text, Button, ButtonArea, TextButton, Box, InfoList, InfoItem } from '@shared/ui';
import { TitleWithInfo } from '@views/hbss/components/TitleWithInfo';
import clsx from 'clsx';
import styles from './TitleWithInfoAddr.module.scss';

interface AddressData {
  /** 받는 사람 이름 */
  name?: string;
  /** 기본 주소 */
  defaultAddress?: string;
  /** 상세 주소 */
  detailAddress?: string;
  /** 배송 요청사항 */
  note?: string;
}

interface TitleWithInfoAddrProps {
  /** 표시 타입: 'free' = 미입력 상태, 'filled' = 입력 상태 */
  type?: 'free' | 'filled';
  /** 주소 데이터 */
  data?: AddressData;
  /** 입력 버튼 클릭 핸들러 */
  onClick?: () => void;
  /** 수정 버튼 클릭 */
  onEdit?: () => void;
  /** 삭제 버튼 클릭 */
  onDelete?: () => void;
  /** 수정 버튼 노출 여부 */
  showEdit?: boolean;
  /** 삭제 버튼 노출 여부 */
  showDelete?: boolean;
  /** 타이틀 숨김 여부 */
  hideTitle?: boolean;
  /** 추가 클래스 */
  className?: string;
}

export function TitleWithInfoAddr({
  type = 'free',
  data,
  onClick,
  onEdit,
  onDelete,
  showEdit = false,
  showDelete = false,
  hideTitle = false,
  className,
}: TitleWithInfoAddrProps) {
  const isTypeFilled = type === 'filled';
  const isTypeFree = type === 'free';

  const { name, defaultAddress, detailAddress, note } = data || {};

  // 버튼영역 렌더조건
  const shouldShowBtns = showEdit || showDelete;

  /** 수정 버튼 렌더 (showEdit이 true일 때) */
  const renderEditButton = () =>
    shouldShowBtns ? (
      <div className={styles.btns}>
        {showEdit && (
          <TextButton variant="underline" size="1" color="gray3" onClick={onEdit}>
            수정
          </TextButton>
        )}
        {showDelete && (
          <TextButton variant="underline" size="1" color="gray3" onClick={onDelete}>
            삭제
          </TextButton>
        )}
      </div>
    ) : null;

  return (
    <TitleWithInfo
      type={!isTypeFilled ? 'free' : 'boxed'}
      title={!hideTitle && '배송지'}
      content={
        // 배송지 입력이 필요한 경우
        isTypeFree ? (
          <>
            {name && (
              <Box margin="0" className={styles.receiver}>
                <InfoList variant="line">
                  <InfoItem
                    title={
                      <Text size="4" color="primary" weight="semibold">
                        받으시는분
                      </Text>
                    }
                    content={
                      <Text size="4" color="gray1">
                        {name}
                      </Text>
                    }
                  />
                </InfoList>
              </Box>
            )}
            <ButtonArea margin="0" className={clsx(styles.addressEmpty)}>
              <Button variant="tertiary" suffixIcon="arrowRight" onClick={onClick}>
                배송지를 입력해 주세요
              </Button>
            </ButtonArea>
          </>
        ) : (
          <div className={clsx(styles.address)}>
            {/* 이름 + 상단 수정버튼 */}
            {name && (
              <div className={styles.topInfo}>
                <Text size="5" weight="semibold" className={styles.name}>
                  {name}
                </Text>
                {renderEditButton()}
              </div>
            )}
            {/* 주소 */}
            {(defaultAddress || detailAddress) && (
              <div className={styles.addrArea}>
                {defaultAddress && (
                  <Text as="span" size="5" color={name ? 'gray2' : 'gray1'} className={styles.addr}>
                    {defaultAddress}
                  </Text>
                )}
                {detailAddress && (
                  <Text as="span" size="5" color={name ? 'gray2' : 'gray1'} className={styles.addr}>
                    {detailAddress}
                  </Text>
                )}
              </div>
            )}
            {/* 요청사항 */}
            {note && (
              <div className={styles.note}>
                <Heading size="3" weight="semibold" className={styles.receiver}>
                  요청사항
                </Heading>
                <Text as="span" size="5" color="gray2" className={styles.noteText}>
                  {note}
                </Text>
              </div>
            )}
            {/* 하단 수정버튼: 이름이 없을 때 */}
            {!name && renderEditButton()}
          </div>
        )
      }
      className={className}
    />
  );
}
