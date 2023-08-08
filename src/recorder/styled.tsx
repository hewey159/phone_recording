import { AudioRecorder } from 'react-audio-voice-recorder'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Circle } from './circle'



export const RecorderWrapper = styled.div`
`

export const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    width: 80%;
    height: 10%;
    max-width: 100%;
`

export const StyledCircle = styled(Circle)`
    margin: auto;
    width: 50%;
`
export const StyledAudioInput = styled.input`

`

