import { useRef, useState } from 'react';

type Direction = 'vertical' | 'horizontal';

export const useDraggableScroll = (direction: Direction = 'vertical') => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const bindEvents = () => {
    const el = ref.current;
    if (!el) return;

    const pos = { start: 0, mouse: 0, isDown: false };

    const onMouseDown = (e: MouseEvent) => {
      pos.isDown = true;
      pos.start = direction === 'horizontal' ? el.scrollLeft : el.scrollTop;
      pos.mouse = direction === 'horizontal' ? e.clientX : e.clientY;
      setIsDragging(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!pos.isDown) return;
      const delta = (direction === 'horizontal' ? e.clientX : e.clientY) - pos.mouse;
      if (direction === 'horizontal') {
        el.scrollLeft = pos.start - delta;
      } else {
        el.scrollTop = pos.start - delta;
      }
    };

    const onMouseUp = () => {
      pos.isDown = false;
      setIsDragging(false);
    };

    el.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  };

  return { ref, isDragging, bindEvents };
};
