export default function Dove() {
  return (
    <svg className="dove" viewBox="0 0 200 150" role="img" aria-label="Pomba, símbolo do Espírito Santo">
      <g className="wing left"><path d="M88 70C56 38 26 46 4 24c6 40 34 72 86 80z" /></g>
      <g className="wing right"><path d="M112 70c32-32 62-24 84-46-6 40-34 72-86 80z" /></g>
      <path d="M88 108l12 40 12-40z" />
      <ellipse cx="100" cy="82" rx="19" ry="34" />
      <circle cx="100" cy="44" r="12" />
      <path className="beak" d="M96 50h8l-4 9z" />
    </svg>
  );
}
