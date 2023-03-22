import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardUser,
  faCompactDisc,
  faCubesStacked,
  faFilm,
  faMusic,
  faPlus,
  faRadio,
  faRankingStar,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.scss";
import classNames from "classnames/bind";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);

function NavBar({ children }) {
  return (
    <div className={cx("navbar")}>
      <a className={cx("boxlogo")} href="/">
        <img src="https://i.imgur.com/Byljp0u.png" alt="logo" />
        <h2>usic</h2>
        <h3>mp3</h3>
      </a>
      <div className={cx("boxbutton")}>
        <div className={cx("button")}>
          <FontAwesomeIcon icon={faClipboardUser} />
          <h4>Cá Nhân</h4>
        </div>
        <div className={cx("button", "activebutton")}>
          {" "}
          <FontAwesomeIcon icon={faCompactDisc} />
          <h4>Khám Phá</h4>
        </div>
        <div className={cx("button")}>
          {" "}
          <FontAwesomeIcon icon={faRankingStar} />
          <h4>#KMchart</h4>
        </div>
        <div className={cx("button")}>
          {" "}
          <FontAwesomeIcon icon={faRadio} />
          <h4>Radio</h4>
          <h5>LIVE</h5>
        </div>
        <div className={cx("button")}>
          {" "}
          <FontAwesomeIcon icon={faUserPlus} />
          <h4>Theo dõi</h4>
        </div>
        <div className={cx("line")}></div>
      </div>
      {/* option list */}
      <div className={cx("boxoptionlist")}>
        <div className={cx("button")}>
          <FontAwesomeIcon icon={faMusic} />
          <h4>Nhạc Mới</h4>
        </div>
        <div className={cx("button")}>
          <FontAwesomeIcon icon={faCubesStacked} />
          <h4>Thể Loại</h4>
        </div>
        <div className={cx("button")}>
          <FontAwesomeIcon icon={faStar} />
          <h4>Top 100</h4>
        </div>
        <div className={cx("button")}>
          <FontAwesomeIcon icon={faFilm} />
          <h4>MV</h4>
        </div>
      </div>
      {/* tạo playlist */}
      <div className={cx("addplaylist")}>
        <FontAwesomeIcon icon={faPlus} />
        <h3>Tạo playlist mới</h3>
      </div>
    </div>
  );
}

export default NavBar;
