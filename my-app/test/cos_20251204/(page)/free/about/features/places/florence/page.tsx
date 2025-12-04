import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Palazzo Dudley, Florence - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    @container root (max-width: 767px) {\n      .contain.building-header {\n        width: 100% !important;\n      }\n      .contain.building-header .m-teaser.blog-teaser {\n        width: 100% !important;\n      }\n      .onlypc {\n        display: none !important;\n      }\n      .onlymo {\n        display: block !important;\n      }\n    }\n    @container root (min-width: 768px) {\n      .onlypc {\n        display: block !important;\n      }\n      .onlymo {\n        display: none !important;\n      }\n    }\n    .building-header h1.a-heading-1.fixed-size.q-peta {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n    .building-header p.a-paragraph.fixed-size.q-alpha {\n      font-size: 20px !important;\n      color: #444444;\n      line-height: 26px !important;\n      font-family: 'Gill Sans MT Pro Medium', 'Nanum Barun Gothic';\n      letter-spacing: 0.002em;\n      word-break: break-all;\n    }\n  ",
          }}
        />
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row u-full-width">
          {/* blogtext-*/}
          <div className="contain building-header">
            <div className="u-cols-sm-12-12 u-cols-md-11-12 u-cols-lg-22-24 u-full-width u-row u-center-col">
              <div className="m-teaser blog-teaser">
                <h1 className="a-heading-1 fixed-size q-peta" style={{ color: '#444444', marginTop: 0 }}>
                  COS BUILDINGS
                  <br />
                  PALAZZO DUDLEY, FLORENCE
                </h1>
                <p className="onlymo a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                  피렌체의 번화한 교차로 한 쪽 코너에는 팔라쪼(중세 이탈리아 귀족들의 저택) 안에 자리한 COS 매장이
                  있습니다. 이 팔라쪼는 피렌체로 피신해온 노섬버랜드 백작 로버트 더들리(Robert Dudley)에 의해 1613년에
                  세워졌습니다.
                </p>
                <p className="onlypc a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                  피렌체의 번화한 교차로 한 쪽 코너에는 팔라쪼(중세 이탈리아 귀족들의 저택) 안에 자리한 COS 매장이
                  있습니다. 이 팔라쪼는 피렌체로 피신해온 노섬버랜드 백작 로버트 더들리(Robert Dudley)에 의해 1613년에
                  세워졌습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
          <div className="o-square" style={{ backgroundColor: '#ffffff' }}>
            <div className="cell">
              <a href="#" target="_self">
                <picture
                  data-component="APicture"
                  className="a-picture"
                  data-component-id="258042af-81e3-4934-bf4e-c6d74aba091d"
                >
                  <img
                    className="a-image initial loading"
                    src="https://image.thehyundai.com/cos/hyundai/20190607/1/1.jpg"
                    alt="좌측 이미지"
                    data-was-processed="true"
                  />
                </picture>
              </a>
            </div>
            <div className="cell">
              <a href="#" target="_self">
                <picture
                  data-component="APicture"
                  className="a-picture"
                  data-component-id="2dfa2e7b-9872-4068-8249-ac1aa3719f87"
                >
                  <img
                    className="a-image initial loading"
                    src="https://image.thehyundai.com/cos/hyundai/20190607/1/2.jpg"
                    alt="우측 이미지"
                    data-was-processed="true"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
