import React from 'react';
import { FeatureCard } from '../featureCard/FeatureCard';
import useIsMobile from '../../hooks/useIsMobile/useIsMobile';
import success from '../../assets/success.svg';
import card from '../../assets/card.svg';
import shield from '../../assets/shield.svg';
import banknote from '../../assets/banknote.svg';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: success,
    title: 'Качество',
    description: 'Решаем любые проблемы со скважинами самыми оптимальными способами.',
  },
  {
    icon: card,
    title: 'Без предоплат',
    description: 'Фиксированная договором цена. Оплата по факту выполнения работ.',
  },
  {
    icon: shield,
    title: 'Гарантия',
    description: 'Мы предоставляем гарантию в 1 год на все выполненные нами работы.',
  },
  {
    icon: banknote,
    title: 'Экономия',
    description: 'Мы всегда подбираем оптимальное решение проблемы, избегая переплат.',
  },
];

export const FeatureCardsSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <div className="flex pt-[20px] justify-center gap-[20px]">
          <div className="pl-[14px] flex flex-col md:flex-row flex-1 gap-[20px]">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row flex-1 gap-[20px] md:gap-[50px] pr-[14px]">
            {features.slice(2).map((feature, index) => (
              <FeatureCard key={index + 2} {...feature} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center h-[590px] gap-[50px] pt-[50px]">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      )}
    </>
  );
};
