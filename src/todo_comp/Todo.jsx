import Items from "./Items";
import css from "./Todo.module.css";
import Todoform from "./Todoform";
import { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const Additem = (taskName, date) => {
    if (!taskName.trim() || !date) {
      alert("Please enter task and date!");
      return;
    }

    if (editTask) {
      setTask((prev) =>
        prev.map((t) =>
          t.id === editTask.id ? { ...t, name: taskName, date } : t
        )
      );
      setEditTask(null);
    } else {
      const newItem = { id: Date.now(), name: taskName, date: date };
      setTask((prev) => [...prev, newItem]);
    }
  };

  const delItem = (id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  };

  const editItem = (id) => {
    const itemToEdit = task.find((t) => t.id === id);
    setEditTask(itemToEdit);
  };

  return (
    <div className={css.todoapp}>
      <h1 className={`text-center p-3 fw-bold ${css.appname}`}>DAILY TASKS</h1>
      <Todoform onAdd={Additem} editTask={editTask} />
      <Items task={task} delbtn={delItem} editbtn={editItem} />
    </div>
  );
}

export default Todo;
