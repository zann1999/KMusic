import styles from "./content.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Content() {
  return <div className={cx("content")}>Content</div>;
}

export default Content;
