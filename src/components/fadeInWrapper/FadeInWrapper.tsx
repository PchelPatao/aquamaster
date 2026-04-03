import React from 'react';

interface FadeInWrapperProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
}

export const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  isVisible,
  children,
  className = '',
}) => {
  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};
