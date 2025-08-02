
type ButtonProps = {
    name: string;
    withoutIcon?: boolean;
    onClick?: () => void;
    fontSize?: string;
    width?: string;
    height?: string;
    padding?: string;
    showIcon?: boolean;
    isActive?: boolean;
};

export const Button = ({name, withoutIcon = false, fontSize, width, height, padding, onClick, isActive = false
}: ButtonProps) => {
    return (
        <div style={{ fontSize, width, height }} className={` rounded-[90px] md:h-[50px] md:w-[400px] w-[220px] cursor-pointer bg-[#4CBFCC] flex flex-row hover:bg-[#31919C]  text-white font-bold hover: ${isActive ? 'bg-[#31919C]' : ''}`}>
            <button
                style={{padding}}
                className={`w-full flex flex-row ${withoutIcon ? 'justify-center' : ''}`}
                onClick={onClick}
            >
                {!withoutIcon ?
                    <div className='box-border md:p-[10px] p-[9px] w-full flex whitespace-nowrap items-center text-[14px] md:text-[20px] justify-center'>
                        {name}
                    </div> :
                    <span className='flex items-center'>
                        {name}
                    </span>
                }
            </button>

        </div>

    );
};
