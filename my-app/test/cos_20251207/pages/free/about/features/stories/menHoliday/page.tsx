import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';
import { FourColumnNew } from '@views/main/components';
import { ProdCardItem } from '@views/product/components/ProdCard';
import { mockProducts } from '@views/freehtml/ui/freeData';

export const metadata: Metadata = {
  title: 'Men’s Holiday Packing List - COS KR',
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
                남성 홀리데이 에센셜 아이템{' '}
              </p>
            </div>
          </div>
          {/*// o-text-block */}
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          <div className=" relative" style={{ maxWidth: 'unset' }}>
            <div className="o-spacing" />
            <div
              className="container-608725 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt"
              style={{ paddingTop: 36 }}
            >
              <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608725 ">
                {/* o-grid-controller */}
                <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
                  <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                    <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                      <picture
                        style={{ marginBottom: 6 }}
                        data-component="APicture"
                        className="a-picture"
                        data-component-id="8ee09501-79f5-432b-b8b4-e33c5598732b"
                      >
                        <img
                          loading="lazy"
                          className="a-image initial loaded"
                          data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141041.jpg"
                          src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141041.jpg"
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
                  <p className="">
                    <span style={{ fontSize: 16 }}>
                      여유로운 핏과 가벼운 소재의 스윔웨어, 그리고 여름 액세서리로 홀리데이 시즌에 어울리는 스타일을
                      완성해 보세요.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 bg-block text-block lg:grid grid pb-10 lg:pb-20"
              id=""
              data-blok-c='{"name":"cta-button-block","space":"251958","uid":"3a752f15-3b47-41c2-a058-15a00d902496","id":"627619718"}'
              data-blok-uid="627619718-3a752f15-3b47-41c2-a058-15a00d902496"
            >
              <div className="relative col-span-12 col-start-1 gap-y-5 lg:col-span-2 lg:col-start-6 lg:justify-center lg:place-items-center flex flex-col justify-center px-1.25 py-3.75 text-block theme-block-light lg:theme-block-light">
                <a
                  id="dbdefdb3-6c23-4642-89a6-f46620c7b9a2"
                  className="block bg-block odd:pr-0 theme-block-light h-12.5 w-full md:w-1/2 lg:w-full border-0.5 border-main py-4"
                  href="https://www.cos.com/ko-kr/men/holiday-shop.html"
                >
                  <div className="flex items-center justify-center h-full lg:justify-center">
                    <span className="font_small_xs_medium">홀리데이 에딧</span>
                  </div>
                </a>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.container-606909 {\n  padding-bottom: 2rem !important;\n}\n\n@container root (max-width: 1023px) {\n.container-606909 {\n  padding: 0 60px 32px;\n}\n\n\n}\n',
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
                  이번 여름 컬렉션은 더운 계절을 위해 재해석한 클래식 아이템으로 구성되어 있습니다. 여름의 여유로운
                  무드를 반영한 홀리데이 에센셜 아이템에는 휴양지에 어울리는 소재로 제작된 남성 에센셜 아이템들이
                  포함되어 있습니다. 액세서리는 도시의 일상 생활부터 홀리데이까지, 모든 순간에 매치할 수 있도록
                  실용적이고 활용도 높게 디자인되었습니다. &nbsp;
                  <br />
                  <br />
                  다양한 룩에 자연스럽게 어울리는 뉴트럴 컬러 팔레트를 중심으로 구성되었으며, 가벼운 소재로 제작되어
                  손쉽게 보관할 수 있습니다.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-608729 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608729 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0 px-3.75" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="87817c1c-6ea8-4781-80d8-65af1b386590"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141349.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141349.jpg"
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
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>여름 셔츠</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  캠프 칼라와 오버사이즈 포켓의 조합은 클래식한 감각과 실용성을 동시에 담아냅니다. 더스티 피치와 같이
                  밝은 톤은 남성 여름 셔츠에 새로움을 더하며, 홀리데이 무드를 자아냅니다. 모든 스타일은 여유로운
                  실루엣으로 제작되어 단독으로 입거나 티셔츠, 베스트 위에 레이어링하기 좋습니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-608731 flex flex-col w-full gap-5 lg:gap-10 pb-5 lg:pb-10  manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608731 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-12  landscape-full ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="0b5dc3f2-2228-48b2-9d1a-3281aaaa143e"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141525.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141525.jpg"
                      style={{ objectFit: 'cover', aspectRatio: '3/2' }}
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
                <strong>스윔웨어 </strong>
                <span>
                  <br />
                  <br />
                  데일리 워드로브에 기반을 둔 테일러링 아이템, 여름 셔츠가 가볍고 바람이 잘 통하는 소재로 재해석되어
                  레이어링하기 좋은 아이템으로 돌아왔습니다. 여름을 상징하는 블루와 화이트 스트라이프의 산뜻한 조합으로
                  선보이며, 코튼에 리넨이 블렌드된 소재로 제작된 셔츠는 크롭 디자인으로 캐주얼한 무드를 더합니다.
                  시어서커 쇼츠와 함께 매치하거나 이번 시즌 주요 아이템인 버뮤다 쇼츠와도 멋스럽게 어울립니다. 더운
                  날씨를 위해 디자인된 리넨 소재의 오버사이즈 셔츠는 수영 후 가볍게 레이어링하기 좋은 아이템입니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-608738 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608738 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="46755374-9f0f-4106-8ebe-868be5539278"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141606.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141606.jpg"
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
              <strong>바람이 잘 통하는 트라우저 </strong>
              <br />
              <br />
              <p className="">
                <span>
                  간편하게 스타일링이 가능하고 휴대성이 좋으며, 가벼운 착용감을 선사하는 여름 트라우저. 리넨은 통기성이
                  뛰어나고 부드러운 촉감이 돋보이며, 도시의 일상 생활에서도 세련된 무드를 자아내는 소재입니다. 저지 소재
                  트라우저는 신축성 있는 허리 밴드와 주름 디테일로 편안함과 실용성을 갖추었으며, 저지 소재 셔츠와 함께
                  매치하면 더욱 멋스럽게 연출할 수 있습니다.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-608763 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608763 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="6322c354-1b82-4ce4-bbad-71108effc98f"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141648.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141648.jpg"
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
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>릴랙스드 쇼츠 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  여름 시즌의 필수 아이템인 쇼츠는 홀리데이 스타일에서 빠지지 않는 에센셜 아이템입니다. 세련된 스타일을
                  연출한다면, 클래식한 남성복에서 영감을 받은 테일러드 쇼츠를 확인해 보세요. 여유로운 실루엣과 핀턱
                  디테일이 돋보이는 쇼츠입니다. 또한, 스윔 쇼츠는 일상에서도 다른 아이템들과 함께 매치해 입을 수 있도록
                  디자인되었습니다.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="o-spacing" />
        <div className="container-608758 flex flex-col gap-20 lg:gap-30 lg:px-5 w-full lg:pb-30 pb-20 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row two-column-row load-more-608758 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-8 md:gap-x-5 col-span-12 gap-y-5 pt-0 ">
              <div className="column relative col-span-8 w-full h-full lg:col-span-4  lg:col-start-3 lg:col-end-7 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="383df6cf-00de-4060-8cba-dc85ed605818"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141733.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141733.jpg"
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
                    data-component-id="866273ff-1f89-4ef0-a71e-c16a0a0ab6d6"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862611020250623141747.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862611020250623141747.jpg"
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
          className="grid-cols-12 gap-x-3.75 md:gap-x-5 px-3.75 md:px-5 lg:pb-20 pb-7.5  lg:grid grid"
          id=""
          data-blok-c='{"name":"grid-paragraphs-block","space":"251958","uid":"02097a38-ff88-44e8-b7f8-34f878e0fc56","id":"627619718"}'
          data-blok-uid="627619718-02097a38-ff88-44e8-b7f8-34f878e0fc56"
        >
          <div className="col-span-full col-start-1 lg:col-start-7 lg:col-span-3">
            <div className="[&_a]:underline [&_button]:underline lg:font_s_regular">
              <p className="">
                <strong>여름 니트웨어 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  모던한 스타일과 통기성 좋은 소재가 조화로운 니트웨어는 더운 여름에도 착용할 수 있습니다. 메리노 울과
                  리사이클 실크로 제작된 베스트는 여유로운 무드를 선사하며, 가벼운 니트 페이퍼 티셔츠는 COS 특유의 장인
                  정신과 세련된 디자인 감각을 담아낸 아이템입니다.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-608785 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608785 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="329c1c7e-2653-4336-b2c4-dba9ca6f5af1"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141827.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141827.jpg"
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
                <strong>스테이트먼트 선글라스</strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  선글라스는 남성 홀리데이 스타일의 에센셜 아이템입니다. 톨토이즈 패턴, 카키 그리고 블랙 컬러의
                  에비에이터와 D 프레임 스타일은 클래식한 디자인에 모던한 감각을 더해주며, 여름 스타일을 손쉽게 완성할
                  수 있는 선글라스입니다.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-608788 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608788 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-4  lg:col-start-5 lg:col-end-9 ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="10dac3c2-7de0-4e36-aea4-f1e0b1da4c17"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141916.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141916.jpg"
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
                <strong>시즈널 컬러 &amp; 소재 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  클래식한 네이비, 화이트, 그리고 뉴트럴 톤에 더스티 오렌지 컬러가 더해져 한층 더 여유로운 여름 시즌
                  무드를 자아냅니다. 실크, 리넨은 더운 계절에 입기 좋은 소재이며, 컬렉션 전반에 걸쳐 다양하게
                  활용됩니다. 통기성이 뛰어나고 촉감이 돋보이는 플랙스 섬유는 스트레이트 핏 트라우저나 여유로운 테일러드
                  셔츠에 자연스러운 텍스처를 선사합니다.{' '}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="container-608791 flex flex-col w-full lg:pb-30 pb-20  gap-20 lg:gap-30 manual-cpnt">
          <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row one-column-row  load-more-608791 ">
            {/* o-grid-controller */}
            <div className="grid grid-cols-12 gap-x-3.75 md:gap-x-5 col-span-12 lg:gap-y-10 gap-y-4.5   pt-0 ">
              <div className="column relative col-span-12 w-full h-full lg:col-span-5  lg:col-start-4 lg:col-end-9 lg:ml-[10%] ">
                <div className="m-free-tile lg:px-0" style={{ cursor: 'default' }}>
                  <picture
                    style={{ marginBottom: 6 }}
                    data-component="APicture"
                    className="a-picture"
                    data-component-id="b42449d9-bab0-48e6-b08b-416ff0d76a44"
                  >
                    <img
                      loading="lazy"
                      className="a-image"
                      data-src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141956.jpg"
                      src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2862610020250623141956.jpg"
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
                <strong>릴랙스드 티셔츠 </strong>
                <span>
                  &nbsp;
                  <br />
                  <br />
                  이번 시즌에는 박시한 실루엣, 드롭 숄더, 그리고 롱 스리브 디자인이 클래식 티셔츠에 새로움을 더해줍니다.
                  남성 워드로브에서 빠질 수 없는 아이템인 릴랙스드 티셔츠는 여름 레이어링 스타일의 기본이 되면서,
                  단독으로도 멋스럽게 연출할 수 있습니다. 가볍고 활용도 높은 디자인으로 여행 스타일에 필요한
                  아이템입니다.
                </span>
              </p>
            </div>
          </div>
        </div>
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
              '\n    .o-text-block.u-align-center {\n        width: 60%;\n        margin-bottom: 0;\n        padding-bottom: 0;\n    }\n\n    .preamble-section .a-paragraph {\n        /* font-size: 2.188rem; */\n        font-size: 50px;\n\n        line-height: 1.25;\n        font-weight: 700;\n    }\n\n    .h2-text {\n        margin: 0 auto;\n        width: 70%;\n        margin-bottom: 40px;\n    }\n\n    h2 {\n        font-size: 50px;\n        font-weight: 700;\n        line-heigh: 1.25;\n    }\n\n    .text-2cols {\n        display: flex;\n        margin: 0 auto;\n        width: 60%;\n        gap: 20px;\n    }\n\n    .text-2cols p {\n        width: 50%;\n    }\n\n    .text-2cols.mo-2cols .cols-right {\n        text-align: right;\n    }\n\n\n    .chips {\n        display: block;\n        width: 100%;\n\n    }\n\n    .chips p {\n        font-size: 24px;\n        line-height: 34px;\n        letter-spacing: .02em;\n        color: #1b1b1b;\n        text-align: center;\n        width: 100%;\n        margin: 0 auto 20px auto;\n        padding-top: 30px;\n        margin-bottom: 30px;\n    }\n\n    .chips a {\n        display: inline-block;\n        text-transform: uppercase;\n        text-decoration: none;\n        letter-spacing: .0825em;\n        cursor: pointer;\n        padding: 20px;\n        color: #1b1b1b;\n        font-size: 12px;\n        line-height: 17px;\n    }\n\n    /*.chips a:hover {background-color: #1b1b1b; color: #ffffff;}*/\n    .chips .scrollable-content {\n        position: relative;\n        padding: 0px 10px;\n        overflow-x: auto;\n        -webkit-overflow-scrolling: touch;\n        white-space: nowrap;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        gap: 10%;\n    }\n\n\n    @container root (max-width:760px) {\n        h2 {\n            font-size: 40px;\n            line-height: 1.25;\n        }\n\n        .h2-text {\n            width: 100%;\n            margin: 0 20px 40px;\n        }\n\n        .text-2cols.mo-2cols {\n            flex-direction: row;\n        }\n\n        .text-2cols.mo-2cols .cols-right {\n            width: 10%;\n        }\n\n        .o-text-block.u-align-center {\n            width: 100%;\n            padding: 0 10px;\n        }\n\n        .text-2cols {\n            width: 100%;\n            flex-direction: column;\n            padding: 0 20px;\n        }\n\n        .text-2cols p {\n            width: 100%;\n        }\n\n        .text {\n            width: 100%;\n        }\n\n        .container-523574.flex.flex-col.w-full.lg\\:pb-30.pb-20.gap-20.lg\\:gap-30.manual-cpnt {\n            padding-bottom: 20px;\n        }\n\n        .chips .scrollable-content {\n            flex-direction: column;\n        }\n\n        .chips a {\n            text-align: left;\n        }\n\n\n    }\n\n\n\n    .h3-title {\n        text-align: center;\n        font-size: 36px;\n        font-weight: bold;\n        margin-bottom: 3rem;\n    }\n\n    .h4-title {\n        font-size: 20px;\n        font-weight: bold;\n        margin-bottom: 4.5rem;\n        text-align: center;\n    }\n\n    .o-spacing {\n        height: 0px !important;\n    }\n\n    @container root (max-width:1023px) {\n        .h3-title {\n            font-size: 24px;\n            margin-bottom: 2rem;\n        }\n\n        .h4-title {\n            margin-bottom: 2.5rem;\n        }\n\n        .pb-20 {\n            padding-bottom: 3rem;\n        }\n\n        .two-column-row .grid.grid-cols-12 .column.col-span-8:has(.m-free-tile picture) {\n            grid-column-start: 1;\n            grid-column-end: 13;\n            padding: 0 16px;\n\n        }\n\n    }\n\n\n    @container root (min-width: 1024px) {\n        .lg\\:pb-30 {\n            padding-bottom: 2.5rem;\n        }\n\n        div[class^="container"]:has(.one-column-row),\n        div[class^="container"]:has(.two-column-row) {\n            padding-bottom: 5rem;\n        }\n\n        .a-keyline {\n            margin-bottom: 50px;\n        }\n\n        .chips {\n            margin: 50px auto;\n        }\n\n    }\n\n\n    @container root (max-width: 1023px) {\n        .two-column-row>div.grid {\n            grid-template-columns: 1fr 1fr !important;\n        }\n\n        div[class^="container"]:has(.one-column-row),\n        div[class^="container"]:has(.two-column-row) {\n            padding-bottom: 1.575rem;\n        }\n\n        .two-column-row .grid.grid-cols-12 .column.col-span-6 {\n            padding: 0 16px;\n        }\n\n        .a-keyline {\n            margin-top: 0;\n        }\n\n        .chips {\n            margin: 0 0 10px;\n        }\n    }\n',
          }}
        />
      </FreeHtml>
    </>
  );
}
