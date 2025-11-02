import React from 'react';
import { BiosensorIcon, ClothingIcon, BodyMapIcon } from './Icons';
import { useInView } from './useInView';

const SolutionCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="bg-brand-peach text-brand-red w-16 h-16 rounded-full flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-deep-red mb-3">{title}</h3>
        <p className="text-brand-text">{description}</p>
    </div>
);


const Solution: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ triggerOnce: true });

  return (
    <section 
      ref={ref}
      id="solution" 
      className={`py-16 md:py-24 bg-brand-cream transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-orange font-semibold">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-red mt-2">
            Discreet, Personalized Relief That Moves With You
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard 
                icon={<BiosensorIcon />}
                title="Personalized Therapy"
                description="Our biosensors personalize stimulation and heat, adapting to your body's real-time needs for more effective relief."
            />
            <SolutionCard 
                icon={<ClothingIcon />}
                title="Seamless Integration"
                description="Designed to be worn, not carried. POMwear is integrated directly into comfortable clothing for a truly seamless experience."
            />
            <SolutionCard 
                icon={<BodyMapIcon />}
                title="Advanced Body-Mapping"
                description="Target pain with precision. Our technology maps your body to focus therapy exactly where you need it most."
            />
        </div>
      </div>
    </section>
  );
};

export default Solution;
