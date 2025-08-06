import React from 'react';

const Footer = () => (
  <footer className="bg-charcoal-950 text-white py-12 border-t border-maroon-800/30">
    <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-bold text-lg text-gray-300">&copy; {new Date().getFullYear()} Vivek Sadhu - Professional Portfolio</div>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/vivek-sadhu-6211a4250" className="text-gray-400 hover:text-maroon-400 transition-colors duration-300 font-medium">LinkedIn</a>
        <a href="https://github.com/VIVEKSADHU" className="text-gray-400 hover:text-maroon-400 transition-colors duration-300 font-medium">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
