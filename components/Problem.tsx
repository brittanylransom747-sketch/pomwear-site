import React from 'react';
import { useInView } from './useInView';

const Problem: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ triggerOnce: true });

  return (
    <section 
      ref={ref} 
      id="problem" 
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-orange font-semibold">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-red mt-2 mb-4">
              The Silent Struggle of Severe Menstrual Pain
            </h2>
            <p className="text-brand-text mb-6">
              POMwear is designed for women who balance demanding schedules while managing severe menstrual pain. This includes working professionals, stay-at-home moms, and on-the-go women who need solutions that fit seamlessly into daily life. 
            </p>
            <p className="text-brand-text">
              They value products that are discreet, reliable, and wearable without interrupting work, childcare, errands, or self-care. We're here for the 10% of women living with severe pain from conditions like PCOS or endometriosis, and all those juggling life's responsibilities.
            </p>
          </div>
          <div className="relative h-64 md:h-auto p-8 rounded-3xl bg-brand-peach">
             <img src="https://drive.google.com/file/d/1hOruK8H_6qZe7WlqOMaQZDqPcbR7BRCm/view?usp=drive_link" alt="Woman experiencing discomfort" className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30"/>
            <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
              <p className="text-2xl font-bold text-brand-red">Over 84% of women experience menstrual pain.</p>
              <p className="text-4xl md:text-5xl font-extrabold text-brand-deep-red my-4">~16.8 Million</p>
              <p className="text-lg font-semibold text-brand-red">in the U.S. live with severe, debilitating pain.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
