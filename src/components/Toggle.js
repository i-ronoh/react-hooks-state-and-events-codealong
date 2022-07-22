import React, { useState } from "react";

function Toggle() {
  const [isOn, setiIsOn] = useState(false)
  const handleClick = () => (
    setiIsOn((isOn) => !isOn)
  );

  const color = isOn ? "green" : "red";

  return <button style={{background: color}} onClick={handleClick} >{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;