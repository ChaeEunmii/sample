'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, ButtonArea, Button, Loading, Table, Icon, Text } from '@shared/ui';
import { TrackProcessCount } from '@/views/hbss/delivery/track/components/TrackProcessCount';
import styles from './DeliveryTrack.module.scss';
import { mockTrackSenderData } from '@mocks/hbss';

export default function DeliveryTrackSender() {
  // 테이블 데이터
  const tableData = mockTrackSenderData;
  // 테이블 행 클릭 핸들러
  const handleClick = (item: (typeof mockTrackSenderData)[number]) => {
    console.log(`${item.id} 클릭`);
  };

  return (
    <Container title="현대백화점 명절 배송 조회">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              고객님의 선물 요청 총 279건 중<br />
              99건 배송완료
            </>
          }
          className="ncp-mb-x0"
        />
        {/* 단계표시 */}
        <TrackProcessCount
          currentKey="apply"
          counts={{ apply: 100, verify: 99, prepare: 24, shipping: 78, complete: 0 }}
        />
        {/* 테이블 */}
        <div className={styles.trackTbl}>
          <Table variant="separate">
            <Table.Caption>
              배송 조회 테이블로 전표번호/접수번호, 받으시는 분, 배송상태를나타냅니다.
            </Table.Caption>
            <Table.ColGroup>
              <col style={{ width: '146px' }} />
              <col />
              <col style={{ width: '31%' }} />
            </Table.ColGroup>
            <Table.Head>
              <Table.Row>
                <Table.Cell colHeader>
                  <Text>전표번호/접수번호</Text>
                </Table.Cell>
                <Table.Cell colHeader>받으시는 분</Table.Cell>
                <Table.Cell colHeader>배송상태</Table.Cell>
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
                    <Table.Cell {...a11y(true)}>{item.id}</Table.Cell>
                    <Table.Cell {...a11y()}>
                      <Text color="primary" weight="semibold">
                        {item.receiver}
                      </Text>
                    </Table.Cell>
                    <Table.Cell {...a11y()}>
                      <span className={styles.arrowTxt}>
                        <span className={styles.txt}>{item.status}</span>
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
