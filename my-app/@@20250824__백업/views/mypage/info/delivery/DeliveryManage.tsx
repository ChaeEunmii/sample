'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Contents } from '@widgets/layout/Container';
import { Tabs, ButtonArea, Button, FormArea, FormItem, Select } from '@shared/ui';
import { UnmaskInfoBlock } from '@views/mypage/info/delivery/components/UnmaskInfoBlock';
import { DeliveryAddressList } from '@views/mypage/info/delivery/components/DeliveryAddressList';
import type { Lang } from '@views/mypage/info/delivery/components/DeliveryAddressItem';
import styles from './DeliveryManage.module.scss';
import { mockLocalAddresses, mockGlobalAddresses } from '@mocks/myinfo';

// 언어 선택 옵션
const LANGUAGE_OPTIONS = [
  { value: 'ko', label: '한국어' },
  { value: 'en', label: 'ENGLISH' },
  { value: 'zh', label: '中國語' },
  { value: 'ja', label: '日本語' },
];
// 버튼 라벨 설정 임시
const BTN: Record<Lang, string> = {
  ko: '배송지 추가',
  en: 'Add Address',
  zh: 'Add Address',
  ja: 'Add Address',
};

export default function DeliveryManage() {
  const searchParams = useSearchParams();
  // 데이터 없음 화면확인 경로설정용 코드 (추후 개발시 필요없으면 아래 조건에서 삭제)
  const isNoData = searchParams.has('nodata');
  const isGlobal = searchParams.has('tab2');

  // mock 데이터 가져오기
  const localAddressesData = isNoData ? [] : mockLocalAddresses;
  const globalAddressesData = isNoData ? [] : mockGlobalAddresses;

  // 언어 선택 상태
  const [langSelected, setLangSelected] = useState<Lang>('en');
  // 탭
  const [activeIndex, setActiveIndex] = useState(!isGlobal ? 0 : 1);
  const tabItems = [{ label: '국내 배송지' }, { label: '해외 배송지' }];

  // 현재 활성 탭, 선택언어에 따라 하단 버튼 라벨 결정
  const btnLabel = activeIndex === 0 ? BTN.ko : BTN[langSelected];

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
            <UnmaskInfoBlock onUnmaskClick={() => {}} />
            <DeliveryAddressList
              data={localAddressesData}
              onEdit={(item) => {
                console.log(`수정: ${item.id}`);
              }}
              onDelete={(item) => {
                console.log(`삭제: ${item.id}`);
              }}
            />
          </>
        )}
        {/* 해외 배송지 */}
        {activeIndex === 1 && (
          <>
            <UnmaskInfoBlock lang={langSelected} onUnmaskClick={() => {}} />
            <FormArea type="vertical" className={styles.form}>
              <FormItem label="Language">
                <Select
                  options={LANGUAGE_OPTIONS}
                  value={langSelected}
                  onChange={(v) => setLangSelected(v as Lang)}
                  size="large"
                />
              </FormItem>
            </FormArea>
            <DeliveryAddressList
              lang={langSelected}
              data={globalAddressesData}
              onEdit={(item) => {
                console.log(`수정: ${item.id}`);
              }}
              onDelete={(item) => {
                console.log(`삭제: ${item.id}`);
              }}
            />
          </>
        )}
      </Contents>
      <ButtonArea type="sticky">
        <Button variant="primary" size="large">
          {btnLabel}
        </Button>
      </ButtonArea>
    </Container>
  );
}
