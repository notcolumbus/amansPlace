import { useCallback, useRef } from 'react';

interface EmojiPopProps {
  emoji: string;
  count?: number;
  children: React.ReactNode;
}

function EmojiPop({ emoji, count = 8, children }: EmojiPopProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  const pop = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.textContent = emoji;
      el.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-size: ${16 + Math.random() * 16}px;
        pointer-events: none;
        z-index: 9999;
        user-select: none;
      `;
      containerRef.current?.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 60 + Math.random() * 80;
      const dx = Math.cos(angle) * velocity;
      const dy = Math.sin(angle) * velocity - 40;
      const rotation = (Math.random() - 0.5) * 720;

      el.animate(
        [
          { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy + 120}px) rotate(${rotation}deg) scale(0)`, opacity: 0 },
        ],
        { duration: 600 + Math.random() * 400, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
      ).onfinish = () => el.remove();
    }
  }, [emoji, count]);

  return (
    <span ref={containerRef} onMouseEnter={pop} className="relative opacity-80">
      {children}
    </span>
  );
}

export default EmojiPop;
