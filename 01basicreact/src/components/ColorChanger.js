import React, { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("green");
  //const red = () => {setColor("red")};
  return (
    <div style={{backgroundColor: "red", width: "100%"}}>
       xnmxbsm
      {/* <button>Red</button>
      <button>Yellow</button>
      <button>Green</button>
      <button>Violet</button> */}
    </div>
  );
};

export default ColorChange;
