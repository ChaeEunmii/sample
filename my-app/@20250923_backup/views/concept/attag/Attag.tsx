'use client';

// import { useState, useEffect } from 'react';
import { Text } from '@shared/ui';
import { Container, Contents } from '@widgets/layout/Container';
import {
  AT_BN_TX_01,
  CO_BN_CD_02,
  CO_BN_CD_11,
  CO_BP_CD_01,
  CO_BTP_CD_01,
  ML_ATTAG_BN_003,
  ML_ATTAG_BN_002,
  CO_TP_CD_01,
} from '@widgets/display';
import { ML_B_COLLECTION_001 } from '@/widgets/brand/display/ML_B_COLLECTION_001';
import { TextBanner } from '@widgets/banner/TextBanner';
import styles from './Attag.module.scss';

// 임시 데이터
import { mockBannerList, mockBannerList2, mockBannerTabs } from '@/mocks/banner';
import { mockProdBanner } from '@mocks/product';
import { mockBrandStore } from '@/mocks/shopmain';

export default function Attag() {
  return (
    <Container showBack type="basket">
      <Contents>
        <TextBanner
          data={[
            {
              title:
                '브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 ',
              subtitle:
                '브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 브랜드명 최대 2줄 노출 후 말줄임 ',
              href: '#',
            },
            {
              title: 'ARTS DE BASE',
              subtitle: '아드베스',
              href: '#',
            },
          ]}
          variant="arrow"
          color="gray"
          reverse
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ML_ATTAG_BN_002
          data={{
            title: {
              text: 'SALOMON X SANDY LIANG XT-6 10% OFF',
              color: '#FFFFFF',
            },
            subtitle: {
              text: '더현대닷컴 단독 25 SUMMER SALE 살로몬 X 샌디리앙 10% 세일이 시작되었습니다.',
              color: '#FFFFFF',
            },
            // image: {
            //   src: '/images/dummy/@sample_banner_01.png',
            //   alt: 'dd',
            // },
            href: '#',
            color: '#000000',
          }}
        />
        <AT_BN_TX_01
          data={{
            title: {
              text: '배너 타이틀은 최대 2줄까지 표현됩니다. 모듈 타이틀은 색상이 조절가능하며 2줄이 넘으면 말줄임 표시',
              color: 'red',
            },
            subtitle: {
              text: '서브 타이틀은 최대 2줄까지 표현됩니다. 모듈 서브 타이틀은 색상이 조절가능하며 2줄이 넘어갈 경우 말줄임으로 표현 됩니다.',
              color: 'rgba(255, 255, 255, 0.6)',
            },
            href: '#',
            color: '#000000',
            keywords: ['PERFUME', 'FRANCE', 'NEW'],
          }}
        />
        <Text>검색영역</Text>
        <div className={styles.layout}>
          <CO_BN_CD_02 data={mockBannerList} />
          <CO_BN_CD_11 title="FEATURED NOW" data={mockBrandStore} showGem margin="6" />
          <Text>AT_BN_TX_01</Text>
          <CO_BP_CD_01
            title="BOLD AND EASY"
            banner={mockBannerList2[0]}
            products={mockProdBanner.slice(0, 3)}
            layout="vert"
            margin="6"
          />
          <p>---------------- 아직 대기 ----------------</p>
          <ML_B_COLLECTION_001 />
          <CO_TP_CD_01
            title="계절과 시대의 초월, 데님"
            moreUrl="#"
            tabs={mockBannerTabs}
            data={mockProdBanner}
            rows={1}
            margin="6"
          />
          <Text>AT_BN_TX_01</Text>
          <ML_ATTAG_BN_003
            title="EXCLUSIVE OFFERS"
            subtitle="신규 런칭 최저가 특가 타임딜"
            moreUrl="#"
            tabs={mockBannerTabs.map(({ id, label }) => ({ id, label }))}
            data={[
              {
                title: { text: 'ARTS DE BASE' },
                subtitle: { text: '아드베스' },
                href: '#',
              },
              {
                title: { text: 'ARTS DE BASE' },
                subtitle: { text: '아드베스' },
                href: '#',
              },
              {
                title: { text: 'ERR BY ERRORIST' },
                subtitle: { text: '에르바이에러리스트' },
                href: '#',
              },
              {
                title: { text: 'NACHE' },
                subtitle: { text: '나체' },
                href: '#',
              },
              {
                title: { text: 'GYOUREE KIM' },
                subtitle: { text: '규리킴' },
                href: '#',
              },
              {
                title: { text: 'GYOUREE KIM' },
                subtitle: { text: '규리킴' },
                href: '#',
              },
            ]}
            margin="6"
          />
          <CO_BTP_CD_01
            title="MODERN FUTURE STYLE"
            moreUrl="#"
            banner={mockBannerList2[0]}
            tabs={mockBannerTabs}
            products={mockProdBanner.slice(0, 4)}
            layout="vert"
            margin="6"
          />
        </div>
      </Contents>
    </Container>
  );
}
