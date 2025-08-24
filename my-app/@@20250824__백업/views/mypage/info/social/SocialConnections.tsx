'use client';

import { useState } from 'react';
import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, TextList, Image, Heading, TextButton, Text } from '@shared/ui';
import { ConfirmInfo } from '@views/mypage/components/ConfirmInfo';
import styles from './SocialConnections.module.scss';

const socialItems = [
  { src: '/images/auth_naver.svg', label: 'NAVER', account: 'abc****@naver.com', type: 'naver' },
  { src: '/images/auth_kakao.svg', label: 'KAKAO', account: 'abc****@naver.com', type: 'kakao' },
  { src: '/images/auth_toss.svg', label: 'TOSS', account: 'abc****@naver.com', type: 'toss' },
  {
    src: '/images/auth_facebook.svg',
    label: '페이스북',
    account: 'abc****@naver.com',
    type: 'facebook',
  },
  {
    src: '/images/auth_apple.svg',
    label: '애플 로그인',
    account: 'abc****@naver.com',
    type: 'apple',
  },
];

export default function SocialConnections() {
  // 등록 상태
  const [isRegistered, setIsRegistered] = useState(false);

  const handleClick = (type: string) => {
    console.log(`${type}`);
    setIsRegistered(!isRegistered);
  };

  return (
    <Container showBack title="간편계정 연결관리">
      <Contents className={styles.layout}>
        <TitleArea
          title={
            <>
              SNS 계정과 연동하여
              <br />
              간편 로그인
            </>
          }
        />
        <ul className={styles.socials}>
          {socialItems.map(({ src, label, account, type }) => (
            <li key={label}>
              <div className={styles.box}>
                <div className={styles.tit}>
                  <Image src={src} alt={`${label} 아이콘`} className={styles.icon} />
                  <div className={styles.side}>
                    <Heading size="2" weight="semibold" color="primary" align="left">
                      {label}
                    </Heading>
                    <Text as="span" size="3" color="gray2">
                      {account}
                    </Text>
                  </div>
                </div>
                <TextButton
                  size="1"
                  color="gray3"
                  suffixIcon="arrowRight"
                  onClick={() => handleClick(type)}
                  className={styles.arrow}
                >
                  {isRegistered ? '해제' : '등록'}하기
                </TextButton>
              </div>
            </li>
          ))}
        </ul>
        {/* 확인해주세요 */}
        <ConfirmInfo>
          <TextList
            data={[
              'SNS 및 네이버 계정과 연동하여 간편하게 로그인할 수 있는 기능을 설정/해제하실 수 있습니다.',
              '간편계정 연결의 해제는 단순히 간편계정 연동 로그인 기능만을 해제하는 것이며, 회원탈퇴가 되는 것은 아닙니다.',
              '간편계정 연결을 해제 하셔도 기존의 아이디(이메일), 비밀번호로 로그인하실 수 있습니다.',
              '회원탈퇴는 회원정보변경에서 회원탈퇴 메뉴를 통해 가능합니다.',
            ]}
            variant="info"
          />
        </ConfirmInfo>
      </Contents>
    </Container>
  );
}
