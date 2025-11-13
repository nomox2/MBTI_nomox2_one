import React from 'react';

type DropdownIconProps = {
  className?: string;
  color?: 'white' | 'gray' | 'red';
};

const DropdownIcon: React.FC<DropdownIconProps> = ({
  className = '',
  color = 'white',
}) => {
  const colorMap = {
    white: 'rgba(255, 255, 255, 1)',
    gray: 'rgba(136, 136, 136, 1)',
    red: 'rgba(224, 83, 33, 1)',
  };

  // SVG 경로는 실제 아이콘에 맞게 수정 필요
  const iconSrc = 'http://localhost:3845/assets/fd7471762db848fafb347d208e06f2eafd41a0dc.svg';

  return (
    <div className={`box-border content-stretch flex flex-col gap-[10px] items-start p-px relative w-[10px] ${className}`}>
      <div className="h-[4px] relative shrink-0 w-[8px]">
        <div
          className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]"
          style={{ '--stroke-0': colorMap[color] } as React.CSSProperties}
        >
          <img alt="" className="block max-w-none size-full" src={iconSrc} />
        </div>
      </div>
    </div>
  );
};

export default DropdownIcon;

