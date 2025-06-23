import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'VS Code', level: 92 },
        { name: 'XAMPP', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'Figma', level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    'JWT Authentication',
    'REST APIs',
    'Email Integration',
    'WordPress',
    'Ethical Hacking',
    'Cybersecurity'
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                hasIntersected 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${(categoryIndex + 1) * 200}ms` 
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: hasIntersected ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full font-medium hover:shadow-md transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 100}ms` 
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;