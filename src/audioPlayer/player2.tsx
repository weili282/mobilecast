import React, { useState, useEffect, useRef } from "react";
import "./AudioPlayer.css";
import { useParams } from "react-router-dom";


function AudioPlayer() {
    const [episodeData, setEpisodeData] = useState([]);
    const [percentage, setPercentage] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState();
    const [speed, setSpeed] = useState(1);

    const audioRef = useRef();

    const onChange = (e) => {
        const audio = audioRef.current;
        audio.currentTime = (audio.duration / 100) * e.target.value;
        setPercentage(e.target.value);
    };

    const play = () => {
        const audio = audioRef.current;
        // audio.playbackRate = speed;
        audio.volume = 0.1;

        if (!isPlaying) {
            setIsPlaying(true);
            audio.play();
        }

        if (isPlaying) {
            setIsPlaying(false);
            audio.pause();
        }
    };

    const getCurrDuration = (e) => {
        const percent = (
            (e.currentTarget.currentTime / e.currentTarget.duration) *
            100
        ).toFixed(2);

        const time = e.currentTarget.currentTime;

        setPercentage(+percent);
        setCurrentTime(time.toFixed(2));
    };

    const changeSpeed = () => {
        if (speed >= 2) {
            setSpeed(0.5);
        } else setSpeed(speed + 0.5);
    };

    const skip = (time) => {
        const audio = audioRef.current;

        if (time == "back") {
            console.log("15");
            setCurrentTime(audio.currentTime - 15);
        } else if (time == "fwd") {
            console.log("15");
            setCurrentTime(audio.currentTime + 15);
        }
    };

    const { id } = useParams();

    const headers = { jwt_token: localStorage.token };

    useEffect(() => {
        axios
            .get(`/api/get/episodes/${id}`, { headers })
            .then((res) => setEpisodeData(res.data));
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        audio.playbackRate = speed;
    }, [speed]);

    return (
        <div>
            <Navbar />
            <div>
                <div style={{ width: "60%", margin: "0 auto", paddingTop: "10rem" }}>
                    <div className="app-container">
                        <h3 style={{ color: "#fff" }}>{episodeData.podcast_title}</h3>
                        <h3 style={{ color: "#fff" }}>{episodeData.episode_title}</h3>

                        <Slider percentage={percentage} onChange={onChange} />
                        <audio
                            ref={audioRef}
                            onTimeUpdate={getCurrDuration}
                            onLoadedData={(e) => {
                                setDuration(e.currentTarget.duration.toFixed(2));
                            }}
                            src={episodeData.episode_audio}
                        ></audio>
                        <ControlPanel
                            play={play}
                            isPlaying={isPlaying}
                            duration={duration}
                            currentTime={currentTime}
                        />
                        <button className="speed-button" onClick={() => changeSpeed()}>
                            {speed}x
                        </button>
                        <button onClick={() => skip("back")}>
                            BACK 15 SECONDS
                            <RiIcons.RiArrowGoBackLine color={"white"} size={16} />
                        </button>
                        <button onClick={() => skip("fwd")}>
                            <RiIcons.RiArrowGoForwardLine color={"white"} size={16} />
                            FORWARD 15 SECONDS
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;