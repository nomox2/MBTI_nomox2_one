import React from 'react';

type BottomNavItemProps = {
  icon: React.ReactNode;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
};

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  icon,
  isActive = false,
  className = '',
  onClick,
}) => {
  return (
    <div
      className={`bg-black box-border content-stretch flex gap-[10px] h-[56px] items-center justify-center px-[21px] py-[11px] relative shrink-0 w-[90px] cursor-pointer ${
        isActive ? 'border border-[var(--primary,#e05321)]' : ''
      } ${className}`}
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

export default BottomNavItem;







