import {Link} from "react-router-dom";
import React, {FC} from "react";
import styled from "styled-components";
import {toggleMenu} from "../store/menuSlice";
import {useDispatch} from "react-redux";

const MobileNavWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  padding-top: 100px;
  align-items: center;
  font-size: 25pt;
  position: fixed;
  background-color: var(--white-two);
  width: 100%;
  height: 100%;
  
  a {
    font-weight: bold;
    transition: 0.2s;
    text-decoration: none;
    
    &:hover {
      color: var(--apple-green);
    }
  }
`

const MobileNav: FC = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return(
    <MobileNavWrapper>
      <Link to="/jogs" onClick={handleToggleMenu}>JOGS</Link>
      <Link to="/info" onClick={handleToggleMenu}>INFO</Link>
      <a href={"https://yellow.systems/"}>CONTACT US</a>
    </MobileNavWrapper>

  )
}

export default MobileNav

