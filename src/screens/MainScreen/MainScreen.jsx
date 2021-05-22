import React from 'react';
import styles from './MainScreen.module.scss';
import VideoSubtitlesPlayer from '../../features/VideoSubtitlesPlayer';
// import PropTypes from 'prop-types';

export const MainScreen = () => (
        <div className={styles.MainScreen}>
           <VideoSubtitlesPlayer />
        </div>
    );

MainScreen.propTypes = {
    
};

