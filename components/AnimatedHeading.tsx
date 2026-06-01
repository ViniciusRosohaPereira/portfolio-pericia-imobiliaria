import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  initialDelay?: number;
  className?: string;
}

/**
 * Anima o título caractere a caractere. O texto aceita "\n" para quebra de linha.
 */
const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text, initialDelay = 200, className = '' }) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;
        return (
          <span key={lineIndex} style={{ display: 'block' }}>
            {line.split('').map((char, charIndex) => {
              const delay = lineIndex * lineLength * 30 + charIndex * 30;
              return (
                <span
                  key={charIndex}
                  style={{
                    display: 'inline-block',
                    transition: 'opacity 500ms, transform 500ms',
                    transitionDelay: `${delay}ms`,
                    opacity: triggered ? 1 : 0,
                    transform: triggered ? 'translateX(0)' : 'translateX(-18px)',
                  }}
                >
                  {char === ' ' ? ' ' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedHeading;
