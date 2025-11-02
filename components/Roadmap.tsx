import React, { useState } from 'react';
import { useInView } from './useInView';

const phases = [
    {
        phase: 1,
        title: "Wellness MVP",
        subtitle: "Consumer Wellness Path",
        points: [
            { title: "User-Chosen Zones:", text: "Women select pain areas directly in the app." },
            { title: "Integrated Relief:", text: "Heat + TENS combined in shapewear." },
            { title: "Smartphone Control:", text: "Adjustable intensity, duration, and mode." },
            { title: "Validation Goal:", text: "Prove daily adoption, comfort, and demand." },
            { title: "Regulatory:", text: "No FDA barrier, allowing for a faster launch." },
        ]
    },
    {
        phase: 2,
        title: "FDA-Cleared Medical Device",
        subtitle: "Future Clinical Path",
        points: [
            { title: "Advanced Mapping:", text: "Automated, adaptive zone targeting." },
            { title: "Clinical Validation:", text: "Backed by trials and compliance with medical standards." },
            { title: "Scalable Moat:", text: "Patented personalization and medical-grade data." },
            { title: "Regulatory:", text: "FDA Class II clearance for reimbursement & clinical adoption." },
        ]
    }
];


const Roadmap: React.FC = () => {
    const [activePhase, setActivePhase] = useState(1);
    const activePhaseData = phases.find(p => p.phase === activePhase);
    const [ref, isInView] = useInView<HTMLElement>({ triggerOnce: true });

    return (
        <section 
            ref={ref}
            id="roadmap" 
            className={`py-16 md:py-24 bg-brand-cream transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-brand-orange font-semibold">Our Vision</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-red mt-2">
                        Our Path to Reshaping Women's Health
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Phase Selector */}
                    <div className="flex justify-center bg-brand-peach p-2 rounded-full shadow-inner mb-8">
                        {phases.map((phase) => (
                            <button
                                key={phase.phase}
                                onClick={() => setActivePhase(phase.phase)}
                                className={`w-1/2 py-3 px-4 rounded-full text-lg font-bold transition-all duration-300 focus:outline-none ${
                                    activePhase === phase.phase
                                        ? 'bg-brand-orange text-white shadow-md'
                                        : 'text-brand-deep-red hover:bg-brand-orange/20'
                                }`}
                                aria-pressed={activePhase === phase.phase}
                            >
                                Phase {phase.phase}: {phase.title}
                            </button>
                        ))}
                    </div>

                    {/* Phase Content */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 min-h-[320px] md:min-h-[280px]">
                        {activePhaseData && (
                            <div key={activePhase} className="animate-fade-in">
                                <p className="text-brand-orange font-semibold mb-4 text-xl">{activePhaseData.subtitle}</p>
                                <ul className="space-y-3 text-brand-text text-lg">
                                    {activePhaseData.points.map((point, index) => (
                                       <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 text-brand-orange mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                           <span><span className="font-semibold">{point.title}</span> {point.text}</span>
                                       </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 text-center max-w-4xl mx-auto bg-brand-peach p-8 rounded-2xl">
                    <p className="text-xl md:text-2xl font-bold text-brand-deep-red italic leading-relaxed">
                        “We’re building more than a product, we’re reshaping women’s health. Upcoming versions of POM will introduce advanced mapping that adapts therapy zones to each body, closing the gap in truly personalized care.”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
