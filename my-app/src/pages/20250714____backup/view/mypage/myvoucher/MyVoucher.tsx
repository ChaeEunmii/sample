'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs } from '@shared/ui';
import styles from './MyVoucher.module.scss';

// 탭
export const tabItems = [
  { label: '전체' },
  { label: '적립' },
  { label: '적립예정' },
  { label: '사용' },
  { label: '소멸' },
];

export default function MyVoucher() {
  // 탭
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <Container showBack title="마이 바우처">
      <Contents className={styles.layout}>
        <Tabs
          data={[
            {
              content: <p>탭 1의 내용입니다. 기본으로 활성화된 탭입니다.</p>,
              label: '사용가능',
            },
            {
              content: <p>탭 2의 내용입니다.</p>,
              label: '사용완료/만료/취소',
            },
          ]}
          defaultActive={0}
          variant="default"
        />
        <Tabs
          data={[
            {
              content: <p>탭 1의 내용입니다. 기본으로 활성화된 탭입니다.</p>,
              label: '전체',
            },
            {
              content: <p>탭 2의 내용입니다.</p>,
              label: '바우처',
            },
            {
              content: <p>탭 2의 내용입니다.</p>,
              label: '방문쿠폰',
            },
            {
              content: <p>탭 2의 내용입니다.</p>,
              label: '방문예약',
            },
            {
              content: <p>탭 2의 내용입니다.</p>,
              label: '체험/신청',
            },
          ]}
          defaultActive={0}
          variant="buttons"
        />
      </Contents>
    </Container>
  );
}
