import { useEffect, useRef } from 'react';

// Fio de luz no topo: mostra quanto da página já foi percorrido.
export default function ScrollBar() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      const { scrollHeight, clientHeight } = document.documentElement;
      ref.current.style.setProperty('--scroll', (window.scrollY / (scrollHeight - clientHeight || 1)).toFixed(4));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="scrollbar" ref={ref} aria-hidden="true" />;
}
