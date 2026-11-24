import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top purple ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-violet-600/20 via-indigo-600/10 to-transparent blur-[120px] rounded-full"
      />
      
      {/* Mid-left subtle cyan accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-[35%] -left-32 w-[520px] h-[520px] bg-cyan-500/8 blur-[140px] rounded-full"
      />
      
      {/* Mid-right purple accent */}
      <div 
        aria-hidden="true" 
        className="absolute top-[60%] -right-32 w-[580px] h-[580px] bg-purple-600/10 blur-[150px] rounded-full"
      />

      {/* Subtle grid pattern overlay */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
    </div>
  );
}
