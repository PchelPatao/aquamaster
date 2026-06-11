import React, { useCallback } from 'react';

interface PhoneLinkProps {
  phone: string;
  children: React.ReactNode;
  className?: string;
}

const YANDEX_METRIKA_ID = 109746116;

const normalizePhone = (value: string) => value.replace(/[^\d+]/g, '');
const formatPhoneDisplay = (value: string) => {
  const digits = normalizePhone(value).replace('+', '');
  if (digits.startsWith('7') && digits.length === 11) {
    return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9)}`;
  }
  return value;
};

const isMobileDevice = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const PhoneLink: React.FC<PhoneLinkProps> = ({ phone, children, className }) => {
  const normalizedPhone = normalizePhone(phone);
  const displayText = typeof children === 'string' ? children : formatPhoneDisplay(phone);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window !== 'undefined' && typeof window.ym === 'function') {
        window.ym(YANDEX_METRIKA_ID, 'reachGoal', 'phone_click');
      }

      if (!isMobileDevice()) {
        event.preventDefault();
      }
    },
    [],
  );

  return (
    <a href={`tel:${normalizedPhone}`} className={className} onClick={handleClick}>
      {displayText}
    </a>
  );
};
