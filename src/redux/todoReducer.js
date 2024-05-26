const initalState = {
  allItems: localStorage ? JSON.parse(localStorage.getItem("allItems")) : [],
};

 const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD":
      const items = [...state.allItems, action.item];
      localStorage.setItem("allItems", JSON.stringify([...items]));
      return { ...state, allItems: [...items] };
    case "REMOVE":
      const updateList = state.allItems.filter((item) => item.id !== action.id);
      localStorage.setItem("allItems", JSON.stringify([...updateList]));
      return { ...state, allItems: [...updateList] };
    case "TOGGLE":
      const toggledList = state.allItems.map((item) =>
        item.id === action.id ? { ...item, compeleted: !item.compeleted } : item
      );
      localStorage.setItem("allItems", JSON.stringify([...toggledList]));
      return { ...state, allItems: [...toggledList] };
    default:
      return state;
  }
};

export default todoReducer;