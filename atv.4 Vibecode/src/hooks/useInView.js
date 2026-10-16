import { useEffect, useRef } from 'react';

// Adiciona a classe "in" quando o elemento aparece na tela (uma única vez).
export default function useInView(threshold = 0.4) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      el.classList.add('in');
      observer.disconnect();
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
