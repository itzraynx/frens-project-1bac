import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';
import AnimatedMesh from './components/AnimatedMesh';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProjectChapters from './components/ProjectChapters';
import ProjectEnd from './components/ProjectEnd';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import PrintButton from './components/PrintButton';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);
  const handleSplashComplete = () => {
    setShowSplash(false);
    document.body.style.overflow = '';
  };

  return <ThemeProvider>
    <div id="top" className="min-h-screen bg-cream dark:bg-obsidian text-ink dark:text-ivory font-sans antialiased noise-overlay transition-colors duration-700">
      <CustomCursor />
      <FloatingParticles />
      <AnimatedMesh />
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Introduction />
        <ProjectChapters />
        <ProjectEnd />
      </main>
      <Footer />
      <BackToTop />
      <PrintButton />
    </div>
  </ThemeProvider>;
}

export default App;
