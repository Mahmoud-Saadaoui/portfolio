import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home/>
        <About/>
        <Skills />
        <Services />
        <Qualification/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
