import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { mixin } from '@/styles';
import { IconSpinner } from '@svg';

const animation = keyframes`
  0% {
    transform: translateX(0) rotate(0) scale(0)
  } 25% {
    transform: translateX(10rem) rotate(180deg)
  } 50% {
    transform: translateX(0) rotate(360deg) scale(1.5)
  } 75% {
    transform: translateX(-10rem) rotate(540deg)
  } 100% {
    transform: translateX(0) rotate(0) scale(0)
  }
`;

const STDTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const STDInputWrapper = styled.form`
  ${mixin.flexSet()}
`;

const STDInputText = styled.input`
  max-width: 20rem;
  padding: 0.75rem 1.25rem;
  border-radius: 5px;
  margin-right: 1rem;
`;

const STDAddButton = styled.button``;

const STDItemList = styled.ul`
  text-align: center;

  li {
    margin-bottom: 0.25rem;
    text-decoration: none;
    font-size: 1rem;
    list-style: none;
    line-height: 1.25rem;

    > button {
      margin-left: 1rem;
    }
  }
`;

const STDImgWrapper = styled.div`
  ${mixin.flexSet('space-around')}
  margin-bottom: 1.25rem;

  svg {
    width: 2.25rem;
    height: 2.25rem;
    object-fit: contain;
    animation: ${animation} 3s linear infinite;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
  }
`;

const STDRandomStartButtonWrapper = styled.div`
  ${mixin.flexSet()}

  button {
    padding: 0.75rem 1.25rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const STDResult = styled.p`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;

  button {
    margin-left: 2rem;
  }
`;

const Random: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState('');
  const [result, setResult] = useState('');

  const onClickRandomStart = () => {
    const a =
      (window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296) *
      items.length;
    const resultIndex = Math.floor(a);
    setResult(items[resultIndex] ?? '');
  };

  return (
    <div>
      <STDTitle>랜덤뽑기!</STDTitle>
      <STDImgWrapper>
        <IconSpinner />
      </STDImgWrapper>
      <STDInputWrapper onClick={(e) => e.preventDefault()}>
        <STDInputText onChange={(e) => setItem(e.target.value)} value={item} />
        <STDAddButton
          onClick={() => {
            const newItems = [...items, item];
            setItems(newItems);
            setItem('');
          }}
        >
          추가
        </STDAddButton>
      </STDInputWrapper>
      <STDItemList>
        {items.map((item, i) => (
          <li key={item + i}>
            {i + 1}. {item}
            <button
              onClick={() => {
                const newItems = [...items];
                newItems.splice(i, 1);
                setItems(newItems);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </STDItemList>
      <STDRandomStartButtonWrapper>
        <button onClick={onClickRandomStart}>랜덤 스타트!</button>
      </STDRandomStartButtonWrapper>
      {result && (
        <STDResult>
          당첨: {result}
          <button
            onClick={() => {
              setResult('');
              setItems([]);
            }}
          >
            초기화
          </button>
        </STDResult>
      )}
    </div>
  );
};

export default Random;
