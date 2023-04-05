import styles from "./content.module.scss";
import classNames from "classnames/bind";
import Header from "../component/header";
import HomeContent from "../component/HomeContent";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("content")}>
      <Header></Header>
      <HomeContent></HomeContent>
    </div>
  );
}

export default Content;
