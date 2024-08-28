import "./App.css";
import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoItem } from "./Components/TodoItem";
import CreateTodo from "./Components/CreateTodo";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <>
    <ProfileCard/>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodo/>
    </>
  );
}

export default App;
