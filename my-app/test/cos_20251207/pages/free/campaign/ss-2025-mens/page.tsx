'use client';

// import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';
import { CategoryFilter, FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

// export const metadata: Metadata = {
//   title: 'Spring Summer 2025 Menswear - COS KR',
// };

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250226140320.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250226140320.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            ></div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250226140330.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250226140330.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className=" flex-col self-center items-center text-balance text-block  theme-block-dark w-full pointer-events-none"
            >
              <div className="flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            ></div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-align-center">
          <div className="headign-section">
            <h1
              className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current  "
              style={{ cursor: 'default' }}
            >
              SPRING <br />
              SUMMER 2025
            </h1>
          </div>
        </div>
        <div className="chips">
          <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
            <a href="#collection">컬렉션</a>
            <a href="#cast">캠페인 모델</a>
            <a href="#megazine">매거진</a>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.chips {\n    display: block;\n    width: 100%;\n    margin: 0 auto;\n}\n.chips a {\n    display: inline-block;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: .0825em;\n    cursor: pointer;\n    padding: 10px 12px 6px;\n    margin: 4px 4px 8px 0;\n    color: #1b1b1b;\n    font-size: 12px;\n    line-height: 17px;\n}\n   .scrollable-content {  position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center; display:flex; justify-content:center; gap:10%;}\n@container root (max-width: 767px) {\n    .chips .scrollable-content {\n        flex-direction: column;\n    }\n}\n@container root (max-width: 767px) {\n    .chips a {\n        text-align: left;\n    }\n}\n',
          }}
        />
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
      </FreeHtml>
      <CategoryFilter data={[]} />
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
        ]}
      />
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 testtesttesttest">
          <hr className="a-keyline" />
        </div>
        <div className=" u-align-center" style={{ paddingBottom: 16 }}>
          <div className="headign-section">
            <h1 className="a-heading-1 q-giga2 sub-title" style={{ cursor: 'default' }}>
              캠페인 모델
            </h1>
          </div>
        </div>
        <div id="cast" />
        <div className="text-2cols">
          <p />
          <p>
            <i>
              <b>애드리언 브로디</b>
            </i>
            <br />
            <br />
            ​배우 애드리언 브로디와 모델 클레망 샤베르노, 박태민, 그리고 바디엘 냥이 포토그래퍼 카림 사들리가 촬영한
            캠페인에서 새로운 시즌의 무드를 선사합니다.
          </p>
        </div>
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.jacquard-straight-leg-trousers-navy---striped.1265510001.html?slitmCd=40A2059300"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140518.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140518.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className=" flex-col self-center items-center text-balance text-block  theme-block-dark w-full pointer-events-none"
            >
              <div className="flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.jacquard-straight-leg-trousers-navy---striped.1265510001.html?slitmCd=40A2059300"
              >
                자카드 스트레이트 레그 트라우저
              </a>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/men/coats-jackets.html">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140532.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140532.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/men/coats-jackets.html"
              >
                코트 &amp; 재킷
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.cos.com/ko-kr/men/new-arrivals.html"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative',
            textDecoration: 'none',
          }}
        >
          <div
            className="pc"
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '62.4871%',
            }}
          >
            <iframe
              data-id="9e5aa851-d33e-464e-8324-f6664d90eab8"
              src="https://thd-play.livehyundai.com/video/9e5aa851-d33e-464e-8324-f6664d90eab8?loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="THE DAILY UNIFORM"
            ></iframe>
            <div
              className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
              style={{
                color: '#fff',
                position: 'absolute',
                top: '85%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
              }}
            />
          </div>
        </a>
        <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative' }}>
          <iframe
            data-id="b6f258bd-4cfb-40ee-b251-9785d53a4367"
            src="https://thd-play.livehyundai.com/video/b6f258bd-4cfb-40ee-b251-9785d53a4367?loop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title=" THE DAILY UNIFORM"
          ></iframe>
          <a
            href="https://www.cos.com/ko-kr/men/new-arrivals.html"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              textDecoration: 'none',
            }}
          />
          <div
            className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
            style={{
              color: '#fff',
              top: '75%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 15,
              width: '99%',
            }}
          >
            <a href="https://www.cos.com/ko-kr/men/new-arrivals.html">{/* <p>신상품</p>*/}</a>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    .mo {\n        display: none;\n    }\n\n    .pc {\n        display: block;\n    }\n\n    @container root (max-width: 1025px) {\n        .pc {\n            display: none;\n        }\n\n        .mo {\n            display: block;\n        }\n    }\n',
          }}
        />
        {/* 영상 재생 */}
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.relaxed-double-breasted-wool-blazer-camel.1265498001.html?slitmCd=40A2041594"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140547.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140547.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.relaxed-double-breasted-wool-blazer-camel.1265498001.html?slitmCd=40A2041594"
              >
                릴랙스드 더블 브레스티드 울 블레이저
              </a>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.water-repellent-harrington-jacket-beige.1265469002.html?slitmCd=40A2020001"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140557.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140557.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.water-repellent-harrington-jacket-beige.1265469002.html?slitmCd=40A2020001"
              >
                워터 리펠런트 해링턴 재킷
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 " style={{ width: '100%' }} id="megazine">
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image leftside-wrap"
            data-link="https://www.cos.com/ko-kr/features/people/the-many-layers-ss25.html"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <div className="leftside">
              <div style={{ fontWeight: 'bold', fontSize: 32 }}>
                ‘제가 경험하고 느낀 모든 것이 쌓여 연기가 완성된다고 생각해요.’
              </div>
              <div>배우 애드리언 브로디</div>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/features/people/the-many-layers-ss25.html"
            >
              <video
                className="hidden-new lg:block object-cover object-top w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  id="video"
                  src="https://image.thehyundai.com/cos/hyundai/2025/2/21/SS25_ADRIEN BRODY_CREATIVITY_1080x1350_Cronus_V01.mp4"
                />
              </video>
              <video className="lg:hidden h-full w-full object-cover" autoPlay muted loop playsInline>
                <source
                  id="video"
                  src="https://image.thehyundai.com/cos/hyundai/2025/2/21/SS25_ADRIEN BRODY_CREATIVITY_1080x1350_Cronus_V01.mp4"
                />
              </video>
            </a>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '50%',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className=" flex-col self-center items-center text-balance text-block  theme-block-dark w-full pointer-events-none"
            >
              <div className="flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/features/people/the-many-layers-ss25.html"
              >
                매거진 보러가기
              </a>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n        .leftside {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            max-width: 50%;\n        }\n\n        @container root (max-width: 767px) {\n            .leftside {\n                margin: auto;\n                width: calc(100% - 20px);\n                max-width: unset;\n            }\n\n            .leftside-wrap {\n                height: 50vh !important;\n            }\n        }\n    ',
            }}
          />
        </div>
        <div className="grid grid-cols-12 " style={{ width: '100%' }}>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a className="pointer-events-auto" href="https://www.cos.com/ko-kr/men/shirts.html">
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140614.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653740020250224140614.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/men/shirts.html"
              >
                셔츠
              </a>
            </div>
          </div>
          <div
            className="relative col-span-12 lg:col-span-6  theme-block-dark scroll-item pointer-events-auto venCpn-image"
            style={{
              overflow: 'hidden',
              maxHeight: 'calc(-50px + 100vh)',
              height: 'calc(-50px + 100vh)',
            }}
          >
            <a
              className="pointer-events-auto"
              href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.merino-wool-v-neck-cardigan-navy.1263815002.html?slitmCd=40A2057671"
            >
              <img
                alt=""
                className="hidden-new lg:block h-full w-full object-cover object-top"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140626.jpg"
              />
              <img
                alt=""
                className="lg:hidden h-full w-full object-cover"
                data-nimg="fill"
                src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2653741020250224140626.jpg"
              />
            </a>
            <div
              style={{
                position: 'absolute',
                right: '50%',
                bottom: '5rem',
                transform: 'translateX(50%)',
                zIndex: 1,
              }}
              className="theme-block-dark w-full pointer-events-none "
            >
              <div className="text-block flex items-center justify-center text-center gap-5 lg:gap-15 flex-col lg:flex-row pointer-events-none"></div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 15,
                left: 20,
                color: '#fff',
                zIndex: 1,
              }}
              className="inline-flex items-center gap-2 font_small_s_semibold font-semibold text-block pointer-events-none"
            >
              <a
                style={{ color: '#ffffff' }}
                className="!text-block font_small_s_semibold font-semibold pointer-events-auto"
                href="https://www.cos.com/ko-kr/campaign/spring-summer-2025-menswear/product.merino-wool-v-neck-cardigan-navy.1263815002.html?slitmCd=40A2057671"
              >
                메리노 울 브이넥 가디건
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.cos.com/ko-kr/runway/spring-summer-2025.html"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'relative',
            textDecoration: 'none',
            clear: 'both',
          }}
        >
          <div
            className="pc"
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '62.5%',
            }}
          >
            <iframe
              data-id="199fb0e2-bac6-400d-b375-242943bb2edd"
              src="https://thd-play.livehyundai.com/video/199fb0e2-bac6-400d-b375-242943bb2edd?noTitle&noControl&noLike&loop"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              title="SPRING SUMMER 2025"
            ></iframe>
            <div
              className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
              style={{
                color: '#fff',
                position: 'absolute',
                top: '80%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <h3
                className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop  text-current"
                style={{ fontSize: '4.625rem' }}
              >
                SPRING SUMMER 2025
                <br />
                RUNWAY
              </h3>
              <p style={{ fontSize: '1.8rem', fontWeight: 600, marginTop: '3rem' }}>
                APRIL 02, ATHENS
                <br />
                8PM KST
              </p>
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
              }}
            />
          </div>
        </a>
        <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative' }}>
          <iframe
            data-id="9b29e39a-afd7-45b2-b8f6-093f4d771362"
            src="https://thd-play.livehyundai.com/video/9b29e39a-afd7-45b2-b8f6-093f4d771362?noTitle&noControl&noLike&loop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title="COS_FESTIVE_24_WOMAN_10_LOOP_16x10_ONLINE_H264_UNDER_500KB"
          ></iframe>
          <a
            href="https://www.cos.com/ko-kr/runway/spring-summer-2025.html"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 10,
              textDecoration: 'none',
            }}
          />
          <div
            className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20"
            style={{
              color: '#fff',
              top: '75%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 15,
              width: '99%',
            }}
          >
            <h3 className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current">
              SPRING SUMMER
              <br />
              2025 RUNWAY
            </h3>
            <p style={{ fontSize: '1rem', marginTop: '1.5rem', fontWeight: 600 }}>
              APRIL 02, ATHENS
              <br />
              8PM KST
            </p>
          </div>
        </div>
        <div className="lg:pt-20 pt-15 grid grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 pt-30">
          <button
            id="next-category-product-list"
            className=" m-0 p-0 appearance-none bg-main-button text-main relative border-main-button border cursor-button font_small_xs_medium hover:border-main-button-hover w-full z-0 col-start-1 col-end-13 mx-auto mb-15 h-[3.125rem] max-w-md overflow-hidden lg:col-start-5 lg:col-end-9"
            type="button"
            data-link="/free/campaign/ss-2025-womens"
          >
            <div
              aria-valuemax={48}
              aria-valuemin={0}
              aria-valuenow={48}
              className="loading-button relative z-10 flex h-full items-center justify-center"
              style={{}}
              id="next-category-product-style"
            >
              <a style={{ lineHeight: '1.5em', fontWeight: 500 }} className="bg-clip-text mix-blend-difference">
                여성 캠페인 보러가기
              </a>
            </div>
          </button>
        </div>
        {/* Menu bottom */}
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
          <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 bg-block text-block pb-10 lg:pb-15">
            <h2 className="font_small_m_semibold lg:font_small_m_semibold col-span-full col-start-1 mx-auto mb-10 max-w-full text-center text-black">
              EXPLORE MORE
            </h2>
            <div className="col-start-1 col-end-13 grid w-full lg:col-start-3 lg:col-end-11">
              <ul
                className="mb-9 flex h-full w-full flex-col justify-between font_small_s_semibold lg:mb-0 lg:grid lg:flex-row lg:gap-5 grid-cols-4"
                id="explore-list"
              >
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/men/new-arrivals.html">신상품</a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/men/new-accessories.html">액세서리</a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/men/coats-jackets.html">코트 &amp; 재킷</a>
                </li>
                <li style={{}} className="pb-5 lg:text-center ">
                  <a href="https://www.cos.com/ko-kr/men/trousers.html">트라우저</a>
                </li>
              </ul>
            </div>
            <button
              className="lg:text-center text-justify font_small_l_regular col-span-full col-start-1 mt-10 max-w-full  text-black border-0 hover:font_small_s_semibold hidden-new"
              id="btn-load-explore-more"
              // onclick="onClickLoadMore()"
            >
              더보기 +4
            </button>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n#category-list {\n  padding: 0;\n}\n\n#category-list+div {\npadding: 0;\n}@container root (min-width: 1024px) {\n.a-heading-1 {\npadding-bottom: 20px;\n}\n}\n\n.pt-30{padding-top: 3.75rem !important;}\n',
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '@container root (max-width: 1023px) {\n\n.headign-section h1.sub-title {\ntext-align: left;\npadding-left: 20px;\n}\n}\n\n',
              }}
            />
          </div>
        </div>
      </FreeHtml>
    </>
  );
}
