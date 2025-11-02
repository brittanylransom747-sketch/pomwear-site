import React from 'react';
import GroovyBackground from './GroovyBackground';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <GroovyBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-deep-red leading-tight mb-4">
            Manage Menstrual Pain With Confidence.
          </h1>
          <p className="text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-8">
            POMwear is a discreet wearable that combines heat and stimulation therapy to help you take control of severe menstrual pain.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="bg-brand-red hover:bg-brand-deep-red text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Join The Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
