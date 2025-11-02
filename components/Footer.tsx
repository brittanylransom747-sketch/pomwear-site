import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-deep-red text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Join the POMwear Waitlist</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Be the first to know when we launch, get exclusive updates, and help shape the future of menstrual wellness.
          </p>
          <a
            href="#" // You can link your Google Form here
            className="bg-brand-orange hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
          >
            Join Our Waitlist
          </a>
        </div>
        <div className="mt-12 border-t border-brand-red pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} POMwear. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Add social links here */}
            <a href="https://www.instagram.com/pomwear" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="https://www.linkedin.com/company/105779839/admin/dashboard/" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;