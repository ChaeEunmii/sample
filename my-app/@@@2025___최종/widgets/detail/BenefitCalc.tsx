'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Checkbox, Collapse, Heading, Line, Text, TextButton } from '@/shared/ui';
import { formatNumber, formatPrice } from '@/shared/utils/ui';
import { mockHasCouponList } from '@/mocks/detail';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import clsx from 'clsx';
import styles from './BenefitCalc.module.scss';

interface BenefitItem {
  /** 혜택 ID */
  id: string;
  /** 혜택명 */
  title: string;
  /** 혜택 종료일 */
  endDate?: string;
  /** 회원 전용 여부 */
  memberOnly: boolean;
  /** 다운로드형 쿠폰 여부 */
  isDownloadable?: boolean;
  /** 클럽가입형 쿠폰 여부 */
  isClubMembership?: boolean;
  /** 결제수단할인 - 링크 */
  href?: string;
  /** 정률 혜택값 */
  rate?: number;
  /** 정액 혜택값 */
  value?: number;
}

interface BenefitGroup {
  /** 혜택 그룹 ID */
  id: string;
  /** 혜택 그룹명 */
  title: string;
  /** 혜택 아이템 */
  items: BenefitItem[];
}

interface BenefitCalcProps {
  data?: BenefitGroup[];
}

