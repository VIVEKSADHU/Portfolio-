import React from 'react';

const achievements = [
  {
    title: 'Google AI/ML Internship',
    organization: 'AICTE Eduskills',
    description: 'Trained and deployed 5+ ML models with 87% accuracy. Built CI/CD pipelines reducing deployment time by 50%.',
    period: 'May 2024 – July 2024',
    type: 'internship'
  },
  {
    title: 'Innovit Hackathon - 1st Prize',
    organization: 'Freelance Web Platform UniWORK',
    description: 'Won first place for developing a comprehensive student freelance marketplace platform.',
    period: 'Dec 2024',
    type: 'award'
  },
  {
    title: 'Spark Tank - Startup Pitch Winner',
    organization: 'AI-driven EdTech Idea',
    description: 'Secured victory for innovative AI-powered educational technology solution pitch.',
    period: 'Sep 2024',
    type: 'award'
  },
  {
    title: 'GDSC - Runner Up',
    organization: 'Google Developer Student Club',
    description: 'Achieved runner-up position among 100+ competing teams in technical competition.',
    period: 'Jan 2024',
    type: 'award'
  }
];

const leadershipRoles = [
  {
    title: 'President',
    organization: 'DO IT Club (IT Dept.)',
    period: '2024–Present'
  },
  {
    title: 'Marketing Lead',
    organization: 'Google Developer Group (GDG) VITB',
    period: '2024–Present'
  },
  {
    title: 'Sponsorship Team Lead',
    organization: 'Vishva Tech 3.0 by Vishnu TBI',
    period: '2025'
  },
  {
    title: 'TEDx Hospitality Team',
    organization: 'Guest experience for 100+ speakers',
    period: '2025'
  }
];

const Achievements = () => (
  <section id="achievements" className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Achievements & Leadership</h2>
      
      {/* Achievements Grid */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-maroon-400 mb-8 text-center">Key Achievements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="bg-charcoal-800/80 rounded-xl p-6 border border-maroon-800/30 hover:border-maroon-600/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-maroon-400 group-hover:text-maroon-300 transition-colors duration-300">
                  {achievement.title}
                </h4>
                <span className={`px-2 py-1 text-xs rounded ${
                  achievement.type === 'internship' 
                    ? 'bg-blue-900/50 text-blue-300' 
                    : 'bg-yellow-900/50 text-yellow-300'
                }`}>
                  {achievement.type === 'internship' ? 'Experience' : 'Award'}
                </span>
              </div>
              <p className="text-maroon-300 text-sm font-medium mb-2">{achievement.organization}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{achievement.description}</p>
              <p className="text-gray-400 text-xs">{achievement.period}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Roles */}
      <div>
        <h3 className="text-2xl font-semibold text-maroon-400 mb-8 text-center">Leadership Roles</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {leadershipRoles.map((role, idx) => (
            <div key={idx} className="bg-charcoal-800/60 rounded-lg p-4 border border-maroon-800/20 hover:border-maroon-600/40 transition-all duration-300 text-center group">
              <h4 className="text-maroon-400 font-semibold mb-1 group-hover:text-maroon-300 transition-colors duration-300">
                {role.title}
              </h4>
              <p className="text-gray-300 text-sm mb-2">{role.organization}</p>
              <p className="text-gray-400 text-xs">{role.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;