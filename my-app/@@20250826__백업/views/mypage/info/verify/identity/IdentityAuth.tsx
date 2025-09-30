'use client';

import { Container, Contents } from '@widgets/layout/Container';
import { TitleArea, Heading, Icon, Image } from '@shared/ui';
import styles from './IdentityAuth.module.scss';

const authItems = [
  { src: '/images/auth_phone.svg', label: '휴대폰', type: 'phone' },
  { src: '/images/auth_naver.svg', label: 'NAVER', type: 'naver' },
  { src: '/images/auth_kakao.svg', label: 'KAKAO', type: 'kakao' },
  { src: '/images/auth_toss.svg', label: 'TOSS', type: 'toss' },
];

export default function IdentityAuth() {
  const handleClick = (type: string) => {
    console.log(`${type} 인증 진행`);
  };

  return (
    <Container showBack title="본인인증">
      <Contents>
        <TitleArea
          title={
            <>
              자주 사용하시는
              <br />
              본인인증 수단을 선택해주세요!
            </>
          }
        />
        <ul className={styles.auths}>
          {authItems.map(({ src, label, type }) => (
            <li key={label}>
              <button type="button" onClick={() => handleClick(type)} className={styles.btn}>
                <div className={styles.tit}>
                  <Image src={src} alt={`${label} 인증 아이콘`} className={styles.icon} />
                  <Heading size="2" weight="semibold" color="primary" align="left">
                    {label}
                  </Heading>
                </div>
                <Icon size="xsmall" name="arrowRight" className={styles.arrow} />
              </button>
            </li>
          ))}
        </ul>
      </Contents>
    </Container>
  );
}