export const BenefitCalc = ({ data }: BenefitCalcProps) => {
  const { item } = useProdDetail();
  const price = item.price;

  // START --- 퍼블 화면 확인용 Parameter
  const searchParams = useSearchParams();
  const [isLogin, setIsLogin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  useEffect(() => {
    const isLoginParam = searchParams.get('isLogin');
    const isMemberParam = searchParams.get('isMember');

    setIsLogin(isLoginParam === 'true');
    setIsMember(isMemberParam === 'true');
  }, [searchParams]);
  // END --- 퍼블 화면 확인용 Parameter

  // 임시데이터
  const [hasCouponList, setHasCouponList] = useState(mockHasCouponList); // 회원이 보유하고 있는 쿠폰 리스트

  // 직전 판매가 시작일 포맷
  const formatBenefitDate = (dateString: string) => {
    const month = parseInt(dateString.substring(4, 6), 10);
    const day = parseInt(dateString.substring(6, 8), 10);
    return `~${month}/${day}`;
  };

  /** 할인 가격 랜딩 */
  const renderDiscountValue = (group: BenefitGroup, item: BenefitItem): string | null => {
    // 값이 모두 없으면 0원
    if (item.value === undefined && item.rate === undefined) return '0원';

    // 상품 즉시할인
    if (group.id === 'product' && item.title === '즉시할인' && price.discountRate !== undefined) {
      const calcValue = formatPrice(Math.floor((price.current * price.discountRate) / 100));
      return `-${calcValue}`;
    }

    // 포인트 그룹
    if (group.id === 'point' && item.value && item.value !== 0) {
      return item.title === '예치금' ? formatPrice(item.value) : `${formatNumber(item.value)} P`;
    }

    // 정액 할인
    if (item.value) {
      return `-${formatPrice(item.value)}`;
    }

    // 정률 할인
    if (item.rate) {
      const calcRate = formatPrice(Math.floor((price.current * item.rate) / 100));
      return `-${calcRate}`;
    }

    return null;
  };

  /** 텍스트형 버튼 랜딩 */
  const renderTextBtn = (group: BenefitGroup, item: BenefitItem) => {
    if (item.isClubMembership && !isMember) {
      return (
        <TextButton href="#" variant="underline" size="1" className={styles.textButton}>
          가입하기
        </TextButton>
      );
    }
    if (group.id === 'payment' && item.href) {
      return (
        <TextButton href={item.href} variant="underline" size="1" className={styles.textButton}>
          자세히
        </TextButton>
      );
    }
    return null;
  };

  /** 쿠폰 받기/보유 랜딩 */
  const handleDownloadCoupon = (group: BenefitGroup, item: BenefitItem) => {
    const couponKey = `${group.id}|${item.id}`;
    if (!hasCouponList.includes(couponKey)) {
      setHasCouponList([...hasCouponList, couponKey]);
    }
  };
  const renderDownloadableBtn = (group: BenefitGroup, item: BenefitItem) => {
    if (!item.isDownloadable) return null;
    const isOwned = hasCouponList.includes(`${group.id}|${item.id}`);
    return (
      <Button
        size="tiny"
        variant="primary"
        disabled={isOwned}
        onClick={() => {
          if (!isOwned) {
            handleDownloadCoupon(group, item);
          }
        }}
      >
        {isOwned ? '보유' : '받기'}
      </Button>
    );
  };

  // Checkbox : 최대 혜택가 계산을 위한 value값 적용
  const setCheckValue = (group: BenefitGroup, item: BenefitItem): number => {
    // value 값이 없으면 -1 리턴
    if (!item.value) return -1;

    // 포인트 그룹 : 10원 단위로 사용 가능
    if (group.id === 'point') {
      return Math.floor(item.value / 10) * 10;
    }

    return item.value;
  };

  // Checkbox : 비활성화 여부
  const setDisabled = (group: BenefitGroup, item: BenefitItem): boolean => {
    // 포인트 그룹
    if (group.id === 'point' && item.value) {
      switch (item.id) {
        case 'h-point': // H.Point는 100p 이상 사용 가능
          return item.value >= 100 ? false : true;
        case 'rsvp-point': // RSVP Point는 1000p 이상 사용 가능
          return isMember && item.value >= 1000 ? false : true;
        default:
          return false;
      }
    }

    return false;
  };

  return (
    <div className={clsx(styles.root)}>
      <Collapse variant="fullGrayBox" defaultSuffix>
        <Collapse.Control
          arrowSize="xsmall"
          suffix={
            <Text as="span" size="6" weight="bold">
              80,000원
            </Text>
          }
          className={styles.benefitControl}
        >
          <Heading as="h2" size="3" weight="semibold" className={styles.title}>
            최대혜택가
          </Heading>
        </Collapse.Control>
        <Collapse.Content>
          {data
            // 브랜드직송,중개상품은 현대백화점 카드 혜택 제외
            ?.filter((group) => !(item.isBrockerage && group.id === 'hddCard'))
            .map((group) => {
              // 로그인 여부에 따라 보여줄 아이템만 필터링
              const filteredItems = group.items.filter((item) => isLogin || !item.memberOnly);

              console.log({
                groupId: group.id,
                itemId: item.id,
                isOwned: hasCouponList.includes(item.id),
              });

              // 조건에 맞는 아이템이 하나도 없으면 group 자체를 렌더링하지 않음
              if (filteredItems.length === 0) return null;

              return (
                <React.Fragment key={`${group.id}`}>
                  <Line margin="2" className={styles.line} />
                  <div className={styles.group}>
                    <Text size="4" color="gray2">
                      {group.title}
                    </Text>
                    <dl className={styles.items}>
                      {group.id === 'product' && price.discountRate && (
                        <>
                          <dt>
                            <Checkbox
                              label="즉시할인"
                              size="small"
                              value={formatPrice((price.current / 100) * price.discountRate)}
                              defaultChecked
                              disabled
                              className={styles.benefitCheck}
                            />
                            <Text as="span" size="4">
                              {price.discountRate}%
                            </Text>
                          </dt>
                          <dd>-{formatPrice((price.current / 100) * price.discountRate)}</dd>
                        </>
                      )}
                      {filteredItems
                        .filter((item) => item.value !== 0)
                        .map((item, index) => (
                          <React.Fragment key={`${item.id}-${index}`}>
                            <dt>
                              <Checkbox
                                label={item.title}
                                size="small"
                                value={setCheckValue(group, item)}
                                disabled={setDisabled(group, item)}
                                defaultChecked={false}
                                className={styles.benefitCheck}
                              />
                              {/* 정률형 */}
                              {item.rate && (
                                <Text as="span" size="4">
                                  {item.rate}%
                                </Text>
                              )}
                              {/* 기간이 있는 할인 */}
                              {item.endDate && (
                                <Text as="span" size="3">
                                  {formatBenefitDate(item.endDate)}
                                </Text>
                              )}
                              {/* 텍스트형 버튼 랜딩 */}
                              {renderTextBtn(group, item)}
                            </dt>
                            <dd>
                              {renderDiscountValue(group, item)}
                              {renderDownloadableBtn(group, item)}
                            </dd>
                          </React.Fragment>
                        ))}
                    </dl>
                  </div>
                </React.Fragment>
              );
            })}
          {!isLogin && (
            <>
              <Line margin="2" className={styles.line} />
              <Text size="4">
                <TextButton href="/login" variant="underline" size="1" color="point">
                  로그인
                </TextButton>
                을 하시면 더 정확한 혜택을 확인하실 수 있습니다.
              </Text>
            </>
          )}
        </Collapse.Content>
      </Collapse>
    </div>
  );
};

BenefitCalc.displayName = 'BenefitCalc';
