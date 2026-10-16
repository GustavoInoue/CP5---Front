import Scene from './Scene';
import Verse from './Verse';
import { verses } from '../data/content';

export default function Cross() {
  return (
    <Scene id="cruz" className="cross" length={240}>
      <Verse {...verses.life} />
      <div className="rays" aria-hidden="true" />
      <div className="sun" aria-hidden="true" />
      <svg className="ridge back" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 300V180L160 120 320 190 520 90 720 200 940 110 1200 190V300Z" />
      </svg>
      <svg className="ridge front" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 300V230L240 170 480 240 760 160 1000 230 1200 190V300Z" />
      </svg>
      <svg className="cross-mark" viewBox="0 0 120 300" aria-hidden="true">
        <path d="M56 0h8v292h-8zM18 62h84v8H18zM30 300l14-20h34l14 20z" />
        <path className="veil" d="M20 66C6 100 4 140 10 190c22-30 38-70 48-106 14 36 34 66 54 46-8-22-12-44-12-64z" />
      </svg>
    </Scene>
  );
}
