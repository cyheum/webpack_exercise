import React from 'react';

interface IProps {
  isOpened: boolean;
  closeSidebar(): void;
  changeCategory(petType: string): void;
  categories: any;
}

const Sidebar: React.FC<IProps> = () => {
  return <div></div>;
};

export default Sidebar;
