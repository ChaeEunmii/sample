'use client';

import React from 'react';
import { TitleBar, Text, TextButton, Line } from '@shared/ui';
import { PaymentMethodCardList, ExtendedPayment } from '@widgets/payment/PaymentMethodCardList';
import { LinkSet } from '@/views/mypage/payment/hpoint/components/LinkSet';

export interface PaymentMethodProps {
  /** 카드 목록 데이터 */
  data: ExtendedPayment[];
  /** 기본 카드 id (제어형) */
  viewDefaultId?: string;
  /** 기본 카드 변경 */
  onChangeViewDefault?: (id: string) => void;
  /** 카드 삭제 */
  onDeleteViewItem?: (id: string) => void;
  /** "새로 등록하기" 클릭 */
  onClickAdd?: () => void;
  /** 하단 링크 리스트 */
  links?: { label: string; onClick: () => void }[];
  /** 추가적인 클래스 */
  className?: string;
  /** 타이틀 커스텀 (기본: 등록된 결제수단) */
  titleLabel?: React.ReactNode;
}

export function PaymentMethod({
  data,
  viewDefaultId,
  onChangeViewDefault,
  onDeleteViewItem,
  onClickAdd,
  links,
  className,
  titleLabel = '등록된 결제수단',
}: PaymentMethodProps) {
  return (
    <section className={className}>
      <TitleBar
        type="docs"
        level="2"
        title={
          <>
            {titleLabel}{' '}
            <Text as="strong" color="point">
              {data.length}
            </Text>
          </>
        }
        side={
          <TextButton variant="underline" size="1" onClick={onClickAdd}>
            새로 등록하기
          </TextButton>
        }
        className="ncp-mt-m"
      />
      <PaymentMethodCardList
        data={data}
        mode="view"
        viewDefaultId={viewDefaultId}
        onChangeViewDefault={onChangeViewDefault}
        onDeleteViewItem={onDeleteViewItem}
        className="ncp-mt-m"
      />
      {links && links.length > 0 && (
        <>
          <Line variant="bold" margin="3" />
          <LinkSet items={links} />
        </>
      )}
    </section>
  );
}
