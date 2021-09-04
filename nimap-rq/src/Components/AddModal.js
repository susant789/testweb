import React, { useState } from "react";
import "./addmodel.css";
import styled from "styled-components";

const AddModal = ({ handleSubmit }) => {
  const [task, setTask] = useState("");
  const [model, setmodel] = useState(false);
  return (
    <>
      <button className="add" onClick={() => setmodel(true)}>
        +
      </button>
      <Model className="model1" show={model}>
        <h1>ADD TASK</h1>
        <div className="line"></div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
          <form>
            <h2>TASK - </h2>
            <input
              placeholder="Enter Your Task Here"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
            <button
              className="b"
              onClick={(e) => {
                handleSubmit(e, task);
                setTask("")
              }}
            >
              Add
            </button>
          </form>
          <button onClick={() => setmodel(false)}>Close</button>
        </div>
      </Model>
    </>
  );
};

const Model = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export default AddModal;
