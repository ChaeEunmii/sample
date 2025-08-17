import {
  Accordion,
  Collapse,
  Heading,
  Line,
  Link,
  Tag,
  Text,
  TextList,
  Tooltip,
} from '@/shared/ui';
import { mockDelivery, mockSubscriptionDelivery } from '@/mocks/detail';
import { useEffect, useState } from 'react';
import { useProdDetail } from '@widgets/detail/detailContext/ProdDetailContext';

import styles from './BenefitDelivery.module.scss';
import clsx from 'clsx';

type BenefitData = { label: string; content: React.ReactNode; id: string };

export const BenefitDelivery = () => {
  const { item, prodDetailType } = useProdDetail();

  // 퍼블 화면 확인용 목데이터 교체
  const mockData = prodDetailType === 'subscription' ? mockSubscriptionDelivery : mockDelivery;

  const deliveryData = mockData.map((item, idx) => ({
    ...item,
    id: `${item.title}-${idx}`,
    tip: item.title === '스토어픽' || item.title === '방문픽업',
    data: item.data.map((text) => ({
      text,
      textProps: { size: '4', color: 'gray2' } as const,
    })),
  }));

  // 추가 혜택 데이터 생성 함수
  const [extraBenefit, setExtraBenefit] = useState<BenefitData[]>([]);
  useEffect(() => {
    setExtraBenefit(getExtraBenefitData(item));
  }, [item]);
  const getExtraBenefitData = (item: any) => {
    const extraBenefitData = [];

    // MD프로모션 > 혜택구분 : H.point > 대상상품 인 경우, 해당 설정에 맞는 적립예정 point 노출
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '구매시 H.point 000p 적립',
        content: (
          <div className={styles.hpoint}>
            <dl className={styles.table}>
              <div className={styles.row}>
                <dt>구매 적립</dt>
                <dd>600P</dd>
              </div>
              <div className={styles.row}>
                <dt>클럽포인트 적립</dt>
                <dd>50P</dd>
              </div>
              <hr />
              <div className={styles.total}>
                <dt>
                  <Text as="strong" size="4" weight="medium">
                    총 구매 적립
                  </Text>
                </dt>
                <dd>
                  <Text as="strong" size="4" weight="medium">
                    650P
                  </Text>
                </dd>
              </div>
            </dl>
            <Text as="strong" size="4" weight="medium">
              H.Point 적립안내
            </Text>
            <Text size="4" color="gray2" className={styles.text2}>
              전국 H.Point 제휴사와 제휴 가맹점 이용 시 포인트를 쌓고 사용할 수있는 적립형 포인트
              입니다.
            </Text>
            <TextList
              className={styles.textlist}
              data={[
                '유효기간 : 지급일로 부터 2년',
                <Link key="hpoint-2" href="#" variant="underline">
                  H.Point란? (상세안내 및 회원가입 바로가기)
                </Link>,
                'KB제휴카드 결제 시 최대 1.5% 추가적립',
              ]}
            />
          </div>
        ),
        id: 'benefit-1',
      });
    }

    // 전체상품 노출
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '[KB제휴카드] H.point 최대 1.5% 추가적립',
        content: <div>내용 추후 update</div>,
        id: 'benefit-2',
      });
    }

    // 자사카드 > 명품 상품군 노출
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '[현대백화점카드] 명품 마일리지 최대 0.1% 적립',
        content: (
          <div className={styles.hyundaiCard}>
            <Text size="4" weight="medium">
              현대백화점 카드로 결제 시 자동 적립되는 VIP 마일리지입니다.
            </Text>
            <Text size="4" color="gray2">
              적립 대상 브랜드는 아래 상세 내역에서 확인
            </Text>
            <Link href="#" target="_blank" variant="underline" className={styles.link}>
              VIP 마일리지 적립이란?
            </Link>
          </div>
        ),
        id: 'benefit-3',
      });
    }

    // 자사카드 > 명품외 상품군 노출
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '[현대백화점카드] 명품 마일리지 최대 0.1% 적립',
        content: (
          <div className={styles.hyundaiCard}>
            <Text size="4" weight="medium">
              현대백화점 카드로 결제 시 자동 적립되는 VIP 마일리지입니다.
            </Text>
            <Text size="4" color="gray2">
              적립 대상 브랜드는 아래 상세 내역에서 확인
            </Text>
            <Link href="#" target="_blank" variant="underline" className={styles.link}>
              VIP 마일리지 적립이란?
            </Link>
          </div>
        ),
        id: 'benefit-4',
      });
    }

    // 프로모션 노출기간 내 진입
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '프로모션 안내',
        content: (
          <div className={styles.promotion}>
            <div className={styles.tags}>
              <Tag variant="outlined">현대백화점 7%</Tag>
              <Tag variant="outlined">현대백화점 7%</Tag>
              <Tag variant="outlined">현대백화점 7%</Tag>
            </div>
            <Text size="4" weight="medium">
              직접입력 프로모션 문구 100byte 노출 영역 프로모션 문구가 노출됩니다.
            </Text>
            <Text size="4" color="gray2">
              웹노출프로모션 문구 200 byte 노출 말줄입없이 전부 다 노출될 영역입니다. ... (생략)
            </Text>
          </div>
        ),
        id: 'benefit-5',
      });
    }

    // 무이자할부 안내
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '무이자할부 안내',
        content: <div>추후 update</div>,
        id: 'benefit-6',
      });
    }

    // 회원 등급별 적립안내
    if (/* 조건 */ true) {
      extraBenefitData.push({
        label: '회원 등급별 적립안내',
        content: <div>추후 update</div>,
        id: 'benefit-7',
      });
    }

    return extraBenefitData;
  };

  /** 배송 안내 툴팁 내부 렌더링 */
  const renderTooltip = (title: string) => {
    switch (title) {
      case '스토어픽':
        return (
          <Text size="3" weight="semibold">
            구매 후 백화점 매장에 직접 방문하여 상품을 수령(픽업) 하셔야 합니다.
          </Text>
        );
      case '방문픽업':
        return (
          <>
            <Text size="3" weight="semibold">
              매장 방문 픽업 안내 매장에서 직접 픽업하는 서비스
            </Text>
            <Text size="3" weight="regular">
              주문 후 상품이 준비되면 주문예약 문자를 발송해 드립니다. 지정하신 날짜에 매장 방문하여
              상품을 픽업해 주세요.
            </Text>
            <TextList
              data={[
                {
                  text: '주류 상품은 신분증 확인이 필요하니, 신분증을 꼭 지참해서 방문해 주세요.',
                  textProps: { size: '3', color: 'white', weight: 'regular' },
                },
              ]}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {prodDetailType !== 'subscription' && (
        <>
          {/* 추가 혜택 */}
          <Collapse variant="clear" defaultOpen={true}>
            <Collapse.Control arrowSize="small" className={styles.wrapControl}>
              <Heading as="h2" size="3" weight="semibold" className={styles.title}>
                추가 혜택
              </Heading>
            </Collapse.Control>
            <Collapse.Content className={styles.benefits}>
              <Accordion
                data={extraBenefit}
                variant="inner"
                labelAs="strong"
                itemClassName={styles.accordion}
              />
            </Collapse.Content>
          </Collapse>

          {/* 구분선 */}
          <Line margin="6" className={styles.line} />
        </>
      )}
      {/* 배송 안내 */}
      <Collapse
        variant="clear"
        defaultOpen={true}
        className={clsx(prodDetailType === 'subscription' && styles.deliveryInfo)}
      >
        <Collapse.Control arrowSize="small" className={styles.wrapControl}>
          <Heading as="h2" size="3" weight="semibold" className={styles.title}>
            배송 안내
          </Heading>
        </Collapse.Control>
        <Collapse.Content className={styles.deliverys}>
          {deliveryData.map((item) => (
            <div key={item.id} className={styles.delivery}>
              <div className={styles.title}>
                <Text
                  size="4"
                  weight="semibold"
                  color={item.title !== '택배배송' ? 'point' : 'gray1'}
                >
                  {item.title}
                </Text>
                {item.tip && (
                  <Tooltip
                    className={styles.tip}
                    placement="bottom"
                    align="start"
                    iconProps={{ size: 'xsmall', className: styles.tipIcon }}
                    boxClass={styles.tipBox}
                  >
                    {renderTooltip(item.title)}
                  </Tooltip>
                )}
              </div>
              <TextList variant="clear" className={styles.note} data={item.data} />
            </div>
          ))}
        </Collapse.Content>
      </Collapse>
    </>
  );
};

BenefitDelivery.displayName = 'BenefitDelivery';
