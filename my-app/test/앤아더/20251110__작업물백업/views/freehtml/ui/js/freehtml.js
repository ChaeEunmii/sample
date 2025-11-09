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

// 커스텀 셀렉트 초기화
export function handleCustomSelect(root = document) {
  const boxes = Array.from(root.querySelectorAll('.selectBox'));

  // 이미 바인딩된 박스는 중복 방지
  boxes.forEach((box, idx) => {
    if (box.__bound) return;
    box.__bound = true;

    const trigger = box.querySelector('.trigger');
    const list = box.querySelector('.list');
    const icon = box.querySelector('.icon');
    const options = Array.from(box.querySelectorAll('.listItem'));

    // 고유 id/연결
    if (!list.id) list.id = `customSelect_${Date.now()}_${idx}`;
    trigger.setAttribute('aria-controls', list.id);

    const closeList = () => {
      box.classList.remove('open');
      list.classList.remove('active');
      trigger.setAttribute('aria-expanded', 'false');
      list.setAttribute('aria-hidden', 'true');
      if (icon) icon.classList.remove('open');
    };

    const openList = () => {
      // 다른 박스 닫기(한 번에 하나만 열기)
      boxes.forEach((b) => {
        if (b !== box) b.__close?.();
      });

      box.classList.add('open');
      list.classList.add('active');
      trigger.setAttribute('aria-expanded', 'true');
      list.setAttribute('aria-hidden', 'false');
      if (icon) icon.classList.add('open');
    };

    // 외부에서 닫을 수 있도록 참조 저장
    box.__close = closeList;

    const toggleList = () => {
      const isOpen = box.classList.contains('open');
      isOpen ? closeList() : openList();
    };

    const selectOption = (btn) => {
      // 값 반영
      const label = btn.textContent.trim();
      // 트리거 안에 텍스트 노드가 있다면 교체 (아이콘 등 보존)
      // .trigger 구조가 "텍스트 + <i>"인 가정
      const textNode = Array.from(trigger.childNodes).find((n) => n.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.nodeValue = ` ${label} `;
      else trigger.firstChild ? (trigger.firstChild.textContent = label) : (trigger.textContent = label);

      // aria-selected 업데이트
      options.forEach((o) => o.setAttribute('aria-selected', 'false'));
      btn.setAttribute('aria-selected', 'true');

      closeList();
      trigger.focus();
    };

    // 클릭 핸들러(위임)
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      toggleList();
    });

    options.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        selectOption(btn);
      });
    });

    // 바깥 클릭으로 닫기
    const onDocClick = (e) => {
      if (!box.classList.contains('open')) return;
      const target = e.target;
      if (!box.contains(target)) closeList();
    };

    // 키보드 접근성
    const focusOptionByIndex = (i) => {
      const safe = ((i % options.length) + options.length) % options.length;
      options[safe].focus();
    };

    trigger.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        openList(); // 열고
        focusOptionByIndex(0); // 첫 옵션 포커스
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        openList();
        focusOptionByIndex(0);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        openList();
        focusOptionByIndex(options.length - 1);
      } else if (e.key === 'Escape') {
        closeList();
      }
    });

    // 초기 상태 닫힘 보장
    closeList();

    // 전역 리스너 등록(한 번만)
    if (!handleCustomSelect.__listening) {
      root.addEventListener('click', onDocClick);
      handleCustomSelect.__listening = true;
    }
  });
}

