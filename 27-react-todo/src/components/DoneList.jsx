import { done } from "../store/module/todo";
import { useSelector } from "react-redux";

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const todoList = list.filter((li) => li.done === true);
  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
