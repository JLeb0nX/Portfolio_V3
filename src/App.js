import React from 'react';
import Home from './components/home';
import SpaceNav from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <>
      <SpaceNav />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
