type ListItemProps = {
    name: string;
    price: string;
}

export const ListItem = ({name, price}: ListItemProps) => {
    return (
        <li className='flex items-center rounded-[40px] md:rounded-[90px] justify-between h-[100px] md:text-[20px] text-white bg-[#31919C]' style={{
            boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.20)'
        }}>
            <>
                <div className='h-full items-center pl-[15px] flex'>
                    <div className='flex-1'>
                        {name}
                    </div>
                </div>
                <div className='box-border items-center flex justify-center'>
                    <u className='flex h-full items-center pl-[5px] text-nowrap justify-center pr-[10px]'>{price}</u>
                </div>
            </>
        </li>
    )
}
