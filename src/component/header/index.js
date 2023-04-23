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
import Settinglist from "../list/setting";
import { useRef, useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

const cx = classNames.bind(styles);

function Header() {
  const [focus, setfocus] = useState(false);
  const [setting, setSetting] = useState(false);
  const [dataSearch, setdata] = useState();
  const [value, setValue] = useState("");
  const refInput = useRef();

  const debounced = useDebounce(value, 333);

  const handle = () => {
    setfocus(true);
  };
  useEffect(() => {
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${
        debounced !== "" ? encodeURIComponent(debounced) : "hoa"
      }&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setdata(res.data);
      });
  }, [debounced.trim()]);

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
            visible={focus}
            render={(attrs) => (
              <div className={cx("searchbox")} tabIndex="-1" {...attrs}>
                <h3>Gợi ý kết quả</h3>
                {dataSearch && <SearchResult data={dataSearch} />}
              </div>
            )}
            onClickOutside={() => setfocus(false)}
          >
            <input
              value={value}
              onFocus={handle}
              ref={refInput}
              type={"text"}
              className={cx("inputsearch")}
              placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
              onChange={(e) => setValue(e.currentTarget.value)}
            ></input>
          </Tippy>
        </div>
      </div>

      <div className={cx("boxsign")}>
        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Sắp ra mắt
            </div>
          )}
        >
          <div className={cx("dowload")}>
            <FontAwesomeIcon icon={faDownload} />
            <h3>Tải bản Windows</h3>
          </div>
        </Tippy>

        <Tippy
          render={(attrs) => (
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
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
            <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
              Cài đặt
            </div>
          )}
        >
          {/* setting */}
          <Tippy
            interactive={true}
            visible={setting}
            onClickOutside={() => setSetting(false)}
            render={(attrs) => (
              <div className={cx("settingbox")} tabIndex="-1" {...attrs}>
                <Settinglist />
              </div>
            )}
          >
            <div onClick={() => setSetting(true)} className={cx("setting")}>
              <FontAwesomeIcon icon={faGear} />
            </div>
          </Tippy>
        </Tippy>
        <h3 className={cx("sign")}>Đăng nhập</h3>
      </div>
    </div>
  );
}

export default Header;
