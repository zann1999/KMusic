import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserSearch from "../component/SearchResult/UserSearch";
import styles from "./PlayMusic.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import soud from "./anh.mp3";

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
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);
const audio = new Audio(soud);
audio.play();
let totaltime = 310;
function PlayMusic() {
  const [activePlay, setactivePlay] = useState("");
  const [activePause, setactivePause] = useState("active");
  const [timenow, setTimenow] = useState(0);
  const [timeload, setTimeload] = useState(0);
  const [colorbox, setcolorbox] = useState(timenow);

  audio.ontimeupdate = () => {
    setTimenow(audio.currentTime.toFixed(0));
  };
  useEffect(() => {
    audio.currentTime = timeload;
  }, [timeload]);

  const handelerPlay = () => {
    audio.pause();

    setactivePlay("active");
    setactivePause("");
  };
  const handelerPause = () => {
    audio.play();
    setactivePlay("");
    setactivePause("active");
  };

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
          <button className={cx("Play", activePause)} onClick={handelerPause}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button className={cx("Pause", activePlay)} onClick={handelerPlay}>
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
          <span className={cx("timeStart")}>
            {timenow > 0
              ? `${Math.floor(timenow / 60)} : ${timenow % 60}`
              : "0 : 00"}
          </span>
          <div
            className={cx("timebox")}
            onMouseMove={(e) => {
              if ((e.clientX - 512) / 488 > 0 && (e.clientX - 512) / 488 < 1) {
                setcolorbox((e.clientX - 512) / 488);
              } else {
                return;
              }
            }}
            onClick={(e) => {
              if ((e.clientX - 512) / 488 > 0 && (e.clientX - 512) / 488 < 1) {
                setTimeload(
                  (((e.clientX - 512) / 488) * totaltime - 8).toFixed(0)
                );
              } else {
                return;
              }
            }}
          >
            <div
              className={cx("timeline")}
              style={{
                background: `linear-gradient( to right, #0e8080 0%, #0e8080 ${
                  (timenow / totaltime) * 100
                }%, rgba(0, 0, 0, 0.1) ${
                  (timenow / totaltime) * 100
                }%,  rgba(0, 0, 0, 0.1) 100% )`,
              }}
            >
              <div
                className={cx("timenow")}
                tabindex="0"
                aria-valuemax="211.176"
                aria-valuemin="0"
                aria-valuenow={
                  colorbox == timenow
                    ? (timenow / totaltime) * 211.176
                    : colorbox * 211.176
                }
                draggable="false"
                role="slider"
                style={{
                  transform: `translate(${
                    colorbox == timenow
                      ? (timenow / totaltime) * 488
                      : colorbox * 488 - 8
                  }px, -4px)`,
                }}
              ></div>
            </div>
          </div>
          <span className={cx("timeEnd")}>{`${Math.floor(totaltime / 60)} : ${
            totaltime % 60
          }`}</span>
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
