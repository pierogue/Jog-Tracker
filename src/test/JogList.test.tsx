import { render, screen } from '@testing-library/react';
import JogList from '../components/JogList';

import axios from 'axios';
// @ts-ignore
import MockAdapter from 'axios-mock-adapter';
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';

const mockAxios = new MockAdapter(axios);

describe('JogList Component', () => {

  beforeAll(() => {
    // Mock the API response
    mockAxios.onGet('https://jogs-tracker-production.up.railway.app/jogs').reply(200, {
      jogs: [
        { date: '2024-11-28', distance: 5000, time: 1800 },
        { date: '2024-11-27', distance: 6000, time: 2000 },
      ]
    });
  });

  it('renders correctly', () => {
    render(
      <Router>
        <JogList/>
      </Router>
    );
    const formLink = screen.getAllByRole("button")[0];
    expect(formLink.closest('a')).toHaveAttribute('href', '/');
  })


})
