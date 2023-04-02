import UserSearch from "./UserSearch";
import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function SearchResult() {
  return (
    <div className={cx("SearchResult")}>
      <UserSearch />
      <UserSearch />
      <UserSearch />
      <UserSearch />
      <UserSearch />
    </div>
  );
}

export default SearchResult;
