import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import bear from '../assets/bear-face.svg';
import bearPurple from '../assets/bear-face-purple.svg';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: var(--white-two);

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: #ffb3ff;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: 350px;
    
    @media(max-width: 460px){
      background-color: var(--white-two);
      box-shadow: none;
    }
    
    .bear-icon-2 {
      margin-bottom: 1.5rem;
      
      display: none;
      @media(max-width: 460px){
        display: block;
      }
    }
    
    .bear-icon {
      margin-bottom: 1.5rem;
      
      @media(max-width: 460px){
        display: none;
      }
    }

    .button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      color: #ffffff;
      background-color: transparent;
      border: 2px solid var(--white-two);
      border-radius: 50px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
      
      @media(max-width: 460px){
        border: var(--baby-purple) 2px solid;
        color: var(--baby-purple);
      }
      &:hover {
        background-color: var(--white-two);
        color: var(--baby-purple);
        
        @media(max-width: 460px){
          background-color: var(--baby-purple);
          color: var(--white-two);
        }
      }
    }

  }
`;

const LoginPage: React.FC = () => {
  const auth = false;

  const navigate = useNavigate();

  useEffect(() => {
    if(auth) {
      navigate('/jogs')
    }
  }, []);

  return (
    <LoginWrapper>
      <div className="content">
        <img className="bear-icon" src={bear} alt={"Bearlogo"}/>
        <img className="bear-icon-2" src={bearPurple} alt={"Bearlogo"}/>
        <button className="button">Let me in</button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;
