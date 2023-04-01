import styles from "./UserSearch.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);

function UserSearch() {
  return (
    <div className={cx("user")}>
      <img
        src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/avatars/5/f/5f20a37fb35ef2799e9e47847edf2b8c_1455458614.jpg"
        alt="photo"
      ></img>
      <div>
        <h4>Anh</h4>
        <h5>Hương Tràm</h5>
      </div>
    </div>
  );
}

export default UserSearch;
