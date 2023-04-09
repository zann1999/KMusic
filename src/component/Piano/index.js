import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Piano.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function Piano() {
  return (
    <div className={cx("Piano")}>
      <div className={cx("tittle")}>
        <div className={cx("boximgtittle")}>
          <img
            className={cx("imgtittle")}
            src="https://photo-zmp3.zmdcdn.me/cover/6/d/9/6/6d96a92b6c85346d560eeb8a8f17c296.jpg"
          ></img>
        </div>

        <div>
          <h2>BẠN ĐÃ NGHE NHIỀU</h2>
          <h1>Piano</h1>
        </div>
      </div>

      <div className={cx("boxPiano")}>
        <div className={cx("boxmusic")}>
          <div className={cx("imgPiano")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/5/b/9/b5b9544f73738b4c75ef1c89bcb6710b.jpg"
              alt="Pianoimg"
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

          <h4>Piano K-Pop</h4>
          <p>IU, Paul Kim, AKMU...</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgPiano")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/5/b/9/b5b9544f73738b4c75ef1c89bcb6710b.jpg"
              alt="Pianoimg"
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
          <h4>Piano K-Pop</h4>
          <p>IU, Paul Kim, AKMU...</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgPiano")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/5/b/9/b5b9544f73738b4c75ef1c89bcb6710b.jpg"
              alt="Pianoimg"
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
          <h4>Piano K-Pop</h4>
          <p>IU, Paul Kim, AKMU...</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgPiano")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/5/b/9/b5b9544f73738b4c75ef1c89bcb6710b.jpg"
              alt="Pianoimg"
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
          <h4>Piano K-Pop</h4>
          <p>IU, Paul Kim, AKMU...</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgPiano")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/5/b/9/b5b9544f73738b4c75ef1c89bcb6710b.jpg"
              alt="Pianoimg"
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
          <h4>Piano K-Pop</h4>
          <p>IU, Paul Kim, AKMU...</p>
        </div>
      </div>
    </div>
  );
}

export default Piano;
