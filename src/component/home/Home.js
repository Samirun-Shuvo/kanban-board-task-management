import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction } from "../../redux/Actions/AddTaskAction";
import "./Home.css";

const Home = () => {
  const tasks = useSelector((state) => state?.tasks);
  // console.log(tasks);
  const dispatch = useDispatch();
  const handleAddTask = (e) => {
    e.preventDefault();
    if (e.target.task.value) {
      dispatch(addTaskAction(e.target.task.value));
      e.target.task.value = "";
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };
  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };
  const drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="task_container">
            <div className="add_task">
              <form onSubmit={handleAddTask} className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    name="task"
                    className="form-control"
                    id=""
                    placeholder="Write Your Task..."
                  />
                </div>
                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-light text-warning fw-bold mb-2 px-3"
                  >
                    ADD
                  </button>
                </div>
              </form>
            </div>

            <div className="task_box_container">
              <div className="card_content">
                <div className="card-header">To Do</div>
                <div
                  className="task_box"
                  onDrop={(e) => drop(e)}
                  onDragOver={(e) => allowDrop(e)}
                >
                  {tasks?.taskList?.map((item, index) => (
                    <div
                      className="task_items"
                      key={index}
                      draggable="true"
                      onDragStart={(e) => drag(e)}
                      id={`drag` + index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="card_content">
                <div className="card-header">In Progress</div>
                <div
                  className="task_box"
                  onDrop={(e) => drop(e)}
                  onDragOver={(e) => allowDrop(e)}
                ></div>
              </div>
              <div className="card_content">
                <div className="card-header">Done</div>
                <div
                  className="task_box"
                  onDrop={(e) => drop(e)}
                  onDragOver={(e) => allowDrop(e)}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
