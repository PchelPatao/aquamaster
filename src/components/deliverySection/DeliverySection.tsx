import React from 'react';
import { Button } from '../button/Button';
import { HeaderBlock } from '../headerBlock/HeaderBlock';
import { TextRepair } from '../textRepair/TextRepair';
import { FadeInWrapper } from '../fadeInWrapper/FadeInWrapper';
import useIsMobile from '../../hooks/useIsMobile/useIsMobile';

interface DeliverySectionProps {
    showDeliveryText: boolean;
    showPumpAquarioText: boolean;
    showInstallationText: boolean;
    showMaintenanceText: boolean;
    showPumpStationText: boolean;
    showAccumulatorText: boolean;
    showComplectText: boolean;
    activeDeliveryButton: 'delivery' | 'pumpAquario' | 'installation' | 'maintenance' | 'pumpStation' | 'accumulator' | 'complect';
    handleDeliveryClick: () => void;
    handlePumpAquarioText: () => void;
    handleInstallationClick: () => void;
    handleMaintenanceClick: () => void;
    handlePumpStationClick: () => void;
    handleAccumulatorClick: () => void;
    handleComplectClick: () => void;
    elementRef: React.Ref<HTMLDivElement>;
    isVisible: boolean;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({
    showDeliveryText,
    showPumpAquarioText,
    showInstallationText,
    showMaintenanceText,
    showPumpStationText,
    showAccumulatorText,
    showComplectText,
    activeDeliveryButton,
    handleDeliveryClick,
    handlePumpAquarioText,
    handleInstallationClick,
    handleMaintenanceClick,
    handlePumpStationClick,
    handleAccumulatorClick,
    handleComplectClick,
    elementRef,
    isVisible,
}) => {
     const isMobile = useIsMobile();
    return (
        <div ref={elementRef}>
            <FadeInWrapper isVisible={isVisible}>
                <HeaderBlock>
                    <h2>ДОСТАВКА</h2>
                </HeaderBlock>
                <div className='flex flex-col md:flex-row md:ml-[30px]'>
                    <div className='flex md:flex-col pl-[10px] pr-[20px] pt-[20px] md:pt-[12px] justify-between md:justify-start gap-[10px] md:gap-[20px] '>
                        {isMobile ? (
                        <>
                            <div className='flex flex-col gap-[10px]'>
                                <Button isActive={activeDeliveryButton === 'delivery'} className='w-[200px] text-[16px] md:h-[70px]' name={'Доставка'} onClick={handleDeliveryClick} />
                                <Button isActive={activeDeliveryButton === 'pumpAquario'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Aquario'} onClick={handlePumpAquarioText} />
                                <Button isActive={activeDeliveryButton === 'installation'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Belamos'} onClick={handleInstallationClick} />
                            
                            </div>
                                <div className='flex flex-col gap-[10px]'>
                                <Button isActive={activeDeliveryButton === 'maintenance'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Poseidon'} onClick={handleMaintenanceClick} />
                                <Button isActive={activeDeliveryButton === 'accumulator'} className='w-[200px] text-[16px] md:h-[70px]' name={'Гидроаккумулятор вертикальный'} onClick={handleAccumulatorClick} />
                                <Button isActive={activeDeliveryButton === 'complect'} className='w-[200px] text-[16px] md:h-[70px]' name={'Комплект для обустройства скважин'} onClick={handleComplectClick} />
                            </div>
                        
                        </>) 
                        : 
                        (<div className='flex flex-col gap-[20px]'>
                            <Button isActive={activeDeliveryButton === 'delivery'} className='w-[200px] text-[16px] md:h-[70px]' name={'Доставка'} onClick={handleDeliveryClick} />
                            <Button isActive={activeDeliveryButton === 'pumpAquario'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Aquario'} onClick={handlePumpAquarioText} />
                            <Button isActive={activeDeliveryButton === 'installation'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Belamos'} onClick={handleInstallationClick} />
                            <Button isActive={activeDeliveryButton === 'maintenance'} className='w-[200px] text-[16px] md:h-[70px]' name={'Скваженные насосы Poseidon'} onClick={handleMaintenanceClick} />
                            <Button isActive={activeDeliveryButton === 'accumulator'} className='w-[200px] text-[16px] md:h-[70px]' name={'Гидроаккумулятор вертикальный'} onClick={handleAccumulatorClick} />
                            <Button isActive={activeDeliveryButton === 'complect'} className='w-[200px] text-[16px] md:h-[70px]' name={'Комплект для обустройства скважин'} onClick={handleComplectClick} />
                        </div>)}
                        
                    </div>
                    <div className='flex flex-col pt-[10px] pl-[10px] md:pl-[50px] pr-[10px] md:pr-[100px] w-full'>
                        {showDeliveryText && (
                            <TextRepair
                                mainText={'Мы осуществляем доставку оборудования для скважин по Санкт-Петербургу и Ленинградской области. Быстрая и надежная доставка с соблюдением всех условий транспортировки.'}
                                list={<ul className='custom-list'>
                                    <li>Заказ привозится точно по указанному адресу в частный дом или на строительный объект.</li>
                                    <li>Аккуратная транспортировка. Инженерная сантехника требует бережного обращения, поэтому: товары фиксируются в транспорте, используется защитная упаковка, исключаются повреждения при перевозке.</li>
                                    <li>Возможность оформить срочный привоз в день заказа.</li>
                                </ul>}
                            />
                        )}
                        
                        
                        {showPumpAquarioText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3E-50-75 (встр.конд., кабель 1,5м, Hmax напор-62м, Qmax расход-95л/м)</text><div className='underline pt-[5px]'>Цена от: 24165 руб.</div></li> 
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3E-65-75 (встр.конд., кабель 1,5м, Hmax напор-78м, Qmax расход-95л/м)</text><div className='underline pt-[5px]'>Цена от: 25905 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3E-80-75 (встр.конд., кабель 1,5м, Hmax напор-92м, Qmax расход-95л/м)</text><div className='underline pt-[5px]'>Цена от: 28213 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3E-95-75 (встр.конд., кабель 1,5м, Hmax напор-105м, Qmax расход-95л/м)</text><div className='underline pt-[5px]'>Цена от: 33542 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3B-100-100BE(+SSPm плавный пуск) (кабель 1,5м, Hmax напор-125м, Qmax расход-115л/м)</text><div className='underline pt-[5px]'>Цена от: 46824 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP1.8E-50-90 (встр.конд., кабель 50м, Hmax напор-62м, Qmax расход-60л/м)</text><div className='underline pt-[5px]'>Цена от: 22605 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP3B-140-100BE(3HP) (кабель 1,5м, Hmax напор-180м, Qmax расход-115л/м)</text><div className='underline pt-[5px]'>Цена от: 52860 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP(T)7B-110-100BE (кабель 1,5м, Hmax напор-150м, Qmax расход-160л/м)</text><div className='underline pt-[5px]'>Цена от: 78913 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос скважинный Aquario ASP(T)10B-110-100BE (встр.конд., кабель 1,5м, Hmax напор-165м, Qmax расход-283л/м)</text><div className='underline pt-[5px]'>Цена от: 110545 руб.</div></li>
                                    </ul>
                                }   
                            />
                        )}
                        {showInstallationText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between '><text>Насос погружной Belamos TF3-40 (кабель 20м)</text><div className='underline pt-[5px]'>Цена от: 13372 руб.</div></li> 
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Belamos TF3-60 (кабель 35м)</text><div className='underline pt-[5px]'>Цена от: 16707 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Belamos TF3-80 (кабель 50м)</text><div className='underline pt-[5px]'>Цена от: 20109 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Belamos TF3-110 (кабель 65м)</text><div className='underline pt-[5px]'>Цена от: 25128 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Belamos TF3-150(кабель 80м)</text><div className='underline pt-[5px]'>Цена от: 36717 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос колодезный Belamos KF-40</text><div className='underline pt-[5px]'>Цена от: 15390 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос колодезный Belamos KF-60</text><div className='underline pt-[5px]'>Цена от: 16469 руб.</div></li>
                                    </ul>
                                }
                            />
                        )}
                        {showMaintenanceText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Poseidon 3SD-40 с кабелем 20м (1х230В, 0,25кВт, Hmax напор-40м, Qmax расход-2.7 м3/ч, 1" )</text><div className='underline pt-[5px]'>Цена от: 14610 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Poseidon 3SD-60 с кабелем 35м (1х230В, 0,37кВт, Hmax напор-60м, Qmax расход-2.7 м3/ч, 1" )</text><div className='underline pt-[5px]'>Цена от: 18160 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Poseidon 3SD-80 с кабелем 50м (1х230В, 0,55кВт, Hmax напор-80м, Qmax расход-2.7 м3/ч, 1" )</text><div className='underline pt-[5px]'>Цена от: 15790 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Poseidon 3SD-80 с кабелем 50м (1х230В, 0,55кВт, Hmax напор-80м, Qmax расход-2.7 м3/ч, 1" )</text><div className='underline pt-[5px]'>Цена от: 24080 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насос погружной Poseidon 3SD-110 с кабелем 65м (1х230В, 0,75кВт, Hmax напор-110м, Qmax расход-2.7 м3/ч, 1" )</text><div className='underline pt-[5px]'>Цена от: 30000 руб.</div></li>

                                    </ul>
                                }
                            />
                        )}
                        {showPumpStationText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насосная станция AQUARIO AUTO AJC-60С ( P1мощность-550Вт/ч, Hmax напор-38м, Qmax расход 40л/м)</text><div className='underline pt-[5px]'>Цена от: 21438 руб.</div></li> 
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насосная станция AQUARIO AUTO AJS-100А ( P1мощность-1000Вт/ч, Hmax напор-50м, Hs глубина водозабора-7м,Qmax расход-60л/м)</text><div className='underline pt-[5px]'>Цена от: 31842 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насосная станция AQUARIO AUTO ADB-60 ( P1мощность-850Вт/ч, Hmax напор-55м, Qmax расход-40л/м)</text><div className='underline pt-[5px]'>Цена от: 20389 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насосная станция AQUARIO AUTO ADB-35 ( P1мощность-430Вт/ч, Hmax напор-35м, Qmax расход-35л/м)</text><div className='underline pt-[5px]'>Цена от: 16047 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Насосная станция AQUARIO AUTO AJC-81 ( P1мощность-820Вт/ч, Hmax напор-45м, Hs глубина водозабора-7м,Qmax расход-50л/м)</text><div className='underline pt-[5px]'>Цена от: 25529 руб.</div></li>
                                    </ul>
                                }
                            />
                        )}
                        {showAccumulatorText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 50VT синий, вертикальный</text><div className='underline pt-[5px]'>Цена от: 5235 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 80VT синий, вертикальный</text><div className='underline pt-[5px]'>Цена от: 10051 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 80WO вертикальный, обратный</text><div className='underline pt-[5px]'>Цена от: 10051 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 50WO вертикальный, обратный</text><div className='underline pt-[5px]'>Цена от: 5235 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 100VT синий, вертикальный</text><div className='underline pt-[5px]'>Цена от: 10729 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 50SSVT нержавейка, вертикальный</text><div className='underline pt-[5px]'>Цена от: 12564 руб.</div></li>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Гидроаккумулятор Беламос 80SSVT нержавейка, вертикальный</text><div className='underline pt-[5px]'>Цена от: 15088 руб.</div></li>
                                    </ul>
                                }
                            />
                        )}
                        {showComplectText && (
                            <TextRepair
                                list={
                                    <ul className='custom-list flex flex-col gap-[10px]'>
                                        <li className='flex flex-col md:flex-row justify-between'><text>Комплект для обустройства скважин (Кессон\Адаптер + насос + гидроаккумулятор)</text><div className='underline pt-[5px]'>Цена от: 25000 руб.</div></li>
                                    
                                    </ul>
                                }
                            />
                        )}
                        {(showDeliveryText || showInstallationText || showMaintenanceText || showPumpStationText || showAccumulatorText || showComplectText) && (
                            <div style={{ boxShadow: '8px 8px 4px 0 rgba(0, 0, 0, 0.25)' }} className='w-full mt-[20px] md:mt-[30px] flex flex-col items-center md:flex-row md:justify-center md:items-center bg-[#31919C] rounded-[40px] p-[20px] text-white'>
                                <div className='flex flex-col md:flex-row items-center'>
                                    <text className='text-[20px] md:text-[20px] mb-[10px] md:mb-0 md:mr-[10px]'>Для уточнения наличия товара и стоимости доставки, просьба связаться с менеджером: <a href='tel:+7(931)2333911'>+7(931) 233-39-11</a></text> 
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </FadeInWrapper>
        </div>
    );
};