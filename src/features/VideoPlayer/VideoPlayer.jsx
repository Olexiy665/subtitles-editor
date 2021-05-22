import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import styles from "./VideoPlayer.module.scss";
import mainVideo from "../../assets/videos/video.mp4";

export const VideoPlayer = () => {
  const [isPlaying, setVideoIsPlaying] = useState(false);
  return (
    <div className={styles.VideoPlayerWrapper}>
      <div className={styles.VideoWrapper}>
        <video src={mainVideo} controls={false}>
          <track kind="captions" />
        </video>
        <div className={styles.VideoControl}>
          <IconButton className={styles.PlayButton} size="medium" color="primary" >
            <PlayArrowIcon fontSize="14px" />{" "}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {};
