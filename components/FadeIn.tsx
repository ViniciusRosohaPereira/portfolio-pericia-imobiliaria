import React, { useEffect, useState } from 'react';

interface FadeInProps {
  delay?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ delay = 0, duration = 1000, className = '', children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{ opacity: visible ? 1 : 0, transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
