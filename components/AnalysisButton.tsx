import React from 'react';
import DropdownIcon from './icons/DropdownIcon';

type AnalysisType = 'action' | 'game';
type AnalysisButtonVariant = 'active' | 'inactive';

type AnalysisButtonProps = {
  type: AnalysisType;
  variant?: AnalysisButtonVariant;
  className?: string;
  onClick?: () => void;
};

const AnalysisButton: React.FC<AnalysisButtonProps> = ({
  type,
  variant = 'inactive',
  className = '',
  onClick,
}) => {
  const isActive = variant === 'active';
  const label = type === 'action' ? '동작분석' : '경기분석';

  return (
    <div
      className={`border border-solid box-border content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[30px] shrink-0 w-[71px] cursor-pointer ${
        isActive
          ? 'border-[var(--primary,#e05321)]'
          : 'border-[#2d2d2d]'
      } ${className}`}
      onClick={onClick}
    >
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[42px]">
        <p
          className={`font-['Pretendard:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre ${
            isActive ? 'text-[orangered]' : 'text-[#888888]'
          }`}
        >
          {label}{' '}
        </p>
      </div>
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]">
        <div className="flex-none rotate-[270deg]">
          <DropdownIcon
            color={isActive ? 'red' : 'gray'}
            className="box-border content-stretch flex flex-col gap-[10px] h-[6px] items-start p-px relative w-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalysisButton;







