import { useEffect, useState } from "react";

import "./App.css";
import { filterMonsters } from "./utils";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1 className="monsters-title">Monsters Rolodex</h1>
      <SearchBox value={searchText} onChangeHandler={onSearchChange} />
      <br />
      <CardList monsters={filterMonsters(monsters, searchText)} />
    </div>
  );
};

export default App;
