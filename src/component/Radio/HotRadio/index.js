import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HotRadio.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function HotRadio(radioClass, titleClass) {
  return (
    <div className={cx("wrap")}>
      <h1 className={cx({ titleClass })}>Radio Nổi Bật</h1>
      <div className={cx("radio", { radioClass })}>
        <div>
          <div className={cx("boxradio")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("boxradio")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("boxradio")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("boxradio")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("boxradio")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        <div>
          <div className={cx("boxradio", "hide")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div>
        {/* <div>
          <div className={cx("boxradio", "hide")}>
            <div className={cx("itemradio")}>
              <div className={cx("boximg")}>
                <div className={cx("loadbox")}>
                  <div className={cx("showplay")}>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </div>
                </div>
                <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/4/8/c/e/48cefd41cfc03533d52303190f47e6ef.jpg"></img>
                <img
                  className={cx("subimg")}
                  src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/avatars/1/3/0/5/1305cd954d22d89fef4354301613fd68.jpg"
                ></img>
              </div>
              <h2>Bolero</h2>
              <span>568 đang nghe</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HotRadio;
