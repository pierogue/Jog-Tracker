import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import bear from '../assets/bear-face.svg'

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: #ffffff;

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
    
    .bear-icon {
      font-size: 4rem;
      color: #ffffff;
      margin-bottom: 1.5rem;
    }

    .button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      color: #ffffff;
      background-color: transparent;
      border: 2px solid #ffffff;
      border-radius: 50px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s;
    }

    .button:hover {
      background-color: #ffffff;
      color: #ffb3ff;
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
        <button className="button">Let me in</button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;
