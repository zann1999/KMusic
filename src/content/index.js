import styles from "./content.module.scss";
import classNames from "classnames/bind";
import Header from "../component/header";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("content")}>
      <Header></Header>
    </div>
  );
}

export default Content;
