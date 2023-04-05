import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HomeContent.module.scss";
import classNames from "classnames/bind";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function HomeContent() {
  return (
    <div className={cx("HomeContent")}>
      <div className={cx("slideimg")}>
        <div className={cx("img")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/e/6/3/4e6378509a48891a496e293e14dc656e.jpg"
            alt="ca sĩ"
          ></img>
        </div>
        <div className={cx("img")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/e/6/3/4e6378509a48891a496e293e14dc656e.jpg"
            alt="ca sĩ"
          ></img>
        </div>
        <div className={cx("img")}>
          <img
            src="https://photo-zmp3.zmdcdn.me/banner/4/e/6/3/4e6378509a48891a496e293e14dc656e.jpg"
            alt="ca sĩ"
          ></img>
        </div>
      </div>
      <div className={cx("newmusic")}>
        <div className={cx("location")}>
          <h1 className={cx("item")}>Mới Phát Hành</h1>
          <div className={cx("locationItem")}>
            <div className={cx("boxlocaltion")}>
              <button className={cx("buttonLocation", "active")}>TẤT CẢ</button>
              <button className={cx("buttonLocation")}>VIỆT NAM</button>
              <button className={cx("buttonLocation")}>QUỐC TẾ</button>
            </div>
            <button className={cx("buttonAll")}>
              <p>TẤT CẢ</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className={cx("listmusic")}></div>
      </div>
    </div>
  );
}

export default HomeContent;
