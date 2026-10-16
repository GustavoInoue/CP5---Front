import { useEffect, useRef } from 'react';

// Escreve o progresso (0 a 1) da seção em --p, sem re-renderizar o React.
export default function useScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let frame;

    const update = () => {
      const { top, height } = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -top / (height - window.innerHeight)));
      el.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return ref;
}
