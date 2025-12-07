import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '여름 시즌을 위한 남성 테일러링 에딧 - COS KR',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* o-text-block */}
          <div className="o-text-block  u-align-center">
            <div className="headign-section">
              <h1 className="a-heading-1 q-alpha" style={{ cursor: 'default' }}>
                FEATURES / 컬렉션
              </h1>
            </div>
            <div className="preamble-section">
              <p className="a-paragraph " style={{ cursor: 'default' }}>
                여름 시즌을 위한 남성 테일러링 에딧{' '}
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div
              className="container-600947 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-600947 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="4944639b-daf2-400d-adbf-76c3f93cf1d4"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154337.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154337.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                          data-was-processed="true"
                        />
                      </picture>
                      <div className="cta-wrapper noComma">
                        <a
                          target="_self"
                          className="a-link cta-link  font-semibold !text-[13px]"
                          style={{
                            lineHeight: '19px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/*
                   */}
                </div>
              </div>
            </div>
            <div
              className="padding-20-mo grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-5 lg:grid grid"
              id=""
              data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"dc8a5afb-11d1-4813-ae05-96f1b648d382","id":"636481983"}'
              data-blok-uid="636481983-dc8a5afb-11d1-4813-ae05-96f1b648d382"
            >
              <div className="col-span-full col-start-1 lg:col-start-5 lg:col-span-4">
                <div className="[&_a]:underline [&_button]:underline lg:font_m_regular">
                  <p className="">
                    <span>새로운 남성 테일러링 컬렉션은 소재와 실루엣에 포커스를 두고 제작되었습니다.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-blok-c='{"name":"spacing-block","space":"251958","uid":"dff39bbe-9d90-4a7c-bd14-4e7a815ade66","id":"627619718"}'
          data-blok-uid="627619718-dff39bbe-9d90-4a7c-bd14-4e7a815ade66"
          className="w-full flex-col bg-block px-5 justify-center h-px lg:h-7.5 lg:flex"
          style={{ clear: 'both' }}
        />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15 lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"d0bd4682-039e-439d-84bb-7313f9c879b6","id":"627619718"}'
          data-blok-uid="627619718-d0bd4682-039e-439d-84bb-7313f9c879b6"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>여름 수트: 릴랙스드 테일러링</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  남성 수트는 COS 컬렉션의 핵심이 되는 아이템입니다. 뛰어난 장인 정신과 실루엣을 바탕으로 완성한 이번
                  시즌의 재킷과 트라우저는 모던한 언컨스트럭티드 블레이저와 구조적인 디자인이 돋보입니다. 활용도가 높은
                  아이템은 캐주얼 룩부터 포멀 룩까지, 다양한 스타일링이 가능합니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <br />
              <br />
              <br />
              <br />
              <p className="">
                <strong>여름 수트를 선택하는 법 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  다양한 이벤트가 많은 여름 시즌에는 가벼움과 활동성이 중요한 요소입니다. 리넨과 코튼 같은 자연스러운
                  소재, 그리고 여유로운 핏은 여름 수트의 기본이자 COS 남성 컬렉션의 핵심입니다. 웨딩부터 홀리데이까지,
                  어떤 순간에도 어울리는 스타일을 완성합니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-600953 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-600953 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="616c5187-45ed-48cd-a43e-fa716730b2ce"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154359.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154359.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        {/*<h3 class="h3-title">오번</h3>*/}
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>언컨스트럭티드 블레이저 </strong>
                <span>
                  <br />
                  <br />
                  언컨스트럭티드 수트는 여름 오케이션웨어의 주요 아이템으로, 포멀 룩과 캐주얼 룩에 모두 활용할 수 있는
                  스타일입니다. 어깨 패드가 없으며, 여유로운 실루엣을 통해 통기성을 높여 여름 시즌에 입기 좋습니다. 이번
                  시즌 3버튼 수트 블레이저는 클래식 리조트 칼라에서 영감을 받은 라펠 디자인으로, 테크니컬 코튼 블렌드
                  소재로 제작되어 스포티한 무드를 연출합니다. 안감은 텐셀™ 라이오셀로 마감되어 편안하게 레이어링하기
                  좋습니다. 구조적인 디자인을 원한다면, 리넨 소재의 더블 브레스티드 블레이저를 선택해 보세요. 바람이 잘
                  통하며, 여유로운 분위기를 선사해 줍니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*<h3 class="h3-title">오번</h3>*/}
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <strong>릴랙스드 핏 트라우저</strong>
              <br />
              <p className="">
                <span>
                  릴랙스드 핏 수트 트라우저는 이번 컬렉션의 중심을 이루며, 부드럽게 흐르는 라인과 여유있는 실루엣이
                  조화를 이루는 아이템입니다. 스트레이트 레그 트라우저는 퓨어 리넨으로 제작되어 가볍고, 코튼과 리넨이
                  믹스된 트라우저는 견고한 실루엣을 완성해 줍니다.
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-601035 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-601035 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="034379f2-4ca0-4854-92c7-7da871b7775a"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154430.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851130020250526154430.jpg"
                      style={{ objectFit: 'cover' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>바람이 잘 통하는 소재</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  올해 컬렉션은 가벼움과 통기성에 중점을 두고, 코튼과 리넨으로 제작되었습니다. 리넨의 원료인 플랙스
                  섬유는 자연스럽고 바람이 잘 통하며, 독특한 촉감을 지녀 유연한 텍스처와 은은한 광택을 더해줍니다.
                  그리고 포플린은 가볍고 산뜻한 착용감을 선사합니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        {/*<h3 class="h3-title">오케이션웨어 </h3>*/}
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>여름 수트 스타일링</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  2025 봄 여름 남성 컬렉션의 주요 아이템인 수트는 포멀함과 여유로움을 동시에 갖춘 스타일링이 가능합니다.
                  오케이션웨어에는 테일러드 셔츠와 함께 매치하면 완성도 높은 룩을 연출할 수 있으며, 베스트나 티셔츠 같은
                  클래식한 기본 아이템을 매치하면 캐주얼 룩으로 스타일링할 수 있습니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.o-text-block.u-align-center {width:60%; margin-bottom:0; padding-bottom:0;}\n.preamble-section .a-paragraph {font-size:2.188rem; line-height:1.25; font-weight:700;}\n\n.h2-text {margin:0 auto; width:70%; margin-bottom:40px;}\nh2 {font-size:50px; font-weight:700;line-heigh:1.25;}\n.text-2cols {display:flex; margin:0 auto; width:60%; gap:20px;}\n.text-2cols p {width:50%;}\n.text-2cols.mo-2cols .cols-right  {text-align:right;}\n    .chips {display: block; width: 100%; margin: 50px auto 50px; font-weight: 600;}\n    .chips p {font-size: 24px; line-height: 34px; letter-spacing: .02em; color: #1b1b1b; text-align: center; width: 100%; margin: 0 auto 20px auto;}\n     .chips a {display: inline-block; text-transform: uppercase; text-decoration: none; letter-spacing: .0825em; cursor: pointer; padding:20px; color: #1b1b1b; font-size: 18px; line-height: 17px;}\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center; display:flex; justify-content:center; gap:10%;}\n\n\n@container root (max-width:760px) {\nh2 {font-size:40px; line-height:1.25;}\n.h2-text {width:100%; margin:0 20px 40px;}\n.text-2cols.mo-2cols {flex-direction:row;}\n.text-2cols.mo-2cols .cols-right {width:10%;}\n.o-text-block.u-align-center {width:100%; padding:0 10px;}\n.text-2cols {width:100%; flex-direction: column; padding:0 20px;}\n.text-2cols p {width:100%;}\n.text {width:100%;}\n.container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {padding-bottom:20px;}\n.chips .scrollable-content {flex-direction:column;}\n.chips a {text-align:left;}\n.preamble-section .a-paragraph{1.875rem}\n}\n\n\n\n.h3-title {\n    text-align: center;\n    font-size: 36px;\n    font-weight: bold;\n    margin-bottom: 3rem;\n}\n.h4-title {\n    font-size: 20px;\n    font-weight:  bold;\n    margin-bottom: 4.5rem;\n    text-align:  center;\n}\n\n    .o-spacing {\n        height: 0px !important;\n    }\n@container root (max-width:1023px) {\n.h3-title {\nfont-size: 24px;\nmargin-bottom: 2rem;\n}\n.h4-title {\nmargin-bottom: 2.5rem;\n}\n.pb-20 {\npadding-bottom: 3rem;\n}\n\n    .two-column-row .grid.grid-cols-12 .column.col-span-8:has(.m-free-tile picture){\n        grid-column-start: 1;\n        grid-column-end: 13;\n        padding: 0 16px;\n\n    }\n\n}\n\n\n@container root (min-width: 1024px) {\n    .lg\\:pb-30 {\n        padding-bottom: 2.5rem;\n    }\n}\n',
          }}
        />
      </FreeHtml>
      <FourColumnNew
        items={[
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
          { content: <ProdCardItem product={mockProducts[0]} /> },
        ]}
      />
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
      </FreeHtml>
    </>
  );
}
