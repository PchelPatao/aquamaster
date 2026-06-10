import React, { useCallback } from 'react';

interface PhoneLinkProps {
  phone: string;
  children: React.ReactNode;
  className?: string;
}

const YANDEX_METRIKA_ID = 109746116;

export const PhoneLink: React.FC<PhoneLinkProps> = ({ phone, children, className }) => {
  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
      window.ym(YANDEX_METRIKA_ID, 'reachGoal', 'phone_click');
    }
  }, []);

  return (
    <a href={`tel:${phone}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};
