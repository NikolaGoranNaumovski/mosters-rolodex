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
      <CardList monsters={filterMonsters(monsters, searchText)} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchText: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) => this.setState(() => ({ monsters: users })));
//   }

//   onSearchChange = (event) => {
//     this.setState(() => ({ searchText: event.target.value }));
//   };

//   filterMonsters = () => {
//     const { monsters, searchText } = this.state;
//     return monsters.filter((monster) => {
//       const { name } = monster;

//       return name.toLowerCase().includes(searchText.toLowerCase());
//     });
//   };

//   render() {
//     const { state, filterMonsters, onSearchChange } = this;
//     const { searchText } = state;

//     const monsters = filterMonsters();

//     return (
//       <div>
//         <h1 className='monsters-title'>Monsters Rolodex</h1>
//         <SearchBox value={searchText} onChangeHandler={onSearchChange} />
//         <CardList monsters={monsters} />
//       </div>
//     );
//   }
// }

export default App;
