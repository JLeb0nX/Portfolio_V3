// Home.jsx
import React from 'react';
import '../styles/home.css';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <div className="space-background">
        <div className="galaxy"/>
        <div className="mountains"/>
        <div className="planets">
          <div className="planet planet-1"/>
          <div className="planet planet-2"/>
          <div className="planet planet-3"/>
        </div>
        <div className="bright-star"/>
      </div>
      <div className="home-container">
        <div className="intro-section">
          <h1>Johan Lebon</h1>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  'Étudiant en BUT Réseaux et Télécommunications',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </div>
        </div>
        <div className="animation-section">
          <div className="code-container">
            <pre className="code-text">
              <span className="keyword">function</span> connect() {'{'}
              <span className="comment">// Établir la connexion</span>
              <span className="keyword">const</span> network = <span className="string">"secure"</span>;
              <span className="keyword">if</span> (network) {'{'}
                initProtocol();
              {'}'}</pre>
          </div>
          <div className="network-animation">
            <div className="node node1"/>
            <div className="node node2"/>
            <div className="node node3"/>
            <div className="connection-line line1"/>
            <div className="connection-line line2"/>
            <div className="data-packet"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;