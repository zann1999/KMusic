import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HappyWeekend.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function HappyWeekend() {
  return (
    <div className={cx("HappyWeekend")}>
      <h1> HappyWeekend</h1>

      <div className={cx("boxHappyWeekend")}>
        <div className={cx("boxmusic")}>
          <div className={cx("imgHappyWeekend")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/6/2/ad62ece92094a309a3557f6b61e680f9.jpg"
              alt="HappyWeekendimg"
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
          <p>Tận hưởng cuối tuần cùng thanh âm thảnh thơi của V-Pop</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgHappyWeekend")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/6/2/ad62ece92094a309a3557f6b61e680f9.jpg"
              alt="HappyWeekendimg"
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
          <p>Tận hưởng cuối tuần cùng thanh âm thảnh thơi của V-Pop</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgHappyWeekend")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/6/2/ad62ece92094a309a3557f6b61e680f9.jpg"
              alt="HappyWeekendimg"
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
          <p>Tận hưởng cuối tuần cùng thanh âm thảnh thơi của V-Pop</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgHappyWeekend")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/6/2/ad62ece92094a309a3557f6b61e680f9.jpg"
              alt="HappyWeekendimg"
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
          <p>Tận hưởng cuối tuần cùng thanh âm thảnh thơi của V-Pop</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgHappyWeekend")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/d/6/2/ad62ece92094a309a3557f6b61e680f9.jpg"
              alt="HappyWeekendimg"
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
          <p>Tận hưởng cuối tuần cùng thanh âm thảnh thơi của V-Pop</p>
        </div>
      </div>
    </div>
  );
}

export default HappyWeekend;
