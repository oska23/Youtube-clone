import Header from "../components/Header";
import VideoTitle from "../components/VideoTitle";
import ViewandActions from "../components/ViewandActions";
import SubscriptionCard from "../components/SubscriptionCard";
import Videocard from "../components/Videocard";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <Header useravatar="/avatar@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <iframe
              className={styles.frameChild}
              frameBorder="0"
              allowFullScreen
            />
            <div className={styles.frameDiv}>
              <div className={styles.frameWrapper}>
                <div className={styles.hoursOfBirdsSingingInTheWrapper}>
                  <VideoTitle titlename="8 Hours of Birds Singing in the Forests Below El Capitan" />
                </div>
              </div>
              <ViewandActions viewcounter="567" />
            </div>
          </div>
          <SubscriptionCard />
        </div>
        <div className={styles.frameParent1}>
          <Videocard
            thumbnail="/frame-34852@2x.png"
            viewcardtitle="Nature Sounds in the Forest – HD Stereo Audio"
            channelname="ahmed korea"
            showVectorIcon={false}
            viewscounter="6.3M"
            dateposted="4"
            yearsAgo="years ago"
          />
          <Videocard
            thumbnail="/frame-34852@2x.png"
            viewcardtitle="Nature Sounds in the Forest – HD Stereo Audio"
            channelname="ChannelName"
            showVectorIcon
            viewscounter="6.3M"
            dateposted="4"
            yearsAgo="years ago"
          />
          <Videocard
            thumbnail="/frame-348521@2x.png"
            viewcardtitle="Nature Sounds in the Forest – HD Stereo Audio"
            channelname="ChannelName"
            showVectorIcon
            viewscounter="6.3M"
            dateposted="4"
            yearsAgo="years ago"
          />
          <Videocard
            thumbnail="/frame-348521@2x.png"
            viewcardtitle="Nature Sounds in the Forest – HD Stereo Audio"
            channelname="ChannelName"
            showVectorIcon
            viewscounter="6.3M"
            dateposted="4"
            yearsAgo="years ago"
          />
          <Videocard
            thumbnail="/frame-348521@2x.png"
            viewcardtitle="Nature Sounds in the Forest – HD Stereo Audio"
            channelname="ChannelName"
            showVectorIcon
            viewscounter="6.3M"
            dateposted="4"
            yearsAgo="years ago"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
