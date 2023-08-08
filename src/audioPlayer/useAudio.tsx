import { useState, useEffect, useMemo } from "react";


const useAudio = (audioSrc: any) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useMemo(() => {
        const audio = new Audio(audioSrc);
        audio.preload = "auto"; // Load only metadata

        audio.addEventListener("durationchange", () => {
            setDuration(audio.duration);
        });

        // audio.addEventListener("timeupdate", () => {
        //     setTrackProgress(audio.currentTime)
        // });

        return audio;
    }, [audioSrc]);

    const startTimer = () => {
        if (isPlaying) {
            audioRef.play();
        } else {
            audioRef.pause();
        }
    };

    useEffect(() => {
        audioRef.currentTime = trackProgress;
    }, [trackProgress, audioRef]);

    useEffect(() => {
        startTimer();
        return () => {
            audioRef.pause();
        };
    }, [isPlaying, audioRef]);

    return { isPlaying, setIsPlaying, trackProgress, duration, setTrackProgress };
};

export default useAudio;