import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import MoreButton from './MoreButton';

const StyledHeader = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: column;
  width: 100%;
  padding: 15px 20px;
  -webkit-backdrop-filter: initial;
  backdrop-filter: initial;
  background: rgba(22, 22, 22, 0.8);
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);
  max-height: ${(props) => (props.open ? '358px' : `var(--header-title-height)`)};
  transition: max-height 0.5s ease, padding 0.5s ease;
  transition: max-height 320ms cubic-bezier(0.4, 0, 0.6, 1) 0s;
  -webkit-transition: 320ms cubic-bezier(0.4, 0, 0.6, 1) 0s;

  @supports ((-webkit-backdrop-filter: initial) or
  backdrop-filter: initial)) {
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter:saturate(180%) blur(20px);
  }
`;

const StyledTitleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`;

const StyledTitle = styled.a`
  color: white;
  font-size: var(--header-title-font-size);
  font-weight: 500;
  letter-spacing: 0.228px;
  -webkit-transition: color .24s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition: color .24s cubic-bezier(0.28, 0.11, 0.32, 1);
  align-self: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const StyledNavButton = styled.button`
  background: none;
  border: none;
  align-self: center;
`;

const StyledNavList = styled.nav`
  margin-bottom: var(--header-nav-trailing);
  margin-top: var(--header-title-nav-gap);
  transition: opacity 0.7s ease, padding 0.7s ease;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: visibility 0s linear 0s;
  transition-delay: ${(props) => (props.open ? '0.25s' : '0s')};

  ul {
    list-style-type: none;
  }
`;

const StyledItem = styled.li`
  font-size: var(--header-nav-font-siz);
  font-weight: 300;
  padding-left: var(--header-item-bar-gap);
  line-height: 1.1;
  margin-bottom: var(--header-nav-item-gap);
  cursor: pointer;
  color: ${(props) => (props.selected ? 'white' : '#d1d1d1')};
  border-left: ${(props) => (props.selected ? '1px solid white' : 'none')};
  width: fit-content;

  :hover {
    color: white;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

function Header({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [selection, setSelection] = useState(0);
  const headerObj = useRef(null);

  useEffect(() => {
    const detectCloseNav = (event) => {
      if (showNav) {
        const height = headerObj ? headerObj.current.clientHeight : 0;
        if (event.clientY > height) {
          setShowNav(false);
        }
      }   
    }

    window.addEventListener('click', detectCloseNav);
  })

  return (
    <StyledHeader ref={headerObj} open={showNav}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { showNav, setShowNav, selection, setSelection });
      })}
    </StyledHeader>
  )
}

function Title({ children, showNav, setShowNav }) {
  return (
    <StyledTitleSection>
      <StyledTitle className='title' href='/'>
        {children}
      </StyledTitle>
      <StyledNavButton onClick={() => setShowNav(!showNav)}>
        <MoreButton toggleFunction={setShowNav} />
      </StyledNavButton>
    </StyledTitleSection>
  )
}

function NavList({ children, showNav, selection, setSelection, setShowNav }) {
  return (
    <>
      <StyledNavList open={showNav}>
        <ul className={'nav-list'} open={showNav}>
          {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { index, selection, setSelection, setShowNav });
        })}
        </ul>
      </StyledNavList>
    </>
  )
}

function Item({ children, index, selection, setSelection, setShowNav }) {
  return (
    <StyledItem 
      className={'nav-item-' + index}
      onClick={() => {setSelection(index), setShowNav(false)}}
      selected={selection === index}
    >
      {children} 
    </StyledItem>
  )
}

Header.Title = Title;
Header.Nav = NavList;
Header.Nav.Item = Item;

export default Header;