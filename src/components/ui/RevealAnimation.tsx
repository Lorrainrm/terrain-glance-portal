
import React, { useEffect, useRef, ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({ 
  children, 
  delay = 0, 
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-animation ${className}`}>
      {children}
    </div>
  );
};

export default RevealAnimation;
