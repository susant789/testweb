import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <div className="data">
        <select name="Dropdown" id="">
          <option value="val1">Dropdown</option>
          <option value="val2">Dropdown2</option>
        </select>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          magnam ipsa neque at voluptatibus commodi expedita cum, quo ullam
          exercitationem facilis praesentium asperiores ducimus optio ratione
          itaque, non, facere repellendus incidunt qui ad perferendis! Iste ad
          excepturi dolores ratione atque.
        </p>
      </div>
    </div>
  );
}

export default Home;
