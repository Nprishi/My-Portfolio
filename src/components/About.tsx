import React from 'react';
import { Code, Heart, Zap, GraduationCap, MapPin, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import abrishiImg from "../assets/abrishi.jpg";


const About: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Full Stack Developer driven by curiosity and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 delay-200 ${
            hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <img 
              src={abrishiImg}
              alt="Developer workspace" 
              className="rounded-2xl shadow-2xl mb-8"
            />
            
            {/* Quick Info Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900">Location</span>
                </div>
                <p className="text-gray-600">Jhapa, Nepal</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="font-semibold text-gray-900">Education</span>
                </div>
                <p className="text-gray-600">Bachelor in Computer Application (BCA)</p>
                <p className="text-sm text-gray-500">Asian School of Management and Technology, TU (2022-2026)</p>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${
            hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello! I'm <strong className="text-blue-600">Rishi Kesh Nepal</strong>, a passionate and dedicated 
                <strong className="text-purple-600"> Full Stack Developer</strong> and current 
                <strong className="text-green-600"> BCA student at Asian School of Management and Technology</strong>, 
                Tribhuvan University. Ever since I started my journey in the tech world, I've been driven by curiosity, 
                problem-solving, and a strong desire to create impactful digital solutions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With hands-on experience in technologies like <strong>React.js, Node.js, Express.js, PHP, MySQL</strong>, 
                and tools like GitHub, Postman, and XAMPP, I've built several real-world projects ranging from 
                e-commerce platforms to task management APIs.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beyond coding, I am also enthusiastic about <strong className="text-red-600">ethical hacking</strong> and 
                believe in using technology for the betterment of society. I have participated in 
                <strong className="text-orange-600"> hackathons</strong> and contributed as a 
                <strong className="text-indigo-600"> volunteer</strong>, constantly pushing myself to grow both 
                technically and personally.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                I believe that consistency, creativity, and a growth mindset are key ingredients to success in this 
                dynamic field. Whether it's designing user-friendly interfaces, building robust backends, or learning 
                new frameworks, I'm always eager to learn and improve. My ultimate goal is to become a 
                <strong className="text-blue-600"> successful software developer</strong> and contribute to meaningful 
                innovations that solve real-world problems.
              </p>

              {/* Inspirational Quote */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <Quote className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-gray-800 italic mb-2">
                      "Push yourself, because no one else is going to do it for you."
                    </p>
                    <p className="text-sm text-gray-600">— Unknown</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Problem Solving</h3>
                <p className="text-sm text-gray-600">Driven by curiosity and innovation</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
                <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Growth Mindset</h3>
                <p className="text-sm text-gray-600">Always eager to learn and improve</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors duration-300">
                <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Impact Focus</h3>
                <p className="text-sm text-gray-600">Creating meaningful digital solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;