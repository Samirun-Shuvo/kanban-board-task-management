import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="task_container">
            <div className="add_task">
              <form className="row g-3">
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
                >
                </div>
              </div>
              <div className="card_content">
                <div className="card-header">In Progress</div>
                <div
                  className="task_box"
                ></div>
              </div>
              <div className="card_content">
                <div className="card-header">Done</div>
                <div
                  className="task_box"
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