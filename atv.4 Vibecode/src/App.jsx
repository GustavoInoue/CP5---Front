import ScrollBar from './components/ScrollBar';
import Hero from './components/Hero';
import Water from './components/Water';
import Bible from './components/Bible';
import Cross from './components/Cross';
import Spirit from './components/Spirit';
import Church from './components/Church';
import Closing from './components/Closing';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <ScrollBar />
      <main>
        <Hero />
        <Water />
        <Bible />
        <Cross />
        <Spirit />
        <Church />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
