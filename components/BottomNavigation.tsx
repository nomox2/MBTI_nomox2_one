import React from 'react';
import BottomNavItem from './BottomNavItem';

type NavItem = {
  id: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
};

type BottomNavigationProps = {
  items: NavItem[];
  className?: string;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  className = '',
}) => {
  return (
    <div className={`content-stretch flex items-center ${className}`}>
      {items.map((item) => (
        <BottomNavItem
          key={item.id}
          icon={item.icon}
          isActive={item.isActive}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default BottomNavigation;







