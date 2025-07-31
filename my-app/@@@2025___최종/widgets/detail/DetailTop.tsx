import React, { useState } from 'react';
import {
  Button,
  Flag,
  Heading,
  Icon,
  IconButton,
  Link,
  Text,
  TextButton,
  TextList,
} from '@/shared/ui';
import {
  formatDate,
  formatDateMonthDateDay,
  formatNumber,
  formatRemainTime,
  formatTime,
} from '@/shared/utils/ui';
import { useToast } from '@/shared/contexts/ToastContext';
import { DetailPrice } from '@/widgets/detail';
import { ProdGem } from '@widgets/product/ProdGem';
import SelectCollectionDrawer from '@/views/gem/mycollection/components/SelectCollectionDrawer';
import BarcodeDialog from './BarcodeDialog';

import { mockCollectionSelectList } from '@/mocks/mycollection';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { DetailPriceAuction } from './DetailPriceAuction';
import { DetailPriceRaffle } from './DetailPriceRaffle';
import { DetailPriceDeal } from './DetailPriceDeal';

import styles from './DetailTop.module.scss';
import clsx from 'clsx';

export const DetailTop = () => {
  const { item, prodType, prodDetailType, prodState, prodCateData } = useProdDetail();
  const { showToast } = useToast();

  //  ---------- 리뷰 노출 조건 : START
  const REVIEW_CONDITIONS = [
    item.review, // 리뷰 존재
    !item.freeGift, // 사은품이 아님
    prodType !== 'auction', // 옥션이 아님
    prodType !== 'raffle', // 래플이 아님
  ];
  const isReview = REVIEW_CONDITIONS.every(Boolean);
  //  ---------- 리뷰 노출 조건 : END

  // 명절상품인 경우 : 바코드 Dialog 오픈 상태
  const [isBarcodeOpen, setIsBarcodeOpen] = useState(false);

  // LIVE인 경우 : 알림신청 버튼 상태
  const [isLiveAlram, setIsLiveAlram] = useState(false);

  // ---------------- GEM 토글 ---------------- //
  // 컬렉션 선택 상태
  const [isSelectCollectionDrawerOpen, setIsSelectCollectionDrawerOpen] = useState(false);
  const [userGems, setUserGems] = useState<string[]>([]);
  const handleGemToggle = (productId: string, isActive: boolean) => {
    if (isActive) {
      setUserGems((prev) => [...prev, productId]);
      showToast('상품을 GEM 했어요.', {
        label: 'MY COLLECTION에 추가',
        onClick: () => setIsSelectCollectionDrawerOpen(true),
      });
    } else {
      setUserGems((prev) => prev.filter((id) => id !== productId));
    }
  };

  // ---------------- 컬렉션 선택 ---------------- //
  const [selectedCollectionIds, setSelectedCollectionIds] = useState<(string | number)[]>([]);
  // 선택 변경 콜백
  const handleSelectionChange = (newSelectedIds: (string | number)[]) => {
    setSelectedCollectionIds(newSelectedIds);
  };

  return (
    <>
      {/* 명절상품 바코드조회 버튼 */}
      {prodDetailType === 'holidayOnly' && (
        <>
          <Button
            className={styles.barcodeBtn}
            onClick={() => {
              setIsBarcodeOpen(true);
            }}
          >
            바코드 조회
          </Button>
          <BarcodeDialog isOpen={isBarcodeOpen} onClose={() => setIsBarcodeOpen(false)} />
        </>
      )}

      {/* 브랜드명/지점명 + GEM/공유 영역 */}
      <div className={styles.brandWrap}>
        {/* 브랜드명 / 지점명 : 햄퍼 상품 비노출 */}
        <div className={styles.info}>
          {prodType !== 'hamper' && (
            <>
              <Link as="route" href="/about" type="inline" className={styles.brand}>
                {item.brand}
              </Link>
              <Icon name="arrowRight" size="xsmall" />
              <Text as="span" size="3" className={styles.branch}>
                {item.branch}
                {prodDetailType === 'holidayOnly' && (
                  <span className={styles.prdNo}>{item.prdNo}</span>
                )}
              </Text>
            </>
          )}
        </div>

        {/* GEM/공유 : 사은품-체험단형에서 비노출 */}
        {item.freeGift !== 'experience' && (
          <div className={styles.icons}>
            <ProdGem
              isActive={userGems.includes(item.id)}
              onChange={(active) => handleGemToggle(item.id, active)}
              className={styles.gem}
            />
            <IconButton name="share" className={styles.share}>
              공유
            </IconButton>
          </div>
        )}
      </div>

      {/* 품절인 경우 */}
      {prodState === 'soldout' && item.soldoutText && (
        <Text as="p" color="point" size="4" weight="medium" className={styles.soldoutText}>
          {item.soldoutText}
        </Text>
      )}

      {/* 예약배송으로 설정된 경우 */}
      {(prodDetailType === 'preOrder' || item.preOrder) && (
        <div className={styles.saleDate}>
          <Flag
            data={{
              label: item.prodCategory === 'food' ? '판매일' : '예약 판매일',
              color: 'green2',
            }}
          />
          <Text as="span" color="point" size="4" weight="medium">
            {formatDateMonthDateDay(item.preOrder?.start)}
            &nbsp;~&nbsp;
            {formatDateMonthDateDay(item.preOrder?.end)}
          </Text>
        </div>
      )}

      {/* 라이브 방송의 경우 */}
      {prodType === 'live' && (
        <div className={styles.liveDate}>
          <Link href="#" className={styles.link}>
            <Flag
              data={{
                label: 'LIVE',
                color: 'red',
              }}
            />
            <Text as="span" size="4" className={styles.text}>
              {formatDateMonthDateDay(item.schedule.start)} {formatTime(item.schedule.start)}
            </Text>
            <Icon name="arrowRight" size="small" />
          </Link>
          <Button
            variant={isLiveAlram ? undefined : 'primary'}
            size="xsmall"
            prefixIcon={isLiveAlram ? 'bellOn' : 'bell'}
            className={styles.liveAlramButton}
            onClick={() => {
              setIsLiveAlram(!isLiveAlram);
            }}
            disabled={formatRemainTime(item.schedule.start) !== '00:00:00' && !item.preLive}
          >
            {isLiveAlram ? '신청완료' : '알림신청'}
          </Button>
        </div>
      )}

      {/* 타이틀 */}
      <Heading as="h2" size="5" className={styles.title}>
        {item.title}
      </Heading>

      {/* [식품] 원산지 */}
      {item.prodCategory === 'food' && (
        <Text as="p" size="3" className={styles.origin}>
          원산지 : {prodCateData?.origin}
        </Text>
      )}

      {/* 짦은 설명글 */}
      {item.shortDesc && (
        <Text
          as="p"
          size="3"
          color="gray3"
          className={clsx(styles.shortDesc, styles[`prod-${prodType}`])}
        >
          {item.shortDesc.split('\n').map((line: string, idx: number) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Text>
      )}

      {/* 혜택 Flag */}
      {item.benefits.length > 0 && (
        <Flag data={item.benefits} color="gray" className={styles.benefits} />
      )}

      {/* 가격 정보 영역 */}
      {prodType === 'auction' && <DetailPriceAuction />}
      {prodType === 'raffle' && <DetailPriceRaffle />}
      {prodType === 'deal' && <DetailPriceDeal />}
      {prodType !== 'auction' && prodType !== 'raffle' && prodType !== 'deal' && !item.freeGift && (
        <DetailPrice />
      )}

      {/* 사은품 남은수량, 신청기간 */}
      {item.freeGift && item.freeGift === 'exclusive' && (
        <>
          <Text size="4" color="gray2" className={styles.stockCount}>
            남은 수량 <span>ID당 최대 신청 수량 1개</span>
          </Text>
          <div className={styles.period}>
            <Icon name="time" size="small" />
            <Text as="span" color="point" size="4" weight="medium">
              신청기간&nbsp;{formatDateMonthDateDay(item.period.start)}&nbsp;~&nbsp;
              {formatDateMonthDateDay(item.period.end)}
            </Text>
          </div>
        </>
      )}

      {/* 상단 리뷰 */}
      {isReview && (
        <Text size="3" className={styles.review}>
          <Icon name="rating" size="small" />
          <b className={styles.rating}>{item.review.rating}</b>
          <span className={styles.divider}></span>
          <TextButton color="gray1" size="1" variant="underline" className={styles.reviewButton}>
            상품평 {formatNumber(item.review.count)}
          </TextButton>
        </Text>
      )}

      {/* 자사카드 사용 불가 안내 (기본적으로 브랜드 직송이 대상) */}
      {(prodDetailType === 'subscription' || item.isBrockerage) && (
        <Text className={styles.ownCardDisabled} size="4" color="gray2">
          현대백화점 카드 외의 다른 결제 수단으로 주문할 수 있는 상품입니다.
        </Text>
      )}

      {/* 브랜드 직송 안내 */}
      {(prodDetailType === 'subscription' || item.isBrockerage) && (
        <TextList
          className={styles.noticeList}
          variant="info"
          data={[
            prodDetailType === 'subscription' && {
              text: `지금 신청하시면 ${formatDate(item.firstDeliveryDate, 'kor', false)}에 처음 받으실 수 있어요.`,
            },
            item.isBrockerage && {
              text: '오픈마켓(브랜드 직송) 구독 상품은 판매자가 직접 배송하는 상품입니다. 판매자 및 택배사 사정에 따라서 예정된 일자보다 늦게 도착할 수 있어요.',
            },
          ].filter(Boolean)}
        />
      )}

      {/* MY Collection 추가 팝업 */}
      <SelectCollectionDrawer
        data={mockCollectionSelectList}
        isOpen={isSelectCollectionDrawerOpen}
        onClose={() => setIsSelectCollectionDrawerOpen(false)}
        selection={{
          activeIds: selectedCollectionIds,
          onChange: handleSelectionChange,
        }}
      />
    </>
  );
};

DetailTop.displayName = 'DetailTop';
