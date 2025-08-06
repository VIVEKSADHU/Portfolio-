import React from 'react';

const projects = [
  {
    title: 'PrepAI - Personalized Placement Preparation',
    description: 'Full-stack AI-powered platform generating customized interview prep strategies. Serves 500+ users with company-specific roadmaps based on CGPA, college, and role preferences.',
    tech: ['React.js', 'Firebase', 'Gemini API', 'Cloud Functions'],
    link: 'https://prep-ai-six-sigma.vercel.app/',
    status: 'July 2025 – Present'
  },
  {
    title: 'Telehealth Prestige - Zero-Latency Healthcare',
    description: 'HIPAA-compliant telehealth platform with WebRTC integration achieving <200ms latency for video consultations. Microservices architecture with 99.9% uptime.',
    tech: ['ReactJS', 'Node.js', 'WebRTC', 'Firebase', 'Docker'],
    link: '#',
    status: 'Jan 2024 – Mar 2024'
  },
  {
    title: 'UniWORK - Student Freelance Marketplace',
    description: 'Freelance platform connecting 1000+ students with paid opportunities. Improved performance by 40% using lazy-loading and code-splitting with JWT authentication.',
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    link: '#',
    status: 'Jul 2024 – Sep 2024'
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-charcoal-800">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-charcoal-900/80 rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl hover:shadow-maroon-900/20 transition-all duration-300 border border-maroon-800/30 hover:border-maroon-600/50 group">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-maroon-400 group-hover:text-maroon-300 transition-colors duration-300">{project.title}</h3>
              <span className="text-xs text-gray-400 bg-charcoal-800 px-2 py-1 rounded">{project.status}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-maroon-900/50 text-maroon-300 rounded-full text-xs font-medium border border-maroon-700/50">{t}</span>
              ))}
            </div>
            <a href={project.link} className="mt-2 text-maroon-400 hover:text-maroon-300 hover:underline text-sm font-medium transition-colors duration-300">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
