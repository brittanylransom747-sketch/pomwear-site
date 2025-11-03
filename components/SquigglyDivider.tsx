import React from 'react';

interface SquigglyDividerProps {
  reversed?: boolean;
}

const SquigglyDivider: React.FC<SquigglyDividerProps> = ({ reversed = false }) => {
  const topBg = reversed ? 'bg-brand-cream' : 'bg-white';
  const bottomFill = reversed ? '#ffffff' : '#FEF6E4';
  const bottomFillSecondary = reversed ? '#ffffff' : '#FDDAC5';
  
  return (
    <div className="relative w-full" style={{ height: '100px', marginTop: '-1px' }}>
      {/* Background on top */}
      <div className={`absolute inset-0 ${topBg}`}></div>
      
      {/* Squiggly wave SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        style={{ height: '100px' }}
      >
        {/* Create a wavy path that transitions */}
        <path
          d="M0,50 Q180,10 360,50 T720,50 T1080,50 T1440,50 L1440,100 L0,100 Z"
          fill={bottomFill}
        />
        {/* Additional wavy layer for more squiggle effect */}
        <path
          d="M0,60 Q200,20 400,60 T800,60 T1200,60 L1440,60 L1440,100 L0,100 Z"
          fill={bottomFillSecondary}
          opacity={reversed ? "0.2" : "0.3"}
        />
      </svg>
    </div>
  );
};

export default SquigglyDivider;

