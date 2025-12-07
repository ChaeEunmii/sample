'use client';

import FreeHtml from '@/views/freehtml/FreeHtml';
import { Text } from '@shared/ui';

const SAMPLE_STRING = `<div>
  <p class="heading3">이것은 샘플 문자열 입니다.</p>
  <p class="paragraph-1">paragraph-1</p>
  <p class="paragraph-2 ut-color-accent">paragraph-2</p>
  <div class="grid-box third">
    <div class="cta">
    <button class="outline" onclick="setInterval(() => {
      console.log('sample');
    }, 1000);">sample</button>
    </div>
  </div>
  <div class="select-box width50">
    <button type="button" class="trigger" aria-expanded="false" aria-controls="customSelect">
      custom select
      <i class="icon"></i>
    </button>
    <div class="box-list" id="customSelect" aria-hidden="true">
      <ul>
        <li>
          <button type="button" class="list-item" style="color: red">
            option 1
          </button>
        </li>
        <li>
          <button type="button" class="list-item" style="color: blue">
            option 2
          </button>
        </li>
        <li>
          <button type="button" class="list-item" style="color: green">
            option 3
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>`;

const MIX_TEXT_STRING = '<div>FreeHtml 컴포넌트 내부에서 ReactNode와 html은 혼합해서 사용할 수 없습니다.</div>';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
      <FreeHtml>
        <Text>컴포넌트 혼합 유형 테스트 - 이것은 Text 컴포넌트 입니다.</Text>
        {MIX_TEXT_STRING}
      </FreeHtml>
      <FreeHtml>{SAMPLE_STRING}</FreeHtml>
      <FreeHtml>
        <h1>Component Guide</h1>
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>accordion</h2>
          </div>
          <div className="accordion">
            <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
              <span>아코디언 기본 스타일</span>
              <i className="icon"></i>
            </button>
            <div className="acc-content" id="accordionContent" aria-hidden="true">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
          </div>
        </div>
      </FreeHtml>
      {/*  */}
      <FreeHtml>
        <div className="free-hero-takeover half">
          <div className="bg-cont">
            <div className="img-cont">
              <img src="/images/freehtml/visual/visual-about-img-01.jpg" alt="" />
            </div>
            <div className="img-cont">
              <img src="/images/freehtml/visual/visual-about-img-02.jpg" alt="" />
            </div>
          </div>
          <div className="texts">
            <h2 className="heading">
              <span className="free-font-arket">arket</span> 사이즈 가이드
            </h2>
            <ul className="cta">
              <li>
                <a className="free-link borderless" href="#">
                  여성
                </a>
              </li>
              <li>
                <a className="free-link borderless" href="#">
                  남성
                </a>
              </li>
              <li>
                <a className="free-link borderless" href="#">
                  아동
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FreeHtml>
      {/*  */}
      <FreeHtml>
        <section className="free-wc-75">
          <div className="free-layout-content half-type">
            <div className="free-spacing-area">
              <div className="img-cont">
                <img
                  src="https://image.thehyundai.com/arket/hyundai/2025/1/24/arket_cafe_241_SEMMELBUN_SEMLA_01_NL.jpg "
                  alt="Martin Berg"
                />
                <div className="caption">
                  <span>Martin Berg, head chef at ARKET café</span>
                </div>
              </div>
              <div className="text-cont">
                <h2 className="heading">
                  <span className="free-font-arket">About&nbsp;&nbsp;&nbsp;</span>
                  <span className="uppercase">ARKET 카페</span>
                </h2>
                <div className="text-box">
                  <p className="paragraph1 texts font-grow-18">
                    ARKET 카페는 계절 주의 베지테리언 주방과 자연스러운 풍미를 추구하는 커피숍 그리고 모던하며 지속
                    가능한 먹거리를 추구하는 카페입니다. 우리의 메뉴는 뉴 노르딕 일상 음식의 비전을 반영합니다. 전통적인
                    방법과 건강하고 윤리적인 방식으로 재배된 재료를 사용하는 것을 강조하며 북유럽과 해외의 영향을 받은
                    레시피 선보입니다.
                  </p>

                  <p className="paragraph1 texts">
                    헤드 셰프인 Martin Berg는 자신을 '미션 중'이라고 묘사합니다. 뉴 노르딕 푸드 무브먼트의 초기 지지자
                    중 한 명인 Martin은 미슐랭 스타 레스토랑에서 총 주방장이었으며 스톡홀름의 전통적인 사워도우 호밀
                    빵과 유기농 카페를 제공하는 베이커리의 공동 설립자로 지속 가능하고 감각적인 요리 분야에서 풍부한
                    배경을 가지고 있습니다.
                    <br />
                    <br />
                    ARKET 카페에서의 그의 작업은 더 건강하고 지속 가능한 식문화로의 전환이 우리의 일상적인 식사와 습관을
                    포괄하는 파인 다이닝 세계보다 더 광범위하고 접근하기 쉬워야 한다는 확신에 기반합니다. 통곡물, 과일,
                    채소, 견과류, 씨앗, 전통 콩류를 기반으로 한 맛있는 제철 메뉴를 제공함으로써 Martin의 사명은 사람들이
                    긍정적인 대안을 선택하도록 영감을 주는 것입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="free-wc-75 free-py-s">
          <h2 className="heading2 txtc free-main-headline">
            <span className="uppercase free-font-arket">ABOUT&nbsp;&nbsp;&nbsp;</span>
            <span className="uppercase">ARKET CAFÉ</span>
          </h2>
          <div className="free-img-listing">
            <div className="list-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/visual/visual-cafe-listing-01.jpg" alt="" />
              </a>
              <div className="text-box">
                <h3 className="paragraph3 heading">
                  <span className="free-font-arket">ARKET</span> 레시피
                </h3>
                <p className="paragraph3 texts">
                  맛있는 샌드위치, 하티 샐러드 그리고 맛을 풍부하게 해주는 토핑을 만드는 방법까지 알 수 있는 Martin
                  Berg에 의한 신선한 레시피를 소개합니다.
                </p>
              </div>
            </div>
            <div className="list-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/visual/visual-cafe-listing-02.jpg" alt="" />
              </a>
              <div className="text-box">
                <h3 className="paragraph3 heading">
                  <span className="free-font-arket">ARKET CAFÉ</span> 머천다이즈
                </h3>
                <p className="paragraph3 texts">
                  일러스트레이터 올가 프라더(Olga Prader)와 콜라보레이션한 새로운 컬렉션.
                </p>
              </div>
            </div>
            <div className="list-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/visual/visual-cafe-listing-03.jpg" alt="" />
              </a>
              <div className="text-box">
                <h3 className="paragraph3 heading">와브로 방앗간</h3>
                <p className="paragraph3 texts">
                  스웨덴 스톡홀름의 1시간 반 거리에 위치해 있는 가족이 운영하는 작은 농장입니다. 와브로 방앗간은 오가닉
                  스톤 밀드 밀가루와 통곡물 그리고 맥주 공장과 위스키 증류소를 위한 스페셜티 맥아를 생산합니다.
                </p>
              </div>
            </div>
            <div className="list-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/visual/visual-cafe-listing-04.jpg" alt="" />
              </a>
              <div className="text-box">
                <h3 className="paragraph3 heading">
                  셰프 <span className="free-font-arket">Martin Berg</span>
                </h3>
                <p className="paragraph3 texts">
                  뉴 노르딕 푸드 무브먼트의 초기 지지자 중 한 명인 Martin은 미슐랭 스타 레스토랑에서 총 주방장이었으며
                  스톡홀름의 전통적인 사워도우 호밀 빵과 유기농 카페를 제공하는 베이커리의 공동 설립자로 지속 가능하고
                  감각적인 요리 분야에서 풍부한 배경을 가지고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="free-wc-75 ">
          <div className="free-wc-75 ">
            <div className="free-wc-50 free-text-field free-py-m">
              <h2 className="heading txtc">
                <span className="free-font-arket">ARKET</span>&nbsp;&nbsp; 스토어 &amp; 카페
              </h2>
              <div className="text-box">
                <p className="paragraph1 texts">
                  직원들, 고객들과 커뮤니티의 웰빙을 지키기 위해 정부의 가이드라인에 따라서 오픈 시간을 조정하고
                  있습니다. 아래에서 각 매장들의 구체적인 정보를 확인하세요.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="free-wc-50">
          <div className="free-wc-50 free-layout-content free-py-s">
            <h2 className="heading2 txtc free-main-headline">
              <span className="heading-value">South Korea</span>
            </h2>
            <div className="free-tag-cloud">
              <h6 className="cloud-title">Seoul</h6>
              <ul className="free-tag-list">
                <li className="list-item">
                  <a href="#" target="_self" className="cloud-item">
                    아이파크몰 용산
                  </a>
                </li>
              </ul>
            </div>
            <div className="free-tag-cloud">
              <h6 className="cloud-title">Seoul</h6>
              <ul className="free-tag-list">
                <li className="list-item">
                  <a href="#" target="_self" className="cloud-item">
                    가로수길
                  </a>
                </li>
              </ul>
            </div>
            <div className="free-tag-cloud">
              <h6 className="cloud-title">Seoul</h6>
              <ul className="free-tag-list">
                <li className="list-item">
                  <a href="#" target="_self" className="cloud-item">
                    더현대 서울
                  </a>
                </li>
              </ul>
            </div>
            <div className="free-tag-cloud">
              <h6 className="cloud-title">Busan</h6>
              <ul className="free-tag-list">
                <li className="list-item">
                  <a href="#" target="_self" className="cloud-item">
                    신세계 센텀시티
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="free-wc-vnav">
          <div className="free-img-listing img-spacing-type">
            <div className="list-item">
              <div className="free-img-cont">
                <a href="https://www.arket.com/ko-kr/about/food/recipes.html" target="_self">
                  <img
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2687630020250324111416.jpg"
                    alt=""
                  />
                </a>
                <p className="listing-cta">ARKET 레시피</p>
              </div>
            </div>
            <div className="list-item">
              <div className="free-img-cont">
                <a href="https://www.arket.com/ko-kr/editorial/interview.html" target="_self">
                  <img
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2687631020250324111425.jpg"
                    alt=""
                  />
                </a>
                <p className="listing-cta">ARKET 피플</p>
              </div>
            </div>
            <div className="list-item">
              <div className="free-img-cont">
                <a href="https://www.arket.com/ko-kr/editorial/care-guide.html" target="_self">
                  <img
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2687632020250324111441.jpg"
                    alt=""
                  />
                </a>
                <p className="listing-cta">케어 가이드</p>
              </div>
            </div>
            <div className="list-item">
              <div className="free-img-cont">
                <a href="https://www.arket.com/ko-kr/stores.html" target="_self">
                  <img
                    src="https://image.thehyundai.com/static/image/sect/hnm/cpnt/hnmmain2687633020250324111448.jpg"
                    alt=""
                  />
                </a>
                <p className="listing-cta">매장 &amp; 카페</p>
              </div>
            </div>
          </div>
        </div>

        <div className="free-wc-50">
          <h2 className="heading2 txtc free-main-headline has-hover borderless">
            <span className="uppercase caption free-font-arket">explore&nbsp;&nbsp;&nbsp;</span>
            <a href="#" className="uppercase tag">
              ARKET
            </a>
          </h2>
          <div className="free-explore-grid">
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-materials.png" />
              </a>
              <div className="grid-label">
                <span>소재</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-suppliers.png" />
              </a>
              <div className="grid-label">
                <span>공급업체</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-design.png" />
              </a>
              <div className="grid-label">
                <span>디자인</span>
              </div>
            </div>
            <div className="explore-item" aria-current="true">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-food.png" />
              </a>
              <div className="grid-label">
                <span>음식</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-people.png" />
              </a>
              <div className="grid-label">
                <span>사람들</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-balance.png" />
              </a>
              <div className="grid-label">
                <span>균형</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-knowledge.png" />
              </a>
              <div className="grid-label">
                <span>지식</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-community.png" />
              </a>
              <div className="grid-label">
                <span>커뮤니티</span>
              </div>
            </div>
            <div className="explore-item">
              <a href="#" target="_self" className="img-cont">
                <img src="/images/freehtml/icons/ico-explore-environment.png" />
              </a>
              <div className="grid-label">
                <span>환경</span>
              </div>
            </div>
          </div>
        </div>
        <div className="free-wc-25">
          <div className="free-text-field free-py-s">
            <div className="text-box">
              <p className="paragraph3 texts">
                그리드는 우리의 시각적 아이덴티티에 있어 필수적인 요소입니다. 그것은 아카이브의 개념을 나타내며, 식물
                이름부터 직물의 무게 및 우리의 컬렉션에 사용되는 다양한 소재에 이르는 정보를 정리하고 표시하는 데
                사용됩니다. 이 9개의 사각형은 우리의 세상을 구성하는 각 부분을 상징하며, 우리가 변화를 만들기 위해
                노력하는 영역을 나타냅니다.
              </p>
            </div>
          </div>
        </div>
      </FreeHtml>
      {/*  */}
      <FreeHtml>
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>custom select + auto complete</h2>
          </div>
          <div className="grid-item">
            <div className="auto-box">
              <div className="field">
                <input
                  type="text"
                  className="trigger-input"
                  aria-expanded="false"
                  aria-controls="customSelect"
                  aria-autocomplete="list"
                  aria-haspopup="listbox"
                  autoComplete="off"
                  placeholder="검색어 입력"
                />
                <i className="icon"></i>
              </div>

              <div className="box-list" id="customSelect" role="select" aria-hidden="true">
                <ul>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      서울시
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      경기도
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      강원도
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      충청도
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      전라도
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      경상도
                    </button>
                  </li>
                  <li>
                    <button type="button" className="list-item" role="option" aria-selected="false">
                      제주도
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="grid-box half">
          <div className="swiper freeSwiper" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="img-con">
                  <img src="/images/dummy/@sample_img_01.jpg" alt="" />
                </div>
                <p className="heading1">Slide 1</p>
              </div>
              <div className="swiper-slide">
                <div className="img-con">
                  <img src="/images/dummy/@sample_img_02.jpg" alt="" />
                </div>
                <p className="heading1">Slide 2</p>
              </div>
              <div className="swiper-slide">
                <div className="img-con">
                  <img src="/images/dummy/@sample_img_03.jpg" alt="" />
                </div>
                <p className="heading1">Slide 3</p>
              </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <div className="grid-item flex-box">
            <h2>default swiper</h2>
          </div>
        </div>
        {/*  */}
      </FreeHtml>
      {/*  */}
      <FreeHtml>
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>heading</h2>
          </div>
          <div className="grid-item" style={{ gap: '24px' }}>
            <div>
              <p>heading1</p>
              <p className="heading1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <p>heading2</p>
              <p className="heading2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <p>heading3</p>
              <p className="heading3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>paragraph</h2>
          </div>
          <div className="grid-item">
            <div>
              <strong>paragraph-1</strong>
              <p className="paragraph-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <strong>paragraph-2</strong>
              <p className="paragraph-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <strong>paragraph-3</strong>
              <p className="paragraph-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <h2>img-cont</h2>
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>Half Grid</h2>
          </div>
          <div className="img-cont grid-item">
            <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>colors</h2>
          </div>
          <div className="grid-item">
            <p className="paragraph-3 black">black</p>
            <p className="paragraph-3 white" style={{ background: '#000' }}>
              white
            </p>
            <p className="paragraph-3 gray-6">gray-6</p>
            <p className="paragraph-3 gray-7">gray-7</p>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>link</h2>
          </div>
          <div className="grid-item">
            <a href="#" className="link active paragraph-3">
              active
            </a>
            <br />
            <a href="#" className="link paragraph-3">
              default
            </a>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="grid-box half">
          <div className="grid-item flex-box">
            <h2>cta</h2>
          </div>
          <div className="grid-item cta">
            <button className="outline">cta</button>
          </div>
        </div>
        {/*  */}
      </FreeHtml>{' '}
    </div>
  );
}
