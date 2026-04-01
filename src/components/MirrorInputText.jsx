// MirrorInput.jsx — Exercise 3: Controlled Input (no styles)

import { useState } from "react";

function MirrorInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>{text || "Start typing above..."}</p>
    </div>
  );
}

export default MirrorInput;