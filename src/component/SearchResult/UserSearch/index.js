import styles from "./UserSearch.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";
import Tippy from "@tippyjs/react/headless";

import "tippy.js/dist/tippy.css"; // optional
import LikeButton from "../../liked";
const cx = classNames.bind(styles);

function UserSearch({ children, cl, data, sound, topmusic }) {
  return (
    <>
      {cl && sound ? (
        <div className={cx("user", { cl }, { topmusic })}>
          <img src={sound.avatar} alt="photo"></img>
          <div>
            <h4>{sound.name}</h4>
            <h5>{sound.singger}</h5>
          </div>
          <div className={cx("option")}>
            <Tippy
              render={(attrs) => (
                <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                  Thêm vào thư viện
                </div>
              )}
            >
              <LikeButton />
              {/* <FontAwesomeIcon icon={faHeart} /> */}
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
      ) : (
        data &&
        data.map((dat) => {
          return (
            <div className={cx("user", { cl })} key={dat.id}>
              <img src={dat.avatar} alt="photo"></img>
              <div>
                <h4>{dat.full_name}</h4>
                <h5>{dat.nickname}</h5>
              </div>
              <div className={cx("option")}>
                <Tippy
                  render={(attrs) => (
                    <div className={cx("boxtippy")} tabIndex="-1" {...attrs}>
                      Thêm vào thư viện
                    </div>
                  )}
                >
                  <LikeButton />
                  {/* <FontAwesomeIcon icon={faHeart} /> */}
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
        })
      )}
    </>
  );
}

export default UserSearch;
