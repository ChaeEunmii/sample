import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포용성 & 다양성',
};

export default function Page() {
  return (
    <FreeHtml>
      {/* layout(narrow) */}
      <div className="free-layout u-align-to-logo">
        <div className="free-layout--narrow">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3 q-mega">
              &amp; Other Stories
              <br />
              포용성 &amp; 다양성을 위한 약속
            </h3>
          </div>
          {/* paragraph-list */}
          <div className="paragraph-list">
            <p className="paragraph1">
              앤아더스토리즈는 모든 사람, 특히 다양한 여성들을 아우르는 브랜드가 되기 위해 노력합니다.
              <br />
              <br />
              모든 임직원과 고객님들이 안전하고 환영 받는 느낌을 받도록, 우리의 세계로 적극 초대합니다.
            </p>
            <p className="paragraph1">
              오늘날 세계의 모습 그대로를 반영하여, 앤아더스토리즈는 다채로운 관점에서 스토리를 공유하며 최선을 다해
              배우고 성장합니다.
            </p>
            <p className="paragraph1">
              과거, 앤아더스토리즈는 ‘문화적 도용(cultural appropriation), 다양성을 기쁘게 맞이하기, 이미지의 표현 및
              그릇된 표현’ 등에 관한 많은 트레이닝을 진행했습니다. 또한 포용성 전략가(Inclusiveness Strategist)를
              고용하여, 앤아더스토리즈가 만들어 나가고자 하는 변화에 더욱 큰 힘을 실어주도록 하였습니다.
            </p>
            <p className="paragraph1">
              다가오는 가을에는 여러 프로젝트를 시작합니다. 전 임직원 대상 의무 심화 트레이닝, 이미지/제품/텍스트 사용에
              대한 내부 컨트롤 강화, 기업 내 팀 다양성의 꾸준한 증진 등 여러 계획들이 마련되어 있습니다. 그렇지만 그
              외에도 더욱 많은 노력이 필요하다는 사실은 자명합니다.
            </p>
            <p className="paragraph1">
              앤아더스토리즈의 이니셔티브들 외에도, H&M 그룹은 다음의 공약내용을 완성하였으며 H&M의 CEO 헬레나
              헬메르손이 발표하였습니다.
            </p>
            <p className="paragraph1">
              1.2020년까지, H&M 주요 시장 국가의 경영 팀들은 (언어/이미지) 표현 개선을 위한 구체적인 목표와 분명한 기한,
              목표 달성을 위한 액션 플랜을 발표할 것입니다. (이 내용들은{' '}
              <a
                href="https://career.hm.com/content/hmcareer/en_us/workingathm/get-to-know-us/inclusion-and-diversity.html"
                target="_blank"
                className="a-link"
              >
                미국 H&amp;M 그룹
              </a>
              에서 발표한 공약 내용들과 비슷할 것입니다.)
            </p>
            <p className="paragraph1">
              2. 본사 내의 다양성 격차를 찾아내고, 경영 팀과 이사회의 다양성을 증진하기 위한 목표들을 설정하겠습니다.
            </p>
            <p className="paragraph1">
              3. 2021년 12월 31일까지, H&M 그룹이 진출해 있는 모든 국가에서 &lt;포용성과 다양성&gt;을 위한 공약과 액션
              플랜을 발표하겠습니다.
            </p>
            <p className="paragraph1">
              4. 사업 방향에 조언과 도움을 줄 수 있는, 다양한 백그라운드 출신의 기업 임원들과 함께 외부 자문위원회를
              즉시 만들겠습니다.
            </p>
            <p className="paragraph1">
              5. 동료 자문 위원회(Peer Advisory Council: 전 세계에서 활동 중인 ‘임직원 리소스 그룹’들로 구성)를 통해
              CEO, 다양성 수석 책임자(Chief Diversity Officer), 경영팀과 직접 협력하도록 하여 포용성과 다양성 향상을
              위해 노력하겠습니다.
            </p>
            <p className="paragraph1">
              현재 H&M 그룹 및 사회 전반적으로, 의식적/무의식적인 인종적 편견을 대처하기 위한 노력들이 이어지고
              있습니다. 저희는 이 여정을 계속해 나가기 위해 최선을 다할 것입니다. 또한 진정으로 포용적인 사회의 가치가
              H&M 그룹의 업무 환경과 제품들에 반영되도록 모든 노력을 다하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
