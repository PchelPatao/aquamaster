import React from 'react';

interface WorkflowCircleProps {
  mainText: string;
  subText?: string;
  children?: React.ReactNode;
}

export const WorkflowCircle: React.FC<WorkflowCircleProps> = ({
  mainText,
  subText,
  children,
}) => {
  return (
    <div
      className="bg-[#4CBFCC] size-[230px] md:size-[400px] rounded-full flex flex-col justify-center text-white items-center"
      style={{ boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)' }}
    >
      <em className="text-[18px] md:text-[36px] text-center">{mainText}</em>
      {subText && (
        <div className="pt-[10px] flex flex-col">
          <em className="text-[16px] md:text-[24px] text-center">{subText}</em>
        </div>
      )}
      {children}
    </div>
  );
};
