import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AlbumHot.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
const cx = classNames.bind(styles);

function AlbumHot() {
  return (
    <div className={cx("AlbumHot")}>
      <h1>Album Hot</h1>

      <div className={cx("boxAlbumHot")}>
        <div className={cx("boxmusic")}>
          <div className={cx("imgAlbumHot")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/c/0/36c04a84c9d580012f2f7b5a31ee123c.jpg"
              alt="AlbumHotimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>

          <h4>Lý Do Là Vậy (Remix) (Single)</h4>
          <p>Hana Cẩm Tiên, TVK</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgAlbumHot")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/c/0/36c04a84c9d580012f2f7b5a31ee123c.jpg"
              alt="AlbumHotimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <h4>Lý Do Là Vậy (Remix) (Single)</h4>
          <p>Hana Cẩm Tiên, TVK</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgAlbumHot")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/c/0/36c04a84c9d580012f2f7b5a31ee123c.jpg"
              alt="AlbumHotimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <h4>Lý Do Là Vậy (Remix) (Single)</h4>
          <p>Hana Cẩm Tiên, TVK</p>
        </div>
        <div className={cx("boxmusic")}>
          <div className={cx("imgAlbumHot")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/c/0/36c04a84c9d580012f2f7b5a31ee123c.jpg"
              alt="AlbumHotimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <h4>Lý Do Là Vậy (Remix) (Single)</h4>
          <p>Hana Cẩm Tiên, TVK</p>
        </div>
        <div className={cx("boxmusic", "hide")}>
          <div className={cx("imgAlbumHot")}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/6/c/0/36c04a84c9d580012f2f7b5a31ee123c.jpg"
              alt="AlbumHotimg"
            ></img>
            <div className={cx("loadbox")}>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Thêm vào thư viện
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faHeart} />
                </div>
              </Tippy>
              <div className={cx("showplay")}>
                <FontAwesomeIcon icon={faCirclePlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("showbutton")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
            </div>
          </div>
          <h4>Lý Do Là Vậy (Remix) (Single)</h4>
          <p>Hana Cẩm Tiên, TVK</p>
        </div>
      </div>
    </div>
  );
}

export default AlbumHot;
