import Scene from './Scene';
import Verse from './Verse';
import Sparks from './Sparks';
import { verses } from '../data/content';
import stairs from '../assets/escada.jpg';

// A escada de luz se abre sobre o fundo escuro conforme o versículo é lido.
export default function Closing() {
  return (
    <Scene id="amem" className="closing" length={220}>
      <figure className="stairs" role="img" aria-label="Escada de luz subindo entre as nuvens">
        <img src={stairs} alt="" />
      </figure>
      <Sparks rise={70} />
      <Verse {...verses.closing} />
    </Scene>
  );
}
