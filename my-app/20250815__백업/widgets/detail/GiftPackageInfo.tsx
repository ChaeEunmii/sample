'use client';

import React, { useState } from 'react';
import { Collapse, Heading, Image, Text, TextButton, TextList } from '@/shared/ui';
import { formatDate, formatPrice } from '@/shared/utils/ui';
import { GiftItem, GiftItemType } from './GiftItem';
import GiftTargetProductDialog from './GiftTargetProductDialog';

import styles from './GiftPackageInfo.module.scss';
import clsx from 'clsx';

export interface GiftType {
  /** 사은품 증정 기간 */
  date: {
    start: string;
    end: string;
  };
  /** 사은품 목록 */
  items: GiftItemType[];
}

export interface PromoGiftType extends GiftType {
  /** 프로모션 사은품 공통 조건 : 모두구매, 구매수량기준, 구매금액기준 */
  promoCondition?: 'all' | 'count' | 'price';
  /** 사은품/본품 1:1 증정 여부 */
  isOneToOneGift?: boolean;
  /** 대상 고객 지정 */
  isTargetCustomer?: boolean;
  /** 대상 상품 지정 */
  isTargetProduct?: boolean;
  /** 사은품 지급 방식 */
  giveawayMethod?: 'all' | 'select';
  /** 중복지급 여부 :  */
  duplicate?: 'all' | 'order' | 'promotion';
}

interface PackageType {
  package?: {
    /** 선물 포장 가격 : 0이면 무료 */
    price: number;
    /** 선물 포장 이미지 (무료는 이미지 없음) */
    src?: string;
  };
  /** 쇼핑백 동봉 여부 */
  isShoppingBag?: boolean;
}

interface GiftPackageInfoProps {
  commonGift?: GiftType;
  promoGift?: PromoGiftType;
  packageData?: PackageType;
}

// 프로모션 사은품 안내 문구 분기
const getPromoGiftNotices = (promo: PromoGiftType): { text: string }[] => {
  if (!promo.items?.length) return [];

  const notices = [];

  // 전체상품 대상 프로모션인 경우 (isTargetProduct: false)
  if (promo.isTargetProduct === false) {
    notices.push({
      text: '전체상품 대상 프로모션입니다.',
      textProps: { size: '3', color: 'gray3', weight: 'regular' },
    });
  }

  // 선택지급 방식인 경우 (giveawayMethod: 'select')
  if (promo.giveawayMethod === 'select') {
    notices.push({
      text: '주문서에서 원하는 사은품을 선택할 수 있어요.',
      textProps: { size: '3', color: 'gray3', weight: 'regular' },
    });
  }

  // 중복지급 여부 (주문서, 프로모션, 중복지급)
  switch (promo.duplicate) {
    // 주문서
    case 'order':
      notices.push({
        text: '주문당 1번씩 지급됩니다.',
        textProps: { size: '3', color: 'gray3', weight: 'regular' },
      });
      break;
    // 프로모션
    case 'promotion':
      notices.push({
        text: '프로모션 기간 내 1번만 지급됩니다.',
        textProps: { size: '3', color: 'gray3', weight: 'regular' },
      });
      break;
    // 중복지급
    case 'all':
    default:
      break;
  }

  return notices;
};

// 프로모션 사은품 혜택 기준 TITLE 분기
export const renderGiftGroupTitle = (gift: PromoGiftType) => {
  let conditionText = '';
  let oneToOneText = '';

  switch (gift.promoCondition) {
    case 'all':
      conditionText = '대상상품 모두 구매 시, ';
      break;

    case 'count':
      conditionText = '구매금액 기준, ';
      break;

    case 'price':
      conditionText = '구매수량 기준, ';
      break;

    default:
      break;
  }

  if (gift.isOneToOneGift) {
    oneToOneText = ' (사은품/본품 1:1 증정)';
  }

  return `${conditionText}사은품 증정${oneToOneText}`;
};

