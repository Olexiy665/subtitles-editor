import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import _debounce from "lodash.debounce";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Slider from "@material-ui/core/Slider";
import PauseIcon from "@material-ui/icons/Pause";
import styles from "./VideoPlayer.module.scss";
import mainVideo from "../../assets/videos/video.mp4";
import { updateDuration, updateCurrentTime } from "./videoPlayerSlice";
import { useDispatch, useSelector } from "react-redux";

export const VideoPlayer = () => {
  const [isPlaying, setVideoIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const rafIndex = useRef(null);
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const videoDuration = useSelector((state) => state.player.videoDuration);
  const storeCurrentTime = useSelector((state) => state.player.currentTime);

  console.log("here storeCurrent", storeCurrentTime);
  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    const currentPercent = (currentTime / videoDuration) * 100;
    // update slider position, only if  it has
    // significant changes (in current case -  1% )
    // do this for decrease re-renders
    if ( Math.abs(currentPercent - sliderValue) > 1) {
      setSliderValue(currentPercent);
    }
    if (Math.abs(storeCurrentTime - currentTime) > 0.5) {
        dispatch(updateCurrentTime({ currentTime, }));
    }
    console.log(currentTime, 'here');
  };

  const handleSliderChange = (e, nextValue) => {
    const percentage = nextValue / 100;
    if (videoRef.current) {
        videoRef.current.currentTime = videoDuration * percentage
     }

  };

  useEffect(() => {
 
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      if (!isNaN(duration)) {
        dispatch(updateDuration({ videoDuration: duration }));
      }
    }
  }, [videoRef.current]);

  const onPlayHandle = () => {
    setVideoIsPlaying(true);
  };
  const onPauseHandle = () => {
    setVideoIsPlaying(false);
  };

  const playVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className={styles.VideoPlayerWrapper}>
      <div className={styles.VideoWrapper}>
        <video
          onPlay={onPlayHandle}
          onPauseCapture={onPauseHandle}
          onTimeUpdate={handleTimeUpdate}
          ref={videoRef}
          src={mainVideo}
          controls={false}
        >
          <track kind="captions" />
        </video>
        <div className={styles.VideoControl}>
          <IconButton
            className={styles.PlayButton}
            size="medium"
            color="primary"
            onClick={playVideoToggle}
          >
            {isPlaying ? (
              <PauseIcon fontSize="14px" />
            ) : (
              <PlayArrowIcon fontSize="14px" />
            )}
          </IconButton>
          <div className={styles.SliderWrapper}>
            <Slider
              value={sliderValue}
              onChange={_debounce(handleSliderChange, 250)}
              aria-labelledby="continuous-slider"
              max={100}
              min={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {};
