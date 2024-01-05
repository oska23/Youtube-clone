import ViewCounter from "./ViewCounter";
import styles from "./ViewandActions.module.css";

const ViewandActions = ({ viewcounter }) => {
  return (
    <div className={styles.likessectionInner}>
      <ViewCounter
        views="1,094,526 "
        vieworviews="Views "
        datecreated="May 25, 2018"
      />
    </div>
  );
};

export default ViewandActions;
