import styles from "./header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faDownload,
  faGear,
  faMagnifyingGlass,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header")}>
      <div className={cx("search")}>
        <button>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className={cx("boxsearch")}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type={"text"}
            className={cx("inputsearch")}
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            value={null}
          ></input>
        </div>
      </div>

      <div className={cx("boxsign")}>
        <div className={cx("dowload")}>
          <FontAwesomeIcon icon={faDownload} />
          <h3>Tải bản Windows</h3>
        </div>
        <div className={cx("gem")}>
          <FontAwesomeIcon icon={faGem} />
        </div>
        <div className={cx("setting")}>
          <FontAwesomeIcon icon={faGear} />
        </div>
        <h3 className={cx("sign")}>Đăng nhập</h3>
      </div>
    </div>
  );
}

export default Header;
