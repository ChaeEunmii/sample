'use client';
import React from 'react';
import { DetailPrice } from './DetailPrice';
import { mockDetailPrice } from '@/mocks/detail';
import { Line, TitleBar } from '@shared/ui';

interface DetailsProps {
  params: {
    type: 'DetailPrice';
  };
}

export default function Details({ params }: DetailsProps) {
  if (params.type === 'DetailPrice') {
    const data = mockDetailPrice;
    return (
      <>
        <TitleBar title="🔖 가격정보 CASE" />
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Line className="" margin="2" />
            <DetailPrice
              salePeriod={item.salePeriod}
              price={item.price}
              unit={item.unit}
              qty={item.qty}
            />
          </React.Fragment>
        ))}
      </>
    );
  }

  return null;
}
