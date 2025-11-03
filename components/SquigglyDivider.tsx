import React from 'react';

const SquigglyDivider: React.FC = () => {
  return (
    <div className="relative w-full" style={{ height: '100px', marginTop: '-1px' }}>
      {/* White background on top */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Squiggly wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        style={{ height: '100px' }}
      >
        {/* Create a wavy path that transitions from white to cream */}
        <path
          d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50 L1440,100 L0,100 Z"
          fill="#FEF6E4"
        />
        {/* Additional wavy layer for more squiggle effect */}
        <path
          d="M0,60 Q200,20 400,60 T800,60 T1200,60 L1440,60 L1440,100 L0,100 Z"
          fill="#FDDAC5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default SquigglyDivider;

