import "./index.css";
import React, { useState } from "react";


function Add() {
  const [color , setColor] = useState();
  return (
    <header>
      <div class="border">
        <input
          type="text"
          value={setColor}
          onChange={(e) => setColor(e.value)}
        />
      
      </div>
      <br />
    </header>
  );
}

export default Add;
