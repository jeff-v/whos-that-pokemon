import React from 'react';
import { render, screen } from '@testing-library/react';
import Guesser from './guesser';
import axios from 'axios';

jest.mock('axios');
const axiosMock = axios as jest.Mocked<typeof axios>;

describe('<GameContainer />', () => {
  it('renders a sprite', async () => {
    axiosMock.get.mockResolvedValue(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png'
    );
    render(
      <Guesser
        sprite='not-a-real-api'
        name='a regular dog'
        setSuccess={() => undefined}
      />
    );
    expect(await screen.findByAltText('sprite')).toBeTruthy();
  });
});
