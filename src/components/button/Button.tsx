
type ButtonProps = {
    name: string;
    withoutIcon?: boolean;
    onClick?: () => void;
    padding?: string;
    showIcon?: boolean;
    isActive?: boolean;
    className?: string;
};

export const Button = ({name, withoutIcon = false, padding, onClick, isActive = false, className
}: ButtonProps) => {
    return (
        <div className={` rounded-[90px] ${className} md:h-[50px] md:w-[400px] w-[120px] cursor-pointer bg-[#4CBFCC] flex flex-row hover:bg-[#31919C]  text-white font-bold hover: ${isActive ? 'bg-[#31919C]' : ''}`}>
            <button
                style={{padding}}
                className={`w-full flex flex-row ${withoutIcon ? 'justify-center' : ''}`}
                onClick={onClick}
            >
                    <div className='box-border md:p-[10px] p-[9px] w-full h-full flex whitespace-nowrap items-center text-[11px] md:text-[20px] justify-center'>
                        {name}
                    </div>
            </button>

        </div>

    );
};
