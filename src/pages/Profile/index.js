import styles from "./profile.module.scss";
import classNames from "classnames/bind";
import PlayMusic from "../../PlayMusic";
import { listSound } from "../../PlayMusic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompactDisc,
  faEllipsis,
  faMusic,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import LikeButton from "../../component/liked";

const cx = classNames.bind(styles);

function Profile() {
  return (
    <div className={cx("profile")}>
      <div className={cx("option")}>
        <h1 className={cx("active")}>BÀI HÁT</h1>
        <h1>PODCAST</h1>
        <h1>ALBUM</h1>
        <h1>MV</h1>
      </div>
      <div className={cx("line")}></div>
      <span className={cx("activebtn")}>YÊU THÍCH</span>
      <span>ĐÃ TẢI LÊN</span>
      <div className={cx("title")}>
        <h2>BÀI HÁT</h2>
        <h2>ALBUM</h2>

        <h2>THỜI GIAN</h2>
      </div>
      <div className={cx("line")}></div>
      <div className={cx("list")}>
        {listSound.map((item) => (
          <>
            <div className={cx("item", "choose")}>
              <FontAwesomeIcon icon={faMusic} className={cx("icon")} />
              <img src={item.avatar}></img>
              <div>
                <h3>{item.name}</h3>
                <h4>{item.singger}</h4>
              </div>
              <div className={cx("album")}>Top Music</div>
              <div className={cx("btn")}>
                <LikeButton />
                <span>04:44</span>
                <FontAwesomeIcon icon={faEllipsis} className={cx("icon2")} />
              </div>
              <div className={cx("cd")}>
                <FontAwesomeIcon icon={faCompactDisc} />
              </div>
              <div className={cx("subimg")}>
                <FontAwesomeIcon icon={faPlay} className={cx("play")} />
              </div>
            </div>
            <div className={cx("line2")}></div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Profile;