export const GiftPackageInfo = ({ commonGift, promoGift, packageData }: GiftPackageInfoProps) => {
  // 함께 구매 가능한 상품 보기 팝업
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return commonGift || promoGift || packageData ? (
    <div className={styles.root}>
      {(commonGift || promoGift) && (
        /* 사은품 안내 영역 */
        <Collapse defaultOpen variant="default" className={styles.gifts}>
          <Collapse.Control className={styles.controller}>
            <Heading as="strong" size="5" weight="bold" className={styles.title}>
              사은품 안내
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            {commonGift && (
              <div className={styles.gift}>
                <div className={styles.texts}>
                  <Text size="4" weight="medium">
                    구매고객 대상 사은품 증정
                  </Text>
                  <Text size="3" color="gray2">
                    {formatDate(commonGift.date.start, 'dot')}&nbsp;~&nbsp;
                    {formatDate(commonGift.date.end, 'dot')}
                  </Text>
                </div>
                <GiftItem data={commonGift} />
              </div>
            )}
            {promoGift && (
              <>
                <div className={styles.gift}>
                  <div className={styles.texts}>
                    <Text size="4" weight="medium">
                      {renderGiftGroupTitle(promoGift)}
                    </Text>
                    <Text size="3" color="gray2">
                      {formatDate(promoGift.date.start, 'dot')}&nbsp;~&nbsp;
                      {formatDate(promoGift.date.end, 'dot')}
                    </Text>
                    {/* 대상 고객 지정의 경우 텍스트 노출 */}
                    <Text size="3" color="point">
                      + 회원님께만 드리는 사은품 혜택입니다.
                    </Text>
                  </div>
                  <GiftItem data={promoGift} />

                  {/* 대상 상품 모두 구매시 지급되는 경우 노출 */}
                  {promoGift.isTargetProduct && (
                    <TextButton
                      size="1"
                      variant="underline"
                      className={styles.viewBtn}
                      onClick={() => setIsDialogOpen(true)}
                    >
                      대상 상품 모두보기
                    </TextButton>
                  )}

                  {/* 프로모션 사은품 하단 안내 문구 */}
                  <TextList className={styles.promoNote} data={getPromoGiftNotices(promoGift)} />
                </div>

                {/* 대상 상품 모두보기 팝업 */}
                <GiftTargetProductDialog
                  isOpen={isDialogOpen}
                  onClose={() => setIsDialogOpen(false)}
                />
              </>
            )}

            {/* 고정 영역 - 사은품 유의 사항 */}
            <TextList
              className={styles.noteBox}
              data={[
                {
                  text: '사은품 소진 시 조기 종료될 수 있습니다.',
                  textProps: { size: '3', color: 'gray3', weight: 'regular' },
                },
                {
                  text: '사은품은 당사의 사정에 따라 중단 또는 혜택이 변경될 수 있습니다.',
                  textProps: { size: '3', color: 'gray3', weight: 'regular' },
                },
              ]}
            />
          </Collapse.Content>
        </Collapse>
      )}

      {/* 포장 안내 영역 */}
      {packageData && (
        <Collapse defaultOpen variant="default">
          <Collapse.Control className={styles.controller}>
            <Heading as="strong" size="5" weight="bold" className={styles.title}>
              포장 안내
            </Heading>
          </Collapse.Control>
          <Collapse.Content>
            <ul className={clsx(styles.itemlist, styles.package)}>
              {/* 선물 포장 Y인 경우 */}
              {packageData.package && (
                <li>
                  {/* 유료 포장 + 이미지 등록된 경우에만 이미지 출력 */}
                  <Image
                    src={
                      packageData.package.price > 0 && packageData.package.src
                        ? (packageData.package.src as string)
                        : '/images/detail/img_basic_package.png'
                    }
                    alt="선물 포장 이미지"
                    className={styles.img}
                  />
                  <div>
                    <Text size="4">선물 포장</Text>
                    {packageData.package.price > 0 && (
                      <Text size="5" weight="medium">
                        {formatPrice(packageData.package.price)}
                      </Text>
                    )}
                  </div>
                </li>
              )}
              {/* 쇼핑백 동봉 Y인 경우 */}
              {packageData.isShoppingBag && (
                <li>
                  <>
                    <Image
                      src="/images/detail/img_basic_shoppingbag.png"
                      alt="쇼핑백 동봉 이미지"
                      className={styles.img}
                    />
                    <Text size="4">쇼핑백 동봉</Text>
                  </>
                </li>
              )}
            </ul>
            {/* 선물 포장 이미지가 있는 경우 문구 노출 */}
            {packageData.package?.src && (
              <Text size="3" color="gray3" className={styles.packageNote}>
                선물 포장 이미지는 실제 이미지와 상이할 수 있습니다.
              </Text>
            )}
          </Collapse.Content>
        </Collapse>
      )}
    </div>
  ) : null;
};

GiftPackageInfo.displayName = 'GiftPackageInfo';
