import React from "react";
import "./App.css"
import Header from './components/header/header';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Portfolio from "./components/portfolio/Portfolio";
import ChatWidget from "./components/chat/ChatWidget";
import AnimatedCursor from "./components/AnimatedCursor"; // import it here

const App = () =>
{
  return (
    <>
      <Header/>
      <main className="main">
       <Home/>
       <About/>
       <Skills/>
       <Services/>
       <Qualification/>
       <Portfolio/>
       <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
      <ChatWidget/>
      <AnimatedCursor /> {/* add here so it’s always active */}
    </>
  )
}
export default App;
