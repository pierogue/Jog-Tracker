import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_inline.svg'
import filter from '../assets/filter.svg'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background-color: var(--apple-green);
  white-space: nowrap;
`;

const Logo = styled.img`
  height: 2.3rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  
  img {
    height: 1.2rem;
    margin: 0 1rem;
  }
  
  a {
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
  return (
    <HeaderWrapper>
      <Logo src={logo}></Logo>
      <NavLinks>
                <Link to="/jogs">JOGS</Link>
                <Link to="/info">INFO</Link>
                <a href={"https://yellow.systems/"}>CONTACT US</a>
                <img src={filter} alt={"filter"}/>
            </NavLinks>
      </HeaderWrapper>
  );
};

export default Header;
