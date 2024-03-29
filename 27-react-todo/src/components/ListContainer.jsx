import DoneList from "./DoneList";
import ToDoList from "./TodoList";

export default function ListContainer() {
  return (
    <div className="ListContainer">
      <ToDoList />
      <br />
      <br />
      <br />
      <br />
      <DoneList />
    </div>
  );
}
