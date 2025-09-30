import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';

type Props = {
  head?: string;   // (옵션) 브랜드 등 앞부분
  body: string;    // 본문
  suffix: string;  // 가변 고정문구 (길이 가변)
  className?: string;
}; 

export default function TwoLineSuffixLite({ head, body, suffix, className }: Props) {
  const hostRef = useRef<HTMLParagraphElement>(null);
  const [text, setText] = useState('');

  const fit = () => {
    const host = hostRef.current;
    if (!host) return;

    const base = [head, body].filter(Boolean).join(' ').trim();
    const tailDots = `… ${suffix}`;
    const tailPlain = ` ${suffix}`;

    // 측정 엘리먼트
    const probe = document.createElement('span');
    const cs = getComputedStyle(host);
    Object.assign(probe.style, {
      position: 'absolute', left: '-9999px', top: '0', visibility: 'hidden',
      display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2',
      overflow: 'hidden', whiteSpace: 'normal', width: `${host.clientWidth}px`,
      font: cs.font, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing,
      wordBreak: cs.wordBreak || 'keep-all', overflowWrap: cs.overflowWrap || 'anywhere',
      hyphens: cs.hyphens || 'auto',
    } as CSSStyleDeclaration);
    document.body.appendChild(probe);

    const lines = () => probe.getClientRects().length;

    // 1) 말줄임 없이 suffix까지 2줄이면 그대로
    probe.textContent = base + tailPlain;
    if (lines() <= 2) { setText(base + tailPlain); document.body.removeChild(probe); return; }

    // 2) “… + suffix” 포함 상태로 들어갈 때까지 뒤에서 한 글자씩 줄이기 (간단버전)
    let cut = base.length;
    while (cut > 0) {
      probe.textContent = base.slice(0, cut) + tailDots;
      if (lines() <= 2) break;
      cut--;
    }

    // 3) 마지막 공백/기호 경계로 살짝 후퇴 (없으면 현재 cut 유지)
    const sliced = base.slice(0, cut);
    const b = Math.max(sliced.lastIndexOf(' '), sliced.lastIndexOf('·'), sliced.lastIndexOf('/'), sliced.lastIndexOf('-'));
    const nice = b > 0 ? sliced.slice(0, b) : sliced;

    setText(nice + tailDots);
    document.body.removeChild(probe);
  };

  useLayoutEffect(fit, [head, body, suffix]);
  useEffect(() => {
    const on = () => fit();
    window.addEventListener('resize', on);
    // 폰트 로딩 지연 대응
    (document as any).fonts?.ready?.then(on).catch(() => {});
    return () => window.removeEventListener('resize', on);
  }, []);

  return (
    <p
      ref={hostRef}
      className={className}
      style={{
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
        overflow: 'hidden', wordBreak: 'keep-all', overflowWrap: 'anywhere', lineHeight: '1.4'
      }}
      title={[head, body].filter(Boolean).join(' ')}
    >
      {text}
    </p>
  );
}