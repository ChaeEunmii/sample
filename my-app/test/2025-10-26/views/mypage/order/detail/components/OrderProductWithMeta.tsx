'use client';

import { useState } from 'react';
import {
  Section,
  Heading,
  Button,
  Box,
  Stack,
  Select,
  TextList,
  InfoList,
  InfoItem,
  Text,
  TextButton,
} from '@shared/ui';
import clsx from 'clsx';
import styles from './OrderProductWithMeta.module.scss';
import { LocationDialog } from '@/widgets/order/LocationDialog';

// 픽업 정보 유형을 정의 (스토어픽, 문화센터 방문, 방문픽업)
export type MetaVariant = 'store' | 'culture' | 'visit';

// 스토어픽 타입
interface PickupOption {
  label: string;
  value: string;
}

// 공통 데이터 타입
interface BasePickupData {
  name: string;
  phone: string;
}

// 스토어픽 픽업 정보
interface StorePickupData extends BasePickupData {
  pickupDate: string;
  message?: string;
  isConfirmed?: boolean;
  pickupOptions?: PickupOption[];
}

// 문화센터 방문 정보
interface CulturePickupData extends BasePickupData {
  date: string;
}

// 방문픽업 정보
interface VisitPickupData extends BasePickupData {
  address: string;
}

// 컴포넌트 Props 타입
interface OrderProductWithMetaProps {
  /** 픽업 유형 ('store' | 'culture' | 'visit') */
  variant: MetaVariant;
  /** 섹션 타이틀 (기본값은 variant에 따라 자동 지정) */
  title?: string;
  /** 픽업 정보 데이터 (variant에 따라 타입 분기) */
  data: StorePickupData | CulturePickupData | VisitPickupData;
  /** 추가 클래스명 */
  className?: string;
  /** 하단 슬롯 콘텐츠 (예: 버튼 등) */
  bottomSlot?: React.ReactNode;
  /** 스토어픽 날짜 선택 변경 핸들러 */
  onSelectPickupDate?: (value: string) => void;
  /** 스토어픽 픽업일 확정 버튼 클릭 핸들러 */
  onClickConfirmPickupDate?: () => void;
  /** 섹션 형태 지정 ('default': 접고 펼치기 있음, 'contentOnly': 내용만 노출) */
  mode?: 'default' | 'contentOnly';
  /** 안내문구(TextList) 커스터마이징 시 */
  textListData?: string[];
}

