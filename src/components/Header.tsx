import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilter } from '../store/filterSlice';
import { toggleMenu } from '../store/menuSlice';
import { RootState } from '../store/store';

import logo from '../assets/logo_inline.svg'
import logoGreen from '../assets/logo_inline_green.svg'
import filter from '../assets/filter.svg'
import nofilter from '../assets/no_filter.svg'
import menu from '../assets/menu.svg'
import cancel from '../assets/cancel_gray.svg'

const HeaderWrapper = styled.div<{isMenuActive: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: ${({isMenuActive}) => !isMenuActive ? `var(--apple-green)` : 'var(--white-two)'};
  white-space: nowrap;
`;

const Logo = styled.img`
  height: 2.3rem;
  user-select: none;
`;

const NavLinks = styled.div<{isFilterActive: boolean}>`
  display: flex;
  flex-flow: row nowrap;
  
  img {
    height: 1.2rem;
    margin: 0 1rem;
    
    &.filter {
      outline: ${({isFilterActive}) => !isFilterActive ? `solid 2px #888` : 'none'};
      outline-offset: 4px;
      border-radius: 1px;
    }
    
    &.menu {
      display: none;
      @media(max-width: 460px){
        display: block;
      }
    }
    
  }
  
  a {
    @media(max-width: 460px){
      display: none;
    }
    
    margin: 0 1rem;
    font-size: 14px;
    color: white;
    text-decoration: transparent;
    transition: 0.2s;
    
    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
    }
  }
`;

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isFilterActive = useSelector((state: RootState) => state.filter.isFilterActive);
  const isMenuActive = useSelector((state: RootState) => state.menu.isMenuActive);

  const handleToggleFilter = () => {
    if (!isMenuActive){
      dispatch(toggleFilter());
    }
  };

  const handleToggleMenu = () => {
    if (isFilterActive){
      dispatch(toggleFilter());
    }
    dispatch(toggleMenu());
  }

  return (
    <>
      <HeaderWrapper isMenuActive={isMenuActive}>
        <Link to={"/"}>
          <Logo src={!isMenuActive ? logo : logoGreen}></Logo>
        </Link>
        <NavLinks isFilterActive={isFilterActive}>
          <Link to="/jogs">JOGS</Link>
          <Link to="/info">INFO</Link>
          <a href={"https://yellow.systems/"}>CONTACT US</a>
          <img className={"filter"} src={isFilterActive ? filter : nofilter} alt={"filter"} onClick={handleToggleFilter}/>
          <img className={"menu"} src={!isMenuActive ? menu : cancel} alt={"menu"} onClick={handleToggleMenu}/>
        </NavLinks>
      </HeaderWrapper>
    </>
  );
};

export default Header;
