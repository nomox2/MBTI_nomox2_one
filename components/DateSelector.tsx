import React from 'react';
import DropdownIcon from './icons/DropdownIcon';

type DateSelectorProps = {
  value: string;
  className?: string;
  onClick?: () => void;
};

const DateSelector: React.FC<DateSelectorProps> = ({
  value,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`border border-[#2d2d2d] border-solid box-border content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[8px] relative rounded-[40px] shrink-0 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
        {value}
      </p>
      <DropdownIcon className="bg-black box-border content-stretch flex flex-col gap-[10px] items-start p-px relative shrink-0 w-[10px]" />
    </div>
  );
};

export default DateSelector;







