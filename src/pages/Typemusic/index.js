import NavBar from "../../navbar";
import Content from "../../content";
import styles from "./Typemusic.module.scss";
import classNames from "classnames/bind";
import PlayMusic from "../../PlayMusic";
import Notification from "../../message/notify";
import Header from "../../component/header";
const cx = classNames.bind(styles);

function Typemusic() {
  return (
    <div className={cx("Typemusic")}>
      <div className={cx("formalerts", "toasts")}>
        <div
          role="alert"
          className={cx(
            "fade",
            "formwarning",
            "alert",
            "alertprimary",
            "alertdismissible",
            "show"
          )}
        >
          <button
            type="button"
            className={cx("btnclose")}
            aria-label="Close alert"
          ></button>
          <div className={cx("dflex", "alignitemscenter")}>
            <img
              alt="noti-icon"
              src="https://brand.workingsolutions.com/components/images/ghost.svg"
              width="28"
              className={cx("me4")}
            ></img>
            <p>
              <b className={cx("dflex")}>
                Tính năng này đang trong quá trình hoàn thiện. Hãy quay lại sau
                nhé !
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typemusic;
