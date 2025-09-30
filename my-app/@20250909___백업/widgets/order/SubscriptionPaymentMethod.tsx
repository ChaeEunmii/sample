'use client';

import React from 'react';
import clsx from 'clsx';
import {
  Text,
  Box,
  InfoList,
  InfoItem,
  ButtonArea,
  Button,
  Stack,
  TextList,
  Empty,
  Icon,
} from '@/shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import styles from './SubscriptionPaymentMethod.module.scss';

interface BrandInfo {
  displayName: string;
  logoSrc: string;
}

const BRAND_INFO: Record<string, BrandInfo> = {
  hyundai: {
    displayName: '현대카드',
    logoSrc: '/images/card/logo_hyundai_card.svg',
  },
  hyundaiDepartment: {
    displayName: '현대백화점카드',
    logoSrc: '/images/card/logo_thehyundai_card.svg',
  },
  woori: {
    displayName: '우리카드',
    logoSrc: '/images/card/logo_woori_card.svg',
  },
};

export interface SubscriptionPayment {
  id: string;
  label: string;
  cardNumber: string;
  brand: string;
}

interface SubscriptionPaymentMethodProps {
  /** 정기구독 결제 수단 */
  methods?: SubscriptionPayment[];
  /** collapse 사용 안하는 경우 */
  hideCollapse?: boolean;
  /** 신청 완료 페이지인지 확인 */
  isComplete?: boolean;
  /** 보더 상단처리 여부 */
  borderTop?: boolean;
  /** collapse Heading 레벨 설정 */
  level?: '1' | '2';
  /** 처음부터 열려 있는지 여부 */
  defaultOpen?: boolean;
}

export const SubscriptionPaymentMethod = ({
  methods,
  hideCollapse = false,
  isComplete = false,
  borderTop = false,
  level = '2',
  defaultOpen = true,
}: SubscriptionPaymentMethodProps) => {
  return (
    <>
      <Section
        title="정기구독 결제 수단"
        variant={hideCollapse ? 'normal' : 'collapse'}
        flush
        borderTop={borderTop}
        level={level}
        defaultOpen={defaultOpen}
      >
        {methods && methods.length > 0 ? (
          <>
            <Box size="3" margin="0">
              <InfoList variant="stacked" gridColumns="auto" gap="row24">
                {methods.map((method, index) => {
                  const brandInfo = BRAND_INFO[method.brand] || {
                    displayName: method.brand,
                    logoSrc: '/images/card/logo_hyundai_card.svg',
                  };

                  return (
                    <InfoItem
                      key={method.id}
                      title={<Text color="gray2">{index + 1}순위</Text>}
                      content={
                        <>
                          <Stack type="between">
                            <div>
                              <Text weight="medium" color="gray1">
                                {method.label}
                              </Text>
                              <Text color="gray3" className="ncp-mt-xxs">
                                {method.cardNumber}
                              </Text>
                            </div>
                            <div
                              className={clsx(styles.card, method.brand && styles[method.brand])}
                            >
                              <img src={brandInfo.logoSrc} alt={`${brandInfo.displayName} 로고`} />
                            </div>
                          </Stack>
                        </>
                      }
                    />
                  );
                })}
              </InfoList>
            </Box>
            {isComplete ? (
              <Text size="3" color="gray3" className="ncp-mt-x6">
                <Icon name="caution" size="small" className="ncp-mr-xxs" />
                정해진 일정에 따라 위 결제 수단 중 하나로 자동 결제가 됩니다.
              </Text>
            ) : (
              <>
                <ButtonArea margin="3">
                  <Button variant="secondary">결제 수단 관리</Button>
                </ButtonArea>
                <TextList
                  data={[
                    '현대백화점 카드는 일부  상품에서  결제 수단으로 사용할 수 없습니다. 등록 시 유의해 주세요.',
                    '결제 수단을 삭제하기 위해서는 진행 중인 구독을 모두 해지해 주셔야 합니다.',
                  ]}
                  variant="info"
                  margin="2"
                />
              </>
            )}
          </>
        ) : (
          <Empty
            title="정기구독을 위한 결제수단을 등록해 주세요"
            buttons={
              <>
                <Button variant="primary">새 결제수단 등록하기</Button>
              </>
            }
            variant="minDisplay"
          />
        )}
      </Section>
    </>
  );
};
SubscriptionPaymentMethod.displayName = 'SubscriptionPaymentMethod';
