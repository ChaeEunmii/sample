'use client';

import React, { useMemo } from 'react';
import { Text, Drawer, TextList } from '@/shared/ui';

import {
  QuantitySection,
  OptionSection,
  PackageSection,
  DeliverySection,
  AdditionalSection,
  PickupDateSection,
  SelectDateSection,
  CtaNoticeSection,
  AuctionSection,
} from '.';
import {
  ItemType,
  ProdDetailType,
  ProdType,
  useProdDetail,
} from '@widgets/detail/detailContext/ProdDetailContext';
import { formatPrice } from '@/shared/utils/ui';
import { CtaDrawerFooter, DrawerButtonType } from './CtaDrawerFooter';
import { FixOptionSection } from './FixOptionSection';

import styles from './CtaDrawer.module.scss';
import { useAuctionPhase } from '../../DetailPriceAuction';

// Drawer 내부 컨텐츠 섹션 타입
export type DrawerContSection =
  | 'quantity'
  | 'option'
  | 'fixOption'
  | 'delivery'
  | 'additional'
  | 'selectDate'
  | 'ctaNotice'
  | 'auction';

/** DRAWER_CONFIG_MAP에 사용될 Drawer 내부 Section 맵 */
export const SECTION_COMPONENT_MAP = {
  quantity: QuantitySection,
  option: OptionSection,
  fixOption: FixOptionSection,
  delivery: DeliverySection,
  additional: AdditionalSection,
  selectDate: SelectDateSection,
  ctaNotice: CtaNoticeSection,
  auction: AuctionSection,
};

interface DrawerConfigType {
  sections: (params: {
    prodType?: ProdType;
    prodDetailType?: ProdDetailType;
    item?: ItemType;
  }) => DrawerContSection[];
  footerType: (params: {
    prodType?: ProdType;
    prodDetailType?: ProdDetailType;
    item?: ItemType;
  }) => DrawerButtonType;
}

// 각 DrawerType마다 section과 하단 버튼 유형 세팅
const DRAWER_CONFIG_MAP: Record<DrawerButtonType, DrawerConfigType> = {
  buy: {
    sections: ({ prodDetailType }) => {
      const result: DrawerContSection[] = [];
      if (prodDetailType !== 'subscription') result.push('delivery');
      result.push('quantity', 'option', 'additional', 'selectDate', 'ctaNotice');
      return result;
    },
    footerType: ({ prodType }) => {
      return prodType === 'freegift' ? 'apply' : 'buy';
    },
  },
  gift: {
    sections: ({ prodDetailType }) => {
      const result: DrawerContSection[] = [];
      if (prodDetailType !== 'subscription') result.push('delivery');
      result.push('quantity', 'option', 'additional', 'selectDate', 'ctaNotice');
      return result;
    },
    footerType: () => {
      return 'gift';
    },
  },
  confirm: {
    sections: () => ['quantity'],
    footerType: () => {
      return 'confirm';
    },
  },
  apply: {
    sections: () => ['quantity'],
    footerType: () => {
      return 'apply';
    },
  },
  auction: {
    sections: () => ['auction'],
    footerType: () => {
      return 'auction';
    },
  },
  raffle: {
    sections: () => ['option', 'quantity'],
    footerType: () => {
      return 'raffle';
    },
  },
  reserve: {
    sections: () => ['quantity', 'selectDate'],
    footerType: () => {
      return 'reserve';
    },
  },
  rental: {
    sections: () => ['fixOption'],
    footerType: () => {
      return 'rental';
    },
  },
  consultation: {
    sections: () => ['fixOption'],
    footerType: () => {
      return 'rental';
    },
  },
};

export interface CtaDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  type: DrawerButtonType | null;
}

export interface CTACommonProps {
  /** Drawer 내부 Setcion을 렌더할 타입 (DRAWER_CONFIG_MAP 참고) */
  setDrawerType?: React.Dispatch<React.SetStateAction<DrawerButtonType | null>>;
  setIsDrawerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  inDialog?: boolean;
  /** 구독 상세 > 회차별 구성상품 보기 버튼 노출 여부 */
  hasRounds?: boolean;
}

