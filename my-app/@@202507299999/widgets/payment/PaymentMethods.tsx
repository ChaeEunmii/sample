'use client';

import { useState, useEffect } from 'react';
import {
  Text,
  Radio,
  Chip,
  ButtonArea,
  Button,
  FormArea,
  FormItem,
  Input,
  Tabs,
  Select,
  Checkbox,
  IconButton,
} from '@shared/ui';
import { Section } from '@/shared/ui/blocks/Section';
import { PaymentDisabledMsgBox } from '@/widgets/payment/PaymentDisabledMsgBox';
import { EscrowInfoDialog } from './EscrowInfoDialog';
import { VoucherInfoDialog } from './VoucherInfoDialog';
import { PaymentMethodSwiper } from './PaymentMethodSwiper';
import styles from './PaymentMethods.module.scss';

interface PaymentMethodsProps {
  /** 제목 텍스트 */
  sectionTitle?: string;
  /** 우측에 표시할 추가 요소 (예: 상태 텍스트) */
  sectionSuffix?: React.ReactNode;
  /** 레이아웃 형태 ('collapse' | 'normal') */
  sectionVariant?: 'collapse' | 'normal';
  /** 좌우 패딩 제거 여부 */
  sectionFlush?: boolean;
}

// 임시 데이터 (결제수단)
import { paymentMethods } from './payment';
// Options
import { payOptions, globalPayOptions } from './PaymentMethodsOptions';
import { MethodSelectDrawer } from './MethodSelectDrawer';

