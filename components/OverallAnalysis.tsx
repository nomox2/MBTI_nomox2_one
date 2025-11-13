import React from 'react';
import AnalysisButton from './AnalysisButton';
import DonutChart from './DonutChart';

type OverallAnalysisProps = {
  actionPercentage?: number;
  gamePercentage?: number;
  className?: string;
};

const OverallAnalysis: React.FC<OverallAnalysisProps> = ({
  actionPercentage = 75,
  gamePercentage = 25,
  className = '',
}) => {
  return (
    <div className={`content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full ${className}`}>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
        <p className="font-['Pretendard:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white w-[320px]">
          종합분석
        </p>
        <div className="bg-[#2d2d2d] h-px shrink-0 w-[320px]" />
        <div className="h-[34px] relative shrink-0 w-[320px]">
          <p className="absolute font-['Pretendard:Regular',sans-serif] leading-[1.4] left-0 not-italic text-[#888888] text-[12px] top-0 w-[320px]">
            블라블라 종합분석을 통해 동작분석과 경기분석를 알아볼수 있습니다 블라블라블라블라
          </p>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
        <div className="h-[7px] relative shrink-0 w-px">
          <img
            alt=""
            className="block max-w-none size-full"
            src="http://localhost:3845/assets/ce5ba14f1f94c1f30614d726d7c574544897209d.svg"
          />
        </div>
        <DonutChart percentage={actionPercentage} size={130} showLabel={false} />
        <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[71px]">
            <AnalysisButton type="action" variant="active" />
            <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[26px] text-[orangered] text-center w-full">
              {actionPercentage}%
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[71px]">
            <AnalysisButton type="game" variant="inactive" />
            <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[26px] text-center text-white w-full">
              {gamePercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallAnalysis;







