// Cada palavra acende conforme o scroll avança.
export default function Verse({ text, reference }) {
  const words = text.split(' ');
  return (
    <blockquote className="verse" style={{ '--n': words.length }}>
      <p>
        {words.map((word, i) => (
          <span key={i} style={{ '--i': i }}>{word}{' '}</span>
        ))}
      </p>
      <cite>{reference}</cite>
    </blockquote>
  );
}
