import React, { useState } from 'react';
import styled from 'styled-components';
import Content from '@/systems/Layout/Content';
import { Switch } from 'react-router';
import { GlobalStyle, device } from '@/styles';

function Layout({ children }: { children: any }) {
  const [overflowHidden, toggleBodyStyle] = useState(false);

  return (
    <>
      <STDBackground />
      <Content content={children} toggleBodyStyle={toggleBodyStyle} />
      <GlobalStyle overflowHidden={overflowHidden} />
    </>
  );
}

export default Layout;

const STDBackground = styled.div`
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

  @media ${device.laptop} {
    display: block;
  }
`;
