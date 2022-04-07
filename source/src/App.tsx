import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>

      <img width="400" src="liminil_splash_logo.png" style={{ top: '20%', left: '25%', zIndex: 10, position: 'fixed', width: "50%" }} />
      
      <Particles style={{ zIndex: 1 }} options={{
        background: {
          color: {
            value: "#b5c2b9",
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
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            random: true,
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 25,
          },
        },
        detectRetina: true,
      }} />

    </div>
  );
}

export default App;
