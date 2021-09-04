import React, { useEffect, useState } from "react";
import "./task.css";
import Tasklist from "./Tasklist";
import axios from "axios";
import AddModal from "./AddModal";
function Task() {
  
  const [render, setRender] = useState(0);

  const handleSubmit = (e, task) => {
    e.preventDefault();
    task = task.trim();
    let datafromls = JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    let tasks = [];
    if (datafromls) {
      tasks = [...datafromls];
    }
    tasks.push({
      completed: false,
      title: task,
      id: Math.floor(Math.random() * 200 + 10),
    });

    //set tasks in local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //set rerender
    setRender((render) => render + 1);
  };
  useEffect(() => {
    if (
      !JSON.parse(localStorage.getItem("tasks")) ||
      !JSON.parse(localStorage.getItem("tasks")).length
    ) {
      axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          localStorage.setItem("tasks", JSON.stringify(res.data.slice(0, 5)));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [render]);

  const deldata = (id) => {
    if (window.confirm("Are you sure?")) {
      let datafromls = JSON.parse(localStorage.getItem("tasks"))
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      // filtering data
      datafromls = datafromls.filter((fdata) => fdata.id !== id);
      console.log(datafromls);
      localStorage.setItem("tasks", JSON.stringify(datafromls));
    }
    setRender((render) => render + 1);
  };

  return (
    <div className="wrapper">
      <div className="content">
        <AddModal
          handleSubmit={handleSubmit}
        />
        {JSON.parse(localStorage.getItem("tasks")) &&
          JSON.parse(localStorage.getItem("tasks")).map((todo) => (
            <Tasklist
              func={deldata}
              id={todo.id}
              title={todo.title}
              bool={todo.completed}
            />
          ))}
      </div>
    </div>
  );
}
export default Task;
