import Scene from './Scene';
import Verse from './Verse';
import Dove from './Dove';
import { verses, fruits } from '../data/content';

// Duas áreas que nunca se sobrepõem: o céu (pomba) e o texto (título, versículo e fruto).
export default function Spirit() {
  return (
    <Scene id="espirito" className="spirit" length={300}>
      <div className="spirit-layout">
        <div className="spirit-sky">
          <div className="spirit-rays" aria-hidden="true" />
          <Dove />
        </div>
        <div className="spirit-text">
          <h2 className="title">O Espírito Santo</h2>
          <Verse {...verses.dove} />
          <ul className="fruits" aria-label="Fruto do Espírito (Gálatas 5:22)">
            {fruits.map((fruit, i) => (
              <li key={fruit} className="fruit" style={{ '--i': i }}>{fruit}</li>
            ))}
          </ul>
        </div>
      </div>
    </Scene>
  );
}
