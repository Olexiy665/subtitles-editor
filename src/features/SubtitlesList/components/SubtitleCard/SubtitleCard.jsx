import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";

import styles from "./SubtitleCard.module.scss";

export const SubtitleCard = ({ text, startTime, endTime }) => (
    <div className={styles.SubtitleCard}>
      <Paper elevation={3}>
        <p className={styles.Text}>{text}</p>
        <div className={styles.CardBottom}>
          <span className={styles.StartTime}>
            {new Date(startTime * 1000).toISOString().substr(11, 11)}
          </span>
          <span className={styles.EndTime}>
            {new Date(endTime * 1000).toISOString().substr(11, 11)}
          </span>
        </div>
      </Paper>
    </div>
  );

SubtitleCard.propTypes = {
  startTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
