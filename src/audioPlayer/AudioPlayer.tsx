import React from "react";
import useAudio from "./useAudio";
import AudioControls from "./AudioControls";
import "./styles.css";

const AudioPlayer = ({ track }: any) => {
    const { audioSrc } = track;
    const { isPlaying, setIsPlaying, trackProgress, duration, setTrackProgress } = useAudio(audioSrc);

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

    const onScrub = (value: any) => {
        setIsPlaying(false);
        setTrackProgress(value);
    };

    const onScrubEnd = () => {
        setIsPlaying(false);
    };

    return (
        <div className="audio-player">
            <div className="track-info">
                <AudioControls
                    isPlaying={isPlaying}
                    onPlayPauseClick={setIsPlaying}
                />
                <input
                    type="range"
                    value={trackProgress}
                    step="0.1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
                />
            </div>
            <p>{duration}</p>
        </div>
    );
};

export default AudioPlayer;