import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffb3ff;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

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
  return (
    <LoginWrapper>
      <div className="content">
        <div className="bear-icon">🐻</div>
        <button className="button">Let me in</button>
      </div>
    </LoginWrapper>
  );
};

export default LoginPage;
