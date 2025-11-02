import React from 'react';
import { useInView } from './useInView';

const MarketCard: React.FC<{ title: string; value: string; description: string; highlight?: boolean }> = ({ title, value, description, highlight }) => (
  <div className={`p-8 rounded-2xl shadow-lg ${highlight ? 'bg-brand-red text-white' : 'bg-white text-brand-text'}`}>
    <span className={`font-semibold ${highlight ? 'text-brand-peach' : 'text-brand-orange'}`}>{title}</span>
    <p className={`text-4xl font-extrabold my-2 ${highlight ? 'text-white' : 'text-brand-deep-red'}`}>{value}</p>
    <p className={`${highlight ? 'text-gray-200' : 'text-brand-text'}`}>{description}</p>
  </div>
);

const Market: React.FC = () => {
  const [ref, isInView] = useInView<HTMLElement>({ triggerOnce: true });

  return (
    <section 
      ref={ref}
      id="market" 
      className={`py-16 md:py-24 bg-white transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-orange font-semibold">The Opportunity</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep-red mt-2">
            A $19.4 Billion Economic Impact
          </h2>
          <p className="mt-4 text-brand-text">
            Severe menstrual pain isn't just a personal issue; it has a significant economic cost due to lost productivity. This highlights a critical need for effective solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <MarketCard 
              highlight 
              title="Economic Loss" 
              value="$19.4B / year" 
              description="Lost productivity from women missing work due to severe menstrual pain, based on an average of 5.8 days per year." 
            />
          </div>
          <MarketCard 
            title="TAM" 
            value="16.8M" 
            description="Total Addressable Market: Women in the U.S. with severe menstrual pain, including PCOS and endometriosis." 
          />
          <MarketCard 
            title="SAM" 
            value="~5M" 
            description="Serviceable Available Market: Digitally engaged, health-conscious women likely to purchase wearable health solutions." 
          />
          <MarketCard 
            title="SOM" 
            value="100k-250k" 
            description="Serviceable Obtainable Market: Our target for the first 3-5 years, representing 2-5% of the SAM." 
          />
        </div>
        <div className="text-center mt-12">
            <a href="#" className="text-brand-red hover:underline">Competitor Analysis (Google Sheet)</a>
            <span className="mx-4 text-gray-300">|</span>
            <a href="#" className="text-brand-red hover:underline">Summer Survey Results</a>
        </div>
      </div>
    </section>
  );
};

export default Market;
