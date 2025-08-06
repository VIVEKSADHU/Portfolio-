import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-charcoal-900/95 backdrop-blur shadow-lg border-b border-maroon-800">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-2xl tracking-tight bg-maroon-gradient bg-clip-text text-transparent">Vivek Sadhu</div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-200 hover:text-maroon-400 font-medium transition-all duration-300 relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-gradient group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Toggle menu</span>
          <div className="w-6 h-0.5 bg-maroon-400 mb-1 transition-colors duration-200"></div>
          <div className="w-6 h-0.5 bg-maroon-400 mb-1 transition-colors duration-200"></div>
          <div className="w-6 h-0.5 bg-maroon-400 transition-colors duration-200"></div>
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-charcoal-900/98 backdrop-blur shadow-xl border-b border-maroon-800 flex flex-col items-center py-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-lg text-gray-200 hover:text-maroon-400 font-medium transition-colors duration-300">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
