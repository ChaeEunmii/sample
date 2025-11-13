'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleArea, ButtonArea, Button, Tabs } from '@shared/ui';
import { HbssAuthForm } from '@views/hbss/components';
import styles from './DeliveryTrack.module.scss';

export default function DeliveryTrackVerify() {
  // 탭
  const [activeIndex, setActiveIndex] = useState(0);
  const tabItems = [{ label: '보내시는 분' }, { label: '받으시는 분' }];

  // 인증 상태
  const [isAuth, setIsAuth] = useState(false);
  // 입력값 상태
  const [form, setForm] = useState({
    name: '',
    phone: '',
    code: '',
  });
  // 입력 변경 시 상태 갱신
  const handleChange = (field: 'name' | 'phone' | 'code', value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    console.log(form);
  };
  // 인증번호 발송 처리
  const handleSendAuth = () => {
    setIsAuth(true);
  };

  return (
    <Container title="현대백화점 명절 배송 조회">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              고객님의 소중한 명절선물을 보다
              <br />
              안전하고 빠르게 배송하겠습니다
            </>
          }
          description={
            <Text as="span" size="5" color="gray2" weight="regular">
              보내시는 분 혹은 받으시는 분을 선택하신 뒤 본인 인증 버튼을 선택해 주세요.
            </Text>
          }
        />
        {/* 탭 */}
        <Tabs
          activeTab={activeIndex}
          variant="buttons"
          onTabChange={(i) => setActiveIndex(i)}
          data={tabItems}
          className="ncp-mt-l"
        />
        {/* 인증폼 */}
        <HbssAuthForm
          name={form.name}
          phone={form.phone}
          code={form.code}
          isAuth={isAuth}
          onChange={handleChange}
          onSendAuth={handleSendAuth}
          placeholders={{
            name: '이름을 입력해 주세요.',
            phone: '휴대폰 번호 입력 (01012345678)',
            code: '받으신 인증번호를 입력해 주세요.',
          }}
        />
      </Contents>
      {isAuth && (
        <ButtonArea type="sticky">
          <Button variant="primary" size="large">
            본인 인증
          </Button>
        </ButtonArea>
      )}
    </Container>
  );
}
