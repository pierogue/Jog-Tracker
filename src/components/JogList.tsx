import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import jogIcon from '../assets/jog.svg';
// @ts-ignore
import addIcon from '../assets/add.svg';
import {Link} from "react-router-dom";

const FilterWrapper = styled.div`
  height: 3rem;
  padding: 0 25%;
  background-color: var(--white);
  display: flex;
  justify-content: center;
`;

const FilterOption = styled.label`
  margin:auto ;
  text-indent: 10px;
  input {
    width: 10vw;
    min-width: 100px;
    margin: 0 10px;
    height: 1.6rem;
    border-radius: 0.5rem;
    border: solid 1px gray;
  }
`

const JogListWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const JogItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1.4rem 0;
  .icon {
    width: 80px;
    height: 80px;
    margin-right: 2.8rem;
  }

  .details {
    font-size: 0.9rem;
    
    p {
      margin: 5px 0px;
      
      &.date {
        color: rgb(0, 0, 0, 0.5);
      }
    }
  }
`;

const AddButton = styled.img`
  position: fixed;
  bottom: 40px;
  right: 40px;
`

const jogs = [
  { date: '20.12.2017', speed: 15, distance: 10, time: 60 },
  { date: '20.12.2017', speed: 15, distance: 10, time: 60 },
  { date: '20.12.2017', speed: 15, distance: 10, time: 60 },
  { date: '20.12.2017', speed: 15, distance: 10, time: 60 },
  { date: '20.12.2017', speed: 15, distance: 10, time: 60 },
];

const JogList: React.FC = () => {
  return (
    <>
      <FilterWrapper>
        <FilterOption>
          Date from
          <input type={"date"}/>
        </FilterOption>
        <FilterOption>
          Date to
          <input type={"date"}/>
        </FilterOption>
      </FilterWrapper>
      <JogListWrapper>
        {jogs.map((jog, index) => (
          <JogItem key={index}>
            <img className="icon" src={jogIcon} alt={"Jog"}/>
            <div className="details">
              <p className={"date"}>{jog.date}</p>
              <p><b>Speed:</b> {jog.speed} km/h</p>
              <p><b>Distance:</b> {jog.distance} km</p>
              <p><b>Time:</b> {jog.time} min</p>
            </div>
          </JogItem>
        ))}
      </JogListWrapper>
      <Link to={'/form'}>
        <AddButton src={addIcon}/>
      </Link>
    </>
  );
};

export default JogList;
