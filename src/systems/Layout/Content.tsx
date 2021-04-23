import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Spinner } from '@/components';
import { zoom } from '@/styles';
import Sidebar from '../Sidebar/Sidebar';
import Toast from '../Toast/Toast';

interface IProps {
  content: any;
  fetchCategoryList?: (title: string) => void;
  categories?: any;
  toggleBodyStyle?: any;
  cartCount?: any;
  isLoading?: any;
}

const Content: React.FC<IProps> = ({
  content,
  fetchCategoryList,
  categories,
  toggleBodyStyle,
  cartCount,
  isLoading,
}) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    fetchCategoryList && fetchCategoryList('DOG');
    return () => {
      unlisten();
    };
  }, []);

  const [isSidebarOpened, toggleSidebar] = useState(false);

  useEffect(() => {
    toggleSidebar(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (isSidebarOpened) {
      toggleBodyStyle(true);
    } else {
      toggleBodyStyle(false);
    }
  });

  const closeSidebar = () => {
    toggleSidebar(false);
  };

  return (
    <>
      <STDContentWrap>
        <Header
          toggleSidebar={() => toggleSidebar(!isSidebarOpened)}
          cartCount={cartCount}
        />
        <_STDContent>{content}</_STDContent>
        <Spinner isLoading={isLoading} />
        <Toast />
        <Sidebar
          isOpened={isSidebarOpened}
          closeSidebar={closeSidebar}
          changeCategory={(petType: string) =>fetchCategoryList && fetchCategoryList(petType)}
          categories={categories}
        />
      </STDContentWrap>
    </>
  );
};

export default Content;

const STDContentWrap = styled.div`
  // TODO : sidebar 크롭 처리 위해 추가, 이슈 있으면 다른 방법 필요
  // overflow: hidden;
  // position: relative;
  @media (min-width: 1024px) {
    position: relative;
    max-width: 420px;
    min-height: 100%;
    margin: 0 0 0 50%;
    background: #fff;
    zoom: ${zoom};
  }
`;

// for fixed header
const _STDContent = styled.div`
  position: relative;
  // padding-top: 52px;
`;
