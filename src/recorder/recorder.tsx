import { useEffect, useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import ReactPlayer from 'react-player';
import { RecorderWrapper, StyledCircle, StyledReactPlayer } from './styled';
import { Audio } from 'react-loader-spinner'
import AudioPlayer from '../audioPlayer/AudioPlayer';
import NiceFileInputButton from './inputAudioButton';


export const Recorder = () => {
  const [recording, setRecording] = useState<string>("");

  const audiohook = useAudioRecorder();


  useEffect(() => {
    if (audiohook.recordingBlob) {
      const url = URL.createObjectURL(audiohook.recordingBlob);
      console.log(url);
      setRecording(url);
    }
  }, [audiohook.recordingBlob])

  const fileChanged = (file: any) => {
    setRecording(URL.createObjectURL(file));
    console.log(file)
  };
  return (
    <RecorderWrapper>
      <StyledCircle recording={audiohook.isRecording} onClick={() => { audiohook.isRecording ? audiohook.stopRecording() : audiohook.startRecording(); }} />
      {recording && <AudioPlayer track={{
        title: "Cali",
        artist: "Wataboi",
        audioSrc: recording,
        image: 'any',
        color: "#00aeb0"
      }} />}
      <NiceFileInputButton onFileChange={fileChanged} />
    </RecorderWrapper>
  )
}