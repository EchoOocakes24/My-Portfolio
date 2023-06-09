import "./App.css";
import Navbar from "../src/components/Navbar";
import Intro from "../src/components/Intro";
import Services from "../src/components/Services";
import Works from "./components/Works";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import { themeContext } from "./Context";
import { useContext } from "react";
import Service2 from "./components/Service2";
import Portfolio2 from "./components/Portfolio2";
import Portfolio3 from "./components/Portfolio3";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? '#0A0A0A': '',
      color: darkMode? 'white': ''
    }}
    >
      <Navbar />
      <Intro />
      <Services/>
      <Works/>
      <Portfolio/>
      <Service2/>
      <Portfolio2/>
      <Portfolio3/>
      <Testimonial/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
