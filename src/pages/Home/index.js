import NavBar from "../../navbar";
import Content from "../../content";
import styles from "./home.module.scss";
import classNames from "classnames/bind";
import PlayMusic from "../../PlayMusic";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("home")}>
      <NavBar></NavBar>
      <Content></Content>
      <PlayMusic></PlayMusic>
    </div>
  );
}

export default Home;
