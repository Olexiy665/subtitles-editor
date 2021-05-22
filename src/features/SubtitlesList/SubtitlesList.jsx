import React from "react";
import PropTypes from "prop-types";
import styles from "./SubtitleList.module.scss";

import { ListItem, List } from "@material-ui/core";
import { SUBTITLES } from "../../constants/subtitles";
import SubtitleCard from "./components/SubtitleCard";

const SubtitlesList = () => (
  <div className={styles.SubtitlesList}>
    <List>
      {SUBTITLES.map(({ text, startTime, endTime }) => (
        <SubtitleCard
          key={`${String(startTime)}-${String(endTime)}`}
          text={text}
          startTime={startTime}
          endTime={endTime}
        />
      ))}
    </List>
  </div>
);

SubtitlesList.propTypes = {};

export default SubtitlesList;
