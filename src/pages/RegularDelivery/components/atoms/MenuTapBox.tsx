import React from 'react';
import styled, { css } from 'styled-components';

interface IStyle {
  fontColor: string;
  fontWeight: string | number;
  isClicked: boolean;
}

interface IProps extends IStyle {
  text: string;
  onClickMenuTapToggle: () => void;
}

const MenuTapBox: React.FC<IProps> = ({
  fontColor,
  fontWeight,
  text,
  isClicked,
  onClickMenuTapToggle,
}) => {
  return (
    <STDContainer
      fontColor={fontColor}
      fontWeight={fontWeight}
      isClicked={isClicked}
      onClick={onClickMenuTapToggle}
    >
      {text}
    </STDContainer>
  );
};

export default MenuTapBox;

const STDContainer = styled.button<IStyle>`
  font-size: 16px;
  line-height: 26px;

  ${({ fontColor, fontWeight, isClicked, theme }) => css`
    color: ${fontColor};
    font-weight: ${fontWeight};
    ${isClicked &&
    css`
      border-bottom: 3px solid ${theme.color.purple[500]};
    `}
  `}

  &:hover {
    ${({ theme: { color } }) => css`
      color: ${color.purple[500]};
      font-weight: bold;
      border-bottom: 3px solid ${color.purple[500]};
    `}
  }
`;
