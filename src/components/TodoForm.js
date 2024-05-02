// 新增 To-Do 項目的表單
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/actions";

const TodoForm = () => {
  const [task, setTask] = useState(""); // 輸入框中的內容
  const dispatch = useDispatch(); // 派發 actions

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      dispatch(addTask(task)); // 如果輸入框中有內容，派發 `addTask` action，將 task 作為參數傳遞給 Redux
      setTask(""); // 清空輸入框
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=""
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
      />
      <button className="add-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
