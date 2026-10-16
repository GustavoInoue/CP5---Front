import useScrollProgress from '../hooks/useScrollProgress';

// Seção alta com palco fixo (sticky): o scroll vira o progresso --p da cena.
export default function Scene({ id, className, length, children }) {
  const ref = useScrollProgress();
  return (
    <section id={id} ref={ref} className={`scene ${className}`} style={{ '--length': `${length}vh` }}>
      <div className="stage">{children}</div>
    </section>
  );
}
