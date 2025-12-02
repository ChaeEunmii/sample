export const handleAccordion = (root = document) => {
  const allAccordions = root.querySelectorAll('.accordion');

  allAccordions.forEach((item) => {
    if (item.__bound_acc) return; // ← 가드
    item.__bound_acc = true;

    const trigger = item.querySelector('.trigger');
    const content = item.querySelector('.contArea');
    const icon = item.querySelector('.icon');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      // 그룹 감싸고 있는지 확인
      const group = item.closest('.accordion-group');
      const isInGroup = !!group;

      // 그룹 안에 있을 경우: 같은 그룹의 다른 항목 닫기
      if (isInGroup) {
        const siblings = group.querySelectorAll('.accordion');
        siblings.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherTrigger = other.querySelector('.trigger');
            const otherContent = other.querySelector('.contArea');
            const otherIcon = other.querySelector('.icon');
            otherTrigger?.setAttribute('aria-expanded', 'false');
            otherContent?.setAttribute('aria-hidden', 'true');
            otherIcon?.classList.remove('open');
          }
        });
      }

      // 클릭한 아이템 토글 (그룹 밖에서도 동일하게 동작)
      const active = item.classList.toggle('active');
      trigger.setAttribute('aria-expanded', String(active));
      content.setAttribute('aria-hidden', String(!active));
      icon?.classList.toggle('open', active);
    });
  });
};

// 현재 라이브되고 있는 코드구조의 아코디언
export const handleAccordion2 = (root = document) => {
  const allAccordions = root.querySelectorAll('.o-accordion');

  allAccordions.forEach((item) => {
    if (item.__bound_acc) return; // ← 가드
    item.__bound_acc = true;

    const trigger = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.icon');

    trigger.addEventListener('click', (e) => {
      e.preventDefault();

      // o-contain 감싸고 있는지 확인
      const group = item.closest('.o-contain');
      const isInGroup = !!group;

      // o-contain 안에 있을 경우: 같은 그룹의 다른 항목 닫기
      if (isInGroup) {
        const siblings = group.querySelectorAll('.o-accordion');
        siblings.forEach((other) => {
          if (other !== item) {
            other.classList.remove('is-visible');
            const otherTrigger = other.querySelector('.accordion-header');
            const otherContent = other.querySelector('.accordion-content');
            const otherIcon = other.querySelector('.icon');
            otherTrigger?.setAttribute('aria-expanded', 'false');
            otherContent?.setAttribute('aria-hidden', 'true');
            otherIcon?.classList.remove('is-visible');
          }
        });
      }

      // 클릭한 아이템 토글 (그룹 밖에서도 동일하게 동작)
      const active = item.classList.toggle('is-visible');
      trigger.setAttribute('aria-expanded', String(active));
      content.setAttribute('aria-hidden', String(!active));
      icon?.classList.toggle('is-visible', active);
    });
  });
};

// Swiper를 전역 DOM에서 초기화
export function initCommonSwiper(root = document) {
  if (!window.Swiper) return;

  const el = root.querySelector('.freeSwiper');
  if (!el) return;

  // root 기준으로 탐색
  const pagination = root.querySelector('.swiper-pagination');
  const nextBtn = root.querySelector('.swiper-button-next');
  const prevBtn = root.querySelector('.swiper-button-prev');

  new window.Swiper(el, {
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    autoplay: { delay: 3000 },
    pagination: pagination ? { el: pagination, clickable: true } : undefined,
    navigation: nextBtn && prevBtn ? { nextEl: nextBtn, prevEl: prevBtn } : undefined,
  });
}

