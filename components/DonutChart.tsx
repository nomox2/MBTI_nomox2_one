import React from 'react';

type DonutChartProps = {
  percentage: number;
  label?: string;
  size?: number;
  className?: string;
  outerRingColor?: string;
  innerRingColor?: string;
  showLabel?: boolean;
};

const DonutChart: React.FC<DonutChartProps> = ({
  percentage,
  label,
  size = 96,
  className = '',
  outerRingColor = '#FF4500',
  innerRingColor = '#2d2d2d',
  showLabel = true,
}) => {
  // 실제 이미지 소스는 디자인에 맞게 조정 필요
  const graphPurpleSrc = 'http://localhost:3845/assets/b7e9b746bc36b1530065d5a01b062dca430c056c.svg';
  const graphGreenSrc = 'http://localhost:3845/assets/efe69a1bea9f9ad12aa25aa55e5d43923ecb328a.svg';

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img
        alt=""
        className="block max-w-none size-full"
        src={graphPurpleSrc}
      />
      {showLabel && (
        <div className="absolute content-stretch flex flex-col items-center not-italic top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-['Pretendard:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[16px] text-[orangered] text-center w-full">
            {percentage}%
          </p>
          {label && (
            <div className="flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#888888] text-[10px] w-full">
              <p className="leading-[1.4]">{label}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DonutChart;







