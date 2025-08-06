import React from 'react';

const About = () => (
  <section id="about" className="py-20 bg-charcoal-800">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">About Me</h2>
      <p className="text-lg text-gray-300 text-center mb-8 leading-relaxed">
        I'm Vivek Sadhu, a B.Tech IT student at Vishnu Institute of Technology with a 9.32 CGPA. Google AI/ML intern with expertise in full-stack development, cloud technologies, and AI solutions. Winner of multiple hackathons and active leader in tech communities.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-charcoal-900/50 p-6 rounded-xl border border-maroon-800/30">
          <h3 className="text-xl font-semibold text-maroon-400 mb-3">Education & Experience</h3>
          <p className="text-gray-300 leading-relaxed">
            Currently pursuing B.Tech in Information Technology at Vishnu Institute of Technology (CGPA: 9.32). Google AI/ML intern with hands-on experience in cloud-native deep learning and deployment pipelines.
          </p>
        </div>
        <div className="bg-charcoal-900/50 p-6 rounded-xl border border-maroon-800/30">
          <h3 className="text-xl font-semibold text-maroon-400 mb-3">Leadership & Achievements</h3>
          <ul className="list-none text-gray-300 space-y-2">
            <li className="flex items-center"><span className="w-2 h-2 bg-maroon-gradient rounded-full mr-3"></span>President, DO IT Club (IT Dept.)</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-maroon-gradient rounded-full mr-3"></span>Marketing Lead, Google Developer Group</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-maroon-gradient rounded-full mr-3"></span>Multiple Hackathon Winner</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-maroon-gradient rounded-full mr-3"></span>TEDx Hospitality Team Member</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