// 파트너십과 콜라보레이션___슬라이드
export function initLeftSlides(root = document) {
  const slides = root.querySelector('.slides-left-wrapper');
  const slideArray = Array.from(root.querySelectorAll('.slide-left-slide'));
  const pagination = root.querySelector('.pagination-left-wrap');
  const nextButtons = Array.from(root.querySelectorAll('.next-button-left-btn'));

  if (!slides || slideArray.length === 0 || !pagination) return;
  if (slides.__bound) return; // 중복 바인딩 방지
  slides.__bound = true;

  let currentIndex = 0;

  function updatePagination(index) {
    const buttons = pagination.querySelectorAll('div');
    buttons.forEach(function (button, idx) {
      button.classList.toggle('active', idx <= index);
    });
  }

  function showSlide(index) {
    const width = window.innerWidth;
    let unit = 100; // 기본값: 모바일
    if (width >= 1024) {
      unit = 50;
    }
    const offset = -index * unit;
    slides.style.transform = 'translateX(' + offset + 'vw)';
    updatePagination(index);
  }

  function nextSlide() {
    currentIndex = currentIndex < slideArray.length - 1 ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  }

  // 페이지네이션 버튼 생성
  pagination.innerHTML = '';
  slideArray.forEach(function (_, index) {
    const button = document.createElement('div');
    button.className = 'flex-1 h-0.5 bg-black bg-opacity-50 cursor-pointer rounded-sm';
    button.addEventListener('click', function () {
      currentIndex = index;
      showSlide(currentIndex);
    });
    pagination.appendChild(button);
  });

  // .nextClick 버튼에 nextSlide 연결
  nextButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      nextSlide();
    });
  });

  // 최초 1회
  showSlide(currentIndex);
}

export const cleanupBlinkImage = () => {
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }
};

// (ASIS: handleReadmoreDes)
export function handleReadmoreDes(button) {
  const parentElement = button.parentElement?.parentElement;
  if (!parentElement) return;

  const fullContentElm = parentElement.querySelector('.fullContent');
  const clampedContent = parentElement.querySelector('.clampedContent');
  const readLessBtn = parentElement.querySelector('.readLessBtn');

  if (!fullContentElm || !clampedContent || !readLessBtn) return;

  fullContentElm.classList.remove('hidden-new');
  clampedContent.classList.add('hidden-new');
  button.classList.add('hidden-new');
  readLessBtn.classList.remove('hidden-new');
}
// (ASIS: handleReadlessDes)
export function handleReadlessDes(button) {
  const parentElement = button.parentElement?.parentElement;
  if (!parentElement) return;

  const fullContentElm = parentElement.querySelector('.fullContent');
  const clampedContent = parentElement.querySelector('.clampedContent');
  const readMoreBtn = parentElement.querySelector('.readMoreBtn');

  if (!fullContentElm || !clampedContent || !readMoreBtn) return;

  clampedContent.classList.remove('hidden-new');
  fullContentElm.classList.add('hidden-new');
  button.classList.add('hidden-new');
  readMoreBtn.classList.remove('hidden-new');
}

// 더보기 / 접기 공통 처리
// 원본 jQuery $(document).ready(...) 대체
export function initReadMore(root = document) {
  const readMoreBtn = root.querySelector('.readMoreBtn');
  const content = root.querySelector('.clampedContent');
  const fullSpan = root.querySelector('.content-full');
  const fullContent = root.querySelector('.fullContent');
  const readLessBtn = root.querySelector('.readLessBtn');

  if (!readMoreBtn || !content || !fullSpan || !fullContent || !readLessBtn) return;

  const heightContentFull = fullSpan.offsetHeight;
  const heightContent = content.offsetHeight;

  // --- 더보기 버튼 표시 여부 (원본 동작 그대로) ---
  const needMore = heightContent < heightContentFull;

  if (needMore) {
    readMoreBtn.classList.remove('hidden-new');

    // 필요할 때만 이벤트 붙인다.
    readMoreBtn.addEventListener('click', () => {
      fullContent.classList.remove('hidden-new');
      content.classList.add('hidden-new');
      readMoreBtn.classList.add('hidden-new');
      readLessBtn.classList.remove('hidden-new');
    });
    readLessBtn.addEventListener('click', () => {
      content.classList.remove('hidden-new');
      fullContent.classList.add('hidden-new');
      readLessBtn.classList.add('hidden-new');
      readMoreBtn.classList.remove('hidden-new');
    });
  } else {
    // 짧으면 버튼을 보여주지 않는다
    readMoreBtn.classList.add('hidden-new');
    readLessBtn.classList.add('hidden-new');
  }
}

