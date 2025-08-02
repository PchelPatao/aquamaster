import sideImg from "../../assets/sideImg.png";
import whatsapp from "../../assets/whatsapp.svg";
import {Button} from "../button/Button.tsx";
import line from "../../assets/line.svg";
import checkMark from "../../assets/checkMark.svg";
import * as React from "react";

interface HeaderMobileProps {
    onScrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
    firstItemRef: React.RefObject<HTMLDivElement | null>;
    thirdBlockRef: React.RefObject<HTMLDivElement | null>;
    fifthBlockRef: React.RefObject<HTMLDivElement | null>;
}

export const HeaderMobile = ({onScrollToRef,
                           firstItemRef,
                           thirdBlockRef,
                           fifthBlockRef,
                       }: HeaderMobileProps) => {
    return (
        <div className='flex w-full'>

            <div className=''>
                <div className='flex flex-row justify-between pt-[50px]'>
                    <h1 className='text-[24px] pl-[10px] text-[#51D1E0]'>AquaMaster</h1>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col'>
                            <text className='text-[12px]'><em>+7(931) 233-39-50</em></text>
                            <text className='text-[12px]'><em>+7(921) 870-87-24</em></text>
                        </div>
                        <div className=''>
                            <img className='w-full' src={whatsapp} alt={'whatsapp'}/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[10px] pl-[10px] pt-[40px]'>
                    <Button
                        withoutIcon
                        width={'20px'}
                        padding={'10px'}
                        onClick={() =>  firstItemRef.current && onScrollToRef(firstItemRef as React.RefObject<HTMLDivElement>)}
                        name={"Почему мы?"}
                    />
                    <Button
                        withoutIcon
                        width={'20px'}
                        padding={'10px'}
                        onClick={() => thirdBlockRef.current && onScrollToRef(thirdBlockRef as React.RefObject<HTMLDivElement>)}
                        name={"Наши услуги"}
                    />
                    <Button
                        withoutIcon
                        width={'20px'}
                        padding={'10px'}
                        onClick={() => fifthBlockRef.current && onScrollToRef(fifthBlockRef as React.RefObject<HTMLDivElement>)}
                        name={"Схема работы"}
                    />
                </div>
                <img src={line} alt={'line'} className='pt-[12px]'/>
                <div className='pt-[50px] pl-[76px]'>
                    <text className='text-[36px]'>
                        <em>Мы Предлагаем полный комплекс услуг по обслуживанию и ремонту скважин на воду в Санкт-Петербурге и Ленинградской области</em>
                    </text>
                    <div className='flex flex-col gap-1'>
                        <div className='pb-[50px]'>
                            <div className='flex flex-row pt-[20px]'>
                                <img className='w-[34px]' src={checkMark} alt={'checkMark'}/>
                                <em className='text-[36px] pl-[11px]'>
                                    Оставим все в чистоте
                                </em>
                            </div>
                            <div className='flex flex-row'>
                                <img className='w-[34px]' src={checkMark} alt={'checkMark'}/>
                                <em className='text-[36px] pl-[11px]'>
                                    Качественные материалы
                                </em>
                            </div>
                            <div className='flex flex-row'>
                                <img className='w-[34px]' src={checkMark} alt={'checkMark'}/>
                                <em className='text-[36px] pl-[11px]'>
                                    Квалифицированные мастера
                                </em>
                            </div>
                        </div>

                    </div>
                </div>
                <img src={sideImg} className=''  alt="nasos"/>
            </div>
        </div>
    )
}
