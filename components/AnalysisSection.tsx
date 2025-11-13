import React, { useState } from 'react';
import AnalysisSectionHeader from './AnalysisSectionHeader';
import DonutChart from './DonutChart';

type AnalysisType = 'action' | 'game';

type ChartData = {
  percentage: number;
  label: string;
};

type AnalysisSectionProps = {
  title: string;
  charts?: ChartData[];
  defaultExpanded?: boolean;
  className?: string;
};

const AnalysisSection: React.FC<AnalysisSectionProps> = ({
  title,
  charts = [],
  defaultExpanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [activeType, setActiveType] = useState<AnalysisType>('action');

  return (
    <div className={`content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full ${className}`}>
      <AnalysisSectionHeader
        title={title}
        activeType={activeType}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
        onAnalysisTypeChange={setActiveType}
      />
      {isExpanded && charts.length > 0 && (
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          {charts.map((chart, index) => (
            <DonutChart
              key={index}
              percentage={chart.percentage}
              label={chart.label}
              size={96}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnalysisSection;







