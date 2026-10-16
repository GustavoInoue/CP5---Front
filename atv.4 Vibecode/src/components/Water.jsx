import Scene from './Scene';
import Verse from './Verse';
import { verses } from '../data/content';

export default function Water() {
  return (
    <Scene id="caminho" className="water" length={220}>
      <Verse {...verses.courage} />
      <div className="waves" aria-hidden="true">
        {[0, 1, 2].map((n) => (
          <svg key={n} className="wave" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0 60C200 20 400 100 600 60S1000 20 1200 60V200H0Z" />
          </svg>
        ))}
      </div>
      <div className="ripples" aria-hidden="true">
        {[1, 0.7, 0.45].map((k) => (
          <span key={k} className="ripple" style={{ '--k': k }} />
        ))}
      </div>
    </Scene>
  );
}
