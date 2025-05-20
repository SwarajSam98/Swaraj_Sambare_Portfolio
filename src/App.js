import { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { Resume } from './components/Resume'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeSplash, setFadeSplash] = useState(false);

  useEffect(() => {
    // Start fade-out at 2s
    const fadeTimer = setTimeout(() => setFadeSplash(true), 2000);
    // Fully remove splash after 3s
    const hideTimer = setTimeout(() => setShowSplash(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen fade={fadeSplash} />
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Resume></Resume>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
