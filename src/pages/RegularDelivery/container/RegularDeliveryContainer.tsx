import React, { useState } from 'react';
import IntroScreen from '../screens/IntroScreen';

export const RegularDeliveryContainer = () => {
  const [mainMenuClickedAt, setMainMenuClickedAt] = useState('홈');

  const onClickMainMenuToggle = (title: string) => {
    setMainMenuClickedAt(title);
  };

  return (
    <IntroScreen
      mainMenuClickedAt={mainMenuClickedAt}
      onClickMainMenuToggle={onClickMainMenuToggle}
    />
  );
};
