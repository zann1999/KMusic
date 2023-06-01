import NavBar from "../../navbar";
import Content from "../../content";
import styles from "./kmchart.module.scss";
import classNames from "classnames/bind";
import PlayMusic from "../../PlayMusic";
import Notification from "../../message/notify";
import Header from "../../component/header";
import image from "../../image/background/week-chart-bg.edf332e5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import UserSearch from "../../component/SearchResult/UserSearch";
const cx = classNames.bind(styles);
const singer = {
  avatar:
    "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/cover/2/d/5/c/2d5cc8bc9f930ce292c464e929ea31fb.jpg",
  name: "Bật Tình Yêu Lên",
  singger: "Tăng Duy Tân, ...",
};

function Kmchart() {
  return (
    <div className={cx("kmchart")}>
      <img className={cx("background")} src={image}></img>
      <div className={cx("wrap")}>
        <h1>Bảng Xếp Hạng Tuần</h1>
        <div className={cx("week")}>
          <div className={cx("boxweek")}>
            <h2>
              Việt Nam<> </>
              <FontAwesomeIcon icon={faPlay} />
            </h2>
            <div className={cx("item")}>
              <h3>1</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>2</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>3</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>4</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>5</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("wrapall")}>
              <span className={cx("all")}>Xem tất cả</span>
            </div>
          </div>
          <div className={cx("boxweek")}>
            <h2>
              US-UK<> </>
              <FontAwesomeIcon icon={faPlay} />
            </h2>
            <div className={cx("item")}>
              <h3>1</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>2</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>3</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>4</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>5</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("wrapall")}>
              <span className={cx("all")}>Xem tất cả</span>
            </div>
          </div>
          <div className={cx("boxweek")}>
            <h2>
              K-Pop<> </>
              <FontAwesomeIcon icon={faPlay} />
            </h2>
            <div className={cx("item")}>
              <h3>1</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>2</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>3</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>4</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("item")}>
              <h3>5</h3>
              <h4 className={cx("line")}>-</h4>
              <div className={cx("user")}>
                <UserSearch
                  cl={"infosong"}
                  topmusic={"topmusic"}
                  sound={singer}
                  clx={"marginx"}
                />
              </div>
              <h5 className={cx("time")}>04:44</h5>
            </div>
            <div className={cx("wrapall")}>
              <span className={cx("all")}>Xem tất cả</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kmchart;
