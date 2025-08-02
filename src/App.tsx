import './App.css'
import * as React from "react";
import { useRef, useState} from 'react'
import { Button } from "./components/button/Button.tsx";
import { HeaderBlock } from "./components/headerBlock/HeaderBlock.tsx"
import { TextRepair } from "./components/textRepair/TextRepair.tsx"
import { ServiceList } from "./components/serviceList/ServiceList.tsx";
import success from './assets/success.svg'
import card from './assets/card.svg'
import shield from './assets/shield.svg'
import banknote from './assets/banknote.svg'
import arrow from './assets/arrow.svg'
import {Header} from "./components/header/Header.tsx";
import useIsMobile from "./hooks/useIsMobile/useIsMobile.ts";



function App() {
    // типизированные рефы
    const firstItemRef = useRef<HTMLDivElement>(null);
    const secondBlockRef = useRef<HTMLDivElement>(null);
    const thirdBlockRef = useRef<HTMLDivElement>(null);
    const fourthBlockRef = useRef<HTMLDivElement>(null);
    const fifthBlockRef = useRef<HTMLDivElement>(null);
    // состояния для отображения текста
    const [showCapitalText, setShowCapitalText] = useState(true);
    const [showUndergroundText, setShowUndergroundText] = useState(false);
    const [showCurrentText, setShowCurrentText] = useState(false);
    const [activeButton, setActiveButton] = useState<'capital' | 'underground' | 'current'>('capital');
    const isMobile = useIsMobile()
    // функция для скролла
    const scrollToRef = (ref: React.RefObject<HTMLDivElement >) => {
        if (ref.current) {
                ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }

    };
    // функции отображения текста
    const handleCapitalClick = () => {
        setShowCapitalText(true)
        setShowUndergroundText(false)
        setShowCurrentText(false)
        setActiveButton('capital')
    };

    const handleUndergroundClick = () => {
        setShowCapitalText(false)
        setShowUndergroundText(true)
        setShowCurrentText(false)
        setActiveButton('underground');
    };

    const handleCurrentClick = () => {
        setShowCapitalText(false)
        setShowUndergroundText(false)
        setShowCurrentText(true)
        setActiveButton('current');
    };


    return (
        <div className='flex flex-col '>
                <Header
                    onScrollToRef={scrollToRef}
                    firstItemRef={firstItemRef}
                    secondBlockRef={secondBlockRef}
                    thirdBlockRef={thirdBlockRef}
                    fifthBlockRef={fifthBlockRef}
                />
            <div ref={firstItemRef} className=''>
                <HeaderBlock>
                    <h2>ПОЧЕМУ СЛЕДУЕТ ВЫБРАТЬ ИМЕННО НАС?</h2>
                </HeaderBlock>
                <div className='flex pt-[20px] justify-center gap-[20px] md:gap-[50px] md:pl-[80px] md:w-[1700px] md:h-[590px]'>
                     <div className='pl-[14px] flex flex-col md:flex-row md:gap-[50px] flex-1 gap-[20px]'>
                        <div className=' bg-[#4CBFCC] text-white h-[220px] md:size-[400px] rounded-[40px] md:rounded-[90px] ' style={{
                            boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'
                        }}>
                            <div className='flex flex-col justify-center items-center w-full h-full p-5'>
                                <img src={success} className='w-[80px]' alt={'Качество'}></img>
                                <text className=' text-[16px] md:text-[34px]'>Качество</text>
                                <text className=' text-[12px] md:text-[24px]'>Решаем любые проблемы со скважинами самыми оптимальными способами.</text>
                            </div>
                        </div>
                        <div className=' bg-[#4CBFCC] text-white rounded-[40px] md:size-[400px] h-[220px] md:rounded-[90px]' style={{
                            boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'
                        }}>
                            <div className='flex flex-col justify-center items-center w-full h-full p-5'>
                                <img src={card} className='w-[80px]' alt={'карточка'}></img>
                                <text className=' text-[16px] md:text-[34px]'>Без предоплат</text>
                                <text className=' text-[12px] md:text-[24px]'>Фиксированная договором цена. Оплата по факту выполнения работ.</text>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row flex-1 gap-[20px] md:gap-[50px] pr-[14px]'>
                        <div className=' bg-[#4CBFCC] text-white rounded-[40px] md:size-[400px] h-[220px] md:rounded-[90px]' style={{
                        boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'
                    }}>
                        <div className='flex flex-col justify-center items-center w-full h-full p-5'>
                            <img src={shield} className='w-[80px]' alt={'щит'}></img>
                            <text className=' text-[16px] md:text-[34px]'>Гарантия</text>
                            <text className=' text-[12px] md:text-[24px]'>Мы предоставляем гарантию в 1 год на все выполненные нами работы.</text>
                        </div>
                        </div>
                        <div className=' bg-[#4CBFCC] text-white rounded-[40px] md:size-[400px] h-[220px] md:rounded-[90px]' style={{
                            boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'
                        }}>
                            <div className='flex flex-col justify-center items-center w-full h-full p-5'>
                                <img src={banknote} className='w-[80px]' alt={'купюра'}></img>
                                <text className=' text-[16px] md:text-[34px]'>Экономия</text>
                                <text className=' text-[12px] md:text-[24px]'>Мы всегда подбираем оптимальное решение проблемы, избегая  переплат.</text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={secondBlockRef}>
                <HeaderBlock>
                    <h2>УСТРАНИМ ЛЮБУЮ НЕИСПРАВНОСТЬ СКВАЖИНЫ ЗА 1 ВИЗИТ</h2>
                </HeaderBlock>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-row md:flex-col pl-[10px] pr-[20px] pt-[20px] md:pt-[12px] justify-between md:justify-start gap-[10px] md:gap-[20px] '>
                         <Button isActive={activeButton === 'capital'} name={'Капитальный ремонт'} onClick={handleCapitalClick}  ></Button>
                         <Button isActive={activeButton === 'underground'} name={'Подземный ремонт '} onClick={handleUndergroundClick}   ></Button>
                         <Button isActive={activeButton === 'current'} name={'Текущий ремонт'} onClick={handleCurrentClick}  ></Button>
                    </div>
                    <div className='flex pt-[10px] pl-[10px] md:pl-[50px] pr-[10px] md:pr-[100px]'>
                        {showCapitalText && (
                            <TextRepair
                                mainText={'Нужен для восстановления целостности и производительности скважин. Проводится при снижении качества воды, ухудшении ее вкуса и запаха, изменении цвета и появлении примесей.'}
                                category={'Сделаем диагностику и устраним:'}
                                list={
                                <ul className='custom-list'>
                                    <li>трещины в обсадной колонне или ее разрушение;</li>
                                    <li>оборвавшееся оборудование;</li>
                                    <li>неисправности насоса;</li>
                                    <li>нарушение целостности фильтра или других элементов;</li>
                                    <li>снижение продуктивности скважины;</li>
                                    <li>прекращение подачи воды.</li>
                                </ul>
                            }/>)}
                        {showUndergroundText && (
                            <TextRepair
                                mainText={'Осмотр скважины выполняется с использованием специальной видеокамеры, опускающейся в глубинный колодец. По результатам видеосъемки составляется отчет, на основании которого определяется способ ремонта.'}
                                category={'Необходимость в подземном ремонте возникает:'}
                                list={
                                <ul className='custom-list'>
                                    <li>при засорении фильтра;</li>
                                    <li>при дефекте фильтрационной сетки;</li>
                                    <li>в случае ухудшения работы глубинного насоса или его замены;</li>
                                    <li>при снижении уровня воды или ухудшении ее качеств.</li>
                                </ul>
                            }/>)}
                        {showCurrentText && (
                            <TextRepair
                                mainText={'Подразделяется на:'}
                                list={
                                <ul className='custom-list'>
                                    <li>
                                        Планово-предупредительный – планируются на конкретный срок и проводятся согласно графику.
                                        Необходимы для устранения незначительных неисправностей и недостатков в работе скважины, нарушений в узлах оборудования,
                                        возникающих в процессе эксплуатации.
                                    </li>
                                    <li>
                                        Восстановительный – ремонтные работы проводятся в случае неожиданной остановки технического процесса.
                                        В восстановительные работы входят демонтаж глубинного насоса и его извлечение,
                                        очистка ствола от ила, ржавчины, песка и других отложений.
                                    </li>
                                </ul>
                            }/>)}
                    </div>

                </div>
            </div>

            <div ref={thirdBlockRef} className=''>
                <HeaderBlock>
                    <h2>НАШИ УСЛУГИ</h2>
                </HeaderBlock>
                <div className='pt-[20px] md:pr-[100px]'>
                    <div>
                        <ServiceList />
                    </div>
                </div>
            </div>

            <div ref={fourthBlockRef} className='pt-[100px]'>
                <HeaderBlock>
                    <h2>КАК ПРОИСХОДИТ ОБСЛУЖИВАНИЕ?</h2>
                </HeaderBlock>
                <div className='pl-[10px] md:pr-[100px]'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row pt-[20px]'>
                            <div
                                className='rounded-full h-[60px] w-[60px] flex items-center justify-center text-[36px] text-white font-bold bg-[#4CBFCC]'
                                style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                                <em>1</em>
                            </div>
                            <h3 className='text-[25px] pl-[30px]'>
                            <em>ПРОКАЧКА ПОСЛЕ БУРЕНИЯ</em>
                            </h3>
                        </div>
                        <p className='pl-[90px] text-[24px] pt-[15px]'>
                            <em>
                                После завершения установки оборудования, не сразу осуществляется подача чистой воды. Для этого надо прокачать скважину.
                                Чем глубже она, тем дольше придется это делать.
                                Но работа должна производиться специалистами, так как если нарушить технологию, то как результат получите засорение фильтров и поломку системы.
                            </em>
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex flex-row pt-[57px]'>
                            <div
                                className='rounded-full h-[60px] w-[60px] flex items-center justify-center text-[36px] text-white font-bold bg-[#4CBFCC]'
                                style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                                <em>2</em>
                            </div>
                            <h3 className='text-[30px] pl-[30px]'>
                                <em>ЧИСТКА</em>
                            </h3>
                        </div>
                        <p className='pl-[90px] text-[24px] pt-[15px]'>
                            <em>
                                С течением времени пользования могут произойти изменения. Уменьшение объемов жидкости, ее вкусовых характеристик и другой.
                                Для устранения стоит воспользоваться чисткой. Не стоит дожидаться поломки насоса или фильтров.
                                Чем дальше будет оттянута чистка, тем больше времени займет процесс очищения.
                            </em>
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row pt-[57px]'>
                            <div
                                className='rounded-full h-[60px] w-[60px] flex items-center justify-center text-[36px] text-white font-bold bg-[#4CBFCC]'
                                style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                                <em>3</em>
                            </div>
                            <h3 className='text-[30px] pl-[30px]'>
                                <em>ПРОМЫВКА</em>
                            </h3>
                        </div>
                        <p className='pl-[90px] text-[24px] pt-[15px]'>
                            <em>
                                В некоторых случаях только при ухудшении качества воды советуют провести промывку.
                                Несколько достаточно простых манипуляций, смогут повысить производительность водоснабжения,
                                которая просто теряется во время длительной эксплуатации.
                            </em>
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row pt-[57px]'>
                            <div
                                className='rounded-full h-[60px] w-[60px] flex items-center justify-center text-[36px] text-white font-bold bg-[#4CBFCC]'
                                style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                                <em>4</em>
                            </div>
                            <h3 className='text-[30px] pl-[30px]'>
                                <em>ПРОДУВКА</em>
                            </h3>
                        </div>
                        <p className='pl-[90px] text-[24px] pt-[15px]'>
                            <em>
                                Перед зимним периодом надо помнить о том, чтобы вода не оставалась в трубах.
                                При ее замерзании может быть поврежден водопровод, лопнет труба.
                                И только продувка избавит потребителя от этой проблемы.
                            </em>
                        </p>
                    </div>
                </div>
            </div>

            <div ref={fifthBlockRef} className='md:h-[900px] md:pt-[100px]'>
                <HeaderBlock>
                    <h2>СХЕМА РАБОТЫ</h2>
                </HeaderBlock>
                <div className=' pt-[13px] flex flex-col md:flex-row gap-[50px] items-center justify-center'>
                    <div
                        className='bg-[#4CBFCC] size-[200px] md:size-[400px] rounded-full flex flex-col justify-center text-white items-center'
                        style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                        <em className='text-[18px] md:text-[36px]'>
                            ПОЗВОНИТЕ
                        </em>
                        <div className='pt-[10px] flex flex-col'>
                            <em className='text-[16px] md:text-[24px]'>
                                +7(931) 233-39-11
                            </em>
                        </div>
                    </div>
                    {!isMobile && <img src={arrow} alt={'стрелка'}/>}
                    <div
                        className='bg-[#4CBFCC] size-[200px] md:size-[400px] rounded-full flex flex-col justify-center text-white items-center'
                        style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                            <em className='text-[16px] md:text-[34px] text-center '>
                                ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ
                            </em>
                            <div className='pt-[10px] flex flex-col'>
                                <em className='text-[14px] text-center md:text-[24px]'>
                                    Рассчитываем стоимость, оформляем заявку
                                </em>
                            </div>
                    </div>
                    {!isMobile && <img src={arrow} alt={'стрелка'}/>}
                    <div
                        className='bg-[#4CBFCC] size-[200px] md:size-[400px] rounded-full flex flex-col justify-center text-white items-center'
                        style={{boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)'}}>
                        <em className='text-[16px] md:text-[34px]'>
                            МАСТЕР
                        </em>
                        <div className='pt-[10px] flex flex-col'>
                            <em className='text-[14px] text-center md:text-[24px]'>
                                Приезжает и чинит оборудование. Вы принимаете и оплачиваете работу
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
