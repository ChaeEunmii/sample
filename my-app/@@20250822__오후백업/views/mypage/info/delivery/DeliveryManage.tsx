'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, ButtonArea, Button, Heading, Text } from '@shared/ui';
import { UnmaskInfoBlock } from '@views/mypage/info/delivery/components/UnmaskInfoBlock';
import styles from './DeliveryManage.module.scss';

export default function DeliveryManage() {
  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [{ label: '국내 배송지' }, { label: '해외 배송지' }];

  return (
    <Container showBack title="배송지 관리" flush>
      <Contents className={styles.layout}>
        <Tabs
          activeTab={activeIndex}
          onTabChange={(i) => setActiveIndex(i)}
          data={tabItems}
          className={styles.tabs}
        />
        {/* 국내 배송지 */}
        {activeIndex === 0 && (
          <>
            {/* 마스크해제 안내영역*/}
            <UnmaskInfoBlock
              onUnmaskClick={() => {
                console.log('마스킹 해제!!');
              }}
            />
            {/* 목록 */}
            <div className={styles.list}>
              <div className={styles.item}>
                <Heading className={styles.tit}>우리집</Heading>
                <div className={styles.cont}>
                  <div className={styles.top}>
                    <div className={styles.info}>
                      <Text as="span" size="5" weight="semibold" className={styles.name}>
                        김*대
                      </Text>
                      <Text as="span" size="3" weight="semibold" color="point">
                        기본 배송지
                      </Text>
                    </div>
                    <Text as="span" size="5" className={styles.phone}>
                      010-****-5678
                    </Text>
                    <Text as="span" color="gray2">
                      [06181] 서울특별시 강남구 테헤란로 32-1 강남 푸르지오 헤리티지 리버뷰 아파트
                      1004동 1004호
                    </Text>
                  </div>
                  <div className={styles.bottom}>
                    <Text as="span" size="4" indent>
                      새벽배송 오후 7시이후
                    </Text>
                    <Text as="span" size="4" indent>
                      공동현관 비밀번호 1004#
                    </Text>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <Heading className={styles.tit}>직장</Heading>
                <div className={styles.cont}>
                  <div className={styles.top}>
                    <div className={styles.info}>
                      <Text as="span" size="5" weight="semibold" className={styles.name}>
                        김*대
                      </Text>
                      <Text as="span" size="3" weight="semibold" color="point">
                        기본 배송지
                      </Text>
                    </div>
                    <Text as="span" size="5" className={styles.phone}>
                      010-****-5678
                    </Text>
                    <Text as="span" color="gray2">
                      [06181] 서울특별시 강남구 테헤란로 32-1 강남 푸르지오 헤리티지 리버뷰 아파트
                      1004동 1004호
                    </Text>
                  </div>
                  <div className={styles.bottom}>
                    <Text as="span" size="4" indent>
                      새벽배송 오후 7시이후
                    </Text>
                    <Text as="span" size="4" indent>
                      공동현관 비밀번호 1004#
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* 해외 배송지 */}
        {activeIndex === 1 && <>456</>}
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          배송지 추가
        </Button>
      </ButtonArea>
    </Container>
  );
}
