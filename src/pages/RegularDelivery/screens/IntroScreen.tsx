import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '@/components';
import { MainMenuTap } from '../components';

interface IProps {
  mainMenuClickedAt: string;
  onClickMainMenuToggle: (title: string) => void;
}

const IntroScreen: React.FC<IProps> = ({
  mainMenuClickedAt,
  onClickMainMenuToggle,
}) => {
  const [test, settest] = useState<any>(null);

  useEffect(() => {
    fetch('./test.html')
      .then((r) => {
        console.log(r);
        return r.text();
      })
      .then((t) => console.log(t));
  }, []);

  console.log();

  return (
    <>
      <STDBackBanner />
      <STDContainer>
        <Header />
        <MainMenuTap
          isClickedAt={mainMenuClickedAt}
          onClickMenuTapToggle={onClickMainMenuToggle}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: test }} /> */}
      </STDContainer>
    </>
  );
};

export default IntroScreen;

const STDBackBanner = styled.div`
  display: none;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: url('https://s3-purplestore.s3.ap-northeast-2.amazonaws.com/assets/banner_main.png');
  background-size: 1800px;
  background-color: #e9e9e9;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const STDContainer = styled.div`
  position: relative;
  max-width: 420px;
  min-height: 100vh;
  margin: 0 0 0 50%;
  background: #ffffff;
  zoom: 1.25;
`;
