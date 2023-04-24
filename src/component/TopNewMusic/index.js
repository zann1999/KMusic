import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TopNewMusic.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function TopNewMusic() {
  return (
    <div className={cx("TopNewMusic")}>
      <h1>BXH Nhạc Mới</h1>
      <div className={cx("boxNewMusic")}>
        <div className={cx("topMusic")}>
          <div className={cx("boximg")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/9/0/b/a90b676e48351d4532c32be8c1680702.jpg"
              alt="IMG"
            ></img>
            <div className={cx("loadbox")}>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
            </div>
          </div>
          <div>
            <h2>Họ Đâu Thương Em</h2>
            <h3>Phan Duy Anh, Ngân Ngân, AVC</h3>
          </div>
          <span>#1</span>
          <div className={cx("date")}>29.03.2023</div>
        </div>
        <div className={cx("topMusic")}>
          <div className={cx("boximg")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/9/0/b/a90b676e48351d4532c32be8c1680702.jpg"
              alt="IMG"
            ></img>
            <div className={cx("loadbox")}>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
            </div>
          </div>
          <div>
            <h2>Họ Đâu Thương Em</h2>
            <h3>Phan Duy Anh, Ngân Ngân, AVC</h3>
          </div>
          <span>#1</span>
          <div className={cx("date")}>29.03.2023</div>
        </div>
        <div className={cx("topMusic", "hide")}>
          <div className={cx("boximg")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/a/9/0/b/a90b676e48351d4532c32be8c1680702.jpg"
              alt="IMG"
            ></img>
            <div className={cx("loadbox")}>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
            </div>
          </div>
          <div>
            <h2>Họ Đâu Thương Em</h2>
            <h3>Phan Duy Anh, Ngân Ngân, AVC</h3>
          </div>
          <span>#1</span>
          <div className={cx("date")}>29.03.2023</div>
        </div>
      </div>
    </div>
  );
}

export default TopNewMusic;
