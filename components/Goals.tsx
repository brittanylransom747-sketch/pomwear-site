import React from 'react';
import { CheckIcon } from './Icons';
import { useInView } from './useInView';

const GoalItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 text-brand-orange mt-1">
            <CheckIcon />
        </div>
        <p className="text-brand-text text-lg">{children}</p>
    </div>
);

const Goals: React.FC = () => {
    const [ref, isInView] = useInView<HTMLElement>({ triggerOnce: true });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            ref={ref}
            id="goals" 
            className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-brand-orange font-semibold">Our Focus</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-red mt-2 mb-6">
                            Goals for This Quarter
                        </h2>
                        <div className="space-y-4">
                            <GoalItem>Interview 100 women for user validation and concept testing.</GoalItem>
                            <GoalItem>Achieve 80% MVP completion by December.</GoalItem>
                            <GoalItem>Finalize product roadmap by January 2026.</GoalItem>
                            <GoalItem>Secure reliable, non-dilutive funding for 2026.</GoalItem>
                            <GoalItem>Map out the complete FDA roadmap for Phase 2.</GoalItem>
                        </div>
                    </div>
                    <div className="bg-brand-peach p-10 rounded-3xl text-center">
                        <h3 className="text-2xl font-bold text-brand-deep-red mb-4">Ready to Reclaim Your Day?</h3>
                        <p className="text-brand-text mb-8">
                            Join our waitlist to get updates on our launch and be among the first to experience POMwear.
                        </p>
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, '#contact')}
                            className="bg-brand-red hover:bg-brand-deep-red text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block"
                        >
                            Join The Movement
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Goals;
