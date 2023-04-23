import UserSearch from "./UserSearch";
import styles from "./SearchResult.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function SearchResult({ data }) {
  return (
    <div className={cx("SearchResult")}>
      <UserSearch data={data} />
    </div>
  );
}

export default SearchResult;
