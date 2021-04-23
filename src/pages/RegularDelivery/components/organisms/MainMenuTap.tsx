import React from 'react';
import styled from 'styled-components';
import MenuTapBox from '../atoms/MenuTapBox';
import { color, mixin } from '@/styles';

interface IProps {
  isClickedAt: string;
  onClickMenuTapToggle: (text: string) => void;
}

export const MainMenuTap: React.FC<IProps> = ({
  isClickedAt,
  onClickMenuTapToggle,
}) => {
  return (
    <STDContainer>
      {MENU_TAP.map(({ title, fontWeight }) => {
        const isClicked = isClickedAt === title;

        return (
          <MenuTapBox
            fontColor={isClicked ? color.purple[500] : color.gray[400]}
            fontWeight={isClicked ? 'bold' : fontWeight}
            text={title}
            isClicked={isClicked}
            onClickMenuTapToggle={() => onClickMenuTapToggle(title)}
          />
        );
      })}
    </STDContainer>
  );
};

const MENU_TAP = [
  { title: '홈', fontWeight: 'normal' },
  { title: '정기배송', fontWeight: 'bold' },
  { title: 'HOT50', fontWeight: 'normal' },
  { title: 'NEW50', fontWeight: 'normal' },
  { title: '마감세일', fontWeight: 'normal' },
];

const STDContainer = styled.div`
  ${mixin.flexSet('space-between')}
  padding: 5px 17px;
  margin-top: 13px;
`;
