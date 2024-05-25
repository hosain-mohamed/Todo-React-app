import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import Search from "./pages/Search";
import { TodoListProvider } from "./context/TodoListContext";
function App() {
  return (
    <TodoListProvider>
      <div className="app">
        <Search />
      </div>
    </TodoListProvider>
  );
}

export default App;
