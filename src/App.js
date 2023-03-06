import TodoApp from "./Components/TodoApp/TodoApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col justify-center items-center my-5"> 
      <h1 className="text-4xl">TODO APP</h1>
      <TodoApp/>
    </div>
    </BrowserRouter>
  );
}

export default App;
