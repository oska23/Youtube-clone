import ViewCounter from "./ViewCounter";
import styles from "./ViewandActions.module.css";

const ViewandActions = ({ viewcounter }) => {
  return (
    <div className={styles.frameParent}>
      <ViewCounter
        views="1,094,526 "
        vieworviews="Views "
        datecreated="May 25, 2018"
      />
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <button className={styles.approve2Parent}>
            <img
              className={styles.approve2Icon}
              alt=""
              src="/approve-2@2x.png"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>{viewcounter}</div>
            </div>
          </button>
          <button className={styles.approve1Parent}>
            <img
              className={styles.approve1Icon}
              alt=""
              src="/approve-1@2x.png"
            />
            <div className={styles.dislikeWrapper}>
              <div className={styles.dislike}>Dislike</div>
            </div>
          </button>
        </div>
        <div className={styles.frameDiv}>
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
      <button className={styles.icon}>
        <img className={styles.ytpId43} alt="" src="/ytp-id-43@2x.png" />
      </button>
    </div>
  );
};

export default ViewandActions;
