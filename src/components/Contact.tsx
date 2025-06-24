import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rishikeshnepal42@email.com',
      href: 'mailto:rishikesh@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977-9825939042',
      href: 'tel:+9779825939042'
    },
    {
      icon: Linkedin,
      title: 'Linkedin Profile',
      value: 'Rishi Kesh Nepal',
      href: 'https://www.linkedin.com/in/rishi-kesh-nepal-558631291/'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jhapa, Nepal',
      href: 'https://maps.app.goo.gl/APx4HPUCDmea5DU68'
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's start a conversation</h3>
            <p className="text-gray-600 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question about my work, want to collaborate, or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Available for freelance work
              </h4>
              <p className="text-gray-600">
                I'm currently available for freelance projects and full-time opportunities.
                Let's create something amazing together! I specialize in MERN stack development,
                PHP applications, and modern web technologies.
              </p>
            </div>

            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Open to collaboration
              </h4>
              <p className="text-gray-600">
                Interested in hackathons, open source contributions, and tech community events.
                Always eager to learn and share knowledge with fellow developers.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;