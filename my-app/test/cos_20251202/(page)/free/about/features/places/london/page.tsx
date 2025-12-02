import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coal Drops Yard - COS KR',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="content-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n@container root (max-width:767px){\n.onlypc{display:none !important;}\n.onlymo{display:block !important;}\n}\n@container root (min-width:768px){\n.onlypc{display:block !important;}\n.onlymo{display:none !important;}\n}\n.building-header h1.a-heading-1.fixed-size.q-peta{font-size:20px !important;color:#444444;line-height: 26px !important;font-family: 'Gill Sans MT Pro Medium','Nanum Barun Gothic';letter-spacing: 0.002em;word-break: break-all;}\n.building-header p.a-paragraph.fixed-size.q-alpha{font-size:20px !important;color:#444444;line-height: 26px !important;font-family: 'Gill Sans MT Pro Medium','Nanum Barun Gothic';letter-spacing: 0.002em;word-break: break-all;}\n",
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
                  COAL DROPS YARD, LONDON
                  <br />
                  예술, 디자인 그리고 경험을 위한 공간
                </h1>
                <p className="onlymo a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                  런던 킹스 크로스 매장은 COS 컬렉션과 예술이 공존하는 공간입니다. <br />
                  <br />
                  2019 밀라노 디자인 위크에서 첫 선을 보였던 건축가 아서 마우매니(Arthur Mamou-Mani)의 작품
                  「Conifera」를 이제 COS 킹스 크로스 매장에서 만나보세요.
                  <br />
                  「Conifera」는 재생 가능한 소재를 사용하여 3D 프린팅으로 완성한 설치 작품입니다. 마우매니의 작품뿐만
                  아니라 다른 여러 아티스트들의 작품들과 한정판 프린트, 그리고 다양한 서적을 COS 컬렉션의 특별 에딧과
                  함께 즐겨보세요.
                </p>
                <p className="onlypc a-paragraph fixed-size q-alpha" style={{ color: '' }}>
                  런던 킹스 크로스 매장은 COS 컬렉션과 예술이 공존하는 공간입니다. <br />
                  <br />
                  2019 밀라노 디자인 위크에서 첫 선을 보였던 건축가 아서 마우매니(Arthur Mamou-Mani)의 작품
                  「Conifera」를 이제 COS 킹스 크로스 매장에서 만나보세요. 「Conifera」는 재생 가능한 소재를 사용하여 3D
                  프린팅으로 완성한 설치 작품입니다. 마우매니의 작품뿐만 아니라 다른 여러 아티스트들의 작품들과 한정판
                  프린트, 그리고 다양한 서적을 COS 컬렉션의 특별 에딧과 함께 즐겨보세요.
                </p>
              </div>
            </div>
          </div>
          {/* // blogtext-*/}
          {/* textlog */}
          {/* //textlog */}
          {/* ohero */}
          {/* //ohero */}
        </div>
        <div className="o-spacing" />
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
                    src="https://image.thehyundai.com/cos/hyundai/20190529/1/1.jpg"
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
                    src="https://image.thehyundai.com/cos/hyundai/20190529/1/2.jpg"
                    alt="우측 이미지"
                    data-was-processed="true"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
        <div className="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24">
          <hr className="a-keyline" />
        </div>
      </div>
    </FreeHtml>
  );
}
