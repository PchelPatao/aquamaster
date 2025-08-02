import * as React from "react";

type TextRepairProps = {
    mainText: string;
    category?: string;
    list?: React.ReactNode
}

export const TextRepair = ({mainText, category, list}: TextRepairProps) => {
    return (
        <div className='bg-[#31919C] rounded-[40px]' style={{
            boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'
        }}>
            <div className='text-white flex flex-col p-[30px] md:p-[60px] md:text-[24px]'>
                <div className=''>
                    {mainText}
                </div>
                <div className='md:pt-[30px]'>
                    {category}
                </div>
                <div className='md:pt-[20px]'>
                    {list}
                </div>

            </div>
        </div>
    )
}
