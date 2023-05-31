import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserSearch from "../component/SearchResult/UserSearch";
import styles from "./PlayMusic.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import soud1 from "./audio/BatTinhYeuLen-TangDuyTanHoaMinzy-8715666.mp3";
import soud2 from "./audio/GieoQue-HoangThuyLinhFeatDen-7702264.mp3";
import soud3 from "./audio/SangMatChua-TrucNhan-6042213.mp3";

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
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const cx = classNames.bind(styles);

//
const listSound = [
  {
    music: soud1,
    avatar:
      "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/2/d/5/c/2d5cc8bc9f930ce292c464e929ea31fb.jpg",
    name: "Bật Tình Yêu Lên",
    singger: "Tăng Duy Tân, ...",
  },
  {
    music: soud2,
    avatar:
      "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/0/5/1/a/051a297c016cf26e33c9b48f45d0977d.jpg",
    name: "Gieo Quẻ",
    singger: "Hoàng Thùy Linh, Đen Vâu",
  },
  {
    music: soud3,
    avatar:
      "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/a/e/1/3/ae13967d58cc06b3a9feaa42a9563e3d.jpg",
    name: "Sáng Mắt Chưa",
    singger: "Trúc Nhân",
  },
];
let song = 0;
function PlayMusic() {
  const [activePlay, setactivePlay] = useState("active");
  const [activePause, setactivePause] = useState("");
  const [timenow, setTimenow] = useState(0);
  const [timeload, setTimeload] = useState(0);
  const [colorbox, setcolorbox] = useState(timenow);
  const [Play, setplay] = useState(false);
  const [Play2, setplay2] = useState(false);
  const [endded, setendded] = useState(false);
  const [rePeat, setrePeat] = useState("");
  const [buttonrandom, setbuttonRandom] = useState("");
  const [random, setrandom] = useState(false);

  const [sound, setsound] = useState(listSound[song]);

  //

  const audio = useMemo(() => {
    let audi = new Audio(sound.music);

    return audi;
  }, [sound]);
  var totaltime = audio.duration;
  audio.ontimeupdate = () => {
    setTimenow(audio.currentTime.toFixed(0));
    setendded(audio.ended);
  };
  // end
  useEffect(() => {
    if (random && endded) {
      const randomNumber = Math.round(Math.random() * 2);
      console.log(randomNumber);
      console.log("th");

      if (song != randomNumber) {
        console.log("th1");

        song = randomNumber;
        setsound(listSound[song]);
        setplay(true);
        setplay2(song);
        return;
      }
      if (song == randomNumber && song < listSound.length - 1) {
        console.log("th2");
        song = song + 1;
        setsound(listSound[song]);
        setplay(true);
        setplay2(song);
        return;
      } else {
        console.log("th3");

        song = 0;
        setsound(listSound[song]);
        setplay(true);
        setplay2(song);
        return;
      }
    }
    if (!random && endded) {
      if (song < listSound.length - 1) {
        song = song + 1;
        console.log("tiep theo");
      } else {
        song = 0;
        console.log("quay lai");
      }
      setsound(listSound[song]);
      setplay(true);
      setplay2(song);
    } else return;
  }, [endded]);
  //play
  useEffect(() => {
    if (Play) {
      audio.play();
      setactivePlay("");
      setactivePause("active");
    } else {
      audio.pause();
      setactivePlay("active");
      setactivePause("");
    }
  }, [Play]);
  useEffect(() => {
    if (Play2 >= 0) {
      audio.play();
    } else return;
  }, [Play2]);
  // const totaltime = useMemo(() => {
  //   const totaltime = audio.currentTime;
  //   console.log(audio.duration);
  //   return totaltime;
  // }, [sound]);
  //

  useEffect(() => {
    audio.currentTime = timeload;
  }, [timeload]);

  // const handelerPlay = () => {
  //   audio.pause();
  //   setactivePlay("active");
  //   setactivePause("");
  // };
  // const handelerPause = () => {
  //   audio.play();
  //   setactivePlay("");
  //   setactivePause("active");
  // };
  // next
  const handelerNext = () => {
    audio.pause();
    if (song < listSound.length - 1) {
      song = song + 1;
    } else {
      song = 0;
    }

    setsound(listSound[song]);
    setplay(true);
    setplay2(song);
  };
  // back
  const handelerBack = () => {
    audio.pause();
    if (song > 0) {
      song = song - 1;
    } else {
      song = listSound.length - 1;
    }

    setsound(listSound[song]);
    setplay(true);
    setplay2(song);
  };
  // repeat
  const handlerrePeat = () => {
    if (rePeat == "") {
      setrePeat("choose");
    } else {
      setrePeat("");
    }
  };
  // random
  const handlerRandom = () => {
    if (buttonrandom == "") {
      setbuttonRandom("choose");
      setrandom(true);
    } else {
      setbuttonRandom("");
      setrandom(false);
    }
  };
  return (
    <div className={cx("playMusic")}>
      <div className={cx("infoSong")}>
        <UserSearch cl={"infosong"} sound={sound} />
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
            <button
              className={cx("random", buttonrandom)}
              onClick={handlerRandom}
            >
              <FontAwesomeIcon icon={faShuffle} />
            </button>
          </Tippy>
          <Tippy
            render={(attrs) => (
              <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                Phát bài trước
              </div>
            )}
          >
            <button onClick={handelerBack}>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>
          </Tippy>
          <button
            className={cx("Play", activePause)}
            onClick={() => {
              setplay(true);
            }}
          >
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button
            className={cx("Pause", activePlay)}
            onClick={() => {
              setplay(false);
            }}
          >
            <FontAwesomeIcon icon={faCirclePause} />
          </button>
          <Tippy
            render={(attrs) => (
              <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                Phát tiếp theo
              </div>
            )}
          >
            <button onClick={handelerNext}>
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
            <button className={cx(rePeat)} onClick={handlerrePeat}>
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </Tippy>
        </div>
        <div className={cx("timeSong")}>
          <span className={cx("timeStart")}>
            {timenow > 0
              ? `0${Math.floor(timenow / 60)} : ${
                  timenow % 60 >= 10 ? timenow % 60 : `0${timenow % 60}`
                }`
              : "00 : 00"}
          </span>
          <div
            className={cx("timebox")}
            onMouseMove={(e) => {
              if (e.clientX - 548 > 0) {
                console.log(e.clientX);
                setcolorbox((e.clientX - 548) / 488);
              } else {
                return;
              }
            }}
            onClick={(e) => {
              console.log(e.clientX);
              if ((e.clientX - 546) / 488 > 0 && (e.clientX - 546) / 488 < 1) {
                setTimeload(
                  (((e.clientX - 546) / 488) * totaltime - 2).toFixed(0)
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
                aria-valuenow={(timenow / totaltime) * 211.176}
                draggable="false"
                role="slider"
                style={{
                  transform: `translate(${
                    (timenow / totaltime) * 488
                  }px, -4px)`,
                }}
              ></div>
              <div
                className={cx("subline")}
                style={{
                  background: `linear-gradient( to right, #81b9b9 0%, #81b9b9 ${
                    colorbox * 100
                  }%,transparent ${colorbox * 100}%,  transparent 100% )`,
                }}
              ></div>
            </div>
          </div>
          <span className={cx("timeEnd")}>
            {totaltime
              ? `0${Math.floor(totaltime / 60)} : ${Math.floor(totaltime % 60)}`
              : "88 : 88"}
          </span>
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
export { listSound };
