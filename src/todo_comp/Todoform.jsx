import { useRef, useEffect } from "react";
import css from "./Todoform.module.css";

function Todoform({ onAdd, editTask }) {
  const todoTask = useRef();
  const todoDate = useRef();

  // Prefill input fields when editing
  useEffect(() => {
    if (editTask) {
      todoTask.current.value = editTask.name;
      todoDate.current.value = editTask.date;
    } else {
      todoTask.current.value = "";
      todoDate.current.value = "";
    }
  }, [editTask]);

  const handleClick = () => {
    const task = todoTask.current.value;
    const date = todoDate.current.value;
    onAdd(task, date);
    todoTask.current.value = "";
    todoDate.current.value = "";
  };

  return (
    <div className="container">
      <div className="row justify-content-center m-3">
        <div className="col-12 col-md-4 mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Enter ToDo Here"
            ref={todoTask}
          />
        </div>
        <div className="col-12 col-md-4 mb-2">
          <input className="form-control" type="date" ref={todoDate} />
        </div>
        <div className="col-12 col-md-2 mb-2 d-flex justify-content-center">
          <button
            type="button"
            className={`btn ${css.btngrad} w-auto fw-bold`}
            onClick={handleClick}
          >
            {editTask ? "UPDATE" : "ADD"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoform;
