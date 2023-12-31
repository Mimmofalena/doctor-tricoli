import { useRef } from "react";
import "./App.css";
import Servizi from "./components/Servizi/Servizi";
import Contatti from "./components/Contatti/Contatti";
import DomandeFrequenti from "./components/DomandeFrequenti/DomandeFrequenti";
import Navbar from "./components/Navbar/Navbar";
import { Box, Container } from "@mui/material";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Slider/Slider";

function App() {
  const serviziRef = useRef();
  const contattiRef = useRef();
  const domandeFrequentiRef = useRef();
  const navbarHeight = "64px"; // Needs this height to offset scroll, otherwise will go a bit lower

  const goToSection = (sectionRef) => {
    sectionRef.current.style.scrollMargin = navbarHeight;
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        goToServizi={() => goToSection(serviziRef)}
        goToContatti={() => goToSection(contattiRef)}
        goToDomandefrequenti={() => goToSection(domandeFrequentiRef)}
      />
      <Slider />
      <Container>
        <Box component="section" ref={serviziRef} pt={2} mb={2}>
          <Servizi />
        </Box>
        <Box component="section" ref={domandeFrequentiRef} mb={2}>
          <DomandeFrequenti />
        </Box>
        <Box component="section" ref={contattiRef} mb={2}>
          <Contatti />
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
