import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Gadget4U - E-Commerce Platform',
      description: 'Online platform for ordering clothes with cart, order tracking, and admin panel',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, Express, and MySQL. Features include user authentication, shopping cart functionality, order tracking system, payment integration, and a complete admin panel for inventory management.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'NepaliTickets - Air Reservation System',
      description: 'Flight booking system with seat selection and booking management',
      longDescription: 'A complete airline reservation system allowing users to search flights, select seats, make bookings, and manage reservations. Built with modern web technologies and includes admin features for flight management.',
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Task Manager API',
      description: 'JWT protected REST API for task management with full CRUD operations',
      longDescription: 'A robust REST API built with Node.js and Express, featuring JWT authentication, full CRUD operations for tasks, user management, and comprehensive error handling. Includes API documentation and testing suite.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Postman'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'User List App',
      description: 'React application with full CRUD functionality for user management',
      longDescription: 'A responsive React application demonstrating complete CRUD operations for user management. Features include user registration, profile updates, search functionality, and data persistence with local storage.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills with modern design',
      longDescription: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, contact form integration, project showcase, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 6,
      title: 'Email Integration System',
      description: 'Automated email system with template management and scheduling',
      longDescription: 'An email automation system built with Node.js featuring template management, scheduled emails, contact list management, and delivery tracking. Includes admin dashboard for campaign management.',
      image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'Nodemailer', 'MySQL', 'Cron Jobs'],
      githubUrl: '#',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects demonstrating full-stack development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                hasIntersected 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${(index + 1) * 200}ms` 
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-6">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={selectedProject.githubUrl}
                  className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
                <a 
                  href={selectedProject.liveUrl}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;