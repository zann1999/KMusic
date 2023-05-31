import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./liked.module.scss";

import classNames from "classnames/bind";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fahl } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function LikeButton() {
  const [like, setlike] = useState("");
  const btnref = useRef();

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div
          ref={btnref}
          onClick={() => setlike(like == "" ? "isactive" : "")}
          className={cx("likebutton", like)}
        >
          <div className={cx("materialicons", "notliked", "bouncy")}>
            <FontAwesomeIcon icon={fahl} />
          </div>
          <div className={cx("material", "icons", "isliked", "bouncy")}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
