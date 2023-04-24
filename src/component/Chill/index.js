import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./chill.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

const cx = classNames.bind(styles);

function Chill() {
  return (
    <div className={cx("chill")}>
      <h1> Chill</h1>

      <div className={cx("boxchill")}>
        <div className={cx("boxmusic")}>
          <div className={cx("imgchill")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/c/7/f6c74d388a0cb7263cd070c8ea9af5ae.jpg"
              alt="chillimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <p>Buông mình thư giãn cùng nhạc Indie thật êm tai</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgchill")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/c/7/f6c74d388a0cb7263cd070c8ea9af5ae.jpg"
              alt="chillimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <p>Buông mình thư giãn cùng nhạc Indie thật êm tai</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgchill")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/c/7/f6c74d388a0cb7263cd070c8ea9af5ae.jpg"
              alt="chillimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <p>Buông mình thư giãn cùng nhạc Indie thật êm tai</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgchill")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/c/7/f6c74d388a0cb7263cd070c8ea9af5ae.jpg"
              alt="chillimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <p>Buông mình thư giãn cùng nhạc Indie thật êm tai</p>
        </div>
        <div className={cx("boxmusic", "hide")}>
          <div className={cx("imgchill")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/6/c/7/f6c74d388a0cb7263cd070c8ea9af5ae.jpg"
              alt="chillimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <p>Buông mình thư giãn cùng nhạc Indie thật êm tai</p>
        </div>
      </div>
    </div>
  );
}

export default Chill;
