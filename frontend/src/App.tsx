import Agent from "./components/Agent";
import Brand from "./components/Brand";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Promo from "./components/Promo";
import Service from "./components/Service";
import Team from "./components/Team";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Service />
      <Offer />
      <Agent />
      {/* <Team/> */}
      <Promo />
      <Client />
      <Contact />
      {/* <Brand /> */}
      <Footer />
    </>
  );
};

export default App;
