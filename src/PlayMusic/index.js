import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserSearch from "../component/SearchResult/UserSearch";
import styles from "./PlayMusic.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
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
          <Tippy
            render={(attrs) => (
              <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                Bật phát ngẫu nhiên
              </div>
            )}
          >
            <button className={cx("random")}>
              <FontAwesomeIcon icon={faShuffle} />
            </button>
          </Tippy>
          <button>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          <button className={cx("Play")}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button className={cx("Pause", "active")}>
            <FontAwesomeIcon icon={faCirclePause} />
          </button>
          <Tippy
            render={(attrs) => (
              <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                Phát tiếp theo
              </div>
            )}
          >
            <button>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>
          </Tippy>
          <Tippy
            render={(attrs) => (
              <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                Bật phát lại tất cả
              </div>
            )}
          >
            <button>
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </Tippy>
        </div>
        <div className={cx("timeSong")}>
          <span className={cx("timeStart")}>1:30</span>
          <div className={cx("timebox")}>
            <div
              className={cx("timeline")}
              style={{
                background:
                  "linear-gradient( to right, #0e8080 0%, #0e8080 53.0837%, rgba(0, 0, 0, 0.1) 53.0837%,  rgba(0, 0, 0, 0.1) 100% )",
              }}
            >
              <div
                className={cx("timenow")}
                tabindex="0"
                aria-valuemax="211.176"
                aria-valuemin="0"
                aria-valuenow="156.6"
                draggable="false"
                role="slider"
                style={{
                  transform: "translate(275.232px, -4px)",
                }}
              ></div>
            </div>
          </div>
          <span className={cx("timeEnd")}>5:00</span>
        </div>
      </div>
      <div className={cx("optionSong")}>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              MV
            </div>
          )}
        >
          <button className={cx("mv")}>
            <FontAwesomeIcon icon={faFilm} />
          </button>
        </Tippy>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Xem lời bài hát
            </div>
          )}
        >
          <button className={cx("micro")}>
            <FontAwesomeIcon icon={faMicrophoneLines} />
          </button>
        </Tippy>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Chế độ cửa sổ
            </div>
          )}
        >
          <button className={cx("window")}>
            <FontAwesomeIcon icon={faWindowRestore} />
          </button>
        </Tippy>

        <button className={cx("soud")}>
          <FontAwesomeIcon icon={faVolumeHigh} />
          <div className={cx("soundbox")}>
            <div
              className={cx("volume")}
              style={{
                background:
                  "linear-gradient( to right, #0e8080 0%, #0e8080 53.0837%, rgba(0, 0, 0, 0.1) 53.0837%,  rgba(0, 0, 0, 0.1) 100% )",
              }}
            >
              <div
                className={cx("volumenow")}
                tabindex="0"
                aria-valuemax="211.176"
                aria-valuemin="0"
                aria-valuenow="156.6"
                draggable="false"
                role="slider"
                style={{
                  transform: "translate(40px, -4px)",
                }}
              ></div>
            </div>
          </div>
        </button>
        <Tippy
          arrow={true}
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Danh sách phát
            </div>
          )}
        >
          <button className={cx("listsong")}>
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>
        </Tippy>
      </div>
    </div>
  );
}

export default PlayMusic;
