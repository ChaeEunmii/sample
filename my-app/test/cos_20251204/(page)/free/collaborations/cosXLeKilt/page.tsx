import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';
import { GridLayout } from '@shared/ui';
import { ProdCardItem } from '@views/product/components/ProdCard';

export const metadata: Metadata = {
  title: 'COS-x-le-kilt - COS KR',
};

// 제품 샘플 데이터
const ProductsNew = [
  {
    id: 'prod1',
    name: '레귤러 롱라인 리넨 블렌드 블레이저',
    price: 290000,
    order: 2,
    image: {
      src: '/images/dummy/@sample_img_01.jpg',
      alt: '',
    },
    colors: [
      {
        src: 'https://image.thehyundai.com/static/6/8/9/77/A1/hnm40A1779864_14_30.jpg',
        label: '샌디 베이지',
        value: 'sandy-beige',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="content-section">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
            <div className=" relative" style={{ maxWidth: 'unset' }}>
              <div
                style={{ width: '100%' }}
                className="theme-block-dark lg:theme-block-dark relative overflow-hidden text-clip bg-block text-center text-block flex lg:flex h-[100vh] max-h-full snap-end "
              >
                <a
                  href="https://www.cos.com/ko-kr/women/new-arrivals.html"
                  className=" relative aspect-5/9 md:aspect-16/10 h-full w-full bg-block text-block theme-block-dark lg:theme-block-dark "
                >
                  <img
                    alt="women low res"
                    className="absolute inset-0 text-transparent h-full w-full object-cover object-[50%_0%] hidden-new lg:block"
                    data-nimg="fill"
                    sizes="100vw"
                    srcSet="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2948540020251014111619.jpg"
                  />
                  <img
                    alt=""
                    className="h-full w-full object-cover object-[50%_0%] lg:hidden"
                    data-nimg="fill"
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2948540020251014111623.jpg"
                  />
                </a>
                <div
                  style={{ zIndex: 2 }}
                  className="absolute left-0 top-0 flex h-full w-full flex-col theme-block-dark lg:theme-block-dark justify-end items-start pointer-events-none"
                >
                  <div className="lg:flex flex-col self-center items-center gap-10 lg:gap-0 text-balance text-block pb-15 lg:pb-20 ">
                    <a>
                      <h2
                        className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop pb-7.5 text-current"
                        data-testid="heading"
                        style={{ color: '#ffffff' }}
                      >
                        <br />
                        COS × LE KILT
                        <br className="mo" />
                        <br />
                      </h2>
                    </a>
                    <a className="">
                      <p className="text-center font_m_semibold lg:font_small_l_semibold pb-15 pt-5 " />
                    </a>
                    <div className="flex gap-5 lg:gap-15 flex-col lg:flex-row "></div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n@container root (max-width: 1023px) {\n.content-section .theme-block-dark.text-center.max-h-full .font_large_s_bold_desktop ,\n.content-section .theme-block-dark.text-center.max-h-full .font_m_semibold {\npadding: 0;\n}\n\n.content-section .theme-block-dark.text-center.max-h-full .text-balance.items-center .flex.flex-col .font_small_s_semibold {\n\n  padding-bottom: 3rem;\n}  \n}\n\n\n',
              }}
            />
          </div>
        </div>
        <div className="o-spacing" />
        <div className="w-full flex-col bg-block px-5 justify-center h-15 lg:h-20 flex lg:flex" />
        <div className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5  pb-2.5 lg:grid grid">
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-4">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                스코틀랜드 전통의 장인 정신을 데일리 워드로브에 녹여낸, COS x Le Kilt 익스클루시브 캡슐 컬렉션을
                소개합니다.
              </p>
            </div>
          </div>
        </div>
        <div id="collection" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '50px  auto 0px',
            fontSize: '0.8125rem !important',
          }}
        >
          <a
            style={{
              padding: 25,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8125rem !important',
            }}
            href="#collection"
          >
            {' '}
            컬렉션
          </a>
          <a
            style={{
              padding: 25,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8125rem !important',
            }}
            href="#look"
          >
            룩
          </a>
          <a
            style={{
              padding: 25,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.8125rem !important',
            }}
            href="#story"
          >
            스토리
          </a>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.heading-contrast {\nfont-size: 16px;\n}\n.manual-cpnt {\n    padding-top: 0 !important;\n}\n    @container root (min-width: 1024px) {\n        .look {\n            text-align: center;\n        }\n\n        .look-wrap {\n       \n        }\n    }\n     /*   .look-wrap+div {\n            margin-bottom: 5rem;\n        }*/\n\n    .o-spacing {\n        height: 0px;\n    }\n\n    .text-2cols i {\n        font-size: 13px;\n        font-style: normal;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto 24px;\n        width: 50%;\n        gap: 20px;\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    @container root (max-width: 760px) {\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n    }\n\n\n    .o-text-block.u-align-center {\n        margin-top: 48px;\n    }\n\n    @container root (max-width: 760px) {\n\n        .o-text-block.u-align-center {\n            padding: 20px;\n            text-align: left;\n        }\n\n    }\n\n    .u-row.u-full-width>[class^="o-"] {\n        margin: 0 auto !important\n    }\n\n    .o-text-block .a-heading-1 {\n\n        font-weight: 700;\n        font-size: 40px;\n        line-height: 40px;\n    }\n\n    .preamble-section {\n        margin: 0 auto 50px;\n        }\n\n\n        @container root (min-width: 1025px) {\n            .o-text-block {\n                width: 50.66667% !important;\n            }\n\n            .a-keyline {\n                width: calc(40% -(40px));\n            }\n\n            .o-text-block.u-float-right {\n                width: 50%;\n                font-weight: 400;\n                line-height: 18px;\n            }\n        }\n\n        @container root (max-width: 1025px) {\n            .o-text-block.u-float-right {\n                width: 100%;\n            }\n        }\n\n        @container root (min-width: 1025px) {\n            .o-text-block {\n                padding-top: 0px;\n                padding-bottom: 0px;\n            }\n        }\n\n@container root (max-width: 1023px) {\n.o-text-block .a-heading-1 {\nline-height: 24px !important;\n}\n}\n\n',
          }}
        />
        <div
          className="search recomended-products swiper dpoPraSwiper mo"
          id="dpo2PraSwiper"
          style={{ display: 'none' }}
        >
          <p className="recomended-products-title font_s_regular">베스트셀러</p>
          <div className="swiper-wrapper" id="dpo2PraSwiperItem"></div>
          <div className="swiper-button-next">다음</div>
          <div className="swiper-button-prev">이전</div>
          <p className="recomended-products-title font_s_regular" id="dpo2PraSwiperRcmd">
            추천 상품{' '}
          </p>
        </div>
      </FreeHtml>
      <GridLayout filterButton={true}>
        {Array.from({ length: 3 }).map((_, index) => (
          <ProdCardItem key={index} product={ProductsNew[0]} />
        ))}
      </GridLayout>
      <FreeHtml>
        <form name="ctgrForm" action="#" method="post">
          <input type="hidden" name="sect_id" id="sect_id" defaultValue={294904} />{' '}
          <input type="hidden" name="dispLcatCd" id="dispLcatCd" />{' '}
          <input type="hidden" name="dispMcatCd" id="dispMcatCd" />{' '}
          <input type="hidden" name="dispScatCd" id="dispScatCd" />{' '}
          <input type="hidden" name="dispDcatCd" id="dispDcatCd" />{' '}
          <input type="hidden" name="pageNum" id="pageNum" defaultValue={1} />{' '}
          <input type="hidden" name="viewCnt" id="viewCnt" defaultValue={3} />{' '}
          <input type="hidden" name="totalCnt" id="totalCnt" defaultValue={3} />
          <input type="hidden" name="isContinue" id="isContinue" defaultValue="" />
          <input type="hidden" name="scrollTop" id="scrollTop" defaultValue={0} />
          <input type="hidden" name="scrollPage" id="scrollPage" defaultValue={0} />
          <input type="hidden" name="sizeList" id="sizeList" /> <input type="hidden" name="colorList" id="colorList" />{' '}
          <input type="hidden" name="styles" id="styles" /> <input type="hidden" name="materials" id="materials" />
          {/* price bar 관련 input 추가 (안재철) */}
          {/* <input type="hidden" name="prices" id="prices"> */}
          <input type="hidden" name="frSellPrc" id="frSellPrc" />{' '}
          <input type="hidden" name="toSellPrc" id="toSellPrc" />{' '}
          <input type="hidden" name="searchSort" id="searchSort" defaultValue="disp_prty" />{' '}
          <input type="hidden" name="pageSize" id="pageSize" defaultValue={12} />{' '}
          <input type="hidden" name="preview" id="preview" defaultValue="false" />{' '}
          <input type="hidden" name="rDate" id="rDate" defaultValue="" />
          <input type="hidden" name="termSeq" id="termSeq" defaultValue="" />{' '}
          <input type="hidden" name="searchQuery" id="searchQuery" defaultValue="" />{' '}
          <input type="hidden" name="pageName" id="pageName" defaultValue="categoryPage" />{' '}
          <input type="hidden" name="pageLoding" id="pageLoding" defaultValue="N" />{' '}
          <input type="hidden" name="isViewFilter" id="isViewFilter" defaultValue="" />{' '}
          <input type="hidden" name="defaultSearchSort" id="defaultSearchSort" defaultValue="disp_prty" />{' '}
          <input type="hidden" name="qckShpgUseYn" id="qckShpgUseYn" defaultValue="Y" />{' '}
          <input type="hidden" name="clrChipExpsYn" id="clrChipExpsYn" defaultValue="" />{' '}
          <input type="hidden" name="isFourColumn" id="isFourColumn" defaultValue="N" />
          <input type="hidden" name="baseSearchSortGbcd" id="baseSearchSortGbcd" />
        </form>
        <div
          className="pc"
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '62.5%',
            clear: 'both',
          }}
        >
          <iframe
            data-id="9c67a8ed-6e6e-45d6-8ce4-29eff29e7bb5"
            src="https://thd-play.livehyundai.com/video/d475986e-3811-4ec5-a00a-2cb9d05a8df8?noTitle&noControl&noLike&loop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title="AUTUMN</br> WINTER 2025"
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
              style={{
                fontSize: '4.625rem',
                fontWeight: 700,
              }}
            ></h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 600, marginTop: '3rem' }}></p>
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
        <div className="mo" style={{ padding: '180% 0 0 0', position: 'relative', clear: 'both' }}>
          <iframe
            data-id="75bfef56-6eba-4264-be50-a7de8e56ec94"
            src="https://thd-play.livehyundai.com/video/9d40f2ed-2f99-429e-90bb-61e2720da5cf?noTitle&noControl&noLike&loop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title="COS_FESTIVE_24_WOMAN_10_LOOP_16x10_ONLINE_H264_UNDER_500KB"
          ></iframe>
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
            <h3
              className="text-center font_large_s_bold_desktop lg:font_large_l_bold_desktop text-current"
              style={{
                fontWeight: 700,
              }}
            ></h3>
            <p style={{ fontSize: '1rem', marginTop: '1.5rem', fontWeight: 600 }}></p>
          </div>
        </div>
        <div className="o-text-block u-float-right " style={{ fontSize: '0.8125rem !important' }}>
          <div className="preamble-section">
            <p className="a-paragraph " style={{ cursor: 'default' }} id="look" />
            <p>
              시간이 지나도 퀄리티를 유지하는 워드로브. 장인 정신이 깃든 클래식 스타일은 <br className="pc" />
              절제되면서도 세련된 감각을 선사합니다.
            </p>
            <p />
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n\n.u-row.u-full-width > [class^="o-"]{margin:0 auto !important}\n.o-text-block .a-heading-1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 26px;}\n\n\n.preamble-section{margin: 0 auto 50px;"}\n\n@container root (min-width: 1025px){\n.o-text-block {  width: 50.66667% !important;  }\n.a-keyline {  width: calc(40% -(40px));  }\n.o-text-block.u-float-right {  width: 50%;  font-weight: 400;  line-height: 18px;}\n}\n\n@container root (max-width: 1025px){\n.o-text-block.u-float-right {\n    width: 100%;\n}\n}\n',
          }}
        />
        <div
          className="container-647075 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
          style={{ paddingTop: 36 }}
        >
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-647075 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="67e5a942-cfb8-4da1-bc75-84db2e860533"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949050020251015163755.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949050020251015163755.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-645906 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-645906 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="cfb5bb65-f6f8-4f41-b283-8f1c74c91507"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949051020251015163639.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949051020251015163639.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="o-spacing" />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block u-float-center u-align-center">
                <div className="headign-section">
                  <h1 className="a-heading-1 " style={{ cursor: 'default' }}>
                    <div id="lookarea" style={{ padding: '4rem 0 5rem', textAlign: 'center' }} className="largebold">
                      모던하게 재해석한 헤리티지 디자인
                    </div>
                  </h1>
                </div>
              </div>
              {/*// o-text-block */}
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n .o-text-block .headign-section .a-heading-1 {\nfont-size: 50px;\n}\n\n#lookarea {\ntext-align: center;\n}\n.o-text-block .a-heading-1 {\nline-height: 55px !important;\n}\n@container root (max-width: 1023px) {\n.o-text-block .headign-section .a-heading-1 {\nfont-size: 30px;\n}\n\n.title-detail {\n     padding-top: 0px !important;\n}\n.o-text-block .a-heading-1 {\nline-height: 30px !important;\n}\n}\n\n\n@container root (min-width: 768px) and (max-width: 1024px) {\n    .o-text-block {\n         padding-top: 0px;\n        padding-bottom: 20px;\n    }\n}\n@container root (min-width: 1025px) {\n    .o-text-block {\n        padding-top: 0px;\n        padding-bottom: 0px;\n    }\n}\n',
              }}
            />
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-647078 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-647078 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-2 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="ffa20393-bf26-4ff1-81cf-2f01ee5d88a1"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949050020251015164112.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949050020251015164112.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
              <div className="column relative col-span-12 w-full h-full lg:col-span-5   ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="1f8b5232-4290-41be-bca0-1264b3c64b5f"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949051020251015164124.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2949051020251015164124.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
        </div>
        <div className="o-spacing" />
        <div className="o-spacing" />
        <div id="story" />
        <br />
        <div className="h2-text" style={{ margin: '0 auto 50px auto' }}>
          <h2 className="larebold" style={{ textAlign: 'center' }}>
            모던하게 재해석한 헤리티지 디자인
          </h2>{' '}
          <br />
          <p
            style={{
              margin: '0 auto',
              textAlign: 'left',
              maxWidth: 500,
              fontSize: '16px !important',
            }}
          >
            스코틀랜드 전통의 장인 정신을 데일리 워드로브에 녹여낸, COS x Le Kilt 익스클루시브 캡슐 컬렉션을 소개합니다.{' '}
          </p>
        </div>
        <div className="text-2cols" style={{ margin: '0 auto', maxWidth: 900 }}>
          <p>
            킬트에 관한 모든 것을 사만다 맥코치에게 가르쳐준 사람은, 바로 그녀의 이탈리아 출신 할머니 레나였습니다.
            숙련된 재봉사였던 레나는 에든버러에 정착한 뒤, 곧 도시의 저명한 킬트 제작소에 합류하게 되었습니다. 그녀는
            작업실에서 갈고닦은 기술을 식탁 위로 옮겨와, 매일 아침 6시, 커피 한 잔과 함께 사만다를 깨워 바느질을
            가르쳤습니다. 인내심의 중요성, 실을 정돈하는 법까지, 모든 디테일을 놓치지 않았습니다. 할머니에게서 배운
            소중한 가르침을 안고, 사만다는 런던 로열 칼리지 오브 아트에서 패션 석사 과정을 밟게 되었습니다. <br />
            <br />
          </p>
          <p>
            할머니가 만들어준 킬트는 사만다 맥코치의 일상복이 되었습니다. 옷을 입고 나설 때마다 사람들은 어디서 살 수
            있느냐고 물었고, 점점 커지는 수요를 논의하기 위해 레나에게 전화를 걸었습니다. 그렇게 2014년, Le Kilt가
            탄생했습니다. 첫 번째 프레젠테이션은 런던 패션위크 기간 중 소호의 지하 클럽에서 조용히 시작되었습니다.
            그리고 10년이 지난 지금, Le Kilt는 단번에 알아볼 수 있는 독창적인 스타일을 구축하며 전 세계적인 팬층을
            확보한 브랜드로 성장했습니다. Le Kilt의 주름이 움직일 때마다 느껴지는 강인함, 그리고 원단에 담긴 깊은 의미,
            브랜드의 시그니처인 버클은 과거를 기리며, 동시에 디자인 곳곳에 흐르는 펑크적 에너지를 드러냅니다.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="o-spacing" />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block u-float-center u-align-center">
                <div className="preamble-section">
                  <p className="a-paragraph " style={{ cursor: 'default' }} />
                  <p className="largebold">
                    ‘Le Kilt 컬렉션은 각자의 방식으로 입고, 나만의 유니폼처럼 만들어가는 것입니다. 마치 빈 캔버스처럼
                    활용할 수 있어야 하죠.’
                  </p>
                  <br />
                  <br />
                  <br />
                  <p />
                </div>
              </div>
              {/*// o-text-block */}
            </div>
            <div className="o-spacing" />
            <div className="o-text-block u-float-right ">
              <div className="preamble-section">
                <p className="a-paragraph " style={{ cursor: 'default' }} />
                <p style={{ maxWidth: 353 }}>
                  사만다는 한동안 COS에서 디자이너로 일하며 커리어를 보냈고, 자연스럽게 Le Kilt와의 협업으로
                  이어졌습니다. ‘COS의 여성은 자신이 누구인지 정확히 알고 있어요. 강인하고, 중심이 단단하며, 정체성이
                  분명하죠. 그 점이 Le Kilt와 맞닿아 있다고 느꼈어요. 킬트는 전통적인 옷이지만 동시에 시대를 초월한
                  아이템이에요. 두 브랜드가 공유하는 가치는 거울처럼 닮아 있었습니다.’
                  <br />
                  <br />
                  COS × Le Kilt 캡슐 컬렉션은 두 가지 킬트와 재킷으로 구성되어 있으며, 스코틀랜드 전통의 장인정신을
                  데일리 워드로브로 재해석합니다.컬렉션은 정교한 디자인을 바탕으로 아름답게 완성되었으며, Le Kilt 특유의
                  아이코닉한 디테일과 COS의 시그니처 테일러링이 조화를 이룹니다. 킬트는 프린지 없이 깔끔한 마감 처리로
                  정제된 실루엣을 선보이며, 움직일 때마다 드러나는 과감한 슬릿으로 예상치 못한 반전을 더합니다. 미디
                  길이의 킬트는 이탈리아산 프리미엄 버클로 강인한 인상을 더했고, 재킷은 전면의 벨트와 버클로 포인트를
                  주되, 후면은 절제된 디자인으로 완성도를 높였습니다. ‘장인정신이란 그런 거예요. 모든 것이 겉으로
                  드러나는 건 아니죠.’
                  <br />
                  <br />
                  사만다는 전통이란 무엇인지, 그리고 숙련된 손길들이 모여 특별한 무언가를 만들어낼 수 있는지에 대해
                  이야기를 나누었습니다.{' '}
                </p>
                <p />
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n.u-row.u-full-width > [class^="o-"]{margin:0 auto !important}\n.o-text-block .a-heading-1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 26px;}\n.o-text-block.u-float-right {    font-size: 13px;\n    font-weight: 400;\n    line-height: 18px;}\n@container root (min-width: 1025px)\n.o-text-block {\n    width: 50%;\n}\n\n@container root (min-width: 1025px) {\n    .o-text-block {\n        width: 50.66667% !important;\n     \n    }\n}\n',
              }}
            />
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="o-text-block  u-align-center">
              <div className="headign-section">
                <h1 className="a-heading-1 " style={{ cursor: 'default' }} />
              </div>
            </div>
            <div className="o-text-block u-float-right ">
              <div className="preamble-section">
                <p className="a-paragraph " style={{ cursor: 'default' }} />
                <p style={{ maxWidth: 353 }}>
                  <b>디자인 &amp; 장인정신</b>
                  <br />
                  <br />
                  <br />
                  COS아틀리에 팀의 패턴 커터들과 함께 작업한 경험은 정말 특별했어요. 무언가를 함께 만들어내는 손길이
                  많다는 건 늘 영감을 주는 일이죠. 제게 있어 모든 디자인은 늘 원단에서 시작됩니다. COS는 정말 훌륭한
                  테일러링 원단을 가지고 있어서, 그걸 컬렉션에 사용할 수 있다는 건 굉장히 흥미로운 일이었어요. 저도
                  오랫동안 COS의 테일러링 트라우저를 즐겨 입어왔거든요. 트라우저를 입으면 강인함과 자신감이 느껴져요.
                  그래서 이번 협업을 통해 그 감각을 Le Kilt에 녹여낼 수 있어 더욱 의미 있었습니다.
                </p>
                <p />
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n.u-row.u-full-width > [class^="o-"]{margin:0 auto !important}\n.o-text-block .a-heading-1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 26px;}\n.o-text-block.u-float-right {    font-size: 13px;\n    font-weight: 400;\n    line-height: 18px;}\n@container root (min-width: 1025px)\n.o-text-block {\n    width: 50%;\n}\n\n@container root (min-width: 1025px) {\n    .o-text-block {\n        width: 50.66667% !important;\n     \n    }\n}\n',
              }}
            />
            <div className="o-spacing" />
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
              {/* o-text-block */}
              <div className="o-text-block u-float-center u-align-center">
                <div className="preamble-section">
                  <p className="a-paragraph " style={{ cursor: 'default' }} />
                  <p className="largebold">
                    ‘롱 킬트에 들어간 슬릿은 반전의 요소입니다. 가만히 있을 때는 전통적인 실루엣이지만, 움직일 때는
                    예상치 못한 면모를 드러내며, 매혹적이죠.’
                  </p>
                  <br />
                  <p />
                </div>
              </div>
              {/*// o-text-block */}
            </div>
            <div className="o-spacing" />
            <div className="o-text-block u-float-right ">
              <div className="preamble-section">
                <p className="a-paragraph " style={{ cursor: 'default' }} />
                <p style={{ maxWidth: 353 }}>
                  <b>스타일링 &amp; 정체성 </b>
                  <br />
                  <br />
                  패션은 결국 그것을 입는 사람에 관한 것이에요. 어떻게 조합하느냐, 그리고 그 사람만의 스타일이
                  무엇이냐에 따라 달라지죠. 저는 디자인을 누군가의 옷장과 정체성을 보완해주는 요소라고 생각해요. Le
                  Kilt컬렉션은 각자의 방식대로 입고, 나만의 유니폼처럼 만들어갈 수 있는 존재예요. 하나의 빈 캔버스처럼
                  활용되어야 하죠. 룩의 중심이 될 수도 있고, 빈티지 티셔츠나 셔츠 같은 아이템으로 무게를 덜어낼 수도
                  있어요. 킬트는 정체성을 흡수하지, 강요하지 않아요.
                  <br />
                  <br />
                  <br />
                  <br />
                  <b>전통의 재해석 </b>
                  <br />
                  <br />
                  저는 전통을 현대적인 시선으로 바라보며, 모두를 위한 현대적인 맥락 속에서 해석하고자 해요. 전통에 대한
                  고정된 이미지나 틀에 얽매이는 건 좋아하지 않아요. 에든버러에서 자랐지만, 주변은 돌과 콘크리트로 가득한
                  도시 풍경이었죠. 저는 굉장히 도시적인 환경 속에서 자랐어요. 그래서 제게 전통은 더 유연하고, 더
                  글로벌해야 한다고 생각해요. 롱 킬트에 들어간 슬릿은 반전의 요소죠. 가만히 서 있을 때는 전통적인
                  실루엣처럼 보이지만, 움직임 속에서는 예상치 못한 면모, 심지어는 매혹적인 감각까지 드러내죠. 저는 이런
                  모순이 좋습니다. 이런 반전이 전통을 살아 있게 만들어주니까요. 킬트는 오랜 시간 옷장 속에 머무는
                  옷이어야 해요.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-float-center u-align-center">
            <div className="preamble-section">
              <p className="a-paragraph " style={{ cursor: 'default' }} />
              <p className="largebold">‘킬트는 오랜 시간 옷장 속에 머무는 아이템이어야 합니다.’</p>
              <br />
              <p />
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="o-spacing" />
        <div className="grid-cols-12 gap-x-3.75 px-3.75 md:px-5 lg:grid grid bg-block text-block md:gap-x-5 lg:pb-20 ">
          <div className="col-span-full col-start-4 lg:col-start-7 col-start-1-mo" style={{ fontWeight: 700 }}>
            Q&amp;A{' '}
          </div>
          <div className="col-span-full col-start-4 lg:col-start-7">
            <div style={{ height: 18 }} />
          </div>
          <br />
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">COS</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>최근에 가장 영감을 받은 전시?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>SM</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>피터 후자(Peter Hujar)의 Eyes Open in the Dark. 레이븐 로우(Raven Row)에서 관람했어요.</span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">COS</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>일할 때가 아닐 때 가장 좋아하는 휴식 방법은?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>SM</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>친구들을 만나는 것. </span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">COS</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>휴대폰으로 마지막으로 찍은 인상 깊은 사진은?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>SM</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>스코틀랜드 포토벨로 해변에서 가족과 함께 걷던 순간.</span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">COS</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>에든버러를 방문하는 사람들에게 추천하는 로컬 명소 Top 3는?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>SM</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>Bard, Valvona &amp; Crolla, 그리고 Fruitmarket 갤러리. </span>
                </b>
              </p>
            </div>
          </li>
          <div className="col-span-full col-start-4 lg:col-start-7">
            <div style={{ height: 18 }} />
          </div>
          <div className="col-span-full col-start-4 lg:col-start-7">
            <div style={{ height: 18 }} />
          </div>
        </div>
        <div className="h2-text" style={{ maxWidth: 353, textAlign: 'center', marginTop: 0 }}>
          <p>
            엘리 헤이 (Ellie Hay) 글<br />
            크리스티안 에더 (Kristzian Eder), 인디고 루인 (Indigo Lewin) 사진알렉산더 카메론 (Alexander Cameron), 도기
            네사니르 (Dogi Nesanir) 스타일링
          </p>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html: '\n@container root (max-width: 1023px) {\n.col-start-1-mo {\n\ngrid-column-start: 1;\n}\n\n}\n',
          }}
        />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:grid grid lg:pb-15 pb-10 theme-block-light lg:theme-block-light bg-block accordion-wrap"
          id=""
        >
          <div
            data-component="OAccordion"
            className="o-accordion  col-start-1 col-span-12 lg:col-start-5 lg:col-end-9"
            data-exclusive="data-exclusive"
            data-exclusive-group="example"
            data-component-id="05457e63-ce91-4bdb-85e6-55761ce2f436"
            style={{ borderBottom: 0 }}
          >
            <div className="accordion-header">
              <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                <span className="a-icon-plus" />
                <span className="a-icon-minus" />
                <h3 className="a-heading-3">이번 컬렉션은 다음 매장에서 만나보실 수 있습니다: </h3>
              </a>
            </div>
            <div className="accordion-content">
              <div className="accordion-inner-content">
                <p className="a-paragraph">
                  잠실 롯데월드몰점
                  <br />
                  청담점
                </p>
              </div>
            </div>
          </div>
        </div>
      </FreeHtml>
    </>
  );
}
