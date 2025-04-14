
import Navbar from "../../src/app/component/Navbar";
import Hero from "./component/Hero";
import Container from '@mui/material/Container';
import Detailes from './component/Detailes';
import SaidS from "./component/Said.jsx";
import SBEnd from './component/SBeforeEnd';
import Footer from './component/Footer';
export default function Home() {
  return (
    <main  >
      <Container >
        <Navbar />
        <Hero />
        <Detailes />
      </Container>
      <SaidS />
      <SBEnd />
      <Footer />
    </main>
  );
}