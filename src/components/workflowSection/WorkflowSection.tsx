import React from 'react';
import { WorkflowCircle } from '../workflowCircle/WorkflowCircle';
import useIsMobile from '../../hooks/useIsMobile/useIsMobile';
import arrow from '../../assets/arrow.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import viber from '../../assets/viber.svg';

export const WorkflowSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="pt-[13px] flex flex-col md:flex-row gap-[50px] items-center justify-center">
      <WorkflowCircle mainText="ПОЗВОНИТЕ">
        <div className="pt-[10px] flex flex-col">
          <em className="text-[16px] md:text-[24px]"><a href='tel:+7(931)2333911'>+7(931) 233-39-11</a></em>
          <div className="flex flex-row gap-2 items-center justify-center pt-[10px]">
            <img src={whatsapp} alt="whatsapp" className="size-10" />
            <img src={telegram} alt="telegram" className="size-8 bg-white rounded-full" />
            <img src={viber} alt="viber" className="size-10" />
          </div>
        </div>
      </WorkflowCircle>

      {!isMobile && <img src={arrow} alt="стрелка" />}

      <WorkflowCircle mainText="ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ" subText="Рассчитываем стоимость, оформляем заявку" />

      {!isMobile && <img src={arrow} alt="стрелка" />}

      <WorkflowCircle mainText="МАСТЕР" subText="Приезжает и чинит оборудование. Вы принимаете и оплачиваете работу" />
    </div>
  );
};
