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
import { useEffect, useLayoutEffect, useState, useMemo } from "react";
import UserSearch from "../../component/SearchResult/UserSearch";
//
import { useContext } from "react";
import { SingContext } from "../../global/sing";

const cx = classNames.bind(styles);

function Profile({ className }) {
  //context
  //singnumber /song

  const context = useContext(SingContext);
  const [song, setsong] = context[0];

  const [Play, setplay] = context[2];

  //
  const [m, setm] = useState(song + 1);

  const handle = (i) => {
    setm(i + 1);
    setplay(true);
    setsong(i);
  };
  useEffect(() => {
    setm(song + 1);
  }, [song]);

  return (
    <div className={cx("profile", { className })}>
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
        {listSound.map((item, index) => (
          <>
            <div
              className={cx("item", m == index + 1 ? "choose" : "")}
              onClick={() => handle(index)}
            >
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
