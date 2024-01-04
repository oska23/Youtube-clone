import styles from "./VideoTitle.module.css";

const VideoTitle = ({ titlename }) => {
  return <div className={styles.hoursOfBirds}>{titlename}</div>;
};

export default VideoTitle;
