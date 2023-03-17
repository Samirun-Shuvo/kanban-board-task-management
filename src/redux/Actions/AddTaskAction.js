export const addTaskAction = (payload) => (dispatch, getState) => {
    dispatch({
      type: "ADD_TASK",
      payload,
    });
  
    localStorage.setItem("taskList", JSON.stringify(getState().tasks.taskList));
  };