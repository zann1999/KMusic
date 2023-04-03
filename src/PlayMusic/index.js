import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserSearch from "../component/SearchResult/UserSearch";
import styles from "./PlayMusic.module.scss";
import classNames from "classnames/bind";
import {
  faBackwardStep,
  faBarsStaggered,
  faFilm,
  faForwardStep,
  faMicrophoneLines,
  faRepeat,
  faShuffle,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCirclePause,
  faCirclePlay,
  faWindowRestore,
} from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function PlayMusic() {
  return (
    <div className={cx("playMusic")}>
      <div className={cx("infoSong")}>
        <UserSearch cl={"infosong"} />
      </div>
      <div className={cx("playbox")}>
        <div className={cx("playSong")}>
          <button className={cx("random")}>
            <FontAwesomeIcon icon={faShuffle} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          <button className={cx("Play")}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button className={cx("Pause", "active")}>
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
      <div className={cx("optionSong")}>
        <button className={cx("mv")}>
          <FontAwesomeIcon icon={faFilm} />
        </button>
        <button className={cx("micro")}>
          <FontAwesomeIcon icon={faMicrophoneLines} />
        </button>

        <button className={cx("window")}>
          <FontAwesomeIcon icon={faWindowRestore} />
        </button>

        <button className={cx("soud")}>
          <FontAwesomeIcon icon={faVolumeHigh} />
          <div className={cx("volume")}>
            <div></div>
            <div></div>
          </div>
        </button>
        <button className={cx("listsong")}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      </div>
    </div>
  );
}

export default PlayMusic;
