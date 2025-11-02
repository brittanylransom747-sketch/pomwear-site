import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'The Problem', href: '#problem' },
    { name: 'Our Solution', href: '#solution' },
    { name: 'Market', href: '#market' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-red">POMwear</div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-700 hover:text-brand-pink transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-brand-red hover:bg-brand-deep-red text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-pink"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="bg-brand-red hover:bg-brand-deep-red text-white font-semibold py-3 px-6 rounded-full text-center shadow-md hover:shadow-lg transition-all duration-300 mt-2"
              >
                Join Waitlist
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
