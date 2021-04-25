import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';
jest.mock('axios');

const axiosMock = axios as jest.Mocked<typeof axios>;

describe('<App />', () => {
  // mock the pikachu sound effect since mp3 playback isn't supported by jsdom
  window.HTMLMediaElement.prototype.play = async () => undefined;
  it('shows a message when an error occurs', async () => {
    axiosMock.get.mockRejectedValue('');

    render(<App />);
    fireEvent.click(screen.getByTestId('get-new-pokemon'));

    expect(
      await screen.findByText('Oh no, Team Rocket messed up our GET request!')
    ).toBeTruthy();
  });
});
