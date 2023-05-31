import NavBar from "../../navbar";
import Content from "../../content";
import styles from "./radio.module.scss";
import classNames from "classnames/bind";
import PlayMusic from "../../PlayMusic";
import Notification from "../../message/notify";
import Header from "../../component/header";
import HotRadio from "../../component/Radio/HotRadio";
const cx = classNames.bind(styles);

function Radio() {
  return (
    <div className={cx("radio")}>
      <div className={cx("boxradio")}>
        <HotRadio radioClass={"radioClass"} titleClass={"titleClass"} />
      </div>
      <div className={cx("podcast")}>
        <h1>Thể Loại Podcast</h1>
        <div className={cx("boxpodcast")}>
          <div className={cx("itemPodcast")}>
            <div className={cx("wrapimg")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"></img>
            </div>
          </div>
          <div className={cx("itemPodcast")}>
            <div className={cx("wrapimg")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"></img>
            </div>
          </div>
          <div className={cx("itemPodcast")}>
            <div className={cx("wrapimg")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"></img>
            </div>
          </div>
          <div className={cx("itemPodcast")}>
            <div className={cx("wrapimg")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"></img>
            </div>
          </div>
          <div className={cx("itemPodcast")}>
            <div className={cx("wrapimg")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r16x9_webp/banner/a/1/1/0/a110a3cf4fee745f20be4b04d9fbfa4a.jpg"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("liveshow")}>
        <h1>Chương Trình Nổi Bật</h1>
        <div className={cx("boxliveshow")}>
          <div className={cx("boxitemshow")}>
            <div className={cx("itemliveshow")}> </div>
            <div className={cx("boxtitle")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/0/c/1/90c1a3da3e6612bd51cc6d0a145f91d2.jpg"></img>
              <div>
                <h3>XONE Radio</h3>
                <h4>XONE With Stars</h4>
                <p>
                  Talkshow 1 tiếng với các ca sĩ, nhạc sĩ, rapper, music
                  producer,... Hẹn hò cùng các nghệ sĩ trong nước: Tóc Tiên, Đức
                  Phúc... hay gặp gỡ độc quyền các nghệ sĩ Quốc tế: Alan...
                </p>
              </div>
            </div>
          </div>
          <div className={cx("boxitemshow")}>
            <div className={cx("itemliveshow", "itemliveshow2")}> </div>
            <div className={cx("boxtitle")}>
              <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/avatars/f/6/d/7/f6d788fdf5d8ef5913ea2bc2e514a083.jpg"></img>
              <div>
                <h3>Tun Cảm Ơn</h3>
                <h4>Đắp Chăn Nằm Nghe Tun Kể</h4>
                <p>
                  Là series podcast đầu tiên của Tun, nơi Tun và các bạn có thể
                  trải lòng với nhau về những điều mệt mỏi trong cuộc sống, cùng
                  cho nhau những lời khuyên hay ho, cùng chữa lành những tổn
                  thương, đổ vỡ để trái tim tụi mình một lần nữa được ngập tràn
                  yêu thương. Tun hy vọng những chia sẻ của mình có thể mang lại
                  những giây phút thư thái, dễ chịu cho bạn trước khi đi ngủ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