// ASIS : SNS 공유하기 (snsShare)
let sharePopup;
// const KAKAO_KEY = 'c988afa42e272671a55e3116ef2ac42a';
const appYn = 'N';

function openSharePopup(url, width, height) {
  const top = screen.height / 2 - height / 2;
  const left = screen.width / 2 - width / 2;
  if (sharePopup && !sharePopup.closed) {
    sharePopup.close();
  }
  sharePopup = window.open(
    url,
    'sharePop',
    `height=${height}, width=${width}, top=${top}, left=${left}, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0`
  );
}
// 원본 동작 그대로 (snsShrUrl 은 마크업 a태그 data-url로 뺌)
function snsShare(type, snsShrUrl) {
  // var snsShrUrl = "ASIS 현재화면 경로"
  const shareText = '';
  const imgPath = 'https://image.thehyundai.com/';

  // 기본 URL은 window.location.href 사용
  snsShrUrl = snsShrUrl || window.location.href;

  if (type === 'sms') {
    const isAndroid = navigator.userAgent.indexOf('Android') > -1;

    let sms_shareText = shareText;
    let sms_shareUrl = snsShrUrl;

    if (isAndroid) {
      sms_shareText = sms_shareText.replace(/(&)/g, '%26');
      sms_shareUrl = sms_shareUrl.replace(/(&)/g, '%26');
    }

    const sms_body = encodeURIComponent(sms_shareText + '\n' + sms_shareUrl);
    window.open('sms:?&body=' + sms_body, '_self');
    return;
  }

  // 나머지는 완전 원본 그대로
  if (type === 'kakao') {
    if (typeof snsShareKakao === 'function') {
      snsShareKakao('talk', shareText, snsShrUrl, imgPath);
    }
  } else if (type === 'kastory') {
    if (typeof snsShareKakao === 'function') {
      snsShareKakao('story', shareText, snsShrUrl, imgPath);
    }
  } else if (type === 'facebook') {
    if (appYn === 'Y') {
      if (typeof snsShareEntry === 'function') {
        snsShareEntry(type, shareText, snsShrUrl);
      }
    } else {
      openSharePopup('http://www.facebook.com/sharer.php?p__g=i__n&u=' + encodeURIComponent(snsShrUrl), 790, 400);
    }
  } else if (type === 'twitter') {
    if (appYn === 'Y') {
      snsShareEntry(type, shareText, snsShrUrl);
    } else {
      openSharePopup('http://twitter.com/share?text=' + shareText + '&url=' + encodeURIComponent(snsShrUrl), 790, 400);
    }
  } else if (type === 'pinterest') {
    const shareUrl =
      'http://pinterest.com/pin/create/button/?url=' +
      encodeURIComponent(snsShrUrl) +
      '&media=' +
      encodeURIComponent(imgPath) +
      '&description=' +
      shareText;

    if (appYn === 'Y') window.location.href = shareUrl;
    else openSharePopup(shareUrl, 790, 400);
  }
}

// 클래스/속성 기준으로 클릭 바인딩
export function initShare(root = document) {
  const items = root.querySelectorAll('[data-share]');

  items.forEach((btn) => {
    if (btn.__bound_share) return;
    btn.__bound_share = true;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-share');
      const url = btn.getAttribute('data-url') || window.location.href; // 설정한 data-url

      snsShare(type, url);
    });
  });
}

export function initCommon(root = document) {
  console.log(new Date().toTimeString().slice(0, 8), 'initCommon');
  handleAccordion(root);
  handleAccordion2(root);
  initCommonSwiper(root);
  initLeftSlides(root);
  initReadMore(root);
  initShare(root);
}
