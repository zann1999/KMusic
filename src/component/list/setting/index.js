import styles from "./setting.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faChevronRight,
  faCircleCheck,
  faCirclePlay,
  faFileSignature,
  faInfo,
  faLocationArrow,
  faPaintBrush,
  faPhone,
  faRectangleAd,
  faShieldHeart,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Settinglist() {
  return (
    <div className={cx("settinglist")}>
      <ul>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxlv2")} tabIndex="-1" {...attrs}>
              coming soon
            </div>
          )}
        >
          <li>
            <FontAwesomeIcon icon={faCirclePlay} />
            <span>Trình phát nhạc</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </Tippy>
        <Tippy
          interactive={true}
          render={(attrs) => (
            <div className={cx("boxlv2")} tabIndex="-1" {...attrs}>
              <div className={cx("theme")}>
                <h4>Chủ đề</h4>
                <FontAwesomeIcon icon={faChevronRight} />

                <div className={cx("color")}>
                  <div className={cx("colorbox")}></div>
                  <h3>Xanh nhạt</h3>
                </div>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("animation")}>
                <h5>Hiệu ứng chuyển động</h5>
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
            </div>
          )}
        >
          <li
          // onMouseEnter={() => setShow(true)}
          // onMouseLeave={() => setShow(false)}
          >
            <FontAwesomeIcon icon={faBrush} />
            <span>Giao diện</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
        </Tippy>
        <div className={cx("line")}></div>

        <li>
          <FontAwesomeIcon icon={faInfo} />
          <span>Giới thiệu</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />
          <span>Liên hệ</span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </li>
        <li>
          <FontAwesomeIcon icon={faRectangleAd} />
          <span>Quảng cáo</span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileSignature} />
          <span>Thỏa thuận sử dụng</span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </li>
        <li>
          <FontAwesomeIcon icon={faShieldHeart} />
          <span>Chính sách bảo mật</span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </li>
      </ul>
    </div>
  );
}

export default Settinglist;
