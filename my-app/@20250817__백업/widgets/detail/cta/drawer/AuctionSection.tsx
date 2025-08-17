'use client';

import React, { useState } from 'react';
import { FormArea, FormItem, Stepper, Text } from '@/shared/ui';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';
import { useAuctionPhase } from '../../DetailPriceAuction';

import styles from './CtaDrawer.module.scss';

export const AuctionSection = () => {
  const { item } = useProdDetail();
  const { highBidPrice } = useAuctionPhase(item);
  const minBidPrice = highBidPrice + 1000;

  const [bidCount, setBidCount] = useState(1);
  const [qty, setQty] = useState(minBidPrice);

  // Stepper 핸들러
  const handleStepperChange = (newVal: number) => {
    setQty(newVal);
  };

  return (
    <>
      <FormArea type="vertical">
        <FormItem
          label="입찰가"
          side={
            <Text size="4">
              입찰 신청 횟수 : <span className="ncp-color-point">{bidCount}회</span> / 3회
            </Text>
          }
        >
          <Stepper mode="price" value={qty} onChange={handleStepperChange} min={minBidPrice} />
        </FormItem>
      </FormArea>
    </>
  );
};
