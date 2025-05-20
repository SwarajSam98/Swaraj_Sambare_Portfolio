import { useState, useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import SplashScreen from './components/SplashScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
