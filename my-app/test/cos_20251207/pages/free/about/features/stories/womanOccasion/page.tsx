import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '여름 시즌을 위한 여성 오케이션웨어  - COS KR',
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
                여름 시즌을 위한 여성 오케이션웨어&nbsp;
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div
              className="container-600907 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-600907 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="564cd836-dacc-40f0-ae1f-e4e79c72ff55"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523110133.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523110133.jpg"
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
                    <span>
                      COS 오케이션웨어로 특별한 순간을 위한 스타일을 완성해 보세요. 우아함과 편안함을 담은 여름 시즌
                      드레스와 아이템을 만날 수 있습니다.{' '}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <strong>오케이션웨어</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  다양한 이벤트로 가득한 여름 시즌을 맞아, COS 여성 오케이션웨어를 선보입니다. 여름 시즌 포멀 룩을
                  모던하게 재해석해, 시즌을 넘어선 클래식한 스타일을 제안합니다. &nbsp;
                  <br />
                  <br />
                  클래식한 실루엣과 섬세한 소재를 바탕으로, 다양한 스타일링이 가능한 여름 오케이션웨어를 선보입니다.
                  특별한 순간을 위한 인상적인 드레스부터 어떤 상황에도 어울리는 파티 룩까지 다양하게 활용할 수 있습니다.
                  구조적인 실루엣과 정제된 비율, 그리고 뉴트럴 톤이 어우러져, 이브닝 룩 뿐 아니라 낮에도 자연스럽게
                  어울리는 감각적인 스타일을 완성합니다. <br />
                  <br /> COS 오케이션웨어와 함께 모든 순간에 어울리는 스타일을 연출해 보세요.
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
        <div className="o-spacing" />
        <div className="container-600913 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-600913 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="121688d9-0e40-4038-a7dc-b2b5c131e614"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523110656.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523110656.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
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
                <strong>플리츠 드레스 </strong>
                <span>
                  <br />
                  <br />
                  이번 시즌 드레스는 부드럽게 흐르는 실루엣을 통해 여유로운 우아함을 자아냅니다. 가벼운 소재에 정교한
                  레이저 커팅과 스티칭을 더해져 조형적이며 유연한 실루엣을 표현합니다.
                  <br />
                  <br />
                  2025 봄 여름 여성 런웨이 컬렉션의 하이라이트인 플리츠 드레스로 편안하면서도 세련된 무드를 연출해
                  보세요. 은은한 주얼리와 미니멀한 샌들로 스타일을 완성하거나, 젤리 플랫 슈즈와 매치해 고급스러운 데이
                  룩으로도 활용할 수 있습니다.
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
        <div className="container-600937 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-600937 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-2 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="4dbf54c2-05be-4fdb-97c7-7c7f5479122a"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523111851.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523111851.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
              <div className="column relative col-span-12 w-full h-full lg:col-span-5">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="e25793a7-8000-42f7-af18-d207c02bf811"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851061020250523111622.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851061020250523111622.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
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
              <strong>이브닝 드레스 </strong>
              <br />
              <p className="">
                <span>
                  여름 시즌에는 특별한 순간을 위한 드레스가 필요합니다. 드라마틱한 맥시 실루엣부터 액세서리 스타일링에
                  따라 분위기가 달라지는 슬림 미디 드레스까지, 이번 시즌의 드레스는 간결한 디자인이 돋보입니다. <br />
                  <br />
                  어떤 자리에도 어울리는 미니멀 드레스를 선택해 보세요. 다양한 스타일링이 가능하며, 타임리스한 블랙
                  컬러는 실루엣과 텍스처를 더욱 돋보이게 합니다. 드라마틱한 무드를 연출하려면 맥시 스타일, 조형적인
                  실루엣을 강조하려면 플리츠 드레스를 매치해 보세요.
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
        <div className="container-600973 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-600973 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="e4f8aab9-7741-4540-be73-5869f4363dd9"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523112301.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523112301.jpg"
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
                <strong>감각적인 웨이스트코트 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  이제 오케이션웨어는 일상과 특별한 순간을 모두 아우르는 스타일로 자리잡고 있습니다. COS 오케이션웨어는
                  오래도록 함께할 수 있는 아이템들로 구성되어, 데일리 룩은 물론 특별한 순간을 위한 룩을 완성합니다.{' '}
                  <br />
                  <br />
                  웨이스트코트는 시즌에 구애받지 않고 다양하게 스타일링이 가능한 아이템입니다. 벨트가 더해진 디자인은
                  셋업으로 매치하면 세련된 룩을 연출할 수 있으며, 모든 순간에 어울립니다. 선글라스 대신, 스테이트먼트
                  주얼리를 매치하면 스타일에 변화를 줄 수 있습니다.
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
        <div className="o-spacing" />
        <div className="container-600939 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-600939 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-2 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="6d981607-0e56-4e22-b07a-fac9adac7b17"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523112101.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851060020250523112101.jpg"
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
                    data-component-id="bf40a250-057f-4df3-91be-b3fb2be2d9c4"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851061020250523112108.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2851061020250523112108.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
            {/*// o-grid-controller */}
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-15  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>세련된 실크 수트 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  COS 수트로 포멀한 스타일을 간편하게 완성할 수 있습니다. 여름 시즌에는 실크 수트를 선택해 보세요.
                  가볍고 부드럽게 몸을 감싸며, 비대칭 컷의 블레이저와 여유로운 테일러드 트라우저와 함께 매치하면 더욱
                  세련된 실루엣을 연출할 수 있습니다. <br />
                  <br />
                  캐러멜 컬러와 골드 주얼리로 포인트를 더해 보세요. 유려한 실루엣에는 조형적인 뱅글이나 초커가 잘
                  어울리며 낮에는 레더 플립플랍, 저녁에는 슬링백 힐을 매치해 감각적인 테일러링 룩을 완성해 보세요.
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
