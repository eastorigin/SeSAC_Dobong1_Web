import { done } from "../store/module/todo";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DoneList() {
  const list = useSelector((state: ReduxState) => state.todo.list);
  const todoList = list.filter((li) => li.done === true);
  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <span>
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
