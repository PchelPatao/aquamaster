import React from 'react';

interface ServiceStepProps {
  number: number;
  title: string;
  description: string;
}

export const ServiceStep: React.FC<ServiceStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row pt-[20px] md:pt-[57px] first:pt-[20px]">
        <div
          className="rounded-full h-[60px] w-[60px] flex items-center justify-center text-[36px] text-white font-bold bg-[#4CBFCC] flex-shrink-0"
          style={{ boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)' }}
        >
          <em>{number}</em>
        </div>
        <h3 className="text-[25px] md:text-[30px] pl-[30px] flex items-center">
          <em>{title}</em>
        </h3>
      </div>
      <p className="pl-[90px] text-[24px] pt-[15px]">
        <em>{description}</em>
      </p>
    </div>
  );
};
