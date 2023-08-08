import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Recorder } from './recorder/recorder';
import AudioPlayer from './audioPlayer/AudioPlayer';

function App() {
  return (
    <div className="App">
      <Recorder />
    </div>
  );
}

export default App;


// https://stackblitz.com/edit/vitejs-vite-yzkflx?file=src%2FAudioPlayer.tsx