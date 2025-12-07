import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: '남성 에센셜 니트웨어 - COS KR',
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
                남성 에센셜 니트웨어
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="o-spacing" />
            <div
              className="container-622125 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622125 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                    <div className="m-free-tile lg:px-0 " style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="587a8b99-d8f6-4a0a-90c2-c58b5be2ba94"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805081647.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805081647.jpg"
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
              className="padding-20-mo grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-10 lg:grid grid"
              id=""
              data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"dc8a5afb-11d1-4813-ae05-96f1b648d382","id":"636481983"}'
              data-blok-uid="636481983-dc8a5afb-11d1-4813-ae05-96f1b648d382"
            >
              <div className="col-span-full col-start-1 lg:col-start-5 lg:col-span-4">
                <div className="[&_a]:underline [&_button]:underline lg:font_m_regular">
                  <p className="lg:mx-5">
                    <span style={{ fontSize: 16 }}>
                      여유로운 무드를 담아, 계절이 변하는 시기를 위한 워드로브에 새로움을 더하는 시그니처
                      니트웨어.&nbsp;&nbsp;
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.container-610888 {\n  padding-bottom: 2rem !important;\n}\n\n@container root (max-width: 1023px) {\n.container-610888 {\n  padding: 0 60px 32px;\n}\n\n\n}\n',
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
                  니트웨어는 남성 워드로브에서 기본이 되는 아이템입니다. 새로운 컬렉션의 아이템은 핏과 착용감을
                  강조하며, 모던하게 재해석한 필수 아이템들로 구성되어 있습니다. 스마트한 스타일과 캐주얼한 스타일이
                  균형을 이루며, 여름에서 가을로 넘어가는 시기 뿐만 아니라, 그 이후에도 낮과 밤 모두에 어울리는 캡슐
                  스타일을 완성합니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="container-622131 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622131 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                    <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="b2585ab4-70a4-4866-adee-330dbaf7778e"
                      >
                        <img
                          loading="lazy"
                          className="a-image"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805081835.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805081835.jpg"
                          style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                        />
                      </picture>
                    </div>
                  </div>
                </div>
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
                      <strong>니트 롱 슬리브 폴로 셔츠 </strong>
                      <br />
                      <br />
                      클래식 폴로 셔츠를 모던하게 재해석한 아이템으로, 리치한 텍스처를 통해 장인 정신을 표현합니다.
                      허니콤 스티치가 입체감을 더해주며, 세련된 여름의 여유로움을 담아냅니다.&nbsp;
                      <br />
                      <br />
                      스타일링 팁
                      <br />
                      <br />
                      편안하면서도 세련된 무드를 자아내는 니트 폴로 셔츠는 자연스러운 스타일이 돋보이는 아이템입니다.
                      배럴 레그 코튼 조거와 매치하면, 여유로우면서도 캐주얼한 룩을 완성할 수 있습니다.&nbsp;&nbsp;
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-622138 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622138 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="3aa39184-0ee6-4fdf-9137-abc9146375d9"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082034.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082034.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>텍스처드 브이넥 스웨터</strong>
                <span>
                  <br />
                  <br />
                  시즌에 맞게 새롭게 재해석한 니트웨어. 클래식한 브이넥 스웨터는 리브드 디테일로 모던한 감각을 더했으며,
                  은은한 화이트 톤은 다양한 뉴트럴 컬러와 자연스럽게 어우러집니다. 슬림한 실루엣은 다양한 스타일링에
                  조화롭게 연출할 수 있습니다.&nbsp;
                </span>
                <br />
                <br />
                스타일링 팁 <br />
                <br />
                와이드 핏 팬츠와 더비 슈즈는 점퍼의 슬림한 실루엣과 균형을 이루며, 절제된 자신감을 드러내는 세련된 룩을
                완성합니다.&nbsp;
              </p>
            </div>
          </div>
        </div>
        <div className="container-622163 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622163 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="bcf34ffe-066e-4cf2-a6f7-8ddbffc63c82"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082447.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082447.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <strong>메리노 울 가디건</strong>
              <br />
              <br />
              <p className="">
                <span>
                  클래식 가디건은 남성 니트웨어의 핵심 아이템으로, 특히 여름에서 가을로 넘어가는 시기에 입기 좋습니다.
                  이번 시즌 니트 가디건은 헤리티지를 유지하면서도, 고급스러운 소재와 뛰어난 제작 기술이 돋보입니다. RWS
                  인증을 받은 울로 제작되어 부드러운 감촉이 드러나며, 컴팩트한 디자인으로 완성되었습니다.&nbsp;
                </span>
              </p>
              <p className="">
                <span>&nbsp;</span>
              </p>
              <p className="">
                <span>스타일링 팁&nbsp;</span>
              </p>
              <br />
              <p className="">
                <span>
                  여유로운 레이어링 스타일을 완성하는 아이템. 심플한 티셔츠, 플리츠 트라우저와 매치해 자연스럽고 세련된
                  가을 룩을 연출해 보세요.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-622188 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622188 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="5046267c-269b-4d91-96a8-c1ce58c57990"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082802.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805082802.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '2/3' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>니트 헨리 티</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  헨리 티는 레이어링을 위해 디자인된 클래식한 프레피 아이템입니다. 이번 시즌에는 부드러운 코튼 블렌드
                  소재의 리브드 니트 디테일로 제작되어, 데일리 룩에 은은한 텍스처를 더해줍니다.&nbsp;
                </span>
              </p>
              <br />
              <br />
              <p className="">
                <span>스타일링 팁&nbsp;</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  헨리 티는 시즌에 구애받지 않는 필수 아이템입니다. 여름에는 단독으로, 간절기에는 레이어링으로 활용해
                  보세요. 정제된 헨리 티를 프레스드 테일러드 쇼츠와 매치하면, 주말에도 스마트한 스타일을 완성할 수
                  있습니다.&nbsp;
                </span>
              </p>{' '}
              <br />
              <br />
              <p className="">
                <strong>니트웨어 레이어링 가이드</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  남성 니트웨어를 레이어링하면 스타일에 새로운 무드를 더할 수 있습니다. 톤과 텍스처의 조화를 통해
                  스타일에 깊이를 더할 수 있습니다. 여름에는 시즌 아이템과 함께 가볍게 매치하고, 날씨가 선선해지면
                  블레이저와 함께 스타일링해 보세요&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-622185 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-622185 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-12  landscape-full ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="c02d4d40-f832-41ff-881c-d4556d860c9c"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805083112.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2885320020250805083112.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '3/2' }}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h3-title">니트웨어 관리 가이드 </h3>
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
                  울 소재는 섬유 자체에 천연 보호막이 있어 먼지와 오염에 강하므로 매번 세탁할 필요가 없습니다. 착용
                  후에는 통풍이 잘되는 곳에 걸어두어 자연 환기시키는 것이 좋습니다. 세탁이 필요할 경우, 아래의 간단한
                  방법을 참고해 보세요.&nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-4 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <br />
              <p className="">
                <span>니트웨어 세탁 방법&nbsp;&nbsp;&nbsp;</span>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  니트의 섬유를 보호하기 위해 안쪽으로 뒤집으세요.&nbsp;
                  <br />
                  찬물 손세탁 또는 울 전용 세탁 코스를 사용하세요 <br />
                  세탁 후에는 비틀어 짜지 말고, 깨끗한 수건 위에 눕혀 눌러 물기를 제거한 뒤 평평하게 건조하세요.&nbsp;
                </span>
              </p>
              <br /> <br />
              <p className="">
                <span>니트웨어 보관 방법</span>
              </p>
              <br /> <br />
              <p className="">
                <span>
                  니트는 서랍에 접어서 보관하고, 방충제를 함께 넣어 두는 것이 좋습니다. 부드러움을 유지하려면 울 전용
                  브러시를 사용하세요.&nbsp;&nbsp;
                </span>
              </p>
              <br /> <br />
              <p className="">
                <span>
                  보풀 방지 팁&nbsp;&nbsp;
                  <br />
                  <br />
                  같은 니트를 자주 연속으로 착용하지 마세요. 보풀이 생긴 경우, 패브릭 셰이버나 울 브러시를 사용하면
                  매끄러운 표면을 유지할 수 있습니다.&nbsp;
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <br />
              <p className="">
                <span>메리노 울 세탁 방법&nbsp;</span>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  메리노 울도 일반 니트와 큰 차이는 없습니다. 항상 뒤집어 찬물 손세탁 또는 울 코스로 세탁하세요.
                  섬유유연제는 통기성을 떨어뜨리므로 사용을 피해주세요.
                </span>
              </p>
              <br />
              <br />
              <p className="">
                <span>메리노 울은 줄어드나요?</span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  다른 울 소재처럼 메리노 울도 줄어들 수 있습니다. 차가운 물에 세탁하고, 형태를 유지하기 위해 평평하게
                  자연 건조하세요.&nbsp;
                </span>
              </p>
              <br />
              <br />
              <p className="">
                <span>
                  메리노 울은 따갑지 않나요?&nbsp;&nbsp;
                  <br />
                  <br />
                  메리노 울은 뛰어난 부드러움으로 잘 알려져 있어 일반적으로 피부에 자극을 주지 않습니다.&nbsp;
                </span>
              </p>
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
              '\n    .o-text-block.u-align-center {\n        width: 60%;\n        margin-bottom: 0;\n        padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n        /* font-size: 2.188rem; */\n        font-size: 50px;\n\n        line-height: 1.25;\n        font-weight: 700;\n    }\n\n    .h2-text {\n        margin: 0 auto;\n        width: 70%;\n        margin-bottom: 40px;\n    }\n\n    h2 {\n        font-size: 50px;\n        font-weight: 700;\n        line-heigh: 1.25;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto;\n        width: 60%;\n        gap: 20px;\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n        text-align: right;\n    }\n\n\n    .chips {\n        display: block;\n        width: 100%;\n\n    }\n\n    .chips p {\n        font-size: 24px;\n        line-height: 34px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n        padding-top: 30px;\n        margin-bottom: 30px;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        padding: 20px;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        gap: 10%;\n    }\n\n\n    @container root (max-width:760px) {\n        h2 {\n            font-size: 40px;\n            line-height: 1.25;\n        }\n\n        .h2-text {\n            width: 100%;\n            margin: 0 20px 40px;\n        }\n\n        .text-2cols.mo-2cols {\n            flex-direction: row;\n        }\n\n        .text-2cols.mo-2cols .cols-right {\n            width: 10%;\n        }\n\n        .o-text-block.u-align-center {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n\n        .text {\n            width: 100%;\n        }\n\n        .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n            padding-bottom: 20px;\n        }\n\n        .chips .scrollable-content {\n            flex-direction: column;\n        }\n\n        .chips a {\n            text-align: left;\n        }\n\n\n    }\n\n\n\n    .h3-title {\n        text-align: center;\n        font-size: 36px;\n        font-weight: bold;\n        margin-bottom: 3rem;\n    }\n\n    .h4-title {\n        font-size: 20px;\n        font-weight: bold;\n        margin-bottom: 4.5rem;\n        text-align: center;\n    }\n\n    .o-spacing {\n        height: 0px !important;\n    }\n\n    @container root (max-width:1023px) {\n        .h3-title {\n            font-size: 24px;\n            margin-bottom: 2rem;\n        }\n\n        .h4-title {\n            margin-bottom: 2.5rem;\n        }\n\n        .pb-20 {\n            padding-bottom: 3rem;\n        }\n\n        .two-column-row .grid.grid-cols-12 .column.col-span-8:has(.m-free-tile picture) {\n            grid-column-start: 1;\n            grid-column-end: 13;\n            padding: 0 16px;\n\n        }\n\n    }\n\n\n    @container root (min-width: 1024px) {\n        .lg\\:pb-30 {\n            padding-bottom: 2.5rem;\n        }\n\n        div[class^="container"]:has(.one-column-row),\n        div[class^="container"]:has(.two-column-row) {\n            padding-bottom: 5rem;\n        }\n\n        .a-keyline {\n            margin-bottom: 50px;\n        }\n\n        .chips {\n            margin: 50px auto;\n        }\n\n    }\n\n\n    @container root (max-width: 1023px) {\n        .two-column-row>div.grid {\n            grid-template-columns: 1fr 1fr !important;\n        }\n\n        div[class^="container"]:has(.one-column-row),\n        div[class^="container"]:has(.two-column-row) {\n            padding-bottom: 1.575rem;\n        }\n\n        .two-column-row .grid.grid-cols-12 .column.col-span-6 {\n            padding: 0 16px;\n        }\n\n        .a-keyline {\n            margin-top: 0;\n        }\n\n        .chips {\n            margin: 0 0 10px;\n        }\n\n\n    }\n',
          }}
        />
      </FreeHtml>
    </>
  );
}
