// Divide o texto em letras que sobem uma a uma. O pai deve ter aria-label com o texto completo.
export default function Letters({ lines }) {
  return lines.map((line, li) => {
    const offset = lines.slice(0, li).join('').length;
    return (
      <span className="line" key={line} aria-hidden="true">
        {[...line].map((char, ci) => (
          <span className="letter" key={ci} style={{ '--i': offset + ci }}>
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </span>
    );
  });
}
