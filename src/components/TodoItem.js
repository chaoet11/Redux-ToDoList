// 單個 To-Do 項目
import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, completeTask } from "@/redux/actions";

// TodoList 傳遞過來的 task
const TodoItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <ol>
      <li>
        <input
          type="checkbox"
          checked={task.completed}
          onClick={() => dispatch(completeTask(task.id))} // 當 checkbox 被點擊時，派發 completeTask action，切換任務狀態
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "black",
          }} // 刪除線
        >
          {task.text}
        </span>
        <button
          className="move-button"
          onClick={() => dispatch(removeTask(task.id))}
        >
          Remove
        </button>
        {/* 當按鈕被點擊，派發 removeTask action，刪除 To-Do 項目。 */}
      </li>
    </ol>
  );
};

export default TodoItem;
