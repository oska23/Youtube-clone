import styles from "./Videocard.module.css";

const Videocard = ({
  thumbnail,
  viewcardtitle,
  channelname,
  showVectorIcon = true,
  viewscounter,
  dateposted,
  yearsAgo,
}) => {
  return (
    <div className={styles.frameParent}>
      <img className={styles.frameChild} alt="" src={thumbnail} />
      <div className={styles.natureSoundsInTheForestParent}>
        <h1 className={styles.natureSoundsIn}>{viewcardtitle}</h1>
        <div className={styles.frameGroup}>
          <div className={styles.textParent}>
            <h2 className={styles.text}>{channelname}</h2>
            <div className={styles.iconText}>
              <div className={styles.checkCircle}>
                {!showVectorIcon && (
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector10@2x.png"
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.mViewsWrapper}>
                <div className={styles.mViews}>{viewscounter}</div>
              </div>
              <div className={styles.mViewsContainer}>
                <div className={styles.mViews}> views</div>
              </div>
            </div>
            <div className={styles.leftParent}>
              <div className={styles.mViewsWrapper}>
                <div className={styles.div}>•</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.mViewsWrapper}>
                    <div className={styles.mViews}>{dateposted}</div>
                  </div>
                  <h2 className={styles.yearsAgo1}>{yearsAgo}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
