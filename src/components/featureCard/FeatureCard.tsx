import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="bg-[#4CBFCC] text-white size-[190px] md:size-[400px] rounded-[40px] md:rounded-[90px] flex flex-col justify-center items-center p-5"
      style={{
        boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <img src={icon} className="w-[60px] md:w-[80px]" alt={title} />
      <p className="text-[16px] md:text-[34px] mt-3">{title}</p>
      <p className="text-[12px] md:text-[24px] text-center mt-2">{description}</p>
    </div>
  );
};
