import React, { useEffect, useRef } from 'react';

const FloatingBackground = () => {
  const backgroundRef = useRef(null);

  // Mathematical symbols and shapes for floating animation
  const symbols = ['×', '÷', '+', '−', '=', '²', '√', '∞', 'π', '∆', '◯', '□', '◇', '▲', '∑', '∫', '≈', '≠', '≤', '≥'];

  useEffect(() => {
    const container = backgroundRef.current;
    if (!container) return;

    // Create floating symbols
    const createFloatingSymbol = () => {
      const symbol = document.createElement('div');
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      symbol.textContent = randomSymbol;
      
      const size = Math.random() * 60 + 20;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      const duration = 20 + Math.random() * 15;
      const delay = Math.random() * 2;
      
      symbol.style.cssText = `
        position: absolute;
        left: ${startX}px;
        top: ${startY}px;
        font-size: ${size}px;
        color: rgba(147, 197, 253, ${0.1 + Math.random() * 0.2});
        pointer-events: none;
        user-select: none;
        font-weight: bold;
        transform: rotate(${Math.random() * 360}deg) scale(0);
        opacity: 0;
        animation: 
          symbolFloat ${duration}s linear infinite,
          symbolFade 3s ease-in-out infinite alternate,
          symbolRotate ${10 + Math.random() * 20}s linear infinite;
        animation-delay: ${delay}s;
        z-index: 1;
      `;
      
      container.appendChild(symbol);

      // Remove symbol after animation cycle
      setTimeout(() => {
        if (container.contains(symbol)) {
          container.removeChild(symbol);
        }
      }, (duration + delay + 5) * 1000);
    };

    // Create symbols periodically
    const interval = setInterval(createFloatingSymbol, 800);

    // Initial symbols
    for (let i = 0; i < 15; i++) {
      setTimeout(createFloatingSymbol, i * 300);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes symbolFloat {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateX(200px) translateY(-100px) rotate(90deg) scale(1.2);
          }
          50% {
            transform: translateX(-150px) translateY(150px) rotate(180deg) scale(0.8);
          }
          75% {
            transform: translateX(100px) translateY(-200px) rotate(270deg) scale(1.1);
          }
          95% {
            opacity: 1;
            transform: translateX(-50px) translateY(50px) rotate(360deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-100px) translateY(100px) rotate(360deg) scale(0);
          }
        }
        
        @keyframes symbolFade {
          0% { opacity: 0.1; }
          50% { opacity: 0.4; }
          100% { opacity: 0.1; }
        }
        
        @keyframes symbolRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
        
        @keyframes backgroundShift {
          0% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
      
      <div className="fixed inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, 
                rgb(15, 23, 42) 0%, 
                rgb(30, 58, 138) 25%, 
                rgb(67, 56, 202) 50%, 
                rgb(30, 58, 138) 75%, 
                rgb(15, 23, 42) 100%
              )
            `,
            backgroundSize: '400% 400%',
            animation: 'backgroundShift 30s ease infinite'
          }}
        />
        
        {/* Animated grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 197, 253, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 197, 253, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridPulse 8s ease-in-out infinite'
          }}
        />
        
        {/* Secondary grid for depth */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'gridPulse 12s ease-in-out infinite reverse'
          }}
        />
        
        {/* Floating symbols container */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
      </div>
    </>
  );
};

export default FloatingBackground;