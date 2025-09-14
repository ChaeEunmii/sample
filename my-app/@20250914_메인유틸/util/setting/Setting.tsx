'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { Text, TitleBar, ButtonArea, Button, Line, TextButton, Switch } from '@shared/ui';
import { SettingItem } from './SettingItem';
import styles from './Setting.module.scss';

// 각 스위치별 초기값, 이벤트 처리를 정의
const SWITCH_CONFIG = {
  autoLogin: { handler: (v: boolean) => console.log('자동로그인:', v), default: false },
  attendancePush: { handler: (v: boolean) => console.log('출석 알림:', v), default: false },
  marketingPush: { handler: (v: boolean) => console.log('마케팅 알림:', v), default: false },
  nightPush: {
    handler: (v: boolean) => {
      console.log('심야 알림:', v);
      alert(`심야 알림이 ${v ? '켜졌습니다' : '꺼졌습니다'}`);
    },
    default: true,
  },
  silentPush: { handler: (v: boolean) => console.log('무음 알림:', v), default: false },
  restockAlert: { handler: (v: boolean) => console.log('재입고 알림:', v), default: false },
} as const;

// SWITCH_CONFIG의 key들을 타입으로 추출
type SwitchId = keyof typeof SWITCH_CONFIG;

export default function Setting() {
  // config 기반 스위치 초기 상태 세팅
  const [sw, setSw] = useState<Record<SwitchId, boolean>>(
    Object.fromEntries(
      Object.entries(SWITCH_CONFIG).map(([id, { default: def }]) => [id, def])
    ) as Record<SwitchId, boolean>
  );

  // 스위치 공통 변경 핸들러
  const onSwitch =
    (id: SwitchId): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const checked = e.target.checked;
      setSw((s) => ({ ...s, [id]: checked }));
      SWITCH_CONFIG[id].handler(checked);
    };

  return (
    <Container showBack title="설정">
      <Contents className={styles.layout}>
        <TitleBar type="docs" title="로그인 정보" />
        <ButtonArea margin="1">
          <Button>로그인</Button>
        </ButtonArea>
        <Line margin="4" variant="bold" />
        <ul className={styles.list}>
          <li className={styles.item}>
            <SettingItem
              sectionTitle="로그인 설정"
              title={
                <Text as="label" htmlFor="autoLogin">
                  자동로그인 설정
                </Text>
              }
              titleBottom={
                <TextButton size="1" variant="underline" color="gray3">
                  로그아웃
                </TextButton>
              }
              side={
                <Switch id="autoLogin" checked={sw.autoLogin} onChange={onSwitch('autoLogin')} />
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              sectionTitle="알림 설정"
              title={
                <Text as="label" htmlFor="attendancePush">
                  출석 이벤트 PUSH 알림
                </Text>
              }
              description="매일 오전 출석체크 참여 알림을 받아보실 수 있습니다."
              side={
                <Switch
                  id="attendancePush"
                  checked={sw.attendancePush}
                  onChange={onSwitch('attendancePush')}
                />
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              title={
                <Text as="label" htmlFor="marketingPush">
                  마케팅 PUSH 알림
                </Text>
              }
              description="알찬 쇼핑정보 혜택/이벤트를 바로바로 알려드릴게요."
              side={
                <Switch
                  id="marketingPush"
                  checked={sw.marketingPush}
                  onChange={onSwitch('marketingPush')}
                />
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              title={
                <Text as="label" htmlFor="nightPush">
                  심야 PUSH 알림
                </Text>
              }
              description={`심야시간에 발송되는 알림을 받으실 수 있습니다.\n오후 09:00 ~ 오전 08:00`}
              side={
                <Switch id="nightPush" checked={sw.nightPush} onChange={onSwitch('nightPush')} />
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              title={
                <Text as="label" htmlFor="silentPush">
                  무음으로 알림
                </Text>
              }
              description="활성화 시, 소리와 진동없이 알림을 수신합니다."
              side={
                <Switch id="silentPush" checked={sw.silentPush} onChange={onSwitch('silentPush')} />
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              title={
                <Text as="label" htmlFor="restockAlert">
                  재입고 알림 설정
                </Text>
              }
              description="품절상품 재입고 알림 신청시 해당 상품의 입고시점에 입고 알림을 받으실 수 있습니다."
              side={
                <Switch
                  id="restockAlert"
                  checked={sw.restockAlert}
                  onChange={onSwitch('restockAlert')}
                />
              }
              titleBottom={
                <TextButton size="1" variant="underline" color="gray3">
                  재입고 알림 관리
                </TextButton>
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              sectionTitle="기타설정"
              title="캐시 삭제"
              description="캐시에 임시 저장된 데이터를 삭제합니다."
              bottom={
                <TextButton size="1" variant="underline" color="inherit">
                  삭제
                </TextButton>
              }
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              sectionTitle="버전정보"
              title="버전정보 2.9.30"
              description="최신버전입니다."
            />
          </li>
          <li className={styles.item}>
            <SettingItem
              title="버전정보 2.9.30"
              description="최신버전 2.9.30"
              bottom={
                <TextButton size="1" variant="underline" color="inherit">
                  업데이트
                </TextButton>
              }
            />
          </li>
        </ul>
      </Contents>
    </Container>
  );
}
