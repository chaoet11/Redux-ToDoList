// 定義 To-Do List 的邏輯
import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "../actions";
import { v4 } from "uuid";

const initialState = []; // 初始狀態是一個空的列表

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: v4(), text: action.payload, completed: false }, // 使用 UUID 作為唯一 ID，completed 預設值為 false，表示任務還沒有被完成
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload); // 使用 filter 過濾掉 ID 與 action.payload 相同的 task
    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed } // 切換完成狀態
          : task
      );
    default:
      return state;
  }
};

export default todoReducer;
