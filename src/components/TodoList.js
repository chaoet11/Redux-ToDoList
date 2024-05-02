// 顯示 To-Do 項目的列表
import React from "react";
import { useSelector } from "react-redux"; // 從 Redux Store 中選擇狀態
import TodoItem from "./TodoItem";

const TodoList = () => {
  // 從 Redux Store 中選擇狀態
  const tasks = useSelector((state) => state);

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TodoList;
