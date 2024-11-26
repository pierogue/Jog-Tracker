import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// @ts-ignore
import sad from '../assets/sad-rounded-square-emoticon.svg';


const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  text-align: center;
  margin-top: 10rem;

  .icon {
    font-size: 100px;
    color: #cccccc;
    margin-bottom: 1rem;
  }

  .message {
    font-size: 1.2rem;
    color: #777;
    margin: 1.7rem 0;
  }

  .button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: var(--baby-purple);
    background-color: var(--white-two);
    border: 2px solid var(--baby-purple);
    border-radius: 50px;
    text-transform: uppercase;
    transition: 0.3s;
    text-decoration: none;
    margin-top: auto;
  }

  .button:hover {
    background-color: var(--baby-purple);
    color: var(--white-two);
  }
`;

const JogEmpty: React.FC = () => {
  return (
    <EmptyWrapper>
      <img src={sad} className="icon"/>
      <div className="message">Nothing is there</div>
      <Link to="/create-jog" className="button">
        Create your jog first
      </Link>
    </EmptyWrapper>
  );
};

export default JogEmpty;
