import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Scroll from "./components/scroll/Scroll";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Services />
        <Qualification />
        <Contact />
        <Scroll/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
