import className from "classnames/bind";
import styles from "./Notify.module.scss";
import { useEffect, useRef, useState } from "react";
const cx = className.bind(styles);

function Notification() {
  const [open, setopen] = useState("");
  const btnref = useRef();
  useEffect(() => {
    if (open === "hidebox") {
      btnref.current.classList.add("hidebox");
    } else return;
  }, [open]);

  return (
    <div className={cx("wrap", open)} ref={btnref}>
      <div className={cx("successbox", "hide")}>
        <div class={cx("dot")}></div>
        <div class={cx("dot", "two")}></div>
        <div class={cx("face")}>
          <div class={cx("eye")}></div>
          <div class={cx("eye", "right")}></div>
          <div class={cx("mouth", "happy")}></div>
        </div>
        <div class={cx("shadow", "scale")}></div>
        <div class={cx("message")}>
          <h1 class={cx("alert")}>welcome!</h1>
          <p>Tôi đang truy cập bằng máy tính</p>
        </div>
        <button class={cx("buttonbox")}>
          <h1 class={cx("green")} onClick={() => setopen("hidebox")}>
            let's go
          </h1>
        </button>
      </div>
      <div className={cx("errorbox")}>
        <div class={cx("dot")}></div>
        <div class={cx("dot", "two")}></div>
        <div class={cx("face2")}>
          <div class={cx("eye")}></div>
          <div class={cx("eye", "right")}></div>
          <div class={cx("mouth", "sad")}></div>
        </div>
        <div class={cx("shadow", "move")}></div>
        <div class={cx("message")}>
          <h1 class={cx("alert")}>Oh no!</h1>
          <p>Tôi đang truy cập bằng Mobile</p>
        </div>
        <button class={cx("buttonbox")}>
          <h1 class={cx("red")}>Hẹn gặp lại</h1>
        </button>
      </div>
      <footer>
        <p>
          K M <a> u s i c</a> ♡{" "}
        </p>
      </footer>
    </div>
  );
}

export default Notification;
