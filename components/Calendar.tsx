import React from 'react';
import CalendarItem from './CalendarItem';

type CalendarDate = {
  day: string;
  date: number;
  isSelected?: boolean;
};

type CalendarProps = {
  dates: CalendarDate[];
  className?: string;
};

const Calendar: React.FC<CalendarProps> = ({
  dates,
  className = '',
}) => {
  return (
    <div className={`content-stretch flex gap-[10px] items-center ${className}`}>
      {dates.map((date, index) => (
        <CalendarItem
          key={index}
          day={date.day}
          date={date.date}
          isSelected={date.isSelected}
        />
      ))}
    </div>
  );
};

export default Calendar;







