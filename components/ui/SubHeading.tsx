 
import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationName = 'shine-effect';
  const animationDuration = `${speed}s`;

  return (
    <>
      {!disabled && (
        <style>{`
          @keyframes ${animationName} {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
        `}</style>
      )}

      <span
        className={className}
        style={{
          display: 'inline-block',
          color: '#b5b5b5a4',
          backgroundImage:
            'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)',
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',          
          animation: disabled ? undefined : `${animationName} ${animationDuration} linear infinite`,
        }}
      >
        {text}
      </span>
    </>
  );
};

export default ShinyText;
