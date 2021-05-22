import React from "react";

import { List } from "@material-ui/core";
import { SUBTITLES } from "../../constants/subtitles";
import SubtitleCard from "./components/SubtitleCard";

import styles from "./SubtitleList.module.scss";

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
