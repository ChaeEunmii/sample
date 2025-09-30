'use client';
import React, { useState } from 'react';
import { DetailPrice } from './DetailPrice';
import {
  mockAuctionTopCase,
  mockCrossDiscount,
  mockDetailPrice,
  mockFreeGiftData,
  mockLiveState,
  mockProdAuctionItem,
  mockProdFreegiftItem,
  mockProdGeneralItem,
  mockProdRaffleItem,
  mockRaffleTopCase,
} from '@/mocks/detail';
import { Button, Flag, Icon, Line, Link, TitleBar, Text } from '@shared/ui';
import {
  ProdDetailProvider,
  ProdDetailType,
  ProdStateType,
  ProdType,
} from './detailContext/ProdDetailContext';
import { getMockCateDataByCategory } from '@/views/shop/detail/GeneralDetail';
import detailTopStyles from './DetailTop.module.scss';
import { formatDateMonthDateDay, formatRemainTime, formatTime } from '@/shared/utils/ui';
import { DetailTop } from './DetailTop';
import { CrossDiscount } from './CrossDiscount';
import { DetailPriceAuction } from './DetailPriceAuction';
import { DetailPriceRaffle } from './DetailPriceRaffle';

interface DetailsProps {
  params: {
    type:
      | 'DetailPrice'
      | 'LiveState'
      | 'Brockerage'
      | 'CrossDiscount'
      | 'AuctionTop'
      | 'RaffleTop'
      | 'FreeGift'
      | undefined;
  };
}

export default function Details({ params }: DetailsProps) {
  const [isLiveAlram, setIsLiveAlram] = useState(false);

  if (params.type === 'DetailPrice') {
    const prodItem = mockProdGeneralItem;
    const data = mockDetailPrice;
    return (
      <>
        <TitleBar title="🔖 가격정보 CASE" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdGeneralItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <DetailPrice />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }
  if (params.type === 'LiveState') {
    const prodItem = mockProdGeneralItem;
    const data = mockLiveState;
    return (
      <>
        <TitleBar title="🔖 라이브 상태 CASE" />
        {data.map((mockCase, index) => {
          const item = { ...mockProdGeneralItem, ...mockCase };
          return (
            <React.Fragment key={index}>
              <Line className="" margin="2" />
              <ProdDetailProvider
                item={item}
                prodType={prodItem.prodType as ProdType}
                prodDetailType={prodItem.prodDetailType as ProdDetailType}
                prodState={prodItem.prodState as ProdStateType}
                prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
              >
                <div className={detailTopStyles.liveDate}>
                  <Link href="#" className={detailTopStyles.link}>
                    <Flag
                      data={{
                        label: 'LIVE',
                        color: 'red',
                      }}
                    />
                    <Text as="span" size="4" className={detailTopStyles.text}>
                      {formatDateMonthDateDay(item.schedule.start)}{' '}
                      {formatTime(item.schedule.start)}
                    </Text>
                    <Icon name="arrowRight" size="small" />
                  </Link>
                  <Button
                    variant={isLiveAlram ? undefined : 'primary'}
                    size="xsmall"
                    prefixIcon={isLiveAlram ? 'bellOn' : 'bell'}
                    className={detailTopStyles.liveAlramButton}
                    onClick={() => {
                      setIsLiveAlram(!isLiveAlram);
                    }}
                    disabled={formatRemainTime(item.schedule.start) !== '00:00:00' && !item.preLive}
                  >
                    {isLiveAlram ? '신청완료' : '알림신청'}
                  </Button>
                </div>
              </ProdDetailProvider>
            </React.Fragment>
          );
        })}
      </>
    );
  }
  if (params.type === 'Brockerage') {
    const prodItem = mockProdGeneralItem;
    const data = [{ isBrockerage: true }];
    return (
      <>
        <TitleBar title="🔖 증개 상품 CASE" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdGeneralItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <DetailTop />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }
  if (params.type === 'CrossDiscount') {
    const prodItem = mockProdGeneralItem;
    const data = mockCrossDiscount;
    return (
      <>
        <TitleBar title="🔖 교차할인 노출 CASE" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdGeneralItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <CrossDiscount />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }
  if (params.type === 'AuctionTop') {
    const prodItem = mockProdAuctionItem;
    const data = mockAuctionTopCase;
    return (
      <>
        <TitleBar title="🔖 옥션 상단 CASE" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdAuctionItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <DetailPriceAuction />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }
  if (params.type === 'RaffleTop') {
    const prodItem = mockProdRaffleItem;
    const data = mockRaffleTopCase;
    return (
      <>
        <TitleBar title="🔖 래플 상단 CASE" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdRaffleItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <DetailPriceRaffle />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }
  if (params.type === 'FreeGift') {
    const prodItem = mockProdFreegiftItem;
    const data = mockFreeGiftData;
    return (
      <>
        <TitleBar title="🔖 사은품 상단 CASE (단독/체험단)" />
        {data.map((mockCase, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <ProdDetailProvider
              item={{ ...mockProdFreegiftItem, ...mockCase }}
              prodType={prodItem.prodType as ProdType}
              prodDetailType={prodItem.prodDetailType as ProdDetailType}
              prodState={prodItem.prodState as ProdStateType}
              prodCateData={getMockCateDataByCategory(prodItem.prodCategory)}
            >
              <DetailTop />
            </ProdDetailProvider>
          </React.Fragment>
        ))}
      </>
    );
  }

  return null;
}
