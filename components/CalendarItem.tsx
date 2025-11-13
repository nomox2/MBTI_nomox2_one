import React from 'react';

type CalendarItemProps = {
  day: string;
  date: number;
  isSelected?: boolean;
  className?: string;
};

const CalendarItem: React.FC<CalendarItemProps> = ({
  day,
  date,
  isSelected = false,
  className = '',
}) => {
  return (
    <div className={`content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[54px] ${className}`}>
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white w-full">
        {day}
      </p>
      <div
        className={`box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[12px] py-[16px] relative rounded-[10px] shrink-0 w-full ${
          isSelected ? 'bg-white' : 'bg-[#151515]'
        }`}
      >
        <div
          className={`flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center w-full ${
            isSelected ? 'text-black' : 'text-white'
          }`}
        >
          <p className="leading-[1.5]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarItem;







