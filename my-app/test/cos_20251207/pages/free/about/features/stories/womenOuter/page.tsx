import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '여성 아우터웨어 컬렉션 - COS KR',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-alpha" style={{ cursor: 'default' }}>
                FEATURES / 컬렉션
              </h1>
            </div>
            <div className="preamble-section">
              <p className="a-paragraph" style={{ cursor: 'default' }}>
                여성 아우터웨어 컬렉션
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="o-spacing" />
            <div
              className="container-640075 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-640075">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="a4e1505a-f1f6-4d5e-812b-d15508a59e74"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111728.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111728.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                          data-was-processed="true"
                        />
                      </picture>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="padding-20-mo grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-10 lg:grid grid"
              id=""
              data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"dc8a5afb-11d1-4813-ae05-96f1b648d382","id":"636481983"}'
              data-blok-uid="636481983-dc8a5afb-11d1-4813-ae05-96f1b648d382"
            >
              <div className="col-span-full col-start-1 lg:col-start-5 lg:col-span-4">
                <div className="[&_a]:underline [&_button]:underline lg:font_m_regular">
                  <p className="lg:mx-5">
                    <span style={{ fontSize: 16 }}>
                      이번 시즌을 대표하는 실루엣. 테일러링, 클래식한 헤리티지 무드, 고급스러운 소재가 어우러져 겨울
                      아우터웨어의 아이코닉한 워드로브를 모던한 감각으로 재해석합니다.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        @container root (max-width: 1023px) {\n          .container-640075 .m-free-tile {\n            padding: 0 60px 16px;\n          }\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-10 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"d0bd4682-039e-439d-84bb-7313f9c879b6","id":"627619718"}'
          data-blok-uid="627619718-d0bd4682-039e-439d-84bb-7313f9c879b6"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <span>
                  아우터웨어는 COS 여성 컬렉션의 주요 요소로, 장인 정신과 모던한 디자인 철학을 고스란히 담아낸
                  아이템입니다. 코트와 재킷은 타임리스 스타일과 컨템포러리한 실루엣이 공존하는 워드로브로 자리 잡았으며,
                  우수한 퀄리티와 정교한 디테일이 가치를 더합니다.&nbsp;
                  <br />
                  <br />
                  부드러운 테일러링, 헤리티지를 반영한 감각, 그리고 뉴트럴 컬러 팔레트가 특징인 이번 컬렉션은 여성
                  아우터웨어의 기본 아이템들을 리치한 텍스처로 재해석하여, 시즌동안 계속 함께할 아이템으로
                  완성되었습니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="container-640229 flex flex-col gap-20 lg:gap-30 w-full lg:pb-30 pb-20 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row three-column-row load-more-640229">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-8 md:gap-x-4 col-span-12 lg:gap-y-30 gap-y-10 pt-0">
                  <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3 lg:col-start-2 lg:col-end-5">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }} />
                  </div>
                  <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="0c96777d-8b98-462c-b974-3135b1b225e9"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919411020250922112009.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919411020250922112009.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="column relative col-span-6 w-full h-full lg:ml-[15%] lg:col-span-3">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }} />
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n        @container root (max-width: 1023px) {\n          .three-column-row .grid.grid-cols-12 .column:nth-child(odd) {\n            display: none;\n          }\n          .three-column-row .grid.grid-cols-12 .column:nth-child(even) {\n            grid-column: span 12;\n            padding: 0 16px;\n          }\n        }\n\n        @container root (max-width: 1023px) {\n          .container-640229 {\n            padding-bottom: 1.575rem !important;\n          }\n        }\n      ',
              }}
            />
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>더블 페이스드 울 케이프</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  절제된 감각과 정교한 테일러링이 어우러진 케이프는 실루엣이 돋보입니다. 프리미엄 더블 페이스 메리노 울
                  블렌드 소재로 제작되었으며, 코쿤 형태로 제작되었습니다. 넥 라인을 따라 우아하게 흐르는 톤온톤 스카프
                  디테일이 더해져 완성되었습니다. 기본 이너 아이템과 함께 간결하게 스타일링하거나, 벨트를 매치해 정제된
                  룩을 연출해 보세요.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="container-640133 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-640133">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 pt-0">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-12 landscape-full">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="14611be0-aba4-4a03-82f3-cbb3c26e4e27"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111800.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111800.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '3/2' }}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        @container root (max-width: 1023px) {\n          .container-640133 .one-column-row .grid.grid-cols-12 .column {\n            padding: 0;\n          }\n\n          .container-640133 .one-column-row .m-free-tile picture img {\n            aspect-ratio: 2 / 3 !important;\n            content: url('https://image.thehyundai.com/cos/hyundai/2025/9/22/WW_Shot_11_172_AW_F03_MO.jpg');\n          }\n        }\n      ",
              }}
            />
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>시어링 코트 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  장인 정신이 깃든 디테일과 뛰어난 텍스처가 돋보이는 워드로브. 시어링 코트는 벨벳처럼 부드러운 촉감과
                  정제된 레더가 조화를 이루며, 포근하게 감싸는 실루엣으로 데일리 룩에 깊이를 더합니다. 절제된 올리브
                  그린 컬러는 뉴트럴 톤으로 활용되며, 가을 겨울 시즌의 리치한 컬러 팔레트와 자연스럽게 어우러집니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-640081 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-640081">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="01ac12c5-afd6-4152-885e-074158534848"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111820.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111820.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>울 재킷</strong>
                <span>
                  <br />
                  <br />
                  부드러운 구조감과 간결한 실루엣의 균형을 섬세하게 담아낸 재킷. 고급스러운 촉감의 컴팩트한 보일드 울
                  소재로 제작되었습니다. 크롭 실루엣, 라운드 숄더, 차별화된 스탠드 칼라, 그리고 비대칭 버튼 디테일은
                  노스탤지어 스타일을 타임리스하면서도 세련된 무드로 자아냅니다. 같은 소재의 미니 스커트와 매치하면 겨울
                  시즌 스타일링의 정수를 완성할 수 있습니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="container-640088 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-640088">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 pt-0">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-12 landscape-full">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="c1cef70c-b675-4cc4-a479-7388727cba9e"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111835.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111835.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '3/2' }}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n        @container root (max-width: 1023px) {\n          .container-640088 .one-column-row .grid.grid-cols-12 .column {\n            padding: 0;\n          }\n\n          .container-640088 .one-column-row .m-free-tile picture img {\n            aspect-ratio: 2 / 3 !important;\n            content: url('https://image.thehyundai.com/cos/hyundai/2025/9/22/WW_Shot_10_230_MZ_F05_MO.jpg');\n          }\n        }\n      ",
              }}
            />
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <strong>패디드 코트 </strong>
              <br />
              <br />
              <p className="">
                <span>
                  다가오는 계절을 맞아, 패디드 아우터웨어와 퀼티드 아우터웨어가 주목받고 있습니다. 기능성 소재와
                  보온성이 조화를 이루는 푸퍼 코트는 테일러링에서 영감을 받은 우아한 숄 칼라 디자인으로, 따뜻함이
                  세련미와 어우러져 겨울 아우터웨어의 새로운 해석을 제안합니다. COS 시그니처 스카프 재킷을 퀼팅으로
                  재해석한 아이템은 계절이 변화는 시기에 가벼운 레이어링 아이템으로 입기 좋습니다.&nbsp;&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-640113 flex flex-col w-full lg:pb-30 pb-20 gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row load-more-640113">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5 pt-0">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4 lg:col-start-5 lg:col-end-9">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="d9ed523f-af4c-44f0-b4f4-238dbf6427f7"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111849.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2919410020250922111849.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
              {/*
               */}
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>더블 브레스티드 울 코트</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  겨울 시즌을 대표하는 아이코닉한 실루엣, 더블 브레스티드 코트는 COS 아우터웨어 컬렉션의 주요
                  아이템입니다. 리치한 텍스처의 울 블렌드 소재로 제작되었으며, 오버사이즈 핏과 롱라인 컷으로 다양하게
                  레이어링하기 좋습니다. 더블 버튼 프론트과 퍼널 칼라는 COS만의 시그니처 디자인 요소로, 타임리스 디테일
                  속에서도 세련된 감각을 드러냅니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className="relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
              <hr className="a-keyline" />
            </div>
            <div className="chips">
              <p style={{ fontSize: '1rem', lineHeight: '140%', fontWeight: 600 }}>EDITOR&apos;S PICK</p>
            </div>
          </div>
        </div>
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
        ]}
      />
      <FreeHtml>
        <div className="chips">
          <p>EXPLORE MORE</p>
          <div className="scrollable-content" style={{ whiteSpace: 'normal', height: 'auto' }}>
            <a href="https://www.cos.com/ko-kr/features/people.html">인터뷰</a>
            <a href="https://www.cos.com/ko-kr/features/stories.html">컬렉션</a>
            <a href="https://www.cos.com/ko-kr/features/places.html">장소</a>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .o-text-block.u-align-center {\n      width: 60%;\n      margin-bottom: 0;\n      padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n      /* font-size: 2.188rem; */\n      font-size: 50px;\n\n      line-height: 1.25;\n      font-weight: 700;\n    }\n\n    .h2-text {\n      margin: 0 auto;\n      width: 70%;\n      margin-bottom: 40px;\n    }\n\n    h2 {\n      font-size: 50px;\n      font-weight: 700;\n      line-heigh: 1.25;\n    }\n\n    .text-2cols {\n      display: flex;\n      margin: 0 auto;\n      width: 60%;\n      gap: 20px;\n    }\n\n    .text-2cols p {\n      width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n      text-align: right;\n    }\n\n    .chips {\n      display: block;\n      width: 100%;\n    }\n\n    .chips p {\n      font-size: 24px;\n      line-height: 34px;\n      letter-spacing: 0.02em;\n      color: #1b1b1b;\n      text-align: center;\n      width: 100%;\n      margin: 0 auto 20px auto;\n      padding-top: 30px;\n      margin-bottom: 30px;\n    }\n\n    .chips a {\n      display: inline-block;\n      text-transform: uppercase;\n      text-decoration: none;\n      letter-spacing: 0.0825em;\n      cursor: pointer;\n      padding: 20px;\n      color: #1b1b1b;\n      font-size: 12px;\n      line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n      position: relative;\n      padding: 0px 10px;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      white-space: nowrap;\n      text-align: center;\n      display: flex;\n      justify-content: center;\n      gap: 10%;\n    }\n\n    @container root (max-width: 760px) {\n      h2 {\n        font-size: 40px;\n        line-height: 1.25;\n      }\n\n      .h2-text {\n        width: 100%;\n        margin: 0 20px 40px;\n      }\n\n      .text-2cols.mo-2cols {\n        flex-direction: row;\n      }\n\n      .text-2cols.mo-2cols .cols-right {\n        width: 10%;\n      }\n\n      .o-text-block.u-align-center {\n        width: 100%;\n        padding: 0 10px;\n      }\n\n      .text-2cols {\n        width: 100%;\n        flex-direction: column;\n        padding: 0 20px;\n      }\n\n      .text-2cols p {\n        width: 100%;\n      }\n\n      .text {\n        width: 100%;\n      }\n\n      .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n        padding-bottom: 20px;\n      }\n\n      .chips .scrollable-content {\n        flex-direction: column;\n      }\n\n      .chips a {\n        text-align: left;\n      }\n    }\n\n    .h3-title {\n      text-align: center;\n      font-size: 36px;\n      font-weight: bold;\n      margin-bottom: 3rem;\n    }\n\n    .h4-title {\n      font-size: 20px;\n      font-weight: bold;\n      margin-bottom: 4.5rem;\n      text-align: center;\n    }\n\n    .o-spacing {\n      height: 0px !important;\n    }\n\n    @container root (max-width: 1023px) {\n      .h3-title {\n        font-size: 24px;\n        margin-bottom: 2rem;\n      }\n\n      .h4-title {\n        margin-bottom: 2.5rem;\n      }\n\n      .pb-20 {\n        padding-bottom: 3rem;\n      }\n\n      .two-column-row .grid.grid-cols-12 .column.col-span-8:has(.m-free-tile picture) {\n        grid-column-start: 1;\n        grid-column-end: 13;\n        padding: 0 16px;\n      }\n    }\n\n    @container root (min-width: 1024px) {\n      .lg\\:pb-30 {\n        padding-bottom: 2.5rem;\n      }\n\n      div[class^='container']:has(.one-column-row),\n      div[class^='container']:has(.two-column-row) {\n        padding-bottom: 5rem;\n      }\n\n      .a-keyline {\n        margin-bottom: 50px;\n      }\n\n      .chips {\n        margin: 50px auto;\n      }\n    }\n\n    @container root (max-width: 1023px) {\n      .two-column-row > div.grid {\n        grid-template-columns: 1fr 1fr !important;\n      }\n\n      div[class^='container']:has(.one-column-row),\n      div[class^='container']:has(.two-column-row),\n      div[class^='container']:has(.three-column-row) {\n        padding-bottom: 1.575rem;\n      }\n\n      .two-column-row .grid.grid-cols-12 .column.col-span-6,\n      .one-column-row .grid.grid-cols-12 .column {\n        padding: 0 16px;\n      }\n\n      .a-keyline {\n        margin-top: 0;\n      }\n\n      .chips {\n        margin: 0 0 10px;\n      }\n    }\n  ",
          }}
        />
      </FreeHtml>
    </>
  );
}
