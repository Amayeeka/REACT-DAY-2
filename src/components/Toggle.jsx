// Toggle.jsx — Exercise 2: useState (no styles)

import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;