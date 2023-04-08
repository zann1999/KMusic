import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SinggerTop.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function SinggerTop() {
  return (
    <div className={cx("SinggerTop")}>
      <h1> SinggerTop</h1>

      <div className={cx("boxSinggerTop")}>
        <div className={cx("boxmusic")}>
          <div className={cx("imgSinggerTop")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg"
              alt="SinggerTopimg"
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
          <p>'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgSinggerTop")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg"
              alt="SinggerTopimg"
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
          <p>'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgSinggerTop")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg"
              alt="SinggerTopimg"
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
          <p>'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgSinggerTop")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg"
              alt="SinggerTopimg"
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
          <p>'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgSinggerTop")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/a/e/9/aae98c264c71d089e2c2d9f01112aee7.jpg"
              alt="SinggerTopimg"
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
          <p>'Thị Mầu' Hòa Minzy và những bản Hit đỉnh nhất</p>
        </div>
      </div>
    </div>
  );
}

export default SinggerTop;
