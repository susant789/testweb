import React from "react";
import styled from "styled-components";

function Tasklist({id,title,bool}) {
  return (
    <List>
      <div>
        <h1 style={{flex:.10}}>{id}</h1>
        <h2 style={{flex:.70,textAlign:"left"}}>
          {title}
        </h2>
        <h2 className="bool" style={{flex:.15}}>{`${bool}`}</h2>
      </div>
      <button className="del">Delete</button>
    </List>
  );
}

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  .del {
    padding: 0.5rem 1rem;
    color: white;
    background: rgb(206, 69, 69);
    border: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
  }
  .del:hover{
    transform: scale(1.05);
    transition: all .2s;
  }

  div {
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 0.08rem solid grey;
    margin: 1rem 2rem 2rem 2rem;
    color: black;

    h2 {
      letter-spacing: 0.1rem;
      font-size: 1.8rem;
      font-weight: 700;
    }
    .bool {
      text-transform: capitalize;
    }
  }
`;

export default Tasklist;
