import { useEffect, useState } from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">

        {/* Global font imports and scrollbar styles injected via style tag */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');
          
          ::-webkit-scrollbar { width: 10px; }
          ::-webkit-scrollbar-track { background: #0f172a; }
          ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #6366f1, #8b5cf6); border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #8b5cf6, #ec4899); }
          html { scroll-behavior: smooth; }
        `}</style>

        {/* Dynamic Background Gradients */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        {/* Custom Cursor */}
        <div
          className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen transition-transform duration-100 ease-out hidden md:block"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0) 70%)',
          }}
        />

        {/* 3D Content Layer */}
        {/* <Background3D /> */}

        {/* Main Content Layer */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
