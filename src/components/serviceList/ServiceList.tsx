import {ListItem} from "./listItem/ListItem.tsx";
import {useState} from "react";
import {Button} from "../button/Button.tsx";

type ServiceItem = {
    name: string;
    price: string;
};

export const ServiceList = () => {
    const [activeButton, setActiveButton] = useState<'change' | 'cleaning' | 'repair' | 'arrangement'> ('change')

    const changeList = [
        {
            name: 'Извлечение застрявшего насоса в зависимости от сложности работ и глубины',
            price: 'от 11000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП до 30м.',
            price: 'от 15000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП от 30 до 50м.',
            price: 'от 20000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП от 50 до 80м',
            price: 'от 25000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП от 80 до 100м.',
            price: 'от 30000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП от 100м.',
            price: 'от 35000 руб.',
        },
        {
            name: 'Замена насоса ЭЦВ',
            price: '1000 руб./ метр',
        },
    ]
    const cleaningList = [
        {
            name: 'Промывка скважины',
            price: 'от 8000 руб.'
        },
        {
            name: 'Очистка скважин до 30 м.',
            price: 'от 15000 руб.',
        },
        {
            name: 'Очистка скважин от 30 м. до 60 м.',
            price: 'от 20000 руб.',
        },
        {
            name: 'Очистка скважин от 60 м. до 80 м.',
            price: 'от 25000 руб.',
        },
        {
            name: 'Очистка скважин от 80 м. до 100 м.',
            price: 'от 30000 руб.',
        },
        {
            name: 'Замена насоса труба ПНД,ПП от 100м.',
            price: 'от 30000 руб.',
        },
    ]


    const repairList = [
        {
            name: 'Замена обратного клапана',
            price: 'от 8000 руб.'
        },
        {
            name: 'Видео-диагностика скважины',
            price: 'от 15000 руб.'
        },
        {
            name: 'Ремонт кессонов ликвидация течи/свищей',
            price: 'от 20000 руб.'
        },
        {
            name: 'Извлечение застрявшего насоса из скважины',
            price: 'от 25000 руб.'
        }
    ]

    const arrangementList =[
        {
            name: 'Пусконаладочные работы',
            price: '1800 руб.'
        },
        {
            name: 'Замена реле давления (220 вольт)',
            price: '3500 руб.'
        },
        {
            name: 'Монтаж оголовка',
            price: '5000 руб.'
        },
        {
            name: 'Монтаж гидроаккумулятора',
            price: 'от 6000 руб.'
        },
        {
            name: 'Установка автоматики',
            price: '7000 руб.'
        },
        {
            name: 'Обустройство скважины адаптером',
            price: 'от 25000 руб.'
        },
        {
            name: 'Обустройство скважины кессоном',
            price: 'от 30000 руб.'
        },
    ]
        // свитчкейс для активных кнопок
    const getCurrentList = (): ServiceItem[] => {
        switch (activeButton) {
            case 'change': return changeList
            case 'cleaning': return cleaningList
            case 'repair': return repairList
            case 'arrangement': return arrangementList

        }
    }

    return (
        <div className='flex flex-col lg:flex-row gap-[42px] pl-[10px] pr-[10px] '>
            <div className='flex flex-row md:flex-col gap-[10px] md:gap-[20px]'>
                <div className='flex flex-col w-full gap-[10px] md:gap-[20px] items-center'>
                    <Button
                        className='w-[160px] h-[50px] md:h-[100px]'
                        name={'Замена насоса в скважине'}
                        onClick={() => setActiveButton('change')}
                        isActive={activeButton === 'change'}
                    />
                    <Button
                        className='w-[160px] h-[50px] md:h-[100px]'
                        name={'Очистка'}
                        onClick={() => setActiveButton('cleaning')}
                        isActive={activeButton === 'cleaning'}
                    />
                </div>
                <div className='flex flex-col w-full gap-[10px] md:gap-[20px] items-center'>
                    <Button
                        name={'Ремонт скважины'}
                        className='w-[160px] h-[50px] md:h-[100px]'
                        onClick={() => setActiveButton('repair')}
                        isActive={activeButton === 'repair'}
                    />
                    <Button
                        name={'Обустройство'}
                        className='w-[160px] h-[50px] md:h-[100px] '
                        onClick={() => setActiveButton('arrangement')}
                        isActive={activeButton === 'arrangement'}
                    />
                </div>

            </div>
            <ul className='flex flex-col gap-6 w-full rounded-[90px]' >
                {getCurrentList().map((item, index) => (
                    <ListItem
                        key={index}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </ul>
        </div>

    )
}
