import * as React from "react";
import longLine from "../../assets/longLine.svg";

type HeaderBlockProps = {
    children: React.ReactNode;
}

export const HeaderBlock = React.forwardRef<HTMLDivElement, HeaderBlockProps>(
    ({ children }, ref) => {
        return (
            <div className='pt-[100px]  w-full' ref={ref}>
                <em className='flex justify-center pl-[10px] text-[34px] text-[#4CBFCC]'>{children}</em>
                <img src={longLine} alt={'line'} />
            </div>
        )
    }
);
