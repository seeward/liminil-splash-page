import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles";


function App() {


  return (
    <div className="App" style={{ textAlign: "center" }}>

      <img width="400" src="liminil_splash_logo.png" style={{ top: '30%', left: '32%', zIndex: 10, position: 'fixed', width: "35%" }} />

      
      
      <Particles style={{ zIndex: 1 }} options={{
        background: {
          color: {
            value: "#4a4a4a",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 140,
          },
          opacity: {
            random: true,
            value: 1,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
          },
          shape: {
            type: "circle",
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 }
          },
          size: {
            random: true,
            value: 2,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: 'repulse' }
          },
          modes: {
            repulse: { distance: 400 },
            bubble: { distance: 300, size: 10, opacity: 0, duration: 2 }
          }
        },
        detectRetina: true,
      }} />

    </div>
  );
}

export default App;
