'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { Loading, ButtonArea, Button, Table, Text, Icon, Flag } from '@shared/ui';
import { TrackProcessCount } from '@/views/hbss/delivery/track/components/TrackProcessCount';
import styles from './DeliveryTrack.module.scss';
import { mockTrackReceiverData } from '@mocks/hbss';

export default function DeliveryTrackReceiver() {
  // 테이블 데이터
  const tableData = mockTrackReceiverData;
  // 테이블 행 클릭 핸들러
  const handleClick = (item: (typeof mockTrackReceiverData)[number]) => {
    console.log(`${item.id} 클릭`);
  };

  // Flag 렌더하는 함수
  const renderFlag = (item: (typeof mockTrackReceiverData)[number]) => {
    // '배송정보 확인중'일 때만 노출 샘플
    if (item.status !== '배송정보 확인중') return null;

    const handleFlagClick = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation(); // 행 클릭 방지
      console.log(`${item.receiver} 주소입력 클릭`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
        handleFlagClick(e as unknown as React.MouseEvent<HTMLSpanElement>);
      }
    };

    return (
      <span
        className={styles.flagWrap}
        role="button"
        tabIndex={0}
        aria-label="주소 입력하기"
        onClick={handleFlagClick}
        onKeyDown={handleKeyDown}
      >
        <Flag data={{ color: 'gray4', label: '주소입력' }} />
      </span>
    );
  };

  return (
    <Container title="현대백화점 명절 배송 조회">
      <Contents className={styles.layout}>
        {/* 단계표시 */}
        <TrackProcessCount
          type="receiver"
          currentKey="verify"
          counts={{ verify: 100, prepare: 99, shipping: 12, complete: 64 }}
          margin="2"
        />
        {/* 테이블 */}
        <div className={styles.trackTbl}>
          <Table variant="separate">
            <Table.Caption>배송 조회 테이블로 보내시는 분, 배송상태를나타냅니다.</Table.Caption>
            <Table.ColGroup>
              <col style={{ width: '94px' }} />
              <col />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.Cell colHeader>보내시는 분</Table.Cell>
                <Table.Cell colHeader className="ncp-text-left">
                  배송상태
                </Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {tableData.map((item) => {
                const onActivate = () => handleClick(item);
                // a11y props
                const a11y = (focusable = false) => ({
                  role: 'button' as const,
                  tabIndex: focusable ? 0 : -1,
                  'aria-label': '배송정보 자세히 보기',
                  onClick: onActivate,
                  onKeyDown: focusable
                    ? (e: React.KeyboardEvent) => e.key === 'Enter' && onActivate()
                    : undefined,
                });

                return (
                  <Table.Row key={item.id} className={styles.rowClickable}>
                    <Table.Cell {...a11y(true)} className="ncp-text-left">
                      <Text color="primary" weight="semibold">
                        {item.receiver}
                      </Text>
                    </Table.Cell>
                    <Table.Cell {...a11y()} className="ncp-text-left">
                      <span className={styles.arrowTxt}>
                        <span className={styles.txt}>
                          {item.status}
                          {renderFlag(item)}
                        </span>
                        <Icon name="arrowRight" size="xsmall" className={styles.tblArrow} />
                      </span>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
        <Loading isLoading className={styles.loading} />
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          닫기
        </Button>
      </ButtonArea>
    </Container>
  );
}
