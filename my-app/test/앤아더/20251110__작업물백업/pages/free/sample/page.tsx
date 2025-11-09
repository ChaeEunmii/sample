import { Metadata } from 'next';
import FreeHtml from '@/views/freehtml/FreeHtml';

export const metadata: Metadata = {
  title: '공통 가이드',
};

const SAMPLE_STRING = `<div>
  <p class="heading3">이것은 샘플 문자열 입니다.</p>
  <p class="paragraph1">paragraph1</p>
  <p class="paragraph2 ut-color-accent">paragraph2</p>
  <div class="gridBox third">
    <div class="cta">
    <button class="free-btn outlined" onclick="setInterval(() => {
      console.log('sample');
    }, 1000);">sample</button>
    </div>
  </div>
</div>`;

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
      <FreeHtml>{SAMPLE_STRING}</FreeHtml>
      <FreeHtml>
        {/*  */}
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>accordion</h2>
          </div>
          <div className="accordion-group">
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>아코디언 스타일</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>
            <div className="accordion">
              <button className="trigger" aria-expanded="false" aria-controls="accordionContent">
                <span>아코디언 스타일</span>
              </button>
              <div className="contArea" id="accordionContent" aria-hidden="true">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        {/*  */}
        {/*  */}
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>heading</h2>
          </div>
          <div className="gridItem" style={{ gap: '24px' }}>
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
            <div>
              <p>heading4</p>
              <p className="heading4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <br />
        <br />
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>paragraph</h2>
          </div>
          <div className="gridItem">
            <div>
              <strong>paragraph1</strong>
              <p className="paragraph1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <strong>paragraph2</strong>
              <p className="paragraph2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <strong>paragraph3</strong>
              <p className="paragraph3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
            <div>
              <strong>paragraph4</strong>
              <p className="paragraph4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
              <hr />
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        <br />
        {/*  */}
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>colors</h2>
          </div>
          <div className="gridItem">
            <p className="paragraph3 black">black</p>
            <p className="paragraph3 white" style={{ background: '#000' }}>
              white
            </p>
            <p className="paragraph3 gray3">gray3</p>
            <p className="paragraph3 gray6">gray6</p>
            <p className="paragraph3 gray7">gray7</p>
          </div>
        </div>
        {/*  */}
        <br />
        <br />
        {/*  */}
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>link</h2>
          </div>
          <div className="gridItem">
            <p className="paragraph3">
              <a href="#" className="a-link">
                a-link
              </a>
            </p>
            <a href="#" className="a-link boxed">
              배너링크
            </a>
          </div>
        </div>
        {/*  */}
        <br />
        <br />
        <br />
        {/*  */}
        <div className="free-gridBox half">
          <div className="gridItem flexBox">
            <h2>cta</h2>
          </div>
          <div className="gridItem cta">
            <div className="cta">
              <button className="free-btn outlined">outlined</button>
              <button className="free-btn filled">filled</button>
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        {/*  */}
        <h2>gridBox - half</h2>
        <div className="free-gridBox half">
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        {/*  */}
        <h2>gridBox - third</h2>
        <div className="free-gridBox third">
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
        </div>
        {/*  */}
        <br />
        {/*  */}
        <h2>gridBox - fourth</h2>
        <div className="free-gridBox fourth">
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
          <div className="free-tile">
            <div className="imgCont">
              <img src="/images/dummy/@sample_img_01.jpg" alt="sample" />
            </div>
          </div>
        </div>
        {/*  */}
      </FreeHtml>
    </div>
  );
}
