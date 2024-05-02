// 配置 Redux store
import { createStore } from "redux";
import todoReducer from "./reducers";

const store = createStore(todoReducer);

export default store;
