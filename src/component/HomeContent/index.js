import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./HomeContent.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
import {
  faChevronRight,
  faEllipsis,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Chill from "../Chill";

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
        <div className={cx("listmusic")}>
          <div className={cx("colmusic")}>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>

            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
          </div>

          <div className={cx("colmusic")}>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>

            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
          </div>

          <div className={cx("colmusic")}>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>

            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
            <div className={cx("musicitem")}>
              <div className={cx("play")}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <Tippy
                render={(attrs) => (
                  <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                    Khác
                  </div>
                )}
              >
                <div className={cx("option")}>
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </Tippy>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/c/d/f/8cdff92c826fd8bb3073a0fe1961a4a5.jpg"
                className={cx("imgitem")}
              ></img>
              <div className={cx("tittle")}>
                <h3>VingleVingle (Prod. R.Tee)</h3>
                <h4>Heize</h4>
                <h5>Hôm nay</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chill></Chill>
    </div>
  );
}

export default HomeContent;
