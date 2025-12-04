// ========== 새로 정의한 아코디언 ========== //
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

// ========== 현재 라이브되고 있는 코드구조의 아코디언 그대로 사용시 ========== //
export const handleAsisAccordion = (root = document) => {
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

// ========== 슬라이드 형태의 디자인(next 버튼존재) (ex: 파트너십과 콜라보레이션) ========== //
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

// ========== ASIS: 전체적으로 사용되는 더보기 / 접기 공통 처리 (handleReadmoreDes, handleReadlessDes) ========== //
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

  // 더보기 버튼 표시 여부 (원본 동작 그대로)
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

// ========== ASIS : SNS 공유하기 함수 적용 (snsShare) ==========  //
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

// ========== 태그에 onclick 이벤트 대신 이동 link url 설정 (ex: <picture> 태그 onclick 이벤트 대신 data-link="링크경로" 설정 ) ========== //
export function handleClickLink(root = document) {
  const items = root.querySelectorAll('[data-link]');

  items.forEach((el) => {
    el.addEventListener('click', () => {
      location.href = el.dataset.link;
    });
  });
}

// ==========  다이알로그 ========== //
function getScrollTarget(root) {
  return root instanceof Document ? root.documentElement : root;
}
export const handleFreeDialog = (root = document, el) => {
  const docEl = getScrollTarget(root);

  // 이미 바인딩된 다이얼로그면 다시 안 붙이기
  if (el.__bound_dialog__) return;
  el.__bound_dialog__ = true;

  const content = el.querySelector('.free-dialog-content');

  const close = (e) => {
    e?.preventDefault?.();
    el.classList.remove('open');
    docEl.style.removeProperty('overflow');
  };

  // 다이얼로그 하나에만 클릭 리스너 등록해서 처리
  el.addEventListener('click', (e) => {
    const target = e.target;
    // 1) 닫기/취소 버튼 클릭 시
    if (target.closest('.free-dialog-onClose')) {
      close(e);
      return;
    }
    // 2) 바깥(overlay) 클릭 시 닫기
    if (content && !content.contains(target)) {
      close(e);
    }
  });
};
export const handleFreeButton = (root = document) => {
  const docEl = getScrollTarget(root);
  const btn = root.querySelector('.open-free-dialog');
  if (!btn) return;

  if (btn.__bound_guarantee__) return;
  btn.__bound_guarantee__ = true;

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    docEl.style.overflow = 'hidden';

    const dialog = root.querySelector('.free-dialog');
    if (dialog) {
      dialog.classList.add('open');
      // 여러 번 호출돼도 handleFreeDialog 안에서 가드
      handleFreeDialog(root, dialog);
    }
  });
};

// ========= 이미지 blink 설정 ========= //
let blinkInterval = null;

export const handleBlinkImage = (root = document) => {
  console.log(blinkInterval);
  if (blinkInterval) return;

  const area = root.querySelector('.free-blink-area');
  if (!area) return;

  const target = area.querySelector('.free-blink-target');
  if (!target) return;

  blinkInterval = setInterval(() => {
    target.classList.toggle('blink');
  }, 3000);
};

export const cleanupBlinkImage = () => {
  if (blinkInterval) {
    clearInterval(blinkInterval);
    blinkInterval = null;
  }
};

export function initCommon(root = document) {
  console.log(new Date().toTimeString().slice(0, 8), 'initCommon');
  handleAccordion(root);
  handleBlinkImage(root);
  handleAsisAccordion(root);
  initLeftSlides(root);
  initReadMore(root);
  initShare(root);
  handleClickLink(root);
  handleFreeButton(root);
}
