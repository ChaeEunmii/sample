'use client';

import { useState } from 'react';
import { Tabs } from '@shared/ui';
import UserInfoForm from '@views/mypage/order/history/components/UserInfoForm';

export default function TohomeLoginForm() {
  // 탭
  const tabItems = [{ label: 'H.Point 통합회원' }, { label: '투홈 일반회원' }];
  const [clickedTab, setClickedTab] = useState(0);

  return (
    <div>
      <Tabs data={tabItems} activeTab={clickedTab} onTabChange={setClickedTab} />
      {/* H.Point 통합회원 */}
      {clickedTab === 0 && (
        <>
          <UserInfoForm />
        </>
      )}
      {/* 투홈 일반회원 */}
      {clickedTab === 1 && (
        <>
          <UserInfoForm />
        </>
      )}
    </div>
  );
}
