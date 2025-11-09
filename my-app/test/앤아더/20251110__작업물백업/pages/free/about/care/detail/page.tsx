import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '제품 관리 방법 상세',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-care">
        {/* 리넨 */}
        <div className="free-section" id="sec-linnen">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">리넨</h3>
            <p className="paragraph2">
              가볍고 통기성이 좋은 소재인 리넨은 항상 쾌적함을 유지시켜 주고 멋스러운 룩을 완성 시켜줍니다. 무엇보다,
              올바른 관리를 통해 시간이 지날 수록 더욱 부드럽고 아름다운 실루엣을 연출 할 수 있다는 점이 리넨의 최대
              장점이랍니다.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              많은 천연 소재와 마찬가지로, 리넨은 세탁을 자주 할 필요가 없기 때문에 종종 공기를 쐬어주는 것이 최선의
              방법이며 손세탁과 기계세탁이 모두 가능합니다. 내구성이 뛰어나기 때문에 고온에서 세탁하는 것도 가능하지만
              에너지 절약을 위해 가능하면 찬물 세탁을 추천합니다.
              <br />
              <br />
              리넨은 자연 건조를 하여 말려주는 것이 가장 좋습니다. 구김 또한 리넨의 매력 중 하나이지만 원단을 매끄럽게
              보이고 싶다면 젖어있는 상태에서 낮은 온도로 다림질을 하는 것도 좋은 방법이랍니다.
              <br />
              <br />
              <strong>보관</strong>
              <br /> <br />
              리넨은 직사광선을 피해 습기가 적고 통풍이 잘 되는 곳에 보관하는 것이 좋습니다. 곰팡이를 방지하기 위해 보관
              전 완전한 건조가 되었는지 체크하는 것도 잊지 말아야합니다.
            </p>
          </div>
        </div>

        {/* 울 스웨터 */}
        <div className="free-section" id="sec-wool">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">울 스웨터</h3>
            <p className="paragraph2">
              추운 계절의 믿음직한 동반자인 울 스웨터는 관리가 쉬운, 워드로브의 진정한 보물입니다. 울이라는 소재가 자체
              정화 기능이 있기에 자주 세탁하지 않아도 괜찮습니다. 보통 공기 중에 널어 놓는 것이 최고의 울 니트웨어
              관리법이랍니다. 얼룩이 생긴 경우, 세탁 전 물을 묻힌 천으로 조심스럽게 오염물을 제거해 주세요.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              울 스웨터를 세탁해야 하는 경우, 찬 물에 울 코스 또는 약회전으로 돌려 주세요. 혹은 미온수에서 손세탁해도
              좋습니다. 문지르거나 비트는 행위는 섬유 조직을 손상시키므로 반드시 피해주세요. 푹신한 울 니트의 볼륨감을
              유지하는 열쇠는, 혁신적인 귀리 포뮬라로 탄생한 앤아더스토리즈의 ‘델리케이트 디터전트’처럼 전용 세제를
              이용하는 것입니다. 또한 세탁기의 회전 건조는 울에 해롭다는 것을 기억해 주세요. 대신 큼직한 수건 위에
              편평하게 널어 말리고 조심스럽게 주름을 펴주세요.
              <br />
              <br />
              <strong>보관 &amp; 관리</strong>
              <br /> <br />
              보풀은 자연적으로 생성되며, 가공되지 않은 울 섬유라면 발생하기 마련입니다. 그렇기에 이는 울 품질이 낮다는
              것을 의미하지 않으며, 단순한 마찰로도 작은 보풀이 생깁니다. 보풀용 빗이나 원단용 면도칼로 간편하게 제거할
              수 있습니다. 좋은 소식은, 시간이 흐를수록 보풀이 줄어든다는 사실입니다.
              <br />
              <br />
              니트웨어를 보관할 때는 잘 접은 후 눕혀서 수납해 주세요. 행거에 걸어 놓을 경우 쉐입이 망가질 수도 있기
              때문입니다. 장기간 넣어 놓을 때에는 그 전에 세탁을 하고, 향나무 볼이나 말린 라벤더를 넣은 주머니를 함께
              두어 나방으로부터 보호합니다.
            </p>
          </div>
        </div>
        {/* gridBox : 울 스웨터 */}
        <div className="free-gridBox fourth">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wool01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wool02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wool03.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wool04.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 실크 셔츠 */}
        <div className="free-section" id="sec-silk">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">실크 셔츠</h3>
            <p className="paragraph2">
              쾌적한 체온을 유지시켜주는 특징이 있는 실크 소재의 셔츠는 따뜻하고 추운 날씨 모두에서 편안함을 선사합니다.
              실크 옷 관리에 겁부터 먹지 마세요. 소재 특유의 고급스러운 느낌과 섬세한 특성에도 불구하고 관리는 꽤
              쉽습니다.
              <br />
              <br />
              착용 후에는 늘 일정 시간 공기를 쐬어 주고, 바람에 말린 세탁물에서 영감을 얻은 향이 특징인 앤아더스토리즈의
              패브릭 스프레이로 관리해 주세요.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              소장하고 있는 실크 의류가 물세탁이 가능할 경우, 언제나 케어 라벨을 잘 확인해 주세요. 앤아더스토리즈의 실크
              셔츠는 대부분 세탁기 사용이 가능합니다. 얼룩이 묻은 경우 문지르면 소재에 손상을 줄 수 있으므로 지양하도록
              합니다. 대신, 최대 30도 온도의 물에서 약회전으로 세탁기를 돌려주세요. 이 때 세탁 망에 넣는 것이 더
              좋습니다. 세탁 과정에서 원단의 섬유를 튼튼하게 해주는 앤아더스토리즈의 ‘델리케이트 디터전트’처럼 무효소
              세제를 이용해 주세요. 손세탁을 하려는 경우, 세제 대신 헤어 샴푸를 소량 사용해도 좋습니다. 건조 시에는
              직접적인 열이나 햇볕을 피해 행거에 걸어 말려 주세요. 실크 의류에 생긴 주름을 없애는 가장 세심한 방법은
              스팀을 이용하는 것이지만, 낮은 온도에서 다림질을 해도 괜찮습니다.
              <br />
              <br />
              <strong>보관</strong>
              <br />
              <br />
              실크 블라우스의 변색을 막기 위해 어두운 곳에 행거에 걸어 보관해 주세요. 장시간 넣어둘 계획이라면 접어
              보관합니다.
            </p>
          </div>
        </div>
        {/* gridBox : 실크 셔츠 */}
        <div className="free-gridBox fourth">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/silk01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/silk02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/silk03.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/silk04.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 겨울 모직 코트 */}
        <div className="free-section" id="sec-winter-coat">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">겨울 모직 코트</h3>
            <p className="paragraph2">
              울 니트웨어와 마찬가지로 울 코트 역시 오염에 강하며 자정 능력이 있어 관리가 쉽습니다. 그러나 아끼는 울
              코트를 더 잘 관리하는 방법도 있답니다. 의류용 브러시를 이용해 가끔씩 쓸어주면 먼지와 오염물을 제거할 수
              있습니다. 또한 쉐입을 오래도록 유지하려면 외출 후 튼튼한 행거에 일정 시간 걸어 두세요. 주머니에서 소지품을
              뺀 후 걸면 더욱 좋습니다. 이렇게 하면 코트의 형태가 훨씬 더 오래 유지됩니다.
              <br />
              <br />
              겨울이 끝나고 코트가 휴식 모드에 들어가는 시기가 오면 드라이 클리닝을 한 후 의류 커버 안에 보관해 주세요.
              이 때 향나무 링을 함께 넣어두면 습기, 냄새, 나방으로부터 보호할 수 있습니다.
            </p>
          </div>
        </div>
        {/* 다운 재킷 */}
        <div className="free-section" id="sec-down">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">다운 재킷</h3>
            <p className="paragraph2">
              엄청나게 추운 날씨, 아늑한 다운 재킷의 품 속에 안기는 기분은 그 무엇과도 비교할 수 없죠. 멋스러운 룩과
              보온성 외에도, 다운 의류는 관리가 쉽다는 또 하나의 장점이 있답니다.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              재킷의 케어 라벨을 확인한 후, 권장 온도에서 세탁해 주세요. 이 때 40도 이상은 넘지 않도록 합니다. 모든
              지퍼와 단추를 잠근 후 액체 세제를 넣어 주세요. 전용 세탁 망을 이용하면 미세플라스틱을 걸러줄 수 있습니다.
              <br />
              <br />
              자연 건조가 패브릭과 환경 모두에 가장 좋은 방법이지만, 다운 소재만큼은 회전 건조가 최상의 결과를
              선사합니다. 부드럽게 비틀어 최대한 많은 물을 짜낸 후, 회전 건조를 가장 낮은 온도로 설정하고 드라이어나
              테니스공을 함께 넣어주세요. 그 과정에서 공은 이리 저리 튀며 서로 붙어있는 깃털을 분리해 줍니다. 때때로
              재킷을 확인하고 털어주며, 완전히 마를 때까지 반복합니다.
              <br />
              <br />
              회전식 건조기가 없어도 걱정하지 마세요. 습기가 적은 곳에서 튼튼한 행거에 걸어주면 됩니다. 그 다음
              털어주고, 부드럽게 매만져 볼륨을 살려주세요. 완전히 건조될 때까지 이 과정을 반복합니다.
              <br />
              <br />
              <strong>보관</strong>
              <br />
              <br />
              정말 필요할 때 아니면 되도록 잦은 세탁은 피해 주세요. 여름철 보관 전 세탁 한 번이면 충분합니다. 의류
              커버에 넣어 보관하면, 다시 가을/겨울의 쌀쌀한 날씨가 찾아왔을 때 새 것처럼 느껴진답니다.
            </p>
          </div>
        </div>
        {/* 레더 백 */}
        <div className="free-section" id="sec-leather-bag">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">레더 백</h3>
            <p className="paragraph2">
              고급스러운 가죽 백은 우리와 오래 함께하도록 제작된, 하나의 인베스트먼트 피스입니다. 그렇기에 상품의 수명을
              늘려주고 오랜 세월 보기 좋도록 세심한 관리를 하는 것이 중요합니다.
              <br />
              <br />
              정기적으로 수건에 물을 묻혀 닦아 주면 먼지와 오염물을 제거할 수 있습니다. 가끔은 가죽용 왁스로 영양분을
              공급해 주세요. 왁스 대신 핸드 크림을 소량 사용해도 완벽한 역할을 합니다. 스케줄이 바쁜 경우, 손잡이처럼
              가장 많이 사용되는 부분만이라도 관리해 주세요.
              <br />
              <br />
              가방을 장시간 사용하지 않을 계획이라면, 더스트 백에 넣어 건조하고 어두운 공간에서 보관해 주세요. 특정
              쉐입으로 제작된 가방의 경우 화장지 혹은 자주 사용하지 않는 스카프를 넣어 형태를 오래도록 유지해줄 수
              있습니다.
            </p>
          </div>
        </div>
        {/* 레더 슈즈 */}
        <div className="free-section" id="sec-leather-shoes">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">레더 슈즈</h3>
            <p className="paragraph2">
              매일 근사한 역할을 해내는 슈즈는 우리의 넘치는 애정과 관심을 받을 자격이 있죠.
              <br />
              <br />
              같은 슈즈를 매일 신지 않는 것이 가장 좋습니다. 그렇지 않으면 가죽은 훨씬 빠른 속도로 낡게 됩니다. 슈즈의
              종류에 따라 슈 트리를 이용해 보관하면 건조에 도움이 되며 형태 유지에도 효과적입니다.
              <br />
              <br />
              정기적으로 물을 묻힌 수건을 이용해 먼지와 오염물을 닦아 주세요. 가끔은 근사한 관리도 해주면 좋습니다. 슈즈
              크림이나 왁스를 문질러 광택을 내보세요.
              <br />
              <br />
              물에 젖은 슈즈: 상온에 건조시키며, 슈즈가 바싹 말라 갈라지지 않도록 직접적인 열은 피해주세요. 형태를
              유지하려면 슈 트리나 인쇄되지 않은 종이를 안에 넣어 주세요. (널리 알려진 대로 신문을 사용해도 효과는
              있지만 활자의 잉크가 이염될 수 있습니다.)
              <br />
              <br />
              냄새나는 슈즈: 마른 티백을 신발 안에 넣고 다음날 아침까지 두세요. 또다른 강력한 방법은 베이킹 소다를 채운
              작은 면 주머니에 유칼립투스나 티트리 에센셜 오일 몇 방울을 떨어뜨려 주는 것입니다. 또한 신발이 자주
              휴식하고 숨쉴 수 있도록 배려해 주세요.
            </p>
          </div>
        </div>
        {/* gridBox : 레더 슈즈 */}
        <div className="free-gridBox third">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/leather01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/leather02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/leather03.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 코튼 티셔츠 */}
        <div className="free-section" id="sec-cotton">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">코튼 티셔츠</h3>
            <p className="paragraph2">
              울과 달리 코튼은 자정 능력이 없기에 자주 빨아 주어야 합니다. 하지만 몇시간 정도만 입었고 땀을 흘리지
              않았다면 세탁기에 돌리지 않아도 된다는 것을 기억해 주세요. 대신, 공기 중에 걸어 두고 앤아더스토리즈의
              패브릭 스프레이를 뿌려 신선함을 더해주세요.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              대부분의 코튼 의류는 40도, 혹은 60도의 물에서도 세탁이 가능합니다. 하지만 티셔츠의 오염도가 심하지 않은
              경우 30도도 충분합니다. 차가운 물로 세탁하면 에너지를 절약할 뿐 아니라 섬유도 보호됩니다. 또한 티셔츠가
              줄어들 위험도 최소화되죠 (프리 워싱되지 않은 코튼 소재는 본래 수축되는 것이 특징입니다). 셔츠를 세심하게
              펴서 형태를 잡아준 후 자연 건조 시켜주면 됩니다.
              <br />
              <br />
              <strong>관리 &amp; 보관</strong>
              <br />
              <br />
              코튼 의류의 환경 영향을 줄이고 더 오래 좋은 컨디션으로 함께하기 위한 비법이 몇 가지 있습니다. 먼저,
              티셔츠를 돌려가며 입어주세요. 휴식 시간을 주는 것이 패브릭에 좋기 때문입니다. 또한 비슷한 색끼리 세탁해
              주세요.
              <br />
              <br />
              카라나 겨드랑이 부분이 변색되었다고 해서 아끼는 티셔츠를 버릴 필요는 없습니다. 냄새가 나는 부분에는
              식초를, 누렇게 된 부분에는 레몬 산을 이용하는 민간 요법은 효과가 탁월하답니다. 오랜 세월 함께한 티셔츠가
              도저히 더는 입을 수 없는 상태가 되면, 버리는 대신에 의류 재활용 가게에 가져가 보세요. 앤아더스토리즈의
              아무 매장에나 가져오셔도 좋습니다.
            </p>
          </div>
        </div>
        {/* 레이스 란제리 */}
        <div className="free-section" id="sec-lingerie">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">레이스 란제리</h3>
            <p className="paragraph2">
              워드로브의 비밀스러운 주인공은 대부분의 시간 동안 은밀하게 숨어있죠. 하지만 아름다운 레이스 란제리 세트는
              근사한 느낌을 선사하는 최고의 피스랍니다. 자주 세탁해야 하는 특성상, 란제리 본연의 섬세함을 잘 고려해
              관리하면 더 오래 함께할 수 있습니다.
              <br />
              <br />
              <br />
              <strong>세탁 &amp; 건조</strong>
              <br />
              <br />
              레이스 브라를 가장 세심하게 관리하는 방법은 찬물에 손 세탁하는 것입니다. 비슷한 컬러끼리 모아 물에 몇 분간
              담가주세요. 팁: 밝은 색의 란제리를 먼저 빤 경우, 다른 컬러를 세탁할 때 같은 물을 또 사용할 수 있습니다.
              후크는 모두 잠가 원단이 손상되지 않도록 보호하세요. 부드럽게 비틀어 물을 짜낸 후, 자연 건조시켜 줍니다.
              세탁기를 사용하고 싶은 경우, 약회전을 선택하고 세탁 망에 넣어주세요. 이렇게 하면 다른 섬세한 피스와 함께
              세탁할 수 있어 물과 에너지 모두를 절약할 수 있습니다.
            </p>
          </div>
        </div>
        {/* gridBox : 레이스 란제리 */}
        <div className="free-gridBox fourth">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/lingerie01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/lingerie02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/lingerie03.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/lingerie04.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 데님 소재 관리 */}
        <div className="free-section" id="sec-denim-care">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">데님 소재 관리</h3>
            <p className="paragraph2">
              <br />
              <strong>보관</strong>
              <br />
              <br />
              입을 때마다 세탁하는 대신, 착용 후 몇 시간 정도 바람을 쐬어주세요. 패브릭 스프레이(Fabric Spray)를
              사용하면 다음 세탁까지 신선한 향기를 유지할 수 있답니다.
              <br />
              <br />
              <br />
              <strong>세탁</strong>
              <br />
              <br />
              뒤집어 지퍼를 잠근 후, 찬물 세탁 또는 부드러운 세탁 코스로 돌려주세요. 이렇게 하면 청바지의 컬러와 핏을
              보호할 수 있습니다.
              <br />
              <br />
              <strong>건조</strong>
              <br />
              <br />
              세탁기에서 꺼낸 직후에는 반드시 털어준 다음 말려주세요. 또 청바지의 수명을 위해 세탁기의 회전 건조 코스는
              피하는 것이 좋습니다.
              <br />
              <br />
              <strong>관리</strong>
              <br />
              <br />
              가장 튼튼한 소재의 청바지도 마모는 피할 수 없답니다. 마모되거나 찢어진 부분을 집에서 수선하거나, 집 근처
              수선실에 맡겨 새로운 숨결을 불어넣어 주세요.
            </p>
          </div>
        </div>
        {/* gridBox : 데님 소재 관리 */}
        <div className="free-gridBox fourth gridBox--denim">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/denim01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/denim02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/denim03.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/denim04.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 스니커즈 관리 */}
        <div className="free-section" id="sec-sneakers">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">스니커즈 관리</h3>
            <p className="paragraph2">
              먼저 주방에 항상 상비하고 있는 베이킹 소다를 조금 가져와서 약간의 물을 섞어 믹스를 만들어주세요. 작은
              브러쉬나 칫솔을 사용해 이 믹스를 묻혀 스니커즈의 얼룩이나 변색된 부분에 반죽을 묻혀 문지릅니다. 이후
              천이나 수건으로 닦아내고, 깊은 오염의 경우 이 과정을 반복합니다.
              <br />
              <br />
              베이킹 소다는 냄새를 중화하는 데도 효과가 탁월합니다. 잠들기 전에 신발 안쪽에 베이킹 소다를 살짝 뿌려두고
              다음날 가루를 털어내고 사용해주세요.
            </p>
          </div>
        </div>
        {/* gridBox : 스니커즈 관리 */}
        <div className="free-gridBox half">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/sneakers01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/sneakers02.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 옷장 정리 가이드 */}
        <div className="free-section">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">옷장 정리 가이드</h3>
            <p className="paragraph2">
              옷장을 열고, 오랫동안 잊고 있었던 보물 같은 의류와 액세서리들을 재발견해 보세요. 입지 않는 옷들은 친구들과
              서로 바꿔 입거나 중고 의류 매장에 판매하거나 기부해 보세요. 앤아더스토리즈의 리사이클링 프로그램을
              이용하는 것도 좋은 방법이죠.
              <br />
              <br />
              옷장을 계절에 맞춰 관리하는 것은 아이템들의 활용도를 높여줍니다. 계절이 지난 아이템들을 보관해 넣기 전에
              옷들이 모두 얼룩 없이 깨끗한 지 확인하세요. 라벤더와 시더우드는 옷장의 믿을 만한 친구랍니다. 옷감을 좀
              먹는 작은 곤충들을 막아 주지요.
              <br />
              <br />
              스카프를 이용해 신발이나 핸드백을 보자기처럼 감싸 나만의 멋진 더스트백을 만들어 보관해보세요. 화장솜에
              좋아하는 향수를 뿌려 가방 사이에 두면, 향이 은은하게 베어 다시 꺼내어 사용할 때 기분 좋은 리프레시먼트가
              될 수 있답니다.
            </p>
          </div>
        </div>
        {/* gridBox : 옷장 정리 가이드*/}
        <div className="free-gridBox fourth">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wardrobe01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wardrobe02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wardrobe03.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/wardrobe04.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* 뷰티 제품 관리 */}
        <div className="free-section" id="sec-beauty">
          {/* textBox */}
          <div className="free-textBox">
            <h3 className="heading3">뷰티 제품 관리</h3>
            <p className="paragraph2">
              뷰티 제품의 유통기한이 항상 헷갈리시나요? 제품 라벨의 ‘열린 병’ 모양 심볼을 확인해 보세요. 제품 개봉 후
              언제까지 사용할 수 있는지 나와 있답니다. (예시 : 6M – 개봉 후 6개월 / 12M – 개봉 후 12개월) 제품 개봉일에
              패키지 옆에 날짜를 적어 사용 가능한 유통기한에 맞춰 사용해보세요.
            </p>
          </div>
        </div>
        {/* gridBox : 뷰티 제품 관리*/}
        <div className="free-gridBox third">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/beauty01.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/beauty02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/care/detail/beauty03.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="free-section has-bg">
        {/* textBox */}
        <div className="free-textBox">
          <h3 className="heading3 q-mega">여기를 클릭하여 섬세한 소재에 관해 더 자세히 알아보세요.</h3>
          <p className="paragraph1">
            <a className="a-link boxed" data-value="READ MORE" href="/free/about/materials" target="_blank">
              더 보기
            </a>
          </p>
        </div>
      </div>
    </FreeHtml>
  );
}
