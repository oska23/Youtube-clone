import styles from "./SubscriptionCard.module.css";

const SubscriptionCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.avatarsmallWrapper}>
          <img
            className={styles.avatarsmallIcon}
            alt=""
            src="/avatarsmall@2x.png"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.details}>
            <div className={styles.whitneyBlessingWrapper}>
              <div className={styles.whitneyBlessing}>Nature Soundscapes</div>
            </div>
            <div className={styles.whitneygmailcomWrapper}>
              <div className={styles.whitneygmailcom}>104K subscribers</div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.textWrapper}>
        <div className={styles.text}>SUBSCRIBE</div>
      </button>
    </div>
  );
};

export default SubscriptionCard;