export const CtaDrawer = ({ isOpen, onClose, type }: CtaDrawerProps) => {
  const { item, prodType, prodDetailType } = useProdDetail();

  const config = type ? DRAWER_CONFIG_MAP[type] : undefined;

  /** 복합옵션 여부 */
  const isCompositeOption =
    item.optionList?.[0]?.subs &&
    Array.isArray(item.optionList[0].subs) &&
    item.optionList[0].subs.length > 0;

  // section, footer 초기화
  let sections: DrawerContSection[] = [];
  let footer = null;

  /** section, footet 할당 */
  if (config) {
    sections = config.sections({
      prodType,
      prodDetailType,
      item,
    });
    footer = (
      <CtaDrawerFooter
        footerType={config.footerType({
          prodType,
          prodDetailType,
          item,
        })}
        onClose={onClose}
      />
    );
  }

  /** 총 가격 */
  const { highBidPrice } = useAuctionPhase(item);
  const totalPrice = useMemo(() => {
    if (!item) return 0;
    if (prodType === 'auction') return highBidPrice;
    if (!isCompositeOption) return item.price.current;
    return item.price.current ?? item.price;
  }, [item]);

  /** 구매 제한 */
  const getOrderLimit = () => {
    if (item.perPersonOrderLimit && item.dailyOrderLimit) {
      if (item.perPersonOrderLimit < item.dailyOrderLimit) {
        return { value: item.perPersonOrderLimit, type: 'perPerson' };
      } else {
        return { value: item.dailyOrderLimit, type: 'daily' };
      }
    }
    if (item.perPersonOrderLimit) return { value: item.perPersonOrderLimit, type: 'perPerson' };
    if (item.dailyOrderLimit) return { value: item.dailyOrderLimit, type: 'daily' };
    if (!item.perPersonOrderLimit && !item.dailyOrderLimit && item.minOrder) {
      return { value: item.minOrder, type: 'minOrder' };
    }
    return { value: null, type: null };
  };
  const orderLimit = getOrderLimit();

  return (
    <Drawer collapsible isOpen={isOpen} onClose={onClose} footer={footer} className={styles.root}>
      <div className={styles.drawer}>
        <div className={styles['sec-opt-qty']}>
          {/* 고정 옵션 */}
          {sections.includes('fixOption') ? (
            <FixOptionSection />
          ) : (
            <>
              {/* 옵션 선택 */}
              {sections.includes('option') && <OptionSection />}

              {/* 수량 및 옵션별 가격 */}
              {sections.includes('quantity') && (
                <div className={styles['sec-quantity']}>
                  {/* 단일 옵션 */}
                  <QuantitySection />
                  {/* 다중 옵션 */}
                  <QuantitySection isComposite />
                </div>
              )}
            </>
          )}

          {/* 옥션 전용 */}
          {sections.includes('auction') && <AuctionSection />}

          {/* 구매 제한 텍스트 */}
          {orderLimit.value !== null && (
            <Text size="3" color="gray3" className="ncp-mt-xs">
              {orderLimit.type !== 'minOrder' ? (
                <>
                  {orderLimit.type === 'daily' && '하루 '}
                  {orderLimit.value}개까지 구매 가능한 상품입니다.
                </>
              ) : prodType === 'raffle' ? (
                `1회 1개의 상품(옵션)만 응모 가능 합니다.`
              ) : (
                `${orderLimit.value}개 이상 구매 가능한 상품입니다.`
              )}
            </Text>
          )}

          {/* 수령 장소 */}
          {item.pickupLocationName && (
            <Text size="3" color="gray3" className="ncp-mt-xs">
              수령장소 : {item.pickupLocationName}
            </Text>
          )}

          {/* 전시회 */}
          {item.exhibition && (
            <TextList
              className={styles.exhibitionNotice}
              variant="level3"
              data={[
                `유효기간 : ${item.exhibition.expirationPeriod.start} ~ ${item.exhibition.expirationPeriod.end}`,
                `수령장소 : ${item.exhibition.locationName}`,
              ]}
            />
          )}
        </div>

        {/* 포장 방법 */}
        {item.package?.use && <PackageSection />}

        {/* 배송 유형 */}
        {sections.includes('delivery') && <DeliverySection />}

        {/* 픽업 일시 */}
        {item.todayPick && <PickupDateSection />}

        {/* 총 가격 */}
        <Text size="8" weight="bold" color="primary" align="right" className={styles.totalPrice}>
          <span>총</span> {formatPrice(totalPrice)}
        </Text>

        {/* 안내 텍스트 문구: 교차할인, 예약판매, 취소가능일, 위약금 */}
        {prodType !== 'auction' &&
          prodType !== 'raffle' &&
          (item.crossDiscount ||
            prodDetailType === 'preOrder' ||
            item.cancelDate ||
            item.penalty) && <CtaNoticeSection />}

        {/* 날짜 선택 */}
        {sections.includes('selectDate') && <SelectDateSection />}

        {/* 추가 정보 */}
        {sections.includes('additional') && <AdditionalSection />}
      </div>
    </Drawer>
  );
};
