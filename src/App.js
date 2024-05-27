import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import Todo from "./features/Todo";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
