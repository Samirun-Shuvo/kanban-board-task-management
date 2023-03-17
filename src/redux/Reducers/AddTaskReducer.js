const addTaskReducer = (state = { taskList: [] }, action) => {
    switch (action.type) {
      case "ADD_TASK": {
        return {
          ...state,
          taskList: [...state.taskList, action.payload],
        };
      }
  
      default:
        return state;
    }
  };
  export default addTaskReducer;