export const OrderProductWithMeta = ({
  variant,
  title = variant === 'store' ? '픽업' : '주문상품',
  data,
  className,
  bottomSlot,
  onSelectPickupDate,
  onClickConfirmPickupDate,
  mode = 'default', // 기본값은 접고펼치기
  textListData,
}: OrderProductWithMetaProps) => {
  // variant별 boolean 플래그
  const isStore = variant === 'store';
  const isCulture = variant === 'culture';
  const isVisit = variant === 'visit';
  const isContentOnly = mode === 'contentOnly';

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  // 스토어픽일 경우 날짜 기본값 세팅
  const [dateValue, setDateValue] = useState(
    isStore ? ((data as StorePickupData).pickupOptions?.[0]?.value ?? '') : ''
  );

  // 날짜 선택 변경 핸들러
  const handleSelectChange = (value: string) => {
    setDateValue(value);
    onSelectPickupDate?.(value);
  };

  return (
    <>
      <Section
        title={isContentOnly ? '' : title}
        variant={isContentOnly ? 'section' : 'collapse'}
        level="1"
        {...(!isContentOnly && { flush: true })}
        borderTop={isContentOnly ? false : true}
        defaultOpen
        className={clsx(styles.section, className)}
      >
        <div className={styles.wrap}>
          {/* 카테고리 타이틀 (상단 헤더) */}
          <div className={styles.category}>
            <Heading as="h2" size="5" weight="bold" className={styles.title}>
              {isStore ? '스토어픽' : isCulture ? '문화 센터 방문' : '방문픽업'}
            </Heading>
          </div>

          {/* 방문픽업 주소 정보 */}
          {isVisit && (
            <div className={styles.location}>
              <Heading as="strong" className={styles.name} indent>
                {(data as VisitPickupData).address}
              </Heading>
            </div>
          )}

          {/* 스토어픽, 문화센터 - 매장 위치 + 버튼 */}
          {(isStore || isCulture) && (
            <div className={styles.location}>
              <Heading as="strong" className={styles.name} indent>
                현대백화점 목동점
              </Heading>
              <div className={styles.btns}>
                <Button
                  iconOnly="map"
                  round
                  size="xsmall"
                  variant="tertiary"
                  onClick={() => setIsLocationOpen(true)}
                >
                  위치보기
                </Button>
                <Button iconOnly="callFill" round size="xsmall" variant="tertiary">
                  전화걸기
                </Button>
              </div>
            </div>
          )}

          {/* 픽업일 및 안내 영역 */}
          <div className={styles.pickup}>
            {/* 문화센터 강좌일 정보 */}
            {isCulture && (
              <Heading as="strong" size="3" weight="medium" color="point" indent>
                강좌일 {(data as CulturePickupData).date}
              </Heading>
            )}

            {/* 스토어픽 픽업일 및 선택 */}
            {isStore && (
              <>
                <Heading as="strong" size="3" weight="medium" color="point" indent>
                  픽업일{' '}
                  {(data as StorePickupData).isConfirmed && (data as StorePickupData).pickupDate}
                </Heading>
                {/* 아직 픽업일 확정 전이면 날짜 선택 UI 노출 */}
                {!(data as StorePickupData).isConfirmed && (
                  <Stack type="field" className={styles.change}>
                    <Select
                      onChange={handleSelectChange}
                      options={(data as StorePickupData).pickupOptions ?? []}
                      value={dateValue}
                      size="large"
                    />
                    <Button variant="primary" size="large" onClick={onClickConfirmPickupDate}>
                      변경
                    </Button>
                  </Stack>
                )}
              </>
            )}

            {/* 안내문구 */}
            <TextList
              data={
                textListData ??
                (isVisit
                  ? [
                      '픽업일은 내부사항에 의해 변경될 수 있습니다.',
                      '방문 픽업 매장 방문 후 픽업 준비 상태에서 아래 픽업 확인을 눌러 픽업을 진행해 주세요.',
                    ]
                  : isStore
                    ? [
                        '픽업일은 내부사항에 의해 변경될 수 있습니다. ',
                        '픽업 예정일 +1일 경과 시 자동으로 주문취소 됩니다.',
                        '정기 휴점일을 제외한 주문일 이후 3일 내에 선택하신 날짜에 픽업이 가능합니다.',
                        '스토어픽 주문은 주문 사은품 프로모션 대상에서 제외됩니다.',
                      ]
                    : [
                        '강좌일은 내부사항에 의해 변경될 수 있습니다.',
                        '강좌의 취소는 문화센터 연락 후 취소 가능 상태의 확인이 필요합니다.',
                        '강좌의 취소는 상담원의 확인 후에 취소가 됩니다.',
                      ])
              }
              variant="info"
              className={styles.infoBox}
            />
          </div>

          {/* 받는 사람 정보 영역 */}
          <div className={styles.receiver}>
            <Heading as="strong" size="3" weight="semibold" indent>
              받으시는 분
            </Heading>
            <Box margin="0" className={styles.box}>
              <div className={styles.info}>
                <ul className={styles.list}>
                  <li>
                    <span className={styles.tit}>{data.name}</span>
                  </li>
                  <li>
                    <Text as="span" size="5" color="gray1">
                      {data.phone}
                    </Text>
                  </li>
                </ul>
                <TextButton variant="underline" size="1" color="gray3" className={styles.btn}>
                  마스킹 해제
                </TextButton>
              </div>

              {/* 스토어픽 선물 메시지 */}
              {isStore && (data as StorePickupData).message && (
                <InfoList className="ncp-mt-x10">
                  <InfoItem
                    title={<span className={styles.tit}>선물 메시지</span>}
                    content={
                      <Text as="span" size="4" color="gray1">
                        {(data as StorePickupData).message}
                      </Text>
                    }
                  />
                </InfoList>
              )}
            </Box>
          </div>

          {/* 하단 슬롯 (예: 버튼 등) */}
          {bottomSlot && <div className={styles.bottom}>{bottomSlot}</div>}
        </div>
      </Section>

      {/* 위치보기 다이얼로그 */}
      <LocationDialog isOpen={isLocationOpen} onClose={() => setIsLocationOpen(false)} />
    </>
  );
};
