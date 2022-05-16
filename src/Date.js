import "./index.css";
import React, { useState } from "react";

function Date(props) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    //  toggle isActive state on click
    setIsActive((current) => !current);
  };

  const name = props.name;
  return (
    <header>
      <div class="border">
        <br />
        <button
          className={isActive ? "nameDecoration" : ""}
          onClick={handleClick}
        >
          Dumitru
        </button>
      </div>
      <br/>
    </header>
  );
}

export default Date;
