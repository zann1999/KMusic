import styles from "./navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function NavBar() {
  return <div className={cx("abc")}>x</div>;
}

export default NavBar;
