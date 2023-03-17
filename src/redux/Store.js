import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import addTaskReducer from "./Reducers/AddTaskReducer";
const rootReducer = combineReducers({
  tasks: addTaskReducer,
});
let initialState = {
  tasks: {
    taskList: localStorage.getItem("taskList")
      ? JSON.parse(localStorage.getItem("taskList"))
      : [],
  },
};
const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;