'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, ButtonArea, Button, Collapse, TextList, Heading, Line } from '@shared/ui';
import styles from './MyVoucher.module.scss';
import { mockVoucherCards } from '@mocks/mypage';
import { VoucherType } from '@views/mypage/myvoucher/components/VoucherCard';
import { VoucherCardList } from '@views/mypage/myvoucher/components/VoucherCardList';

// 탭
//  type: 'voucher' as const, //바우처
//  type: 'coupon' as const, //방문 쿠폰
//  type: 'reservation' as const, //방문 예약
//  type: 'trialApplied' as const, //체험/신청
export const tabItems: { label: string; type: VoucherType | 'all' }[] = [
  { label: '전체', type: 'all' },
  { label: '바우처', type: 'voucher' },
  { label: '방문 쿠폰', type: 'coupon' },
  { label: '방문 예약', type: 'reservation' },
  { label: '체험/신청', type: 'trialApplied' },
];

export default function MyVoucher() {
  // 탭
  const [clickedTab, setClickedTab] = useState(0);
  // 탭이 'all'이면 전체, 아니면 해당 타입만 필터링
  const currentType = tabItems[clickedTab].type;
  const filteredListData = mockVoucherCards.filter(
    (item) => currentType === 'all' || item.type === currentType
  );

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
          data={tabItems}
          variant="buttons"
          activeTab={clickedTab}
          onTabChange={setClickedTab}
          className={styles.tabs}
        />
        {/* 바우처 목록 */}
        <VoucherCardList data={filteredListData} />
        <div className={styles.btns}>
          <Button size="small" suffixIcon="arrowDown" variant="tertiary" round>
            더보기
          </Button>
        </div>
        {/* 확인해주세요 */}
        <Line color="bg2" />
        <Collapse variant="section">
          <Collapse.Control>
            <Heading size="5">확인해주세요</Heading>
          </Collapse.Control>
          <Collapse.Content>
            <TextList
              data={[
                '체험/신청 신청 건수는 오늘 기준 한달 전까지의 신청 내역 중 신청 취소를 제외한 수 입니다.',
                '목록은 신청하신 내역 전체가 조회됩니다.',
              ]}
              variant="info"
            />
          </Collapse.Content>
        </Collapse>
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          바우처 전체보기
        </Button>
      </ButtonArea>
    </Container>
  );
}
