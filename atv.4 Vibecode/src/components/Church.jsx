import Scene from './Scene';
import Sparks from './Sparks';
import { visit } from '../data/content';
import prayer from '../assets/oracao.jpg';

// Cada item de .welcome entra em sequência (--k) depois que as portas se abrem.
export default function Church() {
  return (
    <Scene id="igreja" className="church" length={230}>
      <div className="church-bg" role="img" aria-label="Homem ajoelhado em um campo, de braços abertos, sob raios de sol que rompem as nuvens">
        <img src={prayer} alt="" />
        <Sparks rise={50} />
      </div>
      <div className="welcome">
        <h2 className="title reveal" style={{ '--k': 0 }}>Venha como você está.</h2>
        <ul className="times">
          {visit.map(({ when, what }, i) => (
            <li key={what} className="reveal" style={{ '--k': i + 1 }}>
              <strong>{when}</strong>
              <span>{what}</span>
            </li>
          ))}
        </ul>
        <a className="cta reveal" style={{ '--k': visit.length + 1 }} href="mailto:contato@suaigreja.com.br">
          Planejar minha visita
        </a>
      </div>
      <div className="door left" aria-hidden="true"><span>A porta</span></div>
      <div className="door right" aria-hidden="true"><span>está aberta</span></div>
    </Scene>
  );
}
