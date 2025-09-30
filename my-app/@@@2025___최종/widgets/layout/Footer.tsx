'use client';

// 라이브러리
import { useState } from 'react';
// 컴포넌트
import { Button, Collapse, Drawer, Heading, Line, Link } from '@shared/ui';
import AppDownloadDialog from '@/widgets/etc/AppDownloadDialog';
// 스타일
import styles from './Footer.module.scss';
import clsx from 'clsx';

export const Footer = () => {
  const [isFamilySiteDialog, setIsFamilySiteDialog] = useState(false);
  const [isAppDownloadDialog, setIsAppDownloadDialog] = useState(false);
  const isRSVP = false;

  const contactUs = isRSVP
    ? {
        label: 'RSVP 고객센터',
        tel: '1800-7967',
        href: 'tel:1800-7967',
      }
    : {
        label: '고객센터',
        tel: '1800-2233',
        href: 'tel:1800-2233',
      };

  const policyLinks = [
    { label: '이용약관', href: '#' },
    { label: '개인정보 처리방침', href: '#', isStrong: true },
    { label: '청소년보호정책', href: '#' },
    { label: '입점신청', href: '#' },
  ];

  const snsLinks = [
    { label: '현대백화점 유튜브', href: '#', icon: 'youtube' },
    { label: '현대백화점 인스타그램', href: '#', icon: 'instagram' },
    { label: '현대백화점 페이스북', href: '#', icon: 'facebook' },
    { label: '더현대 티스토리', href: '#', icon: 'tstory' },
    { label: '현대백화점 네이버 블로그', href: '#', icon: 'blog' },
  ];

  const familySites = {
    shopping: [
      { label: '현대 Hmall', href: '#' },
      { label: '현대백화점 DUTY FREE', href: '#' },
      { label: '더한섬닷컴', href: '#' },
      { label: '현대리바트몰', href: '#' },
      { label: '현대렌탈케어', href: '#' },
      { label: 'H패션몰', href: '#' },
      { label: '현대어린이책미술관', href: '#' },
      { label: '그리팅', href: '#' },
      { label: '한섬EQL', href: '#' },
    ],
    affiliates: [
      { label: '현대백화점 그룹', href: '#' },
      { label: '현대백화점', href: '#' },
      { label: '현대홈쇼핑', href: '#' },
      { label: '현대그린푸드', href: '#' },
      { label: '한섬', href: '#' },
      { label: '현대리바트', href: '#' },
      { label: '지누스', href: '#' },
      { label: '현대L&C', href: '#' },
      { label: '현대렌탈케어', href: '#' },
      { label: '현대드림투어', href: '#' },
      { label: '현대에버다임', href: '#' },
      { label: '씨엔에스푸드시스템', href: '#' },
      { label: '현대캐터링시스템', href: '#' },
      { label: '현대퓨처넷', href: '#' },
      { label: '현대이지웰', href: '#' },
      { label: '현대바이오랜드', href: '#' },
      { label: '현대벤디스', href: '#' },
    ],
  };

  return (
    <footer id="footer" className={styles.root}>
      <div className={styles.web}>
        <Button onClick={() => setIsAppDownloadDialog(true)}>앱 다운로드</Button>
        <Button variant="primary">로그인</Button>
      </div>
      <div className={styles.inner}>
        <Collapse>
          <Collapse.Control className={styles.corpControl}>(주)현대백화점</Collapse.Control>
          <Collapse.Content className={styles.corpContent}>
            <p className={clsx(styles.text, styles.address)}>
              현대백화점 대표이사 : 정지선, 정지영
              <br />
              주소 : 서울시 강남구 테헤란로98길 12
              <br />
              홈페이지 / 앱 문의 : customerservice@thehyundai.com
              <br />
              {contactUs.label} :{' '}
              <Link href={`tel:${contactUs.tel}`} className={styles.link}>
                {contactUs.tel}
              </Link>
              <br />
              사업자등록번호 : 211-87-21455{' '}
              <Link
                href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2118721455&newWindow=Y"
                target="_blank"
                className={styles.link}
              >
                사업자정보 확인
              </Link>
              <br />
              통신판매업신고 : 2010-서울강남-01882 <br />
              호스팅서비스 : (주)현대백화점{' '}
              <Link href="#" className={styles.link}>
                우리은행 채무지급 보증안내
              </Link>
            </p>
            <p className={styles.text}>
              오픈마켓 상품(개별 판매자 상품)인 경우 상품정보, 거래에 대한 책임은 판매자가 부담하고,
              더현대닷컴은 통신 판매중개자로서 의무와 책임을 다합니다.
            </p>
            <p className={styles.text}>
              고객님은 안전거래를 위해 구매안전 서비스를 이용하실 수 있습니다.
              <br />
              <Link
                href="https://consumer.tosspayments.com/escrow/detail?mertid=MID"
                target="_blank"
                className={styles.link}
              >
                토스페이먼츠 가입 확인
              </Link>
            </p>
          </Collapse.Content>
        </Collapse>

        <ul className={styles.policyLinks}>
          {policyLinks.map(({ label, href, isStrong }) => (
            <li key={label}>
              <Link href={href}>
                {isStrong ? <strong className="ncp-color-gray1">{label}</strong> : label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.meta}>
          <Button
            size="xsmall"
            suffixIcon="arrowRight"
            round
            onClick={() => setIsFamilySiteDialog(true)}
          >
            FAMILY SITE
          </Button>
          <ul className={styles.snsLinks}>
            {snsLinks.map(({ label, href, icon }) => (
              <li key={label}>
                <Link href={href} className={clsx(styles.snsIcon, styles[icon])}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className={styles.copyright}>
            CopyrightⓒHyundai Department Store. All rights reserved.
          </p>
        </div>

        <div className={styles.logo}>
          <img src="/images/logo_thehyundai.svg" className={styles.logoImage} />
        </div>
      </div>

      {/* 앱다운로드(L) */}
      <AppDownloadDialog
        isOpen={isAppDownloadDialog}
        onClose={() => setIsAppDownloadDialog(false)}
      />

      {/* 패밀리사이트(L) */}
      <Drawer
        title="FAMILY SITE"
        isOpen={isFamilySiteDialog}
        onClose={() => setIsFamilySiteDialog(false)}
      >
        <Heading size="5">쇼핑몰 SITE</Heading>
        <ul className={styles.siteLinks}>
          {familySites.shopping.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} target="_blank">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Line margin="3" />
        <Heading size="5">관계사 SITE</Heading>
        <ul className={styles.siteLinks}>
          {familySites.affiliates.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} target="_blank">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </footer>
  );
};
