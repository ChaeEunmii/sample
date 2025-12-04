'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import './ui/css/swiper-bundle.min.css';
import './ui/css/freehtml.css';
import './ui/js/freehtml.js';
import { initCommon, cleanupBlinkImage } from './ui/js/freehtml';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function FreeHtml({ children, ...props }: { children: React.ReactNode }) {
  const isString = typeof children === 'string';
  const contentRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const disposersRef = useRef<(() => void)[]>([]);
  const attachedJQRef = useRef(false);

  const needsJQ = useMemo(() => {
    if (!isString) return false;
    const html = String(children);
    return (
      /\$\(|jQuery\(/.test(html) ||
      /<script[^>]+src=["'][^"']*jquery[^"']*["']/i.test(html) ||
      /data-needs-jquery/i.test(html)
    );
  }, [children, isString]);

  const execInlineScripts = () => {
    if (!contentRef.current) return;
    const scripts = contentRef.current.querySelectorAll('script:not([src])');
    scripts.forEach((oldScript) => {
      const code = oldScript.textContent || '';
      const s = document.createElement('script');
      s.text = code;
      document.body.appendChild(s);
      oldScript.remove();
      s.remove();
    });
  };

  // COS추가 : FreeHtml 내부에 <style>안에 HTML태그(* 포함)로 시작하는 선택자만 .free-content 스코프설정 (전체에 영향가는것 방어)
  const scopeTagSelectors = () => {
    if (!contentRef.current) return;

    const styleEls = contentRef.current.querySelectorAll('style');

    styleEls.forEach((el) => {
      let css = el.textContent || '';
      if (!css) return;
      // 태그 또는 * 로 시작하는 선택자만 매칭
      css = css.replace(
        /(^|[{}])\s*([a-zA-Z][a-zA-Z0-9-]*|\*)\s*([,{])/g,
        (match, brace, selector, after) => `${brace} :where(.free-content) ${selector}${after}`
      );

      el.textContent = css;
    });
  };

  useEffect(() => {
    scopeTagSelectors();
    initCommon(document);

    (window as any).__freehtml_register_disposer__ = (fn: () => void) => {
      if (typeof fn === 'function') disposersRef.current.push(fn);
    };

    if (needsJQ && typeof window !== 'undefined') {
      const w = window as any; // ← 임시 처리
      if (w.jQuery) {
        w.$ = w.$ || w.jQuery;
        w.jQuery = w.jQuery || w.$;
        execInlineScripts();
      }
    }

    return () => {
      for (const d of disposersRef.current.splice(0)) {
        try {
          d();
        } catch {}
      }
      cleanupBlinkImage();
      delete (window as any).__freehtml_register_disposer__;
      // alias 회수
      if (attachedJQRef.current) {
        try {
          delete (window as any).$;
        } catch {}
        try {
          delete (window as any).jQuery;
        } catch {}
        attachedJQRef.current = false;
      }
    };
  }, [pathname, isString, needsJQ]);

  return (
    <div data-page-type="free" {...props}>
      {isString ? (
        <div className="free-content" ref={contentRef} dangerouslySetInnerHTML={{ __html: children as string }} />
      ) : (
        <div className="free-content" ref={contentRef}>
          {children}
        </div>
      )}
      {needsJQ && <Script src="/ui/js/jquery-3.7.1.js" strategy="beforeInteractive" />}
    </div>
  );
}
