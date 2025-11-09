import FreeHtml from '@/views/freehtml/FreeHtml';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us',
};

export default function Page() {
  return (
    <FreeHtml>
      <div className="free-about">
        {/* multiHero */}
        <div className="free-multiHero">
          <div className="image-container">
            <div className="image-pc">
              <img
                src="https://image.thehyundai.com/static/image/sect/hnm/hnmmain2918312020250919103423.jpg?ver=11071000"
                alt="campaign image"
              />
            </div>
            <div className="image-mo">
              <img
                src="https://image.thehyundai.com/static/image/sect/hnm/hnmmain2918311020250919103445.jpg?ver=11071000"
                alt="campaign image"
              />
            </div>
          </div>
        </div>
        {/* textHero */}
        <div className="free-textHero">
          <strong className="hero-item hero-heading fs18">
            & Other Stories는 자신만의 이야기를 표현하는 모던 패션 브랜드입니다.
            <br />
            일상 속 설렘과 호기심, 그리고 불완전함까지 담아낸 디자인으로, 다르게 생각하는 이들에게 자신감을 선사합니다.
          </strong>
        </div>
        {/* gridBox */}
        <div className="free-gridBox half">
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/about/img_about_02.jpg" alt="Alternate Image" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img className="a-image" src="/images/freehtml/about/img_about_03.jpg" alt="Alternate Image" />
            </div>
          </div>
        </div>
        {/* textHero */}
        <div className="free-textHero">
          <p className="hero-item fs16 font-serif">
            2013년에 설립된 &amp; Other Stories는 창작에 대한 사랑에서 시작되었습니다. 스타일과 개성을 더욱 빛내는
            아이템을 만들고, 문화적 선구자들과 함께하며 의미 있는 작업을 이어가고 있습니다. 우리에게 패션은 창의성과
            자기 표현이며, 오늘을 반영하면서도 오래도록 함께할 수 있는 스타일을 완성해 가는 과정입니다.
            <br />
            <br />
            &amp; Other Stories의 레디 투 웨어, 슈즈, 액세서리, 뷰티 컬렉션은 유럽, 북미, 아시아, 중동의 매장과
            온라인에서 만나볼 수 있으며, 전 세계 어디서나 개성을 영감받을 수 있도록 세심하게 디자인되었습니다.
          </p>
        </div>
        {/* multiHero */}
        <div className="free-multiHero">
          <div className="image-container">
            <div className="image-pc">
              <div className="vimeo-pc">
                <iframe
                  src="https://thd-play.livehyundai.com/video/ca0c9219-2efa-40de-8558-6f93bd06a644?noTitle&noControl&noLike&loop"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="vimeo"
                ></iframe>
              </div>
            </div>
            <div className="image-mo">
              <div className="vimeo-mo">
                <iframe
                  src="https://thd-play.livehyundai.com/video/ca0c9219-2efa-40de-8558-6f93bd06a644?noTitle&noControl&noLike&loop"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="vimeo"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreeHtml>
  );
}
