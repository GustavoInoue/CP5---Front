import Scene from './Scene';
import { verses } from '../data/content';

const emphasize = (text) =>
  text.split(/(caminho|verdade|vida)/).map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));

export default function Bible() {
  const { left, right, reference } = verses.way;

  return (
    <Scene id="palavra" className="palavra" length={160}>
      <div className="bible" tabIndex={0} aria-label="Bíblia. Passe o mouse ou foque para abrir.">
        <div className="book-light" aria-hidden="true" />
        <div className="book-shadow" aria-hidden="true" />
        <div className="book">
          <div className="page right">
            <p>{right}</p>
            <cite>{reference}</cite>
          </div>
          <div className="cover">
            <div className="face front" aria-hidden="true">
              <div className="cover-text">
                <span>Bíblia</span>
                <span>Sagrada</span>
                <i className="cross-emboss" />
              </div>
            </div>
            <div className="face back page left">
              <p>{emphasize(left)}</p>
            </div>
          </div>
        </div>
        <p className="hint" aria-hidden="true">
          <span className="mouse">Passe o mouse sobre a Bíblia</span>
          <span className="touch">Role para abrir a Bíblia</span>
        </p>
      </div>
    </Scene>
  );
}
