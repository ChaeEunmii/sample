import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '단추에 깃든 가치',
};

export default function Page() {
  return (
    <>
      <FreeHtml>
        {/* textHero */}
        <div className="free-textHero">
          <strong className="hero-item hero-heading fs24">단추에 깃든 가치, 더 나은 미래를 향하다</strong>
          <p className="hero-item hero-heading fs16">
            인도 ‘재활용 단추 프로젝트’의 일환으로, 앤아더스토리즈가 가장 취약한 사회 계층을
            <br />
            지원하는 동시에 포용적 순환 경제를 향한 발걸음을 내딛는다.
          </p>
        </div>
        {/* multiHero */}
        <div className="free-multiHero">
          <div className="image-container">
            <div className="image-pc">
              <img src="/images/freehtml/sustainability/img_buttons_impact.jpg" alt="Alternate image" />
            </div>
            <div className="image-mo">
              <img src="/images/freehtml/sustainability/img_buttons_impact.jpg" alt="Alternate image" />
            </div>
          </div>
        </div>
        {/* textHero */}
        <div className="free-textHero">
          <strong className="hero-item hero-heading fs14">비공식 청소 노동자 - 순환 경제를 이끌 조용한 힘</strong>
          <p className="hero-item fs12">
            비공식 청소부 공동체는 인도의 폐기물 관리 부문에서 아주 중요한 역할을 하고 있습니다. <br />
            매년 쏟아져 나오는 6,200만 톤의 쓰레기를 약 150만~400만 명의 노동자들이 수거하고 세척하고 분류하고 분리하여,
            순환 경제에 기여하고 있지요.
            <br /> 하지만 이들 대부분이 가난에 허덕이고 괴롭힘에 시달리며, 사회 보장 제도를 온전히 누리지 못하거나 전혀
            혜택을 받지 못하고 있는 실정입니다.
          </p>
          <strong className="hero-item hero-heading fs14">사무히카 샥티 - 더 나은 삶으로 이끌다</strong>
          <p className="hero-item fs12">
            사무히카 샥티(Saamuhika Shakti)는 청소부들이 더 존엄하고 나은 삶을 영위하도록 돕기 위해 2020년에 출범된 공동
            협력 프로젝트입니다.
            <br />
            교육, 건강, 안전 등 이들의 기본 욕구에 부응하기 위해 다양한 부문의 단체들과 함께 총체적으로 협력해 나가고
            있습니다. 특히, 여성과 어린 소녀 등 약자들을 지원하는데 중점을 두고 있습니다.
            <br /> 오늘날 사무히카 샥티는 30,000명의 비공식 청소부 및 그 가족들의 삶에 변화를 이끌어내는 동시에, 순환
            경제 활성화에 기여하고 있습니다.
          </p>
        </div>
        {/* textHero */}
        <div className="free-textHero">
          <strong className="hero-item hero-heading fs14">폐기물에서 단추로 재탄생하다</strong>
          <p className="hero-item fs12">
            청소부들은 소비자가 사용한 PET를 수거하고 분류한 다음, 세계 공정 무역 기구(World Fair Trade Organization)의
            인증 회원인 사회적 기업 ‘하시루 데일라 이노베이션(Hasiru Dala Innovations)’에 판매합니다. <br />이 PET는
            얇게 조각조각 자르고 세척한 후, 단추 생산 업체로 보내집니다. 이 곳에서 생산되는 단추들이 바로
            앤아더스토리즈의 아름다운 상품들을 장식하고 있답니다.
            <br />각 단추가 현재의 모습으로 거듭나기 전 처음 폐기물로 수거된 장소, 그리고 노동자의 이름과 사회 보장
            프로그램, 급여, 수거 센터의 근무 환경이 궁금한 경우 추적 및 확인할 수도 있습니다.
          </p>
          <p className="hero-item fs12">
            <br />더 자세한 내용은{' '}
            <a
              href="https://hmfoundation.com/project/how-recycled-buttons-create-inclusive-circularity/"
              target="_blank"
              className="no-underline"
            >
              hmfoundation.com
            </a>
            을 확인해 주세요.
          </p>
        </div>
      </FreeHtml>
    </>
  );
}
