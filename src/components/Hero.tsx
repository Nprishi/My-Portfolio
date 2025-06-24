import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import prishiImg from "../assets/prishi.jpg";


const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Profile Picture Placeholder */}
          <div>
            <img
              src={prishiImg}  // Replace with your actual image path or URL
              alt="Profile"
              className="w-60 h-70 mx-auto mb-10 mt-20 rounded-full flex items-center justify-center animate-fade-in-up hero-photo"   />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Rishi Kesh Nepal
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-4 animate-fade-in-up animation-delay-200">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Passionate BCA student at Asian School of Management and Technology with experience
            in building responsive web applications using MERN stack, PHP, MySQL, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
            <button className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-300 flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-800">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:rishikesh@email.com" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;