import Letters from './Letters';
import useInView from '../hooks/useInView';

export default function Footer() {
  const ref = useInView();

  return (
    <footer className="footer" ref={ref}>
      <p className="amen" aria-label="Amém">
        <Letters lines={['Amém.']} />
      </p>
      <a className="top-link" href="#inicio">Voltar à luz ↑</a>
    </footer>
  );
}
