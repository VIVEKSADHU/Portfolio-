import React from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiHtml5, SiCss3, SiMongodb, SiFirebase, SiGit, SiGooglecloud, SiMysql, SiExpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React.js', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'Git', icon: SiGit },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Technical Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center group cursor-pointer">
            <div className="bg-charcoal-800 p-4 rounded-xl border border-maroon-800/30 group-hover:border-maroon-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-maroon-900/20">
              <skill.icon className="text-4xl text-maroon-400 group-hover:text-maroon-300 mb-2 transition-colors duration-300" />
            </div>
            <span className="text-gray-300 font-medium mt-2 group-hover:text-white transition-colors duration-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
