
type ButtonProps = {
    name: string;
    withoutIcon?: boolean;
    onClick?: () => void;
    padding?: string;
    showIcon?: boolean;
    isActive?: boolean;
    className?: string;
};

export const Button = ({name, withoutIcon = false, padding, onClick, isActive = false, className}: ButtonProps) => {
    return (
        <div
            className={`rounded-[90px] ${className} md:h-[50px] md:w-[480px] w-[120px] border-[1px] md:border-[2px] border-[#31919C] cursor-pointer bg-[#4CBFCC] text-white font-bold flex flex-row transition-all duration-200 ease-out transform ${
                isActive ? 'bg-[#31919C] shadow-inner scale-105' : 'hover:bg-[#31919C] hover:shadow-lg hover:scale-105 active:scale-95 active:translate-y-[1px]'
            }`}
            onClick={onClick}
        >
            <button
                type="button"
                style={{ padding }}
                className={`w-full h-full flex flex-row ${withoutIcon ? 'justify-center' : ''} items-center`}
            >
                <span className='box-border md:p-[10px] p-[9px] w-full h-full flex whitespace-nowrap items-center justify-center text-[11px] md:text-[26px]'>
                    {name}
                </span>
            </button>
        </div>
    );
};
