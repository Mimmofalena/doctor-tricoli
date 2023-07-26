import { useRef } from "react";
import "./App.css";
import Servizi from "./components/Servizi/Servizi";
import Contatti from "./components/Contatti/Contatti";
import DomandeFrequenti from "./components/DomandeFrequenti/DomandeFrequenti";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const serviziRef = useRef();
  const contattiRef = useRef();
  const domandeFrequentiRef = useRef();

  const goToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView();
  };
  return (
    <>
      <Navbar
        goToServizi={() => goToSection(serviziRef)}
        goToContatti={() => goToSection(contattiRef)}
        goToDomandefrequenti={() => goToSection(domandeFrequentiRef)}
      />

      <section style={{marginTop:'64px'}} ref={serviziRef}>
        <Servizi />
      </section>
      <section ref={domandeFrequentiRef}>
        <DomandeFrequenti />
      </section>
      <section ref={contattiRef}>
        <Contatti />
      </section>
    </>
  );
}

export default App;
