import React,{useEffect,useState} from "react";
import "./task.css";
import Tasklist from "./Tasklist";
import axios from "axios";

function Task() {

  const [data,setData] = useState([])

    useEffect(()=>{
      axios
			.get("http://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				setData(res.data.slice(0, 4))   
      })
    },[])

    console.log(data)

  return (
    <div className="wrapper">
      <div className="content">
        {
          data.map((todo)=>(
            <Tasklist id={todo.id} title={todo.title} bool={todo.completed}/>
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
