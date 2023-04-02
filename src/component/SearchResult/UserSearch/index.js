import styles from "./UserSearch.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function UserSearch({ children, cl }) {
  return (
    <div className={cx("user", { cl })}>
      <img
        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/avatars/5/f/5f20a37fb35ef2799e9e47847edf2b8c_1455458614.jpg"
        alt="photo"
      ></img>
      <div>
        <h4>Anh</h4>
        <h5>Hương Tràm</h5>
      </div>
      <div className={cx("option")}>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Thêm vào thư viện
            </div>
          )}
        >
          <FontAwesomeIcon icon={faHeart} />
        </Tippy>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Khác
            </div>
          )}
        >
          <FontAwesomeIcon icon={faEllipsis} />
        </Tippy>
      </div>
    </div>
  );
}

export default UserSearch;
