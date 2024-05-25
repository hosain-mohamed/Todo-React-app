export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const items = [...state, action.item];
      localStorage.setItem("allItems", JSON.stringify([...items]));
      return items;
    case "REMOVE":
      const updateList = state.filter((item) => item.id !== action.id);
      localStorage.setItem("allItems", JSON.stringify([...updateList]));
      return updateList;
    case "TOGGLE":
      const toggledList = state.map((item) =>
        item.id === action.id ? { ...item, compeleted: !item.compeleted } : item
      );
      localStorage.setItem("allItems", JSON.stringify([...toggledList]));
      return toggledList;
    default:
      throw new Error();
  }
};
