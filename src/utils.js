export const filterMonsters = (monsters, searchText) => {
    return monsters.filter((monster) => {
      const { name } = monster;

      return name.toLowerCase().includes(searchText.toLowerCase());
    });
  };