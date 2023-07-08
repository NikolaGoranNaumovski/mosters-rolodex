import { Component } from "react";

import './SearchBox.css'

export class SearchBox extends Component {
  render() {
    const { searchText, onChangeHandler } = this.props;

    return (
      <>
        <input
          type="search"
          value={searchText}
          className={`search-box`}
          onChange={onChangeHandler}
          placeholder="Search monsters"
        />
      </>
    );
  }
}