export const PaymentMethods = ({
  sectionTitle,
  sectionSuffix,
  sectionVariant,
  sectionFlush,
}: PaymentMethodsProps) => {
  const [isMethodSelectDrawerOpen, setIsMethodSelectDrawerOpen] = useState(false);
  const [isEscrowInfoDialogOpen, setIsEscrowInfoDialogOpen] = useState(false);
  const [isVoucherInfoDialogOpen, setIsVoucherInfoDialogOpen] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  // 결제수단 선택 라디오 목록
  const [radioSelected, setRadioSelected] = useState('option1');
  // 상품권 결제 라디오
  const [voucherSelected, setVoucherSelected] = useState('voucher1');
  // 상품권 결제 탭
  const [voucherTab, setVoucherTab] = useState(0);
  // 일반+간편 결제
  const [standardPaySelect, setStandardPaySelect] = useState<string>('card');
  // 글로벌 결제
  const [GlobalPaySelect, setGlobalPaySelect] = useState<string>('paypal');
  // 선택 된 카드 disabled 여부
  const [isDisabledCard, setIsDisabledCard] = useState(false);

  // 현재 선택된 카드 ID 상태 (초기값은 'card1' 카드 ID 혹은 첫 번째 카드 ID)
  const [selectedCardId, setSelectedCardId] = useState(() => {
    if (!paymentMethods || paymentMethods.length === 0) return null;
    return paymentMethods.find((m) => m.id === 'card1')?.id || paymentMethods[0].id;
  });

  // 기본 결제수단으로 지정된 카드 ID 상태 (초기값 없음)
  const [defaultCardId, setDefaultCardId] = useState<string | null>(null);

  // 각 카드별 옵션 선택 상태 저장 (할부, 쿠폰, 무이자 쿠폰 등)
  const [cardSelections, setCardSelections] = useState<
    Record<
      string,
      {
        coupon?: string;
        noInterestCoupon?: string;
        installment?: string;
      }
    >
  >({});

  // 카드 선택 시 선택된 카드 ID 저장
  const handleCardSelect = (id: string) => {
    setSelectedCardId(id);
    //console.log('카드 선택 시 선택된 카드 ID: ', id);
  };

  // 카드 옵션(할부, 쿠폰 등) 변경 시 해당 카드 ID에 옵션 정보 업데이트
  const handleOptionChange = (
    id: string,
    selection: { coupon?: string; noInterestCoupon?: string; installment?: string }
  ) => {
    setCardSelections((prev) => ({
      ...prev,
      [id]: selection,
    }));
    //console.log('옵션 변경: ', id, selection);
  };

  // 기본 결제수단 변경 시 상태 업데이트 (null 입력 시 빈 문자열로 설정)
  const handleDefaultChange = (id: string | null) => {
    setDefaultCardId(id || '');
    //console.log('기본 결제수단 ID: ', id);
  };

  // 일반+간편결제 핸들러
  const handleStandardPaySelect = (value: string) => {
    setStandardPaySelect(value);
  };

  // 글로벌결제 핸들러
  const handleGlobalPay = (value: string) => {
    setGlobalPaySelect(value);
  };

  // 결제수단 선택 Drawer 핸들러
  const handleOpenDrawer = () => {
    setIsMethodSelectDrawerOpen(true);
  };

  // 현재 선택 된 카드 disabled 카드여부
  const selectedDisabledCard = paymentMethods.find((m) => m.id === selectedCardId)?.disabled;
  // 현재 선택된 카드 결제불가 상태 업데이트
  useEffect(() => {
    if (selectedDisabledCard) {
      setIsDisabledCard(true);
    } else {
      setIsDisabledCard(false);
    }
  }, [selectedDisabledCard, isDisabledCard]);

  // 상품권 사용 시 가족 목록
  const voucherFamilyTab = [
    {
      label: '1234 (김*대)',
      onClick: () => setVoucherTab(0),
    },
    {
      label: '4567 (김*송)',
      onClick: () => setVoucherTab(1),
    },
    {
      label: '5678 (김*탁)',
      onClick: () => setVoucherTab(2),
    },
    {
      label: '1234 (김*대)',
      onClick: () => setVoucherTab(3),
    },
    {
      label: '4567 (김*송)',
      onClick: () => setVoucherTab(4),
    },
    {
      label: '5678 (김*탁)',
      onClick: () => setVoucherTab(5),
    },
  ];

  return (
    <>
      <Section
        title={sectionTitle ?? '결제수단'}
        suffix={
          sectionSuffix !== undefined ? (
            sectionSuffix
          ) : swiperIndex !== paymentMethods.length ? (
            <span className={styles.state}>
              {(() => {
                if (!selectedCardId) return '선택안함';

                const selectedCard = paymentMethods.find((m) => m.id === selectedCardId);
                if (!selectedCard) return '선택안함';

                const options = cardSelections[selectedCardId] || {};
                const installmentLabel = options.installment;

                // 할부 옵션이 없으면 카드명만, 있으면 카드명 + (할부)
                return installmentLabel
                  ? `${selectedCard.label} (${installmentLabel})`
                  : selectedCard.label;
              })()}
            </span>
          ) : null
        }
        variant={sectionVariant ?? 'collapse'}
        flush={sectionFlush ?? false}
        defaultOpen
        defaultSuffix
        className={styles.paymentMethods}
      >
        {/* 카드 결제불가 상태 시 */}
        {isDisabledCard && radioSelected === 'option1' && (
          <div className={styles.padded}>
            <PaymentDisabledMsgBox
              title="현대카드 결제 불가 안내"
              content={
                <>
                  현대카드 정기점검으로 아래 기간동안 결제 불가하니
                  <br />
                  다른 결제수단 이용 부탁드립니다.
                </>
              }
              bottom="일시 : 4/1 01:00 ~ 4/1 05:00"
            />
          </div>
        )}
        <ul className={styles.methods}>
          <li>
            <div className={styles.radio}>
              <Radio
                name="controlled"
                value="option1"
                label={
                  <>
                    <img src="/images/logo_hpay.svg" alt="h pay" />
                    H.point Pay
                  </>
                }
                checked={radioSelected === 'option1'}
                onChange={(e) => setRadioSelected(e.target.value)}
              />
            </div>
            {radioSelected === 'option1' && (
              <>
                <div className={styles.radioCont}>
                  <PaymentMethodSwiper
                    methods={paymentMethods}
                    selectedCardId={selectedCardId} // 현재 Swiper에서 선택된 카드 ID
                    defaultCardId={defaultCardId} // 기본결제수단 ID
                    cardSelections={cardSelections} // 각 카드의 옵션 상태 (installment, coupon 등)
                    onSelect={handleCardSelect}
                    onOptionChange={handleOptionChange}
                    onDefaultChange={handleDefaultChange}
                    onEmptyClick={handleOpenDrawer}
                    showAddCard
                    onSlideIndexChange={setSwiperIndex}
                  />
                </div>
              </>
            )}
          </li>
          <li>
            <div className={styles.radio}>
              <Radio
                name="controlled"
                value="option2"
                label="현대백화점 카드"
                checked={radioSelected === 'option2'}
                onChange={(e) => setRadioSelected(e.target.value)}
              />
            </div>
            {/* 현대백화점 카드 선택시 */}
            {radioSelected === 'option2' && (
              <>
                <div className={styles.radioCont}>
                  <div className={styles.padded}>
                    <ButtonArea className="ncp-mt-x0">
                      <Button>조회 (가족카드 혜택 적용 가능)</Button>
                    </ButtonArea>
                    <div>
                      <Tabs
                        className={styles.tabs}
                        data={voucherFamilyTab}
                        defaultActive={voucherTab}
                        variant="texts"
                      />
                      <FormArea type="vertical" className={styles.formArea}>
                        <FormItem label="할인쿠폰" side={<Text color="gray3">0원</Text>}>
                          <Select
                            onChange={() => {}}
                            options={[
                              {
                                label: '옵션 1',
                                value: 'coupon1',
                              },
                              {
                                label: '옵션 2',
                                value: 'coupon2',
                              },
                            ]}
                            value=""
                            placeholder="선택해 주세요"
                            size="large"
                          />
                        </FormItem>

                        <FormItem label="무이자쿠폰">
                          <Select
                            onChange={() => {}}
                            options={[
                              {
                                label: '옵션 1',
                                value: 'coupon1',
                              },
                              {
                                label: '옵션 2',
                                value: 'coupon2',
                              },
                            ]}
                            value=""
                            placeholder="선택해 주세요"
                            size="large"
                          />
                        </FormItem>
                        <FormItem label="할부선택">
                          <Select
                            onChange={() => {}}
                            options={[
                              {
                                label: '옵션 1',
                                value: 'coupon1',
                              },
                              {
                                label: '옵션 2',
                                value: 'coupon2',
                              },
                            ]}
                            value=""
                            placeholder="선택해 주세요"
                            size="large"
                          />
                        </FormItem>
                      </FormArea>
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
          <li>
            <div className={styles.radio}>
              <Radio
                name="controlled"
                value="option3"
                label="일반+간편 결제"
                checked={radioSelected === 'option3'}
                onChange={(e) => setRadioSelected(e.target.value)}
              />
            </div>
            {radioSelected === 'option3' && (
              <>
                <div className={styles.radioCont}>
                  <div className={styles.padded}>
                    <Chip
                      selected={standardPaySelect}
                      onChange={handleStandardPaySelect}
                      columns={3}
                      data={payOptions}
                      name="pay-items"
                    />
                    {/* 신용카드 선택시 */}
                    {standardPaySelect === 'card' && (
                      <>
                        <FormArea className={styles.formArea}>
                          <FormItem>
                            <Select
                              onChange={() => {}}
                              options={[
                                {
                                  label: '옵션 1',
                                  value: 'coupon1',
                                },
                                {
                                  label: '옵션 2',
                                  value: 'coupon2',
                                },
                              ]}
                              value=""
                              title="카드사 선택"
                              placeholder="선택해 주세요"
                              size="large"
                            />
                          </FormItem>
                          <FormItem>
                            <Select
                              onChange={() => {}}
                              options={[
                                {
                                  label: '옵션 1',
                                  value: 'coupon1',
                                },
                                {
                                  label: '옵션 2',
                                  value: 'coupon2',
                                },
                              ]}
                              value=""
                              title="할부 선택"
                              placeholder="선택해 주세요"
                              size="large"
                            />
                          </FormItem>
                        </FormArea>
                      </>
                    )}
                    {/* 무통장입금 선택시 */}
                    {standardPaySelect === 'bank' && (
                      <>
                        <div className={styles.checkInfo}>
                          <Checkbox label=" 에스크로 (결제대금예치) 신청" size="small" />
                          <IconButton
                            name="info"
                            size="small"
                            className={styles.infoBtn}
                            onClick={() => setIsEscrowInfoDialogOpen(true)}
                          >
                            안내
                          </IconButton>
                        </div>
                      </>
                    )}
                    {/* 상품권결제 선택시 */}
                    {standardPaySelect === 'voucher' && (
                      <>
                        <div className={styles.vouchers}>
                          <Radio
                            name="controlled2"
                            value="voucher1"
                            label="상품권 전액결제"
                            checked={voucherSelected === 'voucher1'}
                            onChange={(e) => setVoucherSelected(e.target.value)}
                          />
                          <Radio
                            name="controlled2"
                            value="voucher2"
                            label="상품권+신용카드"
                            checked={voucherSelected === 'voucher2'}
                            onChange={(e) => setVoucherSelected(e.target.value)}
                          />
                        </div>
                        <div className={styles.radioCont}>
                          <FormArea type="vertical">
                            <FormItem
                              label="상품권"
                              side={
                                <Text color="point" weight="semibold">
                                  결제 잔액 300,000원
                                </Text>
                              }
                              error={
                                voucherSelected === 'voucher1'
                                  ? '상품권 금액이 결제액보다 같거나 커야 합니다. (잔액은 예치금으로 충전)'
                                  : '결제 잔액은 신용카드로만 결제가능 합니다.'
                              }
                            >
                              <Input placeholder="선택해 주세요" size="large" />
                            </FormItem>
                          </FormArea>
                          <Text color="gray3" weight="medium" size="4" className={styles.infoTxt}>
                            <IconButton
                              name="info"
                              size="small"
                              className={styles.infoBtn}
                              onClick={() => setIsVoucherInfoDialogOpen(true)}
                            >
                              안내
                            </IconButton>
                            현대백화점 상품권을 온라인결제 시 사용하고 싶다면!
                          </Text>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </li>
          <li>
            <div className={styles.radio}>
              <Radio
                name="controlled"
                value="option4"
                label="해외결제 (Global payment)"
                checked={radioSelected === 'option4'}
                onChange={(e) => setRadioSelected(e.target.value)}
              />
            </div>
            {radioSelected === 'option4' && (
              <>
                <div className={styles.radioCont}>
                  <div className={styles.padded}>
                    <Chip
                      selected={GlobalPaySelect}
                      onChange={handleGlobalPay}
                      columns={3}
                      data={globalPayOptions}
                      name="global-pay-items"
                    />
                  </div>
                </div>
              </>
            )}
          </li>
        </ul>
      </Section>

      {/* 에스크로 안내 (L) */}
      <EscrowInfoDialog
        isOpen={isEscrowInfoDialogOpen}
        onClose={() => setIsEscrowInfoDialogOpen(false)}
      />

      {/* 지류 상품권 사용방법 (L) */}
      <VoucherInfoDialog
        isOpen={isVoucherInfoDialogOpen}
        onClose={() => setIsVoucherInfoDialogOpen(false)}
      />

      {/* 등록할 결제수단 선택 (L) */}
      <MethodSelectDrawer
        isOpen={isMethodSelectDrawerOpen}
        onClose={() => setIsMethodSelectDrawerOpen(false)}
      />
    </>
  );
};
PaymentMethods.displayName = 'PaymentMethods';
