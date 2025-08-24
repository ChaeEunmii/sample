'use client';

import { useState } from 'react';
import { Tabs, TextList, Link } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import UserInfoForm from '@views/mypage/order/history/components/UserInfoForm';
import styles from './TheHyundaiOrderHistory.module.scss';

export default function TheHyundaiOrderHistory() {
  // 탭
  const tabItems = [{ label: 'H.Point 통합회원' }, { label: '더현대닷컴회원' }];
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <Container showBack title="더현대/투홈 과거 주문 내역 조회">
      <Contents className={styles.layout}>
        <Tabs data={tabItems} activeTab={clickedTab} onTabChange={setClickedTab} />
        {/* H.Point 통합회원 */}
        {clickedTab === 0 && (
          <>
            <UserInfoForm />
          </>
        )}
        {/* 더현대닷컴회원 */}
        {clickedTab === 1 && (
          <>
            <UserInfoForm />
          </>
        )}
        <TextList
          data={[
            '과거 더현대닷컴 통합회원 로그인 정보를 입력해 주세요.',
            <>
              인증이 되지 않는다면, 고객센터{' '}
              <Link
                href="tel:01012345678"
                variant="underline"
                type="inline"
                className={styles.call}
              >
                1800-2233
              </Link>
              으로 문의 부탁드려요.
            </>,
          ]}
          variant="info"
          className="ncp-mt-xl"
        />
      </Contents>
    </Container>
  );
}
