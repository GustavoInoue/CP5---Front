import Scene from './Scene';
import Sparks from './Sparks';
import Letters from './Letters';
import usePointerParallax from '../hooks/usePointerParallax';
import { verses, tagline } from '../data/content';
import jesus from '../assets/jesus.jpg';

const lines = ['Eu sou a', 'luz do mundo'];

export default function Hero() {
  const background = usePointerParallax();

  return (
    <Scene id="inicio" className="hero" length={170}>
      <div
        className="hero-bg"
        ref={background}
        role="img"
        aria-label="Jesus de braços erguidos em um campo florido, com túnica branca e manto azul"
      >
        <img className="hero-photo" src={jesus} alt="" />
        <div className="hero-rays" />
        <div className="hero-light" />
        <div className="hero-shade" />
        <Sparks />
      </div>
      <div className="hero-copy">
        <h1 aria-label={lines.join(' ')}>
          <Letters lines={lines} />
        </h1>
        <p className="hero-tag">{tagline}</p>
        <p className="hero-ref">{verses.light}</p>
      </div>
      <span className="cue" aria-hidden="true">Desça</span>
    </Scene>
  );
}
