// ColorBox.jsx — Exercise 4: Event Handling (no styles)
// Note: Without styles a div is invisible, so we show text to indicate the state.

import { useState } from "react";

function ColorBox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>Current color: {isHovered ? "Red" : "Blue"}</p>
      <p>(Hover over this text to see the change)</p>
    </div>
  );
}

export default ColorBox;