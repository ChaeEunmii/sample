import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '여성 여름 리넨 컬렉션  - COS KR',
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
                여성 여름 리넨 컬렉션&nbsp;
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div
              className="container-590536 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-590536 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-12  landscape-full ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="d808a4d0-2062-4ecd-8141-aa13593c6283"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175122.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175122.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '3/2' }}
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
                      리넨으로 재해석한 데일리 워드로브와 함께, 여름 스타일에 새로운 감각을 더해 보세요.&nbsp;
                    </span>
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
                <span>
                  시간이 지나도 변하지 않는 퀄리티의 컬렉션.&nbsp;&nbsp;
                  <br />
                  <br />
                  자연스러운 통기성과 고유의 질감을 지닌 리넨은 시간이 지나도 변함없는 매력을 지닙니다. COS 여성 리넨
                  컬렉션은 여름 시즌 패브릭인 리넨을 기본 아이템을 통해 새롭게 풀어냅니다. 다양하게 스타일링이 가능한
                  테일러링, 쇼츠, 셔츠, 드레스 등은 정교한 장인 정신과 실루엣을 중심으로 디자인되었습니다.&nbsp;
                  <br />
                  <br />
                  이번 시즌 컬렉션은 리넨의 다양한 매력을 반영한 절제된 컬러 팔레트로 클래식 레디 투 웨어 아이템을
                  새롭게 재해석하며, 데일리 워드로브와 함께 자연스럽게 어우러지도록 구성된 모던 셀렉션입니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-590560 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-590560 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}></div>
              </div>
              <div className="column relative col-span-8 w-full h-full lg:col-span-4">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="04088cfa-b0fb-4640-8b9c-75c46280f8f1"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250423175451.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250423175451.jpg"
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
                <span>
                  리넨 테일러링&nbsp;
                  <br />
                  <br />
                  테일러링은 리넨 특유의 텍스처 대비를 통해 여유로움 무드를 자아냅니다. 은은한 플리츠 디테일, 타이, 랩
                  스타일로 완성된 시그니처 릴랙스드 실루엣의 수트는 여름 시즌 워크웨어는 물론, 웨딩이나 다양한 이벤트
                  룩으로도 활용할 수 있습니다. 블랙, 라이트 핑크, 버터 옐로우의 간결하면서도 인상적인 컬러 팔레트는
                  소재감과 실루엣의 아름다움을 더욱 돋보이게 하며, 자연스러운 세련미를 더합니다.&nbsp;
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  리넨 수트 스타일링&nbsp;
                  <br />
                  <br />
                  톤온톤 수트 스타일링은 여름 시즌 워드로브에 조화로움을 더합니다. 리넨 웨이스트코트는 클래식한
                  블레이저를 대신 재킷과 셔츠로 활용 가능하며, 계절이 변화하는 시기에 세련되게 연출할 수 있습니다.
                  여기에 롱라인 컷의 와이드 쇼츠를 매치하면 워크웨어와 이벤트 룩을 모던하게 완성할 수 있습니다. 클래식
                  테일러드 재킷은 더욱 길어진 실루엣으로 제작되었으며, 슬림한 라인이 강조된 팬츠와 함께 스타일링하기
                  좋습니다. 전체적으로 부드러운 촉감을 지닌 프리미엄 플랙스 리넨 소재로 제작되어 고급스러운 마감이
                  돋보입니다.&nbsp;&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-590563 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-590563 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="53cd7fca-4678-483f-84c9-9b5b16a977b2"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175715.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175715.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
              <div className="column relative col-span-8 w-full h-full lg:col-span-4   ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="f33b7ae3-571a-4697-b82c-4aa3b25ee840"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250423175722.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250423175722.jpg"
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
                <span>
                  에어리한 리넨 셔츠&nbsp;&nbsp;
                  <br />
                  <br />
                  리넨의 가벼운 텍스처에서 영감을 받아, COS 셔츠 컬렉션은 실루엣의 미학을 탐구합니다. 오버사이즈 셔츠는
                  여름 시즌에 간편하게 입기 좋고, 박시한 실루엣과 슬리브 디테일의 셔츠를 매치하면 감각적인 룩을 연출할
                  수 있습니다. 클래식한 셔츠는 부드럽게 흐르는 롱라인 컷과 세련된 초콜릿 브라운 컬러로 제작되어 리넨
                  소재와 함께 새롭게 재해석된 아이템입니다. 넓게 퍼지는 네크라인과 정교한 리본 디테일이 더해진 리넨
                  블라우스는 로맨틱한 여름 시즌 무드를 담고 있습니다.&nbsp;
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  리넨 셔츠 스타일링&nbsp;
                  <br />
                  <br />
                  리넨 셔츠가 사랑받는 이유는 다양하게 스타일링할 수 있기 때문입니다. 깊은 컬러의 클래식 셔츠를 에크루
                  데님과 매치해 보세요. 라피아 토트백과 샌들까지 더하면, 여유로운 데이 룩이 완성됩니다. 롱라인 실루엣의
                  셔츠는 크롭 데님과 자연스러운 대비를 이루며 균형을 잡아줍니다. 정제된 리넨 블라우스는 테일러드
                  팬츠와도 완벽한 조화를 이루며, 허리에 넣어 스타일링하고 레더 벨트로 포인트를 주면 세련된 무드를 연출할
                  수 있습니다. 리넨 셔츠는 여름 시즌 수트의 이너 아이템으로도, 스커트와 매치해 포멀한 룩으로도 완성할 수
                  있습니다. 특히 맥시 스커트로 리넨 특유의 유연한 실루엣을 더욱 아름답게 강조할 수 있습니다.&nbsp;&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-590549 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-590549 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-10  lg:col-start-2 lg:col-end-12 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="5dde702f-e27b-499c-b0a4-666360f8a4c0"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175920.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703360020250423175920.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '3/2' }}
                    />
                  </picture>
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
              <p className="">
                <span>
                  라이트 리넨 드레스&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  COS 드레스가 지닌 변치 않는 매력. 간결함과 세련된 디자인의 균형을 리넨으로 재해석해, 여름 시즌을 위한
                  스타일을 제안합니다. 정제된 미디, 맥시 에이라인 라인 드레스부터 일상에 잘 어울리는 미니 드레스까지,
                  이번 드레스 컬렉션은 여름 시즌 필수 아이템인 리넨 드레스의 다양한 활용도를 절제된 컬러 팔레트로
                  우아하게 풀어냈습니다.&nbsp;&nbsp;
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  릴랙스드 리넨 트라우저
                  <br />
                  <br />
                  볼륨과 비율, 테일러링의 미학을 담아 COS만의 시각으로 재해석한 트라우저 컬렉션. 가볍고 통기성 좋은
                  리넨을 통해 다양한 실루엣의 팬츠를 선보입니다. 도시적인 감각을 살린 클린 컷의 카프리 팬츠부터 리넨
                  특유의 유연함을 강조한 와이드 레그 트라우저는 여유로운 무드를 연출합니다. 두 스타일은 다른 매력을
                  지니면서도 여름 시즌에 어울리는 실용성과 스타일을 모두 갖추고 있습니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-590568 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-590568 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}></div>
              </div>
              <div className="column relative col-span-8 w-full h-full lg:col-span-4   ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="c636aa46-a0c2-4403-963a-1cbc9f5ada2f"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250424091016.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2703361020250424091016.jpg"
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
              <p className="">
                <span>
                  리넨 트라우저 스타일링&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  컨템포러리 테일러링으로 완성한 카프리 팬츠를 매치해 감각적인 이브닝 룩을 연출해 보세요. 드로우스트링
                  헴 디테일이 더해진 랩 프런트 웨이스트코트는 세련되면서도 스포티한 무드를 살려, 카프리 팬츠 특유의
                  실루엣을 돋보이게 합니다. 리넨 트라우저는 홀리데이 워드로브에 꼭 필요한 아이템이며, 흐르는 듯한 와이드
                  레그 트라우저에 미니멀한 셔츠나 탑을 매치하면 균형감 있는 스타일을 완성할 수 있습니다. 여름 시즌을
                  위한 포멀 룩으로, 수트 대신 새로운 셋업 룩을 시도해 보세요. 같은 톤의 블레이저나 웨이스트코트를
                  매치하고, 레더 액세서리와 골드 또는 실버 도금 주얼리로 포인트를 주면 세련되게 연출할 수
                  있습니다.&nbsp;
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  <br />
                  <br />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid-cols-12 gap-x-3.75 px-3.75 md:px-5 lg:grid grid bg-block text-block md:gap-x-5 lg:pb-20 pb-15">
          <div className="col-span-full col-start-4 lg:col-start-7 col-start-1-mo" style={{ fontWeight: 500 }}>
            FAQ
          </div>
          <div className="col-span-full col-start-4 lg:col-start-7">
            <div style={{ height: 18 }} />
          </div>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">Q</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>리넨은 무엇으로 만들어지나요?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>A</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>
                    리넨은 아마 식물의 섬유에서 만들어집니다. 아마 식물의 줄기에서 섬유를 수확하고 추출한 뒤, 이를 실로
                    방적하여 원단으로 짜내는 방식입니다. 리넨은 강한 내구성, 우수한 통기성, 뛰어난 흡습성으로 잘 알려져
                    있어, 따뜻한 계절에 적합한 의류 소재로 많은 사랑을 받고 있습니다.
                  </span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">Q</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>리넨은 어떻게 세탁하나요?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>A</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>
                    리넨은 자주 세탁하기보다는 착용 후 통풍시키는 것이 좋습니다. 세탁이 꼭 필요할 경우, 30℃ 이하의 낮은
                    온도와 약한 회전으로 세탁기 세탁을 하여 섬유의 강도와 염색을 보호하세요. 손세탁 시에는 미지근한 물을
                    사용하는 것이 좋습니다.
                  </span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">Q</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>리넨을 건조기에 넣어도 되나요?</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>A</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>
                    {' '}
                    세탁 라벨에 건조기 사용이 허용되어 있다면 가능하지만, 일반적으로는 수축과 손상의 위험이 있어
                    권장되지 않습니다. 대신 직사광선을 피해 자연 건조하는 것이 리넨을 오래 유지하는 데 좋습니다.
                  </span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">Q</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span>리넨은 수축되나요?&nbsp;</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>A</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>
                    리넨은 세탁이나 건조 시 고온에 노출되면 수축될 수 있습니다. 리넨의 형태와 품질을 유지하려면 자연
                    건조를 하거나, 건조기를 사용할 경우 낮은 온도로 설정하는 것이 좋습니다.&nbsp;
                  </span>
                </b>
              </p>
            </div>
          </li>
          <p className=" lg:text-right col-span-3 col-start-1 text-left lg:col-span-2 lg:col-start-5">Q</p>
          <li className="col-span-full col-start-4 list-none pb-5  lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <span> 리넨을 다림질해도 되나요?&nbsp;</span>
              </p>
            </div>
          </li>
          <p className="col-span-3 col-start-1 text-left font_s_semibold lg:text-right lg:col-span-2 lg:col-start-5">
            <b>A</b>
          </p>
          <li className="col-span-full col-start-4 list-none pb-5 font_s_semibold lg:col-span-4 lg:col-start-7">
            <div className="[&_a]:underline [&_button]:underline">
              <p className="!normal-case">
                <b>
                  <span>
                    {' '}
                    리넨은 다림질이 가능합니다. 다림질 전, 스팀을 활용해 주름을 자연스럽게 줄이는 것도 좋은 방법입니다.
                    리넨은 약간 젖어 있을 때 다림질이 더 쉽고, 고온 설정으로 다릴 수 있습니다. 얇은 리넨이나 어두운
                    색상의 경우에는 천을 덧대고, 안쪽 면을 부드럽고 고르게 다리는 것이 손상을 방지하는 데 도움이 됩니다.
                    &nbsp;
                  </span>
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
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    @container root (max-width: 1023px) {\n        .col-start-1-mo {\n\n            grid-column-start: 1;\n        }\n\n    }\n',
          }}
        />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
              <hr className="a-keyline" />
            </div>
            <div className="chips">
              <p style={{ fontSize: '1rem', lineHeight: '140%', fontWeight: 600 }}>EDITOR&apos;S PICK </p>
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
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n.o-text-block.u-align-center {width:60%; margin-bottom:0; padding-bottom:0;}\n.preamble-section .a-paragraph {font-size:50px; line-height:1.25; font-weight:700;}\n.h2-text {margin:0 auto; width:70%; margin-bottom:40px;}\nh2 {font-size:50px; font-weight:700;line-heigh:1.25;}\n.text-2cols {display:flex; margin:0 auto; width:60%; gap:20px;}\n.text-2cols p {width:50%;}\n.text-2cols.mo-2cols .cols-right  {text-align:right;}\n    .chips {display: block; width: 100%; margin: 50px auto 50px;}\n    .chips p {font-size: 24px; line-height: 34px; letter-spacing: .02em; color: #1b1b1b; text-align: center; width: 100%; margin: 0 auto 20px auto;}\n    .chips a {display: inline-block; text-transform: uppercase; text-decoration: none; letter-spacing: .0825em; cursor: pointer; text-align: center; padding: 10px 12px 6px; margin: 4px 4px 8px 0; color: #1b1b1b; font-size: 12px; line-height: 17px;}\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {position: relative; padding: 0px 10px; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; text-align: center; display:flex; justify-content:center; gap:10%;}\n\n\n@container root (max-width:760px) {\nh2 {font-size:40px; line-height:1.25;}\n.h2-text {width:100%; margin:0 20px 40px;}\n.text-2cols.mo-2cols {flex-direction:row;}\n.text-2cols.mo-2cols .cols-right {width:10%;}\n.o-text-block.u-align-center {width:100%; padding:0 10px;}\n.text-2cols {width:100%; flex-direction: column; padding:0 20px;}\n.text-2cols p {width:100%;}\n.text {width:100%;}\n.container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {padding-bottom:20px;}\n.chips .scrollable-content {flex-direction:column;}\n.chips a {text-align:left;}\n}\n\n\n\n.h3-title {\n    text-align: center;\n    font-size: 36px;\n    font-weight: bold;\n    margin-bottom: 3rem;\n}\n.h4-title {\n    font-size: 20px;\n    font-weight:  bold;\n    margin-bottom: 4.5rem;\n    text-align:  center;\n}\n\n    .o-spacing {\n        height: 0px !important;\n    }\n@container root (max-width:1023px) {\n.h3-title {\nfont-size: 24px;\nmargin-bottom: 2rem;\n}\n.h4-title {\nmargin-bottom: 2.5rem;\n}\n.pb-20 {\npadding-bottom: 3rem;\n}\n\n}\n\n    @container root (max-width: 1023px) {\n    .two-column-row .grid.grid-cols-12 .column.col-span-8:has(.m-free-tile picture){\n        grid-column-start: 1;\n        grid-column-end: 13;\n        padding: 0 16px;\n\n    }\n\n    }\n',
          }}
        />
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
