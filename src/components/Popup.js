import styles from "./Popup.module.css";

const Popup = ({ onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <button className={styles.approve2Parent}>
            <div className={styles.approve2}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>567</div>
            </div>
          </button>
          <button className={styles.approve2Parent}>
            <div className={styles.approve1}>
              <img className={styles.groupIcon1} alt="" src="/group@2x.png" />
            </div>
            <div className={styles.dislikeWrapper}>
              <div className={styles.dislike}>Dislike</div>
            </div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <button className={styles.shareoutlineParent}>
            <div className={styles.shareoutline}>
              <img className={styles.vectorIcon} alt="" src="/vector7@2x.png" />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameWrapper}>
                <div className={styles.dislike}>Share</div>
              </div>
            </div>
          </button>
          <button className={styles.downloadAltoutlineParent}>
            <div className={styles.downloadAltoutline}>
              <img
                className={styles.vectorIcon1}
                alt=""
                src="/vector8@2x.png"
              />
            </div>
            <div className={styles.downloadWrapper}>
              <div className={styles.dislike}>Download</div>
            </div>
          </button>
        </div>
        <button className={styles.frameButton}>
          <div className={styles.bookmarkFullsolidParent}>
            <div className={styles.bookmarkFullsolid}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector9@2x.png"
              />
            </div>
            <div className={styles.downloadWrapper}>
              <div className={styles.bookmark}>Bookmark</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Popup;
