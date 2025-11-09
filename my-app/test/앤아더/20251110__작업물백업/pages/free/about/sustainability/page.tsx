import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '지속가능성',
};

export default function Page() {
  return (
    <FreeHtml>
      {/* textHero */}
      <div className="free-textHero">
        <strong className="hero-item hero-heading fs24">지속가능성</strong>
        <p className="hero-item">
          앤아더스토리즈는 창의성과 영감을 가슴에 품고, 브랜드의 모든 면면에 지속가능성의 가치로 다가갑니다. <br />
          그리고 이 지속가능성의 영향은 사람과 지구 모두에 가닿습니다. <br />
          우리의 목표는 한 시즌을 넘어 오랜 시간 함께할 수 있는, 사랑과 순환의 철학이 담긴 고품질 패션 피스를 만드는
          것입니다. <br />
          그리고 이 여정에서 우리는 더 탁월해지기 위해 늘 연구합니다.
        </p>
      </div>
      {/* gridBox */}
      <div className="free-gridBox third">
        <div className="free-tile">
          <a href="/free/about/recycling">
            <div className="imgCont">
              <img
                className="a-image"
                src="/images/freehtml/sustainability/img_sustainability_01.jpg"
                alt="재활용 계획"
              />
            </div>
          </a>
        </div>
        <div className="free-tile">
          <a href="/free/about/care">
            <div className="imgCont">
              <img
                className="a-image"
                src="/images/freehtml/sustainability/img_sustainability_02.jpg"
                alt="제품 관리 방법"
              />
            </div>
          </a>
        </div>
        <div className="free-tile">
          <a href="/free/about/materials">
            <div className="imgCont">
              <img
                className="a-image"
                src="/images/freehtml/sustainability/img_sustainability_03.jpg"
                alt="제품 소재 안내"
              />
            </div>
          </a>
        </div>
      </div>
      {/* textHero */}
      <div className="free-textHero">
        <p className="hero-item">앤아더스토리즈의 장기적 목표</p>
        <strong className="hero-item hero-heading fs18">
          2030년까지 지속가능한 방식으로 소싱된, 또는 재활용된 소재를
          <br />
          100% 사용하는 것입니다. 여기에서 앤아더스토리즈의 장기 목표에 관해 자세히 확인해 보세요.
        </strong>
        <p className="hero-item">
          2025년까지
          <br />- 모든 패키징은 재사용, 재활용, 또는 퇴비화가 가능하도록 디자인 및 제작됩니다.
          <br />- 모든 천연 가죽은 크롬 성분을 함유하지 않습니다.
          <br />- 2025년 12월까지 캐시미어, 알파카, 야크 등 천연모 소재는 전부 1) 신뢰할 수 있는 기준을 바탕으로 인증된,
          <br /> 동물 복지를 훌륭히 실천하고 있는 농장에서 소싱되거나 2) 재활용 또는 재생된 소재로 소싱되거나
          <br />
          3) 다른 지속 가능한 소재, 비동물성 섬유로 대체됩니다.
          <br />
          <br />
          2030년까지
          <br />- 지속가능한 방식으로 소싱된 소재 또는 재활용 소재를 100% 사용합니다.
          <br />- 패키징은 재활용 소재 또는 기타 지속가능한 방식으로 소싱된 소재로 100% 제작되며, 특히 재활용 소재가 더
          선호됩니다.
        </p>
      </div>
      {/* multiHero */}
      <div className="free-multiHero">
        <div className="image-container">
          <div className="image-pc">
            <a href="/free/about/sustainability/buttonsImpact">
              <img src="/images/freehtml/sustainability/img_sustainability_04_pc.jpg" alt="Buttons with Impact" />
            </a>
          </div>
          <div className="image-mo">
            <a href="/free/about/sustainability/buttonsImpact">
              <img src="/images/freehtml/sustainability/img_sustainability_04_mo.jpg" alt="Buttons with Impact" />
            </a>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="free-section has-bg">
        {/* textBox */}
        <div className="free-textBox">
          <h3 className="heading3">A shared vision for the future</h3>
          <p className="paragraph1">
            완전한 순환(full circularity)을 향한 앤아더스토리즈의 여정이 계속되는 지금, 현재 진행 중인 프로젝트를
            여러분과 계속 공유할 것입니다. H&amp;M 그룹 내 더 큰 비전의 일환으로, 현재와 미래를 동시에 소중히 고려하기
            위한 추가 지원이 마련되었습니다. 여기에서 H&amp;M 그룹의 지속가능성에 대해 자세히 알아보세요.
          </p>
          <p className="paragraph1">
            <a
              className="a-link boxed"
              data-value="READ MORE"
              href="https://hmgroup.com/sustainability/"
              target="_blank"
            >
              더 보기
            </a>
          </p>
        </div>
      </div>
    </FreeHtml>
  );
}
