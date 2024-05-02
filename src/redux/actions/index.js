//  定義 To-Do List 的行為
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const addTask = (text) => ({
  type: ADD_TASK,
  payload: text,
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id, // 要刪除的 ID
});

export const completeTask = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});
