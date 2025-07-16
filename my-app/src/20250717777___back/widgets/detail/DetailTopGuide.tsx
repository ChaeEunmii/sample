import { Collapse, Line, Text, TextList, Tooltip } from '@/shared/ui';
import { mockDelivery } from '@/mocks/detail';

import styles from './DetailTopGuide.module.scss';

export const DetailTopGuide = () => {
  const deliveryData = mockDelivery.map((item, idx) => ({
    ...item,
    id: `${item.title}-${idx}`,
    tip: item.title === '스토어픽' || item.title === '방문픽업',
    data: item.data.map((text) => ({
      text,
      textProps: { size: '4', color: 'gray2' } as const,
    })),
  }));

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
      {/* 추가 혜택 */}
      <Collapse variant="clear" defaultOpen={true}>
        <Collapse.Control arrowSize="small" className={styles.wrapControl}>
          <Text as="strong" size="5" weight="semibold" className={styles.title}>
            추가 혜택
          </Text>
        </Collapse.Control>
        {/* TODO: 기획 확인 후 수정 필요 */}
        <Collapse.Content className={styles.benefits}>
          <>기획 확인 후 아코디언으로</>
        </Collapse.Content>
      </Collapse>

      {/* 구분선 */}
      <Line margin="6" className={styles.line} />

      {/* 배송 안내 */}
      <Collapse variant="clear" defaultOpen={true}>
        <Collapse.Control arrowSize="small" className={styles.wrapControl}>
          <Text as="strong" size="5" weight="medium" className={styles.title}>
            배송 안내
          </Text>
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

DetailTopGuide.displayName = 'DetailTopGuide';
