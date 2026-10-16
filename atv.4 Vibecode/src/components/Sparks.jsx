const dots = Array.from({ length: 16 }, (_, i) => ({ x: (i * 37) % 100, delay: (i * 0.9) % 6, size: 3 + (i % 4) }));

// Faíscas de luz que sobem. `rise` é a altura da subida, em vh.
export default function Sparks({ rise = 60 }) {
  return (
    <div className="sparks" aria-hidden="true" style={{ '--rise': `-${rise}vh` }}>
      {dots.map(({ x, delay, size }, i) => (
        <i key={i} style={{ '--x': `${x}%`, '--d': `${delay}s`, '--s': `${size}px` }} />
      ))}
    </div>
  );
}
