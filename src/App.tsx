/// <reference types="react" />
import * as React from "react";
import { useRef, useState} from 'react'
import { Button } from "./components/button/Button.tsx";
import { HeaderBlock } from "./components/headerBlock/HeaderBlock.tsx"
import { TextRepair } from "./components/textRepair/TextRepair.tsx"
import { ServiceList } from "./components/serviceList/ServiceList.tsx";
import { Header } from "./components/header/Header.tsx";
import { FeatureCardsSection } from "./components/featureCardsSection/FeatureCardsSection.tsx";
import { ServiceStepsSection } from "./components/serviceStepsSection/ServiceStepsSection.tsx";
import { WorkflowSection } from "./components/workflowSection/WorkflowSection.tsx";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver/useIntersectionObserver.ts";
import { FadeInWrapper } from "./components/fadeInWrapper/FadeInWrapper.tsx";
import { DeliverySection } from "./components/deliverySection/DeliverySection.tsx";



function App() {
    // типизированные рефы
    const firstItemRef = useRef<HTMLDivElement>(null);
    const secondBlockRef = useRef<HTMLDivElement>(null);
    const thirdBlockRef = useRef<HTMLDivElement>(null);
    const fourthBlockRef = useRef<HTMLDivElement>(null);
    const deliveryBlockRef = useRef<HTMLDivElement>(null);
    const fifthBlockRef = useRef<HTMLDivElement>(null);
    
    // состояния для отображения текста
    const [showCapitalText, setShowCapitalText] = useState(true);
    const [showUndergroundText, setShowUndergroundText] = useState(false);
    const [showCurrentText, setShowCurrentText] = useState(false);
    const [activeButton, setActiveButton] = useState<'capital' | 'underground' | 'current'>('capital');
    
    // состояния для delivery блока
    const [showDeliveryText, setShowDeliveryText] = useState(true);
    const [showPumpAquarioText, setShowPumpAquarioText] = useState(false);
    const [showInstallationText, setShowInstallationText] = useState(false);
    const [showMaintenanceText, setShowMaintenanceText] = useState(false);
    const [showPumpStationText, setShowPumpStationText] = useState(false);
    const [showAccumulatorText, setShowAccumulatorText] = useState(false);
    const [showComplectText, setShowComplectText] = useState(false);
    const [activeDeliveryButton, setActiveDeliveryButton] = useState<'delivery' | 'pumpAquario' | 'installation' | 'maintenance' | 'pumpStation' | 'accumulator' | 'complect'>('delivery');

    // Intersection Observer для каждой секции
    const { elementRef: firstRef, isVisible: firstVisible } = useIntersectionObserver();
    const { elementRef: secondRef, isVisible: secondVisible } = useIntersectionObserver();
    const { elementRef: thirdRef, isVisible: thirdVisible } = useIntersectionObserver();
    const { elementRef: fourthRef, isVisible: fourthVisible } = useIntersectionObserver();
    const { elementRef: deliveryRef, isVisible: deliveryVisible } = useIntersectionObserver();
    const { elementRef: fifthRef, isVisible: fifthVisible } = useIntersectionObserver();
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

    // функции для delivery блока
    const handleDeliveryClick = () => {
        setShowDeliveryText(true);
        setShowInstallationText(false);
        setShowMaintenanceText(false);
        setShowPumpStationText(false);
        setShowAccumulatorText(false);
        setShowComplectText(false);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('delivery');
    };

    const handlePumpAquarioClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(false);
        setShowMaintenanceText(false);
        setShowPumpStationText(false);
        setShowAccumulatorText(false);
        setShowComplectText(false);
        setShowPumpAquarioText(true)
        setActiveDeliveryButton('pumpAquario');
    }

    const handleInstallationClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(true);
        setShowMaintenanceText(false);
        setShowPumpStationText(false);
        setShowAccumulatorText(false);
        setShowComplectText(false);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('installation');
    };

    const handleMaintenanceClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(false);
        setShowMaintenanceText(true);
        setShowAccumulatorText(false);
        setShowPumpStationText(false);
        setShowComplectText(false);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('maintenance');
    };
    const handlePumpStationClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(false);
        setShowMaintenanceText(false);
        setShowPumpStationText(true);
        setShowAccumulatorText(false);
        setShowComplectText(false);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('pumpStation');
    };
    const handleAccumulatorClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(false);
        setShowMaintenanceText(false);
        setShowPumpStationText(false);
        setShowAccumulatorText(true);
        setShowComplectText(false);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('accumulator');
    };

    const handleComplectClick = () => {
        setShowDeliveryText(false);
        setShowInstallationText(false);
        setShowMaintenanceText(false);
        setShowPumpStationText(false);
        setShowAccumulatorText(false);
        setShowComplectText(true);
        setShowPumpAquarioText(false)
        setActiveDeliveryButton('complect');
    };


    return (
        <div className='flex flex-col'>
                <Header
                    onScrollToRef={scrollToRef}
                    firstItemRef={firstItemRef}
                    secondBlockRef={secondBlockRef}
                    thirdBlockRef={thirdBlockRef}
                    deliveryBlockRef={deliveryBlockRef}
                    fifthBlockRef={fifthBlockRef}
                />
            <div ref={firstItemRef}>
                <div ref={firstRef}>
                    <FadeInWrapper isVisible={firstVisible}>
                        <HeaderBlock>
                            <h2>ПОЧЕМУ СЛЕДУЕТ ВЫБРАТЬ ИМЕННО НАС?</h2>
                        </HeaderBlock>
                        <FeatureCardsSection />
                    </FadeInWrapper>
                </div>
            </div>

            <div ref={secondBlockRef}>
                <div ref={secondRef}>
                    <FadeInWrapper isVisible={secondVisible}>
                        <HeaderBlock>
                            <h2>УСТРАНИМ ЛЮБУЮ НЕИСПРАВНОСТЬ СКВАЖИНЫ ЗА 1 ВИЗИТ</h2>
                        </HeaderBlock>
                <div className='flex flex-col md:flex-row md:ml-[30px]'>
                    <div className='flex flex-row md:flex-col pl-[10px] pr-[20px] pt-[20px] md:pt-[12px] justify-between md:justify-start gap-[10px] md:gap-[20px] '>
                         <Button isActive={activeButton === 'capital'} className='w-[200px] text-[16px] md:h-[70px]' name={'Капитальный ремонт'} onClick={handleCapitalClick}  ></Button>
                         <Button isActive={activeButton === 'underground'} className='w-[200px] text-[16px] md:h-[70px]' name={'Подземный ремонт '} onClick={handleUndergroundClick}   ></Button>
                         <Button isActive={activeButton === 'current'} className='w-[200px] text-[16px] md:h-[70px]' name={'Текущий ремонт'} onClick={handleCurrentClick}  ></Button>
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
                            }
                            />
                        )}
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
                            }
                            />
                        )}
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
                            }
                            />
                        )}
                    </div>

                </div>
                    </FadeInWrapper>
                </div>
            </div>

            <div ref={thirdBlockRef}>
                <div ref={thirdRef}>
                    <FadeInWrapper isVisible={thirdVisible}>
                        <HeaderBlock>
                            <h2>НАШИ УСЛУГИ</h2>
                        </HeaderBlock>
                <div className='pt-[20px] md:pr-[100px] md:ml-[30px]'>
                    <div>
                        <ServiceList />
                    </div>
                </div>
                    </FadeInWrapper>
                </div>
            </div>

            <div ref={deliveryBlockRef}>
                <DeliverySection
                    showDeliveryText={showDeliveryText}
                    showPumpAquarioText={showPumpAquarioText}
                    showInstallationText={showInstallationText}
                    showMaintenanceText={showMaintenanceText}
                    showPumpStationText={showPumpStationText}
                    showAccumulatorText={ showAccumulatorText}
                    showComplectText={showComplectText}
                    activeDeliveryButton={activeDeliveryButton}
                    handleDeliveryClick={handleDeliveryClick}
                    handlePumpAquarioText={handlePumpAquarioClick}
                    handleInstallationClick={handleInstallationClick}
                    handleMaintenanceClick={handleMaintenanceClick}
                    handlePumpStationClick={handlePumpStationClick}
                    handleAccumulatorClick={handleAccumulatorClick}
                    handleComplectClick={handleComplectClick}
                    elementRef={deliveryRef}
                    isVisible={deliveryVisible}
                />
            </div>

            <div ref={fourthBlockRef} className='pt-[100px]'>
                <div ref={fourthRef}>
                    <FadeInWrapper isVisible={fourthVisible}>
                        <HeaderBlock>
                            <h2>КАК ПРОИСХОДИТ ОБСЛУЖИВАНИЕ?</h2>
                        </HeaderBlock>
                        <ServiceStepsSection />
                    </FadeInWrapper>
                </div>
            </div>
                            
            <div ref={fifthBlockRef} className='md:h-[900px] md:pt-[100px]'>
                <div ref={fifthRef}>
                    <FadeInWrapper isVisible={fifthVisible}>
                        <HeaderBlock>
                            <h2>СХЕМА РАБОТЫ</h2>
                        </HeaderBlock>
                        <WorkflowSection />
                    </FadeInWrapper>
                </div>
            </div>
        </div>
    )
}

export default App
