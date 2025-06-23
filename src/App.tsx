import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 Rishi Kesh Nepal. Built with React and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm">
              Full Stack Developer | BCA Student | Ethical Hacker
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;