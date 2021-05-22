import React, { useEffect, useState } from "react";

import IntervalTree from "@flatten-js/interval-tree";

import { useSelector } from "react-redux";
import { SUBTITLES } from "../../constants/subtitles";
import styles from "./SubtitlesPlayer.module.scss";

export const SubtitlesPlayer = () => {
  const storeCurrentTime = useSelector((state) => state.player.currentTime);
  const [normalizedTree, setNormalizedTree] = useState(new IntervalTree());
  useEffect(() => {
    const tree = new IntervalTree();
    SUBTITLES.forEach((item) => {
      tree.insert([item.startTime, item.endTime], item.text);
    });
    setNormalizedTree(tree);
  }, []);
  const searchResults = normalizedTree.search([
    storeCurrentTime,
    storeCurrentTime,
  ]);

  return (
    <div className={styles.SubtitlesWrapper}>
      {searchResults.map((item) => (
        <div className={styles.SubtitleItem}>{item}</div>
      ))}
    </div>
  );
};

SubtitlesPlayer.propTypes = {};
