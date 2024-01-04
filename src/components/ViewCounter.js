import styles from "./ViewCounter.module.css";

const ViewCounter = ({ views, vieworviews, datecreated }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.viewsParent}>
        <h1 className={styles.views}>{views}</h1>
        <div className={styles.views1}>{vieworviews}</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <div className={styles.div}>•</div>
        </div>
        <h1 className={styles.may252018}>{datecreated}</h1>
      </div>
    </div>
  );
};

export default ViewCounter;
