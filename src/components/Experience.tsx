import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      title: 'BCA Student & Full Stack Developer',
      company: 'Asian School of Management and Technology',
      location: 'Jhapa, Nepal',
      period: '2022 - Present',
      description: 'Pursuing Bachelor in Computer Application while actively developing web applications and participating in hackathons. Focus on MERN stack development and modern web technologies.',
      achievements: [
        'Completed 6+ major full-stack projects',
        'Built personal brand with portfolio and GitHub presence',
        'Participated in multiple hackathons and coding competitions',
        'Maintained excellent academic performance while coding'
      ]
    },
    {
      id: 2,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Working on various client projects including e-commerce platforms, business websites, and web applications. Specializing in React, Node.js, and PHP development.',
      achievements: [
        'Delivered 10+ responsive web applications',
        'Implemented secure authentication systems with JWT',
        'Integrated payment gateways and email systems',
        'Maintained 100% client satisfaction rate'
      ]
    },
    {
      id: 3,
      title: 'Science Student',
      company: 'Jana Jagriti Secondary School',
      location: 'Jhapa, Nepal',
      period: '2020 - 2022',
      description: 'Completed +2 Science with focus on Mathematics and Computer Science. Built foundation in programming and logical thinking.',
      achievements: [
        'Graduated with distinction in Science stream',
        'Started learning programming fundamentals',
        'Participated in school tech competitions',
        'Developed interest in web development'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Various Organizations',
      year: '2023-2024'
    },
    {
      title: 'Hackathon Volunteer Certificate',
      issuer: 'Tech Community Nepal',
      year: '2023'
    },
    {
      title: 'Web Development Workshop',
      issuer: 'College Tech Club',
      year: '2022'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional development in technology
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg z-10"></div>

                {/* Content */}
                <div 
                  className={`ml-12 md:ml-0 md:w-1/2 transition-all duration-1000 ${
                    hasIntersected 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  } ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <Users className="h-4 w-4 mr-2" />
                          {experience.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{experience.description}</p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`transition-all duration-1000 delay-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <Award className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;