// 커스텀 셀렉트 + 입력 트리거 + 심플 오토컴플리트(부분 일치 필터)
export function handleAutoComplete(root = document) {
  const boxes = Array.from(root.querySelectorAll('.autoBox'));

  boxes.forEach((box, idx) => {
    if (box.__bound) return;
    box.__bound = true;

    const input = box.querySelector('.triggerInput');
    const list = box.querySelector('.list');
    const icon = box.querySelector('.icon');
    const items = Array.from(box.querySelectorAll('.listItem'));
    const lis = items.map((btn) => btn.closest('li'));

    if (!list.id) list.id = `customSelect_${Date.now()}_${idx}`;
    input.setAttribute('aria-controls', list.id);

    const measure = () => {
      const inner = list.querySelector('ul') || list.firstElementChild;
      const h = inner ? inner.scrollHeight : 0;
    };

    const isOpen = () => box.classList.contains('open');

    const open = () => {
      if (isOpen()) return;
      measure(); // 최초 1회만 측정
      box.classList.add('open');
      list.classList.add('active');
      input.setAttribute('aria-expanded', 'true');
      list.setAttribute('aria-hidden', 'false');
      if (icon) icon.classList.add('open');
    };

    const close = () => {
      box.classList.remove('open');
      list.classList.remove('active');
      input.setAttribute('aria-expanded', 'false');
      list.setAttribute('aria-hidden', 'true');
      if (icon) icon.classList.remove('open');
    };

    const select = (btn) => {
      const val = btn.textContent.trim();
      items.forEach((b) => b.setAttribute('aria-selected', 'false'));
      btn.setAttribute('aria-selected', 'true');
      input.value = val;
      close();
      input.focus();
    };

    // 입력 시: 필터 + (열려있으면 높이만 갱신 / 닫혀있으면 열기)
    const rawTexts = items.map((b) => b.textContent.trim().toLowerCase());
    const filter = () => {
      const q = input.value.trim().toLowerCase();
      let any = false;
      items.forEach((btn, i) => {
        const show = !q || rawTexts[i].includes(q);
        const li = lis[i];
        if (li) li.style.display = show ? '' : 'none';
        if (show) any = true;
      });
      if (!isOpen() && any) open();
      else if (isOpen()) measure();
    };

    input.addEventListener('focus', () => {
      if (!isOpen()) open();
    });
    input.addEventListener('input', filter);

    // Enter/Space: 첫 보이는 항목 선택
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const firstVisible = items.find((_, i) => !lis[i] || lis[i].style.display !== 'none');
        if (firstVisible) {
          e.preventDefault();
          select(firstVisible);
        }
      }
      // Tab/Shift+Tab은 기본 동작 유지
    });

    items.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        select(btn);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          select(btn);
        }
      });
    });

    root.addEventListener('click', (e) => {
      if (!box.contains(e.target)) close();
    });

    close();
  });
}

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

export function handleSizeGuideTab(root = document) {
  const groups = root.querySelectorAll('.free-sizeguide-chart');
  groups.forEach((group) => {
    const btnBox = group.querySelector('.free-sizeguide-chart-tabs');
    const boxes = group.querySelectorAll('.free-sizeguide-chart-box');
    if (!btnBox || boxes.length === 0) return;

    if (btnBox.dataset.bound === '1') return;
    btnBox.dataset.bound = '1';

    btnBox.addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!target || !btnBox.contains(target)) return;
      e.preventDefault();

      const tabs = Array.from(btnBox.querySelectorAll('a'));
      const idx = tabs.indexOf(target);
      if (idx < 0) return;

      tabs.forEach((t) => t.classList.remove('is_on'));
      target.classList.add('is_on');

      boxes.forEach((b) => b.classList.remove('is_on'));
      if (boxes[idx]) boxes[idx].classList.add('is_on');
    });
  });
}

function getScrollTarget(root) {
  return root instanceof Document ? root.documentElement : root;
}

export const handleGuaranteeDialog = (root = document, el) => {
  const docEl = getScrollTarget(root);
  const content = el.querySelector('.free-guarantee-dialog-content');
  const closeBtn = el.querySelector('.free-dialog-close');

  const close = (e) => {
    e?.preventDefault?.();
    el.classList.remove('open');
    docEl.style.removeProperty('overflow');
  };

  closeBtn?.addEventListener('click', close, { once: true });

  el.addEventListener(
    'click',
    (e) => {
      if (content && content.contains(e.target)) return;
      close(e);
    },
    { once: true }
  );
};

export const handleGuaranteeButton = (root = document) => {
  const docEl = getScrollTarget(root);
  const btn = root.querySelector('.free-guarantee-button');
  if (!btn) return;

  // 중복 방지 가드
  if (btn.__bound_guarantee__) return;
  btn.__bound_guarantee__ = true;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // 스크롤 잠금
    docEl.style.overflow = 'hidden';

    const dialog = root.querySelector('.free-guarantee-dialog');
    if (dialog) {
      dialog.classList.add('open');
      handleGuaranteeDialog(root, dialog);
    }
  });
};

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
  handleCustomSelect(root);
  handleAutoComplete(root);
  initCommonSwiper(root);
  handleSizeGuideTab(root);
  handleGuaranteeButton(root);
  handleBlinkImage(root);
}
