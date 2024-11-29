import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import jogIcon from '../assets/jog.svg';
import addIcon from '../assets/add.svg';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import Auth from "../auth/auth";
import axios from "axios";
import {jogDto} from "../dto/jogDto";

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
    padding: 0 10px;
  }
`

const JogListWrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media(max-width: 460px){
    padding: 0 2rem;
  }

  .separator {
    width: 100vw;
    height: 0.1rem;
    background-color: var(--white);

    @media(min-width: 460px){
      display: none;
    }
  }
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
    white-space: nowrap;

    p {
      margin: 5px 0;

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

const JogList: React.FC = () => {
  const isFilterActive = useSelector((state: RootState) => state.filter.isFilterActive);
  const [fromDate, setFromDate] = useState<string>('');
  const [toDate, setToDate] = useState<string>('');
  const auth = new Auth();
  const [jogs, setJogs] = useState<jogDto[]>([]);
  const [filtered, setFiltered] = useState<jogDto[]>([]);


  const fetchJogs = async () =>{
    const token = auth.getToken();
    if(token){
      const API_URL = 'https://jogs-tracker-production.up.railway.app/jogs';

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.jogs;
    }
  }
  useEffect(() => {
    (async () => {
      setJogs(await fetchJogs());
      setFiltered(jogs);
    })()
  }, []);

  useEffect(() => {
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    const filteredJogs = jogs.filter((jog) => {
      const jogDate = new Date(jog.date);
      return (
        (!from || jogDate >= from) &&
        (!to || jogDate <= to)
      );
    });

    setFiltered(filteredJogs);
  }, [jogs, fromDate, toDate]);

  return (
    <>
      {
        isFilterActive ?
          <FilterWrapper>
            <FilterOption>
              Date from
              <input value={fromDate} type={"date"} className={"fromDate"}  onChange={(e) => {
                setFromDate(e.target.value);
              }}/>
            </FilterOption>
            <FilterOption>
              Date to
              <input value={toDate} type={"date"} className={"toDate"} onChange={(e) => {
                setToDate(e.target.value);
              }}/>
            </FilterOption>
          </FilterWrapper>
        :
          <></>
      }
      <JogListWrapper>
        {(isFilterActive ? filtered : jogs).map((jog, index) => (
          <>
            <JogItem key={index}>
              <img className="icon" src={jogIcon} alt={"Jog"}/>
              <div className="details">
                <p className={"date"}>{new Date(jog.date).toLocaleDateString()}</p>
                <p><b>Distance:</b> {Number(jog.distance / 1000).toFixed(2)} km</p>
                <p><b>Time:</b> {Number(jog.time / 3600).toFixed(2)} min</p>
              </div>
            </JogItem>
            <div className={"separator"}></div>
          </>
        ))}
      </JogListWrapper>
      <Link to={'/form'} role={"button"}>
        <AddButton src={addIcon}/>
      </Link>
    </>
  );
};

export default JogList;
