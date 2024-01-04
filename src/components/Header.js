import { useState } from "react";
import styles from "./Header.module.css";

const Header = ({ useravatar }) => {
  const [inputPlaceholderValue, setInputPlaceholderValue] = useState("");
  return (
    <div className={styles.frameParent}>
      <div className={styles.frame}>
        <div className={styles.menuParent}>
          <button className={styles.menu}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
            <img className={styles.vectorIcon1} alt="" src="/vector1@2x.png" />
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frame1}>
              <img
                className={styles.vectorIcon2}
                alt=""
                src="/vector2@2x.png"
              />
              <img
                className={styles.vectorIcon3}
                alt=""
                src="/vector3@2x.png"
              />
            </div>
            <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
          </button>
        </div>
      </div>
      <div className={styles.inputField}>
        <input
          className={styles.inputPlaceholder}
          placeholder="Search here..."
          type="text"
          value={inputPlaceholderValue}
          onChange={(event) => setInputPlaceholderValue(event.target.value)}
        />
        <div className={styles.searchsolidParent}>
          <button className={styles.searchsolid}>
            <img className={styles.vectorIcon4} alt="" src="/vector4@2x.png" />
          </button>
          <button className={styles.microphonesolidWrapper}>
            <img
              className={styles.microphonesolidIcon}
              alt=""
              src="/microphonesolid@2x.png"
            />
          </button>
        </div>
      </div>
      <div className={styles.videosolidParent}>
        <button className={styles.videosolid}>
          <img className={styles.vectorIcon5} alt="" src="/vector5@2x.png" />
        </button>
        <button className={styles.videosolid}>
          <img className={styles.vectorIcon6} alt="" src="/vector6@2x.png" />
        </button>
        <img className={styles.avatarIcon} alt="" src={useravatar} />
      </div>
    </div>
  );
};

export default Header;
