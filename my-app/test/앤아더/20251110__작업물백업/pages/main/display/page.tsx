'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Heading } from '@shared/ui';
import { ImageHero, TextHero, MultiHero, TmplTwoColumn, TmplThreeColumn, TmplFourColumn } from '@views/main/components';
import FreeHtml from '@/views/freehtml/FreeHtml';

import { Products } from '@views/product/dummy/ProdData';

function SearchParamsWrapper({ children }: { children: (component: string | null) => React.ReactNode }) {
  const searchParams = useSearchParams();
  const component = searchParams.get('component');

  return <>{children(component)}</>;
}

// Components
export default function DynamicComponent() {
  const renderComponent = (component: string | null) => {
    switch (component) {
      case 'imageHero':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">01. ImageHeroComponent</Heading>
            <ImageHero
              image={{
                type: 'image',
                pc: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174007.jpg?ver=05261930',
                mobile:
                  'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
              }}
              href="#"
              texts={{
                leadText: 'New Summer Style',
                title: 'Summer Collection',
                description: 'Discover the latest trends in our summer collection.',
                footNote: 'Limited time offer!',
              }}
            />
          </>
        );

      case 'textHero':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">02. TextHeroComponent</Heading>
            <TextHero paddingTop={20} paddingBottom={20}>
              <TextHero.Heading size="3">새롭게 만나는 시그니처 백</TextHero.Heading>
              <TextHero.Description
                size="6" //고정사이즈
              >
                넉넉한 수납공간부터 세련된 스웨이드 토트백까지, 모든 필수품을 담을 수 있도록 디자인된 앤아더스토리즈의
                새로운 시그니처백을 만나보세요.
              </TextHero.Description>
              <TextHero.Description color={'#ed8888'} size={15} weight="bold" serif>
                넉넉한 수납공간부터 세련된 스웨이드 토트백까지, 모든 필수품을 담을 수 있도록 디자인된 앤아더스토리즈의
                새로운 시그니처백을 만나보세요.
              </TextHero.Description>
            </TextHero>
          </>
        );

      case 'multiHero':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">03. MultiHeroComponent (영상가능)</Heading>
            <MultiHero
              title="Multi Hero Component"
              leadText="New Summer Style"
              href="#"
              image={{
                type: 'image',
                pc: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174007.jpg?ver=05261930',
                mobile:
                  'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
              }}
              buttonProps={{
                label: 'Shop Now',
                onClick: () => console.log('Button clicked!'),
              }}
            />
            <MultiHero
              title="Multi Hero Component"
              leadText="New Summer Style"
              href="#"
              image={{
                type: 'video',
                pc: 'https://www.w3schools.com/html/mov_bbb.mp4',
                mobile: 'https://www.w3schools.com/html/mov_bbb.mp4',
              }}
              buttonProps={{
                label: 'Shop Now',
                onClick: () => console.log('Button clicked!'),
              }}
            />
          </>
        );

      case 'tmplTwoColumn':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">04. TmplTwoColumn</Heading>
            <TmplTwoColumn
              data={[
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174007.jpg?ver=05261930',
                  },
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                    description: 'Check out the latest additions to our collection.',
                    footLink: { label: 'View More' },
                  },
                  href: '#',
                  variant: 'boxed',
                  size: 'large',
                },
              ]}
            />
          </>
        );

      case 'tmplThreeColumn':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">05. TmplThreeColumn</Heading>
            <TmplThreeColumn
              data={[
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                    description: 'Check out the latest additions to our collection.',
                    footLink: { label: 'View More' },
                  },
                  href: '#',
                  variant: 'lowered',
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                    description: 'Check out the latest additions to our collection.',
                    footLink: { label: 'View More' },
                  },
                  href: '#',
                  variant: 'boxed',
                },
              ]}
            />
          </>
        );

      case 'tmplFourColumn':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">06. TmplFourColumn</Heading>
            <TmplFourColumn
              visuals={[
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                    description: 'Check out the latest additions to our collection.',
                    footLink: { label: 'View More' },
                  },
                  href: '#',
                  variant: 'lowered',
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                    description: 'Check out the latest additions to our collection.',
                    footLink: { label: 'View More' },
                  },
                  href: '#',
                  variant: 'boxed',
                },
                {
                  image: {
                    type: 'image',
                    src: 'https://image.thehyundai.com/static/image/sect/hnm/hnmmain2850591020250521174012.jpg?ver=05261930',
                  },
                  texts: {
                    leadText: 'Explore Our New Arrivals',
                    title: 'New Arrivals',
                  },
                  href: '#',
                },
              ]}
            />
            <TmplFourColumn products={Products} />
          </>
        );

      case 'FreeHtml':
        return (
          <>
            <Heading className="ut-mt-xl ut-mb-s">FreeHTML</Heading>
            <FreeHtml>
              <div>FreeHTML - 자유롭게 HTML을 작성하는 컴포넌트</div>
            </FreeHtml>
          </>
        );
    }
  };

  return (
    <Suspense>
      <SearchParamsWrapper>{(component) => renderComponent(component)}</SearchParamsWrapper>
    </Suspense>
  );
}
