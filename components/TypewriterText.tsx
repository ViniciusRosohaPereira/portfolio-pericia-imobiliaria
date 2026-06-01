import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 45, 
  delay = 0, 
  className = '', 
  cursor = false,
  onComplete 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let typingIntervalId: number;

    if (!hasStarted) {
      timeoutId = window.setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, delay);
    } else {
      if (displayedText.length < text.length) {
        typingIntervalId = window.setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, speed);
      } else {
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(typingIntervalId);
    };
  }, [hasStarted, displayedText, text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && <span className="typewriter-cursor">|</span>}
    </span>
  );
};

export default TypewriterText;
