import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserSearch from "../component/SearchResult/UserSearch";
import styles from "./PlayMusic.module.scss";
import classNames from "classnames/bind";
import {
  faBackwardStep,
  faForwardStep,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function PlayMusic() {
  return (
    <div className={cx("playMusic")}>
      <div className={cx("infoSong")}>
        <UserSearch cl={"infosong"} />
      </div>
      <div className={cx("playSong")}>
        <div>
          <button className={cx("random")}>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <FontAwesomeIcon icon={faBackwardStep} />
          <button>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCirclePause} />
          </button>
          <button>
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
          <button>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
        </div>
        <div className={cx("timeSong")}>
          <span className={cx("timeStart")}></span>
          <div className={cx("timelive")}>
            <div className={cx("timenow")}></div>
          </div>
          <span className={cx("timeEnd")}></span>
        </div>
      </div>
      <div className={cx("optionSong")}></div>
    </div>
  );
}

export default PlayMusic;
