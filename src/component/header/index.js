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

import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
import SearchResult from "../SearchResult";

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
          {/* input */}
          <Tippy
            interactive={true}
            visible={true}
            render={(attrs) => (
              <div className={cx("searchbox")} tabIndex="-1" {...attrs}>
                <h3>Gợi ý kết quả</h3>
                <SearchResult />
              </div>
            )}
          >
            <input
              type={"text"}
              className={cx("inputsearch")}
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              value={null}
            ></input>
          </Tippy>
        </div>
      </div>

      <div className={cx("boxsign")}>
        <div className={cx("dowload")}>
          <FontAwesomeIcon icon={faDownload} />
          <h3>Tải bản Windows</h3>
        </div>

        <Tippy
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              Nâng cấp vip
            </div>
          )}
        >
          <div className={cx("gem")}>
            <FontAwesomeIcon icon={faGem} />
          </div>
        </Tippy>
        <Tippy
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              Cài đặt
            </div>
          )}
        >
          <div className={cx("setting")}>
            <FontAwesomeIcon icon={faGear} />
          </div>
        </Tippy>
        <h3 className={cx("sign")}>Đăng nhập</h3>
      </div>
    </div>
  );
}

export default Header;
