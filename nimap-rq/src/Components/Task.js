import React,{useEffect,useState} from "react";
import "./task.css";
import Tasklist from "./Tasklist";
import axios from "axios";

function Task() {

  const [render,setRender] = useState(0)


    useEffect(()=>{
      if(
        !JSON.parse(localStorage.getItem("tasks")) ||
        !JSON.parse(localStorage.getItem("tasks")).length
        ){
        axios
        .get("http://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          localStorage.setItem("tasks",JSON.stringify(res.data.slice(0,20)));
        })
        .catch(err=>{
          console.log(err)
        })
      } 
    },[render])

    const deldata =(id)=>{
      if (window.confirm("Are you sure?")) {
        let datafromls = JSON.parse(localStorage.getItem("tasks"))
          ? JSON.parse(localStorage.getItem("tasks"))
          : [];
          // filtering data
          datafromls = datafromls.filter(
            fdata=>fdata.id !== id
          );
          console.log(datafromls)
          localStorage.setItem("tasks",JSON.stringify(datafromls));
      }
      setRender(render => render + 1)
    }

  return (
    <div className="wrapper">
      <div className="content">
        {
          JSON.parse(localStorage.getItem("tasks")) &&
          JSON.parse(localStorage.getItem("tasks"))
          .map((todo)=>(
          <Tasklist func={deldata} id={todo.id} title={todo.title} bool={todo.completed}/>
          ))
        }
        <button className="add">
          +
        </button>
      </div>
    </div>
  );
}
export default Task;
