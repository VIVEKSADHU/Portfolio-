import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="flex-1 flex flex-col items-start gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm <span className="bg-maroon-gradient bg-clip-text text-transparent">Vivek Sadhu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">IT Student & Full-Stack Developer</h2>
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            B.Tech IT student at Vishnu Institute of Technology with 9.32 CGPA. Passionate about AI/ML, full-stack development, and building innovative solutions that make a difference.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#projects" className="bg-maroon-gradient text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">See My Work</a>
            <a href="/resume.pdf" download="Vivek_Sadhu_Resume.pdf" className="border-2 border-maroon-600 text-maroon-400 px-8 py-4 rounded-lg font-medium hover:bg-maroon-gradient hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1">Download CV</a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full bg-maroon-gradient p-1 shadow-2xl flex items-center justify-center ring-4 ring-maroon-800/50">
            <img src="/photovivek.jpg" alt="Vivek Sadhu" className="w-full h-full object-cover rounded-full border-4 border-charcoal-900 shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
