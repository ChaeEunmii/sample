'use client';

import { useState } from 'react';
import FreeHtml from '@/views/freehtml/FreeHtml';
import { Text, TextButton } from '@shared/ui';
// import { Metadata } from 'next';
import { Suspense } from 'react';
import NewsletterDialog from '@views/etc/NewsletterDialog';

// export const metadata: Metadata = {
//   title: 'Co-labs',
// };

export default function Page() {
  const [newsletterOpen, setNewsletterOpen] = useState(false); // 뉴스레터 정기구독 (L)

  return (
    <Suspense>
      <FreeHtml>
        {/* section */}
        <div className="free-section u-align-to-logo align-top">
          {/* textBox */}
          <div className="free-textBox">
            <h1 className="heading3 q-mega">Co-labs & Other Stories</h1>
            <p className="paragraph2">
              매년 앤아더스토리즈는 다양한 디자이너와 함께 Co-labs 컬렉션을 선보이고 있으며, 이는 브랜드의 창립 이래로
              계속 진행되어 왔습니다. 현재까지 앤아더스토리즈의 Co-labs 컬렉션을 함께한 디자이너로는 민주킴(MINJUKIM),
              시리-칼렌 (Siri Carlén), 레지나 표 (Rejina Pyo), 로다테(Rodarte), 아다 코코사(Ada Kokosar), 새디
              윌리암스(Sadie Williams), 포 리얼(Faux real), 클레어 비비에(Claire Vivier), 비카 가진스카야(Vika
              Gazinskaya), 레이첼 안토노프(Rachel Antonoff), 리케 리(Lykke Li) 및 재나 베인(Zana Bayne) 등이 있습니다.
            </p>
          </div>
        </div>
      </FreeHtml>
      <Text size="3" align="center" className="ut-mt-x0 ut-mb-x12">
        <TextButton onClick={() => setNewsletterOpen(true)}>뉴스레터 정기 구독</TextButton>을 통해 다양한 디자인 협업
        소식을 가장 먼저 받아보세요.
      </Text>
      <FreeHtml>
        {/* grodBox */}
        <div className="free-gridBox half">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_01.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">MINJUKIM</h2>
                <p className="paragraph1 preamble">
                  MINJUKIM은 경쾌하고 동화적인 감각으로 잘 알려준 한국의 패션 디자이너이자 브랜드입니다. 다채로운 무드로
                  가득한 그녀의 아이템에는 각각의 고유한 이야기가 담겨져있기에 누구나 자신만의 유니크한 개성을 드러낼 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_02.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Siri Carlén</h2>
                <p className="paragraph1 preamble">
                  스웨덴 출신의 아티스트 Siri Carlén이 우리를 위해, 프랑스 남부의 여름에서 모티브를 얻은 3개의 유니크한
                  드로잉을 그려주었습니다. 햇살을 머금은 이야기가 담긴, 웨어러블 아트로 거듭난 매력적인 실크 스카프를
                  만나보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_03.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Rejina Pyo</h2>
                <p className="paragraph1 preamble">
                  레지나 표는 런던에서 활동 중인 한국의 패션 디자이너예요. 드레스에서 느껴지는 구조적 아름다움, 그리고
                  여유 있는 감각의 소재 표현으로 널리 알려져 있는데요, 우리들 각자의 내면에 잠들어 있는 본능을 일깨우는
                  특별한 감각이 깃들어 있답니다. 앤아더스토리즈의 리미티드 코랩 컬렉션은 그녀의 시그니처 스타일을 새롭게
                  재해석한 피스들로 가득하답니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_04.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Le Petit Trou</h2>
                <p className="paragraph1 preamble">
                  르 쁘띠 트루(Le Petit Trou)와의 콜라보레이션으로 탄생한 컬렉션을 소개합니다. 창업자이자 디자이너
                  주잔나 쿠진스카가 전개하는 이 럭셔리 브랜드는 여성들이 란제리에서 원하는 디테일을 완벽히 포착합니다.
                  거부할 수 없을 만큼 매혹적이고도 편안한 언더웨어를 지금 만나보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_05.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Brøgger</h2>
                <p className="paragraph1 preamble">
                  80년대의 바이브가 느껴지는 밝은 색감, 섬세한 플로럴, 파워풀한 감각의 피스들까지- 덴마크 디자이너
                  브로거와 함께한 새로운 컬렉션을 만나보세요. 강한 여성성이 느껴지는 재단과 매력적인 드레스들로 가득한
                  이번 컬렉션은 도심의 일상부터 설레는 저녁 파티까지, 어디서나 당신의 느긋한 센스를 드러내 줄 거예요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_06.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Hums</h2>
                <p className="paragraph1 preamble">
                  크리에이티브 디렉터 헨리에타 니뱅의 상상력 넘치는 예술 세계를 바탕으로, 험즈는 편안한 슬리퍼를
                  하이엔드 액세서리로 재해석합니다. 앤아더스토리즈는 이 스웨덴 브랜드와의 협업을 통해, 엉뚱하면서도
                  고급스러운 미니 슬리퍼 컬렉션을 준비했어요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_07.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Giorgia Lupi</h2>
                <p className="paragraph1 preamble">
                  인포메이션 디자이너 조지아 루피의 작품 세계와 사랑에 빠진 앤아더스토리즈. 우리는 그녀와 함께 데이터
                  기반의 내러티브를 웨어러블한 스토리로 재해석해 보았어요. 스토리텔링에 신선함을 더하는 그녀의 감각으로
                  탄생한 이번 컬렉션은 핸드드로잉 프린트가 더없이 매력적이랍니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_08.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Mia Larsson</h2>
                <p className="paragraph1 preamble">
                  주얼리 디자이너 미아 랄슨. 의미없이 버려지는 굴 껍질이 그녀의 감각을 통해 세상에 단 하나뿐인 지속가능
                  주얼리로 거듭납니다. 그녀와의 협업으로 탄생한, 보물들이 가득한 익스클루시브 컬렉션을 만나보세요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_09.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Fern Fans</h2>
                <p className="paragraph1 preamble">
                  멋진 듀오 아만다 보버그와 데이지 호픈. 그녀들은 관능적이면서도 실용적이고, 현대적인 부채들을 선보이고
                  있어요. 이번 코랩 컬렉션은, 부채를 살랑이며 비밀스러운 메시지를 전할 때 느껴지는 아름다움을 표현하고
                  있어요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_10.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">The Deep End Club</h2>
                <p className="paragraph1 preamble">
                  앤아더스토리즈에게, ‘더 딥 엔드 클럽(The Deep End Club)’과의 협업은 하나의 꿈이 실현되는
                  순간이었습니다. 로스앤젤레스에서 활동하는 다재 다능한 디자이너 테네시 토마스. 그녀가 설립한 딥 엔드
                  클럽에서는 예술가와 사회활동가들이 커뮤니티를 결성해 이 세상의 문제들에 대한 해결책을 창의적으로
                  발견해 나가고 있습니다. 그들에게 늘 영감을 불어넣는 클럽의 모토 “GIVE A DAMN! (관심을 가지자!)”은 이번
                  컬렉션의 티셔츠 라인에도 새겨져 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_11.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">House of Hackney</h2>
                <p className="paragraph1 preamble">
                  맥시멀리스트 감성과 아이코닉한 플로럴 프린트로 유명한 &lt;하우스 오브 해크니: House of Hackney&gt;. 이
                  런던 브랜드의 듀오 디자이너와 앤아더스토리즈의 콜라보레이션은 화려함 그 자체라고 할 수 있어요. 생기
                  가득한 이번 컬렉션은 지속가능한 소재들을 메인으로, 아름답고 매혹적인 프린트로 물들었답니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_12.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Kim Gordon</h2>
                <p className="paragraph1 preamble">
                  아이코닉한 아티스트이자 작가, 뮤지션, &lt;소닉 유스: Sonic Youth&gt;의 공동 설립자까지- 전설적인 킴
                  고든과의 콜라보레이션으로 탄생한 뉴 컬렉션을 소개합니다. 이번 컬렉션은 손으로 그린 아트워크를 특징으로
                  하는데요. 그 자체로 메시지를 강렬하게 전달하는 동시에, 연약한 무드를 자아내며 옷 레이어들의 구조를
                  대비시킵니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_13.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">TOMS</h2>
                <p className="paragraph1 preamble">
                  ‘One for One®’ 기부 프로젝트로 유명한 로스 엔젤레스 브랜드 &lt;탐스: TOMS&gt;와의 특별한
                  콜라보레이션으로 탄생한 컬렉션을 만나보세요. 클래식한 슬립-인 슈즈, 가벼운 레더 샌들, 그리고 자연을
                  닮은 레디-투-웨어 어패럴을 준비했습니다. 캘리포니안 라이프스타일의 아름다움을 만끽해봐요.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_14.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Shoplifter</h2>
                <p className="paragraph1 preamble">
                  뉴욕 베이스의 아티스트 샵리프터(Shoplifter)가 그녀의 시그니처 아트워크를 생동감 있고 다채로운 웨어러블
                  컬렉션으로 변형시켜, 예술이 패션을 포용합니다. 우리는 함께 쥬얼리, 가방 및 뷰티 제품과 함께 유쾌한
                  레디투웨어 피스들을 제작했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_15.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Wool and the Gang</h2>
                <p className="paragraph1 preamble">
                  런던에 근거지를 둔 울앤더갱(Wool and the Gang)의 패션에 대한 접근 방식에서 영감을 얻은 &amp; Other
                  Stories는 함께 무언가를 창조한다는 생각에 빠지게 되었습니다. 그 결과로 자신만의 보물을 뜨고 싶은 모든
                  고객에게 뭔가를 제공하는 니트웨어로 구성된 co-lab 컬렉션을 만들게 되었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_16.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Rodarte</h2>
                <p className="paragraph1 preamble">
                  패션계가 사랑하는 로다테(Rodarte)는 케이트(Kate Mulleavy)와 로라 멀리비(Laura Mulleavy)가 함께 설립한
                  럭셔리 브랜드입니다. 그녀들은 캘리포니아의 영향을 받은 레디투웨어, 슈즈 및 쥬얼리의 co-lab 컬렉션을
                  디자인했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_17.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Zana Bayne</h2>
                <p className="paragraph1 preamble">
                  정통 장인 방식으로 가죽 핸드백과 액세서리를 만드는 디자이너인 제나 베인(Zana Bayne)은 신중하게 구성된
                  여성스러움을 강조한 가죽 제품으로 구성된 co-lab 컬렉션을 만들었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_18.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Rachel Antonoff</h2>
                <p className="paragraph1 preamble">
                  선거 기간에 대해 많은 관심을 가진, 뉴욕 디자이너인 레이첼 안토노프(Rachel Antonoff) 컬렉션은 선거
                  캠페인 동안 진행되는 모든 행사에 어울리는 레디투웨어를 선보였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_19.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Ada Kokosar</h2>
                <p className="paragraph1 preamble">
                  명성 높은 스타일리스트인 아다 코코사(Ada Kokosar)는 레이어드를 염두에 두고 디자인된 다양한 룩을
                  기반으로 레디투웨어 co-lab 컬렉션을 만들었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_20.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Clare Vivier</h2>
                <p className="paragraph1 preamble">
                  LA 디자이너인 클레어 비비에(Clare Vivier)의 co-lab 컬렉션에는 가방, 슈즈, 작은 가죽 소품들이 대담한
                  색조로 구성되어 있으며 클래식 프렌치 글래머의 터치가 가미된 단순함을 투영합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_21.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Faux/Real</h2>
                <p className="paragraph1 preamble">
                  뉴욕 기반의 디자인 듀오 포/리얼(FAUX / real)은 마리 오오우치(Mari Ouchi)와 루이스 데시코(Louis
                  DeCicco)로 구성됩니다. 이 둘은 사랑을 찾아내는 방법이라는 주제에서 영감을 받은 쥬얼리 co-lab 컬렉션을
                  만들었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_22.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Lykke Li</h2>
                <p className="paragraph1 preamble">
                  세 번째 앨범의 출시와 함께, 가수 리케 리(Lykke Li)는 길 위의 삶을 위해 맞춤 설정된 컬렉션을 만드는 데
                  협력했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_23.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Vika Gazinskaya</h2>
                <p className="paragraph1 preamble">
                  러시아 디자이너인 비카 가진스카야(Vika Gazinskaya)는 다양한 여름 스타일을 제공하는 레디투웨어와
                  액세서리, 슈즈로 구성된 예술적이고 신선하고 페미닌한 co-lab 컬렉션을 선사했습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/colabs/img_colabs_24.jpg" alt="Alternate Image" />
            </div>
            <div className="text-inside-image">
              <div className="headline-preamble-wrapper">
                <h2 className="heading3 title q-mega">Sadie Williams</h2>
                <p className="paragraph1 preamble">
                  수상 경력이 있는 디자이너 새디 윌리엄스(Sadie Williams)는 텍스타일에 대한 그녀만의 시그니처 접근
                  방식을 보여주는 임팩트 강한 디자인의 co-lab 컬렉션을 만들었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FreeHtml>
      {/* 뉴스레터 구독(L) */}
      <NewsletterDialog isOpen={newsletterOpen} onClose={() => setNewsletterOpen(false)} />
    </Suspense>
  );
}
