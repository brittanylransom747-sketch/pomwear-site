import React from 'react';

const GroovyBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-80" aria-hidden="true">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FDDAC5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FEF6E4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="1440" height="800" fill="url(#grad1)" />
        
        {/* Pink Shapes */}
        <path fill="#F471B2" opacity="0.6" d="M-200 800 Q -100 600, 100 650 T 400 500 Q 600 400, 700 600 T 900 800 L 900 900 L -200 900 Z" />
        <path fill="#F471B2" opacity="0.4" d="M1100 0 Q 1200 150, 1300 100 T 1500 200 L 1500 0 Z" />

        {/* Red Shapes */}
        <path fill="#D94B5A" opacity="0.7" d="M-100 100 Q 100 250, 200 150 T 400 200 Q 550 280, 500 450 L 300 400 Q 150 400, -100 250 Z" />
        <path fill="#D94B5A" opacity="0.5" d="M800 500 Q 950 400, 1100 550 T 1400 400 L 1440 800 L 700 800 Q 750 650, 800 500 Z" />
        
        {/* Orange Shapes */}
        <path fill="#F58A55" opacity="0.8" d="M450 150 Q 600 50, 800 150 T 1000 100 Q 1150 120, 1100 300 L 800 400 Q 600 450, 450 300 Z" />
        <path fill="#F58A55" opacity="0.6" d="M100 500 Q 200 400, 350 550 T 500 500 Q 600 480, 650 600 L 400 800 L 0 800 L 0 650 Q 50 550, 100 500 Z" />
      </svg>
    </div>
  );
};

export default GroovyBackground;
