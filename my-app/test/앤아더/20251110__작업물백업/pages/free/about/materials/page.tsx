import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 소재 안내',
};

export default function Page() {
  return (
    <FreeHtml>
      {/* section */}
      <div className="free-section u-align-to-logo">
        {/* textBox */}
        <div className="free-textBox">
          <h3 className="heading3 q-mega">소재</h3>
          <p className="paragraph2">
            세심하게 엄선된 소재로 제작된 앤아더스토리즈의 아이템들은 오랜 시간 함께할 수 있도록 디자인되었습니다.
            우리는 고품질 소재 소싱에 많은 관심을 기울이며, 환경에 미치는 영향을 줄인 지속가능한 소재를 위해 언제나
            최선을 다하고 있습니다. 아래에서 앤아더스토리즈의 소재 셀렉션에 대해 더 자세히 알아보세요.
          </p>
        </div>
      </div>
      {/* layout(narrow) */}
      <div className="free-layout u-align-to-logo">
        <div className="free-layout--narrow">
          {/* 아코디언__start */}
          <div className="accordion-group my40">
            {/* 울 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>울</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  천연 소재이자 재생 가능한 울은 많은 장점을 가진 섬유예요. 습기를 흡수하고 발산하는 성질이 있으며,
                  통기성이 매우 뛰어나답니다. 인조 섬유와 달리 울은 체온의 변화에 반응하는 활성 섬유로 추운 날씨엔
                  보온성을, 더운 날엔 시원함을 전해준답니다.
                  <br />
                  <br />
                  특유의 흡습성으로 정전기를 방지해 패브릭이 몸에 과하게 들러붙지 않으며 동시에 먼지나 보풀이 덜
                  생깁니다. 또한 천연적으로 구김이 쉽게 가지 않으며, 얼룩이 흡수되지 않게 차단하는 보호막이 있습니다.
                  <br />
                  <br />
                  울은 자정(自淨) 능력이 있어 깨끗하게 관리가 가능합니다. 울 제품을 늘 새 것처럼 유지하는 가장 좋은
                  방법은 가끔씩 바람을 쐬어주는 것이지요. 덕분에 물과 에너지 절약에도 효과적이랍니다. 눈이 많이 내리는
                  지역에 살고 계시다면, 눈 위에 1시간 정도 울 웨어를 널어 둔 후 털어주세요. 더없이 상쾌한 감각을 느낄 수
                  있을 거예요. 물세탁이 필요한 경우 (그리고 가능한 경우) 미지근한 물로 손세탁 하거나, 세탁기의 울 코스로
                  돌려주세요. 또한 반드시 앤아더스토리즈의 델리킷 디터전트(Delicate Detergent)처럼 순한 세제를
                  이용하시는 것을 잊지 마세요. 세탁 후에는 가능하다면 편평한 곳에 눕혀 자연건조해 주세요.
                </p>
              </div>
            </div>
            {/* RWS */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>RWS</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  RWS(Responsible Wool Standard • 울 생산을 위한 동물 &amp; 농가 복지 기준) 인증은 다음의 항목을
                  기준으로 모범적인 운영을 하는 농가들에게 제공합니다.
                  <br />
                  • 적극적인 토지 관리
                  <br />
                  • 동물 복지에 관한 총체적 존중 실천
                  <br />
                  • 동물 복지를 위한 다섯 가지 자유 존중
                  <br />
                  <br />
                  RWS 울은 일반 울 못지않게 높은 퀄리티를 자랑합니다. 앤아더스토리즈는 최종 상품에 대하여 각 최소 30%
                  이상의 RWS 울이 함유되도록 규정하고 있답니다.
                  <br />
                  <br />
                  또한 RWS는 메리노 품종 양(Merino sheep)에게서 얻어지는, 일반 울보다 더 부드러운 메리노 울(Merino
                  Wool)에도 적용됩니다.
                  <br />
                  <br />
                  RWS 울 자세히 알아보기:
                  <br />
                  <br />
                  RWS (Responsible Wool) | 텍스타일 익스체인지
                </p>
              </div>
            </div>
            {/* 리사이클 울 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>리사이클 울</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  울 재활용을 통해 우리는 원자재를 절약하고 화학약품, 물, 토양 사용을 줄이며, 버려지는 폐기물 역시
                  최소화할 수 있습니다. 리사이클 울은 비교적 두께감 있는 아웃도어 웨어에 이상적이랍니다. 폐기물, 또는
                  생산 과정이나 의류 수거 이니셔티브로 수집된 옷에서 나온 자투리 원단에서 탄생하지요. 앤아더스토리즈의
                  리사이클 울은 제 3자(GRS • Global Recycled Standard) 인증을 받았습니다.
                  <br />
                  <br />
                  앤아더스토리즈는 최종 상품에 대하여 각 최소 50% 이상의 리사이클 울이 함유되도록 규정하고 있습니다.
                </p>
              </div>
            </div>
            {/* RMS */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>RMS</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  모헤어는 길고 섬세하며 윤기가 흐르는 섬유로, 염료가 독보적으로 잘 표현된다는 특징이 있답니다.
                  앤아더스토리즈에서 사용되는 모헤어는 모두 염소의 복지와, 염소가 풀을 뜨는 토양에 대한 RMS(RESPONSIBLE
                  MOHAIR STANDARD • 모헤어 생산을 위한 동물 &amp; 농가 복지 기준) 인증을 받았습니다. 기준 항목은 다음과
                  같습니다.
                  <br />
                  <br />
                  • 적극적인 토지 관리
                  <br />
                  • 동물 복지에 관한 총체적 존중 실천
                  <br />
                  • 동물 복지를 위한 다섯 가지 자유 존중
                  <br />
                  <br />
                  인증 받은 리사이클 모헤어 사용도 허용됩니다.
                  <br />
                  <br />
                  각 최종 상품에 대하여 규정된 함유율은 다음과 같습니다.
                  <br />
                  <br />
                  &gt;30% RMS 모헤어
                  <br />
                  &gt;50% 리사이클 모헤어
                  <br />
                  <br />
                  RMS 울 자세히 알아보기:
                  <br />
                  <br />
                  RMS (Responsible Mohair) | 텍스타일 익스체인지
                </p>
              </div>
            </div>
            {/* GCS */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>GCS</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  캐시미어는 하이 퀄리티의 고급 섬유입니다. 가볍고 섬세하면서도 견고해서 사랑받는 이 섬유는 매우
                  부드럽고 실키하며 매끈한 특징이 있지요. 최고 품질의 캐시미어의 경우에도 보풀이 발생할 수 있기에, 필요
                  시 빗질을 해주는 것이 좋습니다.
                  <br />
                  <br />
                  ‘더 굿 캐시미어 스탠다드(The Good Cashmere Standard®)는 ‘에이드 바이 트레이드 파운데이션(AbTF • Aid
                  by Trade Foundation)’의 이니셔티브예요. 이는 캐시미어 생산 과정에서 동물 복지를 강화하고 소 • 대형
                  농가에 대한 사회적 기준을 활성화하는 동시에, 환경을 보호하고 생물 다양성을 촉진하는 제도랍니다.
                  앤아더스토리즈에서 사용되는 캐시미어는 모두 더 굿 캐시미어 스탠다드 인증을 받은 농가 혹은 기타
                  리사이클 인증된 곳에서 소싱됩니다.
                  <br />
                  <br />
                  각 최종 상품에 대하여 규정된 함유율은 다음과 같습니다.
                  <br />
                  <br />
                  &gt;30% GCS 캐시미어
                  <br />
                  &gt;50% 리사이클 캐시미어
                  <br />
                  <br />
                  GCS 캐시미어 자세히 알아보기:
                  <br />
                  <br />더 굿 캐시미어 스탠다드
                </p>
              </div>
            </div>
            {/* 코튼 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>코튼</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  코튼은 천연 섬유의 세계에서 진정한 에센셜 소재이지요. 활용도가 높은 코튼은 부드럽고 통기성이 좋으며
                  염색이 잘 된답니다. 또 다양한 패브릭과 혼방이 가능하지요. 2020년부터 앤아더스토리즈는 지속가능한
                  방식으로 소싱되는 코튼 -오가닉 코튼, BCI(Better Cotton Initiative)를 통해 소싱된 코튼, 또는 리사이클
                  코튼- 만을 사용하고 있어요. 현재로선 이것이 앤아더스토리즈가 코튼에 있어 지속가능성을 실천하는 최선의
                  방법이지만, 우리가 성장해 나갈 앞으로의 여정에서 리사이클 코튼의 활용 방식도 더욱 성장하겠지요.
                </p>
              </div>
            </div>
            {/* 오가닉 코튼 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>오가닉 코튼</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  오가닉 코튼은 기본적으로 유전자 조작이 되지 않은 면화를 화학 비료나 살충제 사용 없이 경작 및 재배하여
                  얻어진 코튼을 의미합니다. 그 과정에서, 토양의 비옥함과 생물 다양성도 함께 증진되지요. 오가닉 코튼은
                  일반 코튼과 동일한 모습과 감촉이 특징입니다. 앤아더스토리즈 데님에 사용되는 코튼은 모두 GOTS 및 OCS
                  유기농 인증되었습니다. 인증과 관련해 자세한 내용을 보고 싶으시면 다음 링크를 클릭해 주세요.
                  <br />
                  <a href="https://www.global-standard.org" target="_blank" className="a-link">
                    https://www.global-standard.org
                  </a>
                  <br />
                  <a href="https://textileexchange.org/integrity" target="_blank" className="a-link">
                    https://textileexchange.org/integrity
                  </a>
                </p>
              </div>
            </div>
            {/* BCI */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>BCI</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  앤아더스토리즈에서 사용되는 코튼 중 일부는 BCI(Better Cotton Initiative)를 통해 소싱됩니다. BCI는 면
                  농가들이 더욱 환경 친화적이고, 사회적 • 경제적으로 지속가능한 농법을 선택하도록 지원하는 비영리
                  단체입니다. 이 철학은 질량 균형 시스템(mass balance system)을 바탕으로 하고 있습니다. 즉, 어떤 코튼이
                  토양에서 재배되어 최종 상품이 되기까지의 여정에서 다른 종류의 코튼과 별개로 분리되어 있는 것이 아님을
                  의미합니다. 이는 재생 전기를 사용할 때와 비슷합니다. 콘센트에서 어떤 특정 전기를 뽑아서 사용한다기
                  보다, 전반적으로 보다 청정한 방식의 에너지 생산에 기여한다는 것이 더욱 정확하기 때문입니다.
                  <br />
                  <br />
                  BCI는 생물 다양성과 책임 있는 토지사용을 지원하는 것은 물론, 비료와 살충제가 환경에 미치는 영향을
                  최소화하는 프로세스를 통해 농가들이 더욱 친환경적 방식으로 코튼을 생산하도록 교육합니다. 농가들은
                  BCI와 그 파트너들을 통해 물을 효율적으로 사용하고 토양과 자연 서식지의 건강을 보호하며, 매우 해로운
                  화학 약품의 사용을 줄이고, 환경을 생각하는 재배 원칙을 적용하는 방법을 배우고 있습니다. 기본적으로,
                  BCI는 코튼 생산이라는 큰 틀의 전체적인 시각으로 접근하고 있습니다.{' '}
                  <a href="https://bettercotton.org/learnmore" target="_blank" className="a-link">
                    여기
                  </a>
                  에서 더 자세한 내용을 확인해 보세요.
                </p>
              </div>
            </div>
            {/* 리사이클 코튼 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>리사이클 코튼</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  리사이클 코튼을 사용할 때 발생하는 두 가지 큰 이점이 있습니다. 먼저 원자재 사용이 줄어들고, 두 번째,
                  폐기물 발생도 줄어듭니다. 리사이클 코튼은 폐기물, 또는 생산 과정이나 의류 수거 이니셔티브로 수집된
                  옷들에서 나온 자투리 원단에서 탄생한답니다. 리사이클 코튼을 더 많이 사용할수록 우리는 더욱 순환적인
                  접근 방식으로 나아가게 됩니다.
                </p>
              </div>
            </div>
            {/* 리넨 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>리넨</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  아마 섬유에서 탄생한 리넨은 견고하고 촉감이 매우 좋으며, 더운 계절에 한결 같은 시원함을 선사해 주지요.
                  토양에 심고 재배하기까지의 과정이 겨우 3개월 정도로 짧게 소요되며, 비옥하지 않은 토양에서도 잘 자라고
                  비료, 살충제, 물의 소비량이 적기에, 리넨은 지속 가능성의 기준에서 훌륭한 대체제라고 할 수 있답니다.
                </p>
              </div>
            </div>
            {/* 쿠프로 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>쿠프로</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  가볍고 통기성이 좋으며 피부에 닿는 감촉이 실크처럼 매끄러운 쿠프로는 훌륭한 특징들로 가득하답니다.
                  기존에는 사용하지 않고 버려지던 코튼 린터(물레질한 다음 목화씨에 남은 잔 솜털)을 활용해 탄생한 식물성
                  섬유예요. 쿠프로는 생물 분해성이 있고 비료로 사용이 가능하며, 폐기 후 자연 분해되는 성질이 있습니다.
                </p>
              </div>
            </div>
            {/* TENCEL™ LYOCELL */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>TENCEL™ LYOCELL</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  견고한 동시에 실크처럼 부드러운 감촉의 섬유입니다. 매끈하고 멋스러운 광택감과 아름답게 드레이프지는
                  룩이 특징이며, 습기를 잘 흡수하는 성질이 있습니다. 친환경 목재에서 추출되어, ‘렌징 목재 및 펄프
                  방침(Lenzing Wood and Pulp Policy)’의 엄격한 가이드라인을 따라 인증 및 관리된 자원으로 재배되는 텐셀
                  리오셀은 순환형(closed-loop) 생산 프로세스에 동참합니다.
                </p>
              </div>
            </div>
            {/* TENCEL™ MODAL */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>TENCEL™ MODAL</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  견고하면서도 동시에 유연한 텐셀 모달은 주로 비치 우드에서 탄생하는 섬유입니다. 놀랍도록 부드럽고
                  통기성이 뛰어나며, 주름이 잘 지지 않고 습기를 잘 흡수합니다. 재생가능 에너지 사용 및 프로세스
                  케미컬(process chemicals)의 재사용을 통해 탄생하는 이 섬유는 자연이 그 본래의 모습으로 되돌아가는
                  여정에 온전히 동참합니다.
                </p>
              </div>
            </div>
            {/* LENZING™ ECOVERO™ VISCOSE */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>LENZING™ ECOVERO™ VISCOSE</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  물결처럼 부드럽게 흐르며, 놀랍도록 통기성이 뛰어난 비스코스 섬유는 인증 및 관리된 농가에서 공수한
                  지속가능 목재 및 펄프로 탄생한답니다. 세계 최고 수준인 ‘EU 에코라벨’ 인증을 받아, 생산에서 사용이 다할
                  때까지의 전 과정에서 높은 환경 기준에 부합합니다.
                </p>
              </div>
            </div>
            {/* NAIA™ */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>NAIA™</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  NAIA™ 섬유로 탄생한 패브릭은 매우 부드럽고 통기성이 좋으며, 건조 속도가 빠르답니다. 또한 아름답게
                  드레이프지는 모습으로 멋스러운 룩을 연출하지요. 친환경적으로 관리되는 숲에서 공수한 재생 가능 자원으로
                  탄생한 이 섬유는 아름다운 컬러와 고급스러운 광택감을 잘 표현하며, 순환형(closed-loop) 생산 프로세스로
                  탄생합니다.
                </p>
              </div>
            </div>
            {/* PIÑATEX® */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>PIÑATEX®</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  Piñatex®는 파인애플 잎 섬유에서 얻어진 혁신적인 천연 텍스타일입니다. 파인애플 잎은 농사 프로세스에서
                  얻어지는 부산물로, 더없이 멋스러운 논-우븐(non-woven) 소재로 변신합니다.
                </p>
              </div>
            </div>
            {/* VEGEA™ */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>VEGEA™</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  VEGEA™는 와인 생산 과정에서 발생하는 부산물을 일부 활용해 탄생한 혁신적인 비건(vegan) 소재입니다.
                  <br />
                  <br />
                  버려지는 포도 껍질, 줄기, 씨앗이 아름다운 페이크 레더로 변신합니다.
                </p>
              </div>
            </div>
            {/* PETA 승인 비건 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>PETA 승인 비건</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  PAV(PETA-Approved Vegan)는 동물 보호 단체인 PETA가 주관 및 수여하는 인증제도입니다.
                  <br />
                  <br />
                  인증에는 다음의 요소들이 포함됩니다.
                  <br />
                  <br />
                  • 제품에 사용된 섬유/소재
                  <br />
                  • 염료, 프린트, 접착제 (최종 제품의 일부)
                  <br />
                  • 트림
                  <br />
                  <br />
                  <a
                    href="https://www.peta.org/living/personal-care-fashion/peta-approved-vegan-logo/"
                    target="_blank"
                    className="a-link"
                  >
                    여기
                  </a>
                  에서 더 자세한 내용을 확인하세요.
                </p>
              </div>
            </div>
            {/* 리사이클 폴리에스터 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>리사이클 폴리에스터</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  일반 폴리에스터는 옷에 가장 흔히 사용되는 인조 섬유로, 원유에서 탄생합니다. 재생이 불가능하며 탄소
                  배출량이 많고, 분해되기까지 200년이 넘는 시간이 소요됩니다. 이것이 바로 앤아더스토리즈가 기존의 버진
                  폴리에스터에서 눈을 돌려 리사이클 폴리에스터에 적극적인 관심을 가지는 이유랍니다. 일반적으로, 리사이클
                  폴리에스터는 사용한 페트병과 기타 폴리에스터 폐기물을 통해 생산되며, 버려지는 플라스틱의 양을 줄이는데
                  기여합니다.
                </p>
              </div>
            </div>
            {/* 리사이클 폴리아미드/나일론 */}
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>리사이클 폴리아미드/나일론</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p className="paragraph1">
                  폴리아미드는 또 하나의 대표적인 오일 베이스 섬유로, 언더웨어와 타이츠에 주로 활용되나 아우터에도
                  사용되고 있습니다. 보통 나일론(Nylon)이라는 상표명으로 불리기도 합니다. 나일론은 본래 실크 스타킹의
                  대체제로 1930년대에 개발되었습니다.
                  <br />
                  <br />
                  앤아더스토리즈는 오래된 어망과 카펫 바닥재 등을 통해 리사이클 폴리아미드를 생산합니다. 또한 생산
                  과정에서 버려지는 자투리 소재들도 활용하여, 천연 자원을 절약하고 폐기물 발생을 줄이는데 동참하고
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          {/* 아코디언__end */}
        </div>
      </div>
      {/* banner */}
      <div className="free-banner">
        <div className="free-banner--cont">
          <h3 className="heading4 font-base">지속 가능한 방식으로 소싱된 소재</h3>
          <p className="paragraph1">
            지속가능한 방식으로 소싱된 소재의 멋진 점은 더 적은 (그리고 더 나은) 환경 발자국을 남긴다는 것입니다. 우리는
            제 3자 전 과정 평가(life cycle assessment • LCA) 데이터를 활용해 지속가능하게 소싱된 소재와 재활용 소재의
            환경 영향을 평가합니다. 또한 지속가능한 방식으로 소싱된 앤아더스토리즈의 소재 대부분은 RWS, GCS 등 제 3자의
            검증과 인증을 받습니다.
            <br />
            <br />
            상품의 품질 표시표에 “지속가능한 방식으로 소싱된 소재”라는 표기가 붙으려면, 함유된 소재의 최소 50%가
            지속가능한 방식으로 소싱된 소재여야 합니다. 여기에 예외 사항이 있는데, 재활용 코튼의 하한선은 20%이며 RWS
            울, RMS 모헤어, GCS 캐시미어의 하한선은 30%입니다.
          </p>
          <p className="paragraph1">
            <a
              className="a-link boxed"
              data-value="VIEW PRODUCTS"
              href="https://www.stories.com/kr_krw/clothing/sustainable-collection.html"
              target="_blank"
            >
              상품 모두 보기
            </a>
          </p>
        </div>
      </div>
    </FreeHtml>
  );
}
