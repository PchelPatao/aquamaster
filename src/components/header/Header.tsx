import sideImg from "../../assets/sideImg.png";
import sideImgMobile from "../../assets/sideImgMobile.png"
import whatsapp from "../../assets/whatsapp.svg";
import {Button} from "../button/Button.tsx";
import line from "../../assets/line.svg";
import checkMark from "../../assets/checkMark.svg";
import * as React from "react";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile.ts";

interface HeaderProps {
    onScrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
    firstItemRef: React.RefObject<HTMLDivElement | null>;
    secondBlockRef: React.RefObject<HTMLDivElement | null>;
    thirdBlockRef: React.RefObject<HTMLDivElement | null>;
    fifthBlockRef: React.RefObject<HTMLDivElement | null>;
}

export const Header = ({onScrollToRef,
    firstItemRef,
    secondBlockRef,
    thirdBlockRef,
    fifthBlockRef,
}: HeaderProps) => {
    const isMobile = useIsMobile()

    return (
        <div className='xs:pt-[30px] md:flex flex-row'>
            {!isMobile && <div className=''><img className='rounded-r-[30px]' width={'700'} src={sideImg} alt="nasos"/></div>}
            <div className='md:w-[1200px] md:pr-[100px]'>
                {isMobile &&
                    <div className='bg-[#4CBFCC] flex flex-row h-[40px] rounded-b-[10px] items-center justify-end text-white'>
                        <text className='pr-[10px]'><em>+7(931) 233-39-11</em></text>
                        <img src={whatsapp} alt={'whatsapp'} className='w-[30px]'></img>
                    </div>}
                <div className='flex justify-between pl-[10px] md:items-center pr-[10px] md:pr-[55px]'>
                    <h1 className='text-[56px] md:text-[60px] pt-[30px] font-bold md:pl-[50px] text-[#51D1E0]'>AquaMaster</h1>
                    {!isMobile &&
                        <div className='flex items-center pt-[40px]'>
                            <text className='text-[24px] pr-[10px]'><em>+7(931) 233-39-11</em></text>
                            <img src={whatsapp} alt={'whatsapp'} className='w-[50px]'></img>
                        </div>
                    }
                </div>
                <div className='flex gap-1 justify-between pt-[20px] pl-[10px] pr-[10px] md:pl-[60px] md:pr-[60px]'>
                    <Button
                        onClick={() =>  firstItemRef.current && onScrollToRef(firstItemRef as React.RefObject<HTMLDivElement>)}
                        name={"Почему мы?"}
                    />
                    <Button
                        onClick={() => thirdBlockRef.current && onScrollToRef(thirdBlockRef as React.RefObject<HTMLDivElement>)}
                        name={"Наши услуги"}
                    />
                    <Button
                        onClick={() => fifthBlockRef.current && onScrollToRef(fifthBlockRef as React.RefObject<HTMLDivElement>)}
                        name={"Схема работы"}
                    />
                </div>
                <img src={line} alt={'line'} className=' pt-[29px]'/>
                <div className='pt-[20px] pl-[10px] md:pl-[50px] text-[20px] md:text-end md:text-[36px] md:pr-[20px]'>
                    <em>Мы Предлагаем полный комплекс услуг по обслуживанию и ремонту скважин на воду в Санкт-Петербурге и Ленинградской области</em>
                </div>
                <div className='pl-[15px] md:pl-[50px]'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col pt-[40px] md:pt-[82px] gap-[10px]'>
                            <div className='flex'>
                                <img className='' src={checkMark} alt={'checkMark'}/>
                                <em className='md:text-[34px] text-[20px] pl-[5px]'>
                                    Оставим все в чистоте
                                </em>
                            </div>
                            <div className='flex'>
                                <img className='' src={checkMark} alt={'checkMark'}/>
                                <em className='md:text-[34px] text-[20px] pl-[5px]'>
                                    Качественные материалы
                                </em>
                            </div>
                            <div className='flex'>
                                <img className='' src={checkMark} alt={'checkMark'}/>
                                <em className='md:text-[34px] text-[20px] pl-[5px]'>
                                    Квалифицированные мастера
                                </em>
                            </div>
                        </div>
                        {!isMobile && <div className='pt-[20px] md:pt-[90px]'>
                            <Button
                                onClick={() => secondBlockRef.current && onScrollToRef(secondBlockRef as React.RefObject<HTMLDivElement>)}
                                name={'Подробнее'}
                            />
                        </div>}
                    </div>
                </div>
                {isMobile && <div className='pt-[40px]'><img src={sideImgMobile} alt={''}/></div>}
            </div>
        </div>
    )
}
