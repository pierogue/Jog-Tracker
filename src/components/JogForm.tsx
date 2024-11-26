import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  padding: 5rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 20vh auto 0 auto;
  background-color: var(--apple-green);
  border-radius: 44px;;

  label {
    margin: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p {
      font-size: 14px;
      margin: 0;
      min-width: 100px;
    }
  }
  
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 200px;
  }

  button {
    padding: 0.5rem;
    background-color: var(--baby-green);
    color: white;
    border: solid 1px var(--white-two);
    border-radius: 25.2px;
    cursor: pointer;
    margin: 1rem;
  }
`;

const JogForm: React.FC = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log({ distance, time, date });
  };

  return (
    <FormWrapper>
      <label>
        <p>Distance</p>
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <label>
        <p>Time</p>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        <p>Date</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Save</button>
    </FormWrapper>
  );
};

export default JogForm;
