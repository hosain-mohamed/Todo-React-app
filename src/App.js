import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import Search from "./pages/Search";
import { TodoListProvider } from "./context/TodoListContext";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <TodoListProvider>
        <div className="app">
          <Search />
        </div>
      </TodoListProvider>
    </Provider>
  );
}

export default App;
