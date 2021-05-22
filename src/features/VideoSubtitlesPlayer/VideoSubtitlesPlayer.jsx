import React from 'react';

import VideoPlayer from '../VideoPlayer';
import styles from './VideoSubtitlesPlayer.module.scss';

export const VideoSubtitlesPlayer = () => (
        <div className={styles.VideoSubtitlesPlayerWrapper } >
            <VideoPlayer />
        </div>
    );

VideoSubtitlesPlayer.propTypes = {
    
};

