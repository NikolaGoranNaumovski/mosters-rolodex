import "./SearchBox.css";

export const SearchBox = ({ searchText, onChangeHandler }) => {
  return (
    <input
      type="search"
      value={searchText}
      className={`search-box`}
      onChange={onChangeHandler}
      placeholder="Search monsters"
    />
  );
};
