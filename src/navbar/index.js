import styles from "./navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function NavBar({ children }) {
  return <div className={cx("abc")}>{children}</div>;
}

export default NavBar;
