import React from 'react';
import styled from 'styled-components';
import { mixin } from '@/styles';
import svg from '@/svgs';

interface IProps {
  toggleSidebar?(): void;
  cartCount?: number;
}

export const Header: React.FC<IProps> = () => {
  return (
    <STDContainer>
      <STDTopLeftContainer>
        <button>{svg.hamburger}</button>
        <STDLogo href="/">{svg.purpleLogo}</STDLogo>
      </STDTopLeftContainer>
      <div>
        <button>{svg.search}</button>
        <STDCartButton>{svg.cart}</STDCartButton>
      </div>
    </STDContainer>
  );
};

const STDContainer = styled.header`
  ${mixin.flexSet('space-between')}
  padding: 6px 20px;
`;

const STDTopLeftContainer = styled.div`
  ${mixin.flexSet()}
`;

const STDLogo = styled.a`
  padding: 11px 4px;
`;

const STDCartButton = styled.button`
  margin-left: 6px;
`;
