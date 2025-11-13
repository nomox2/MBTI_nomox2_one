import React from 'react';
import AnalysisButton from './AnalysisButton';
import DropdownIcon from './icons/DropdownIcon';

type AnalysisType = 'action' | 'game';

type AnalysisSectionHeaderProps = {
  title: string;
  activeType?: AnalysisType;
  isExpanded?: boolean;
  onToggle?: () => void;
  onAnalysisTypeChange?: (type: AnalysisType) => void;
  className?: string;
};

const AnalysisSectionHeader: React.FC<AnalysisSectionHeaderProps> = ({
  title,
  activeType = 'action',
  isExpanded = false,
  onToggle,
  onAnalysisTypeChange,
  className = '',
}) => {
  return (
    <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ${className}`}>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
            {title}
          </p>
          <button
            onClick={onToggle}
            className="bg-black box-border content-stretch flex flex-col gap-[10px] items-start p-px relative shrink-0 w-[10px] cursor-pointer transition-transform"
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <DropdownIcon color="white" />
          </button>
        </div>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <AnalysisButton
            type="action"
            variant={activeType === 'action' ? 'active' : 'inactive'}
            onClick={() => onAnalysisTypeChange?.('action')}
          />
          <AnalysisButton
            type="game"
            variant={activeType === 'game' ? 'active' : 'inactive'}
            onClick={() => onAnalysisTypeChange?.('game')}
          />
        </div>
      </div>
      <div className="bg-[#2d2d2d] h-px shrink-0 w-full" />
    </div>
  );
};

export default AnalysisSectionHeader;

