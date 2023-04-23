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
import { useRef, useState } from "react";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function NavBar({ children }) {
  const [activeButton, setActiveButton] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.classList.add("activebutton");
  }, []);

  //
  const RemoveActive = () => {
    const buttonRemove = document.querySelectorAll("#btn");
    buttonRemove.forEach((bt) => {
      bt.classList.remove("activebutton");
    });
  };

  return (
    <div className={cx("navbar")}>
      <div>
        <a className={cx("boxlogo")} href="/">
          <img src="https://i.imgur.com/Byljp0u.png" alt="logo" />
          <h2>usic</h2>
          <h3>beta</h3>
        </a>
        <div className={cx("boxbutton")}>
          <div
            onClick={() => {}}
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            <FontAwesomeIcon icon={faClipboardUser} />
            <h4>Cá Nhân</h4>
          </div>
          <div
            id="btn"
            className={cx("button")}
            ref={btnRef}
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faCompactDisc} />
            <h4>Khám Phá</h4>
          </div>
          <div
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
            className={cx("button")}
            id="btn"
          >
            {" "}
            <FontAwesomeIcon icon={faRankingStar} />
            <h4>#KMchart</h4>
          </div>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faRadio} />
            <h4>Radio</h4>
            <h5>LIVE</h5>
          </div>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            {" "}
            <FontAwesomeIcon icon={faUserPlus} />
            <h4>Theo dõi</h4>
          </div>
          <div className={cx("line")}></div>
        </div>
        {/* option list */}
        <div className={cx("boxoptionlist")}>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            <FontAwesomeIcon icon={faMusic} />
            <h4>Nhạc Mới</h4>
          </div>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            <FontAwesomeIcon icon={faCubesStacked} />
            <h4>Thể Loại</h4>
          </div>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            <FontAwesomeIcon icon={faStar} />
            <h4>Top 100</h4>
          </div>
          <div
            className={cx("button")}
            id="btn"
            onClick={(e) => {
              RemoveActive();
              e.currentTarget.classList.add("activebutton");
            }}
          >
            <FontAwesomeIcon icon={faFilm} />
            <h4>MV</h4>
          </div>
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
