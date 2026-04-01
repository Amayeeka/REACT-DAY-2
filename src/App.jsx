// App.jsx — Parent Component

// import Button from "./components/Button";
// import Toggle from "./components/Toggle";
// import MirrorInput from "./components/MirrorInput";
// import ColorBox from "./components/ColorBoxBg";
// import TrafficLight from "./components/TrafficLight";
// import TodoList from "./components/TodoList";




// export default function App() {
//   return (
//     <div style={{ padding: "32px" }}>

//       {/* Exercise 1 — Props */}
//       <h2 style={{ textAlign: "center" }}>Exercise 1: Props</h2>
//       <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "48px" }}>
//         <Button label="Primary" color="#3b82f6" />
//         <Button label="Success" color="#22c55e" />
//         <Button label="Danger"  color="#ef4444" />
//         <Button label="Warning" color="#f59e0b" />
//       </div>

//       {/* Exercise 2 — useState */}
//       <h2 style={{ textAlign: "center" }}>Exercise 2: useState</h2>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Toggle />
//       </div>

//       {/* Exercise 3 — Controlled Input */}
//       <h2 style={{ textAlign: "center" }}>Exercise 3: Controlled Input</h2>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <MirrorInput />
//       </div>

//       {/* Exercise 4 — Event Handling */}
//       <h2 style={{ textAlign: "center" }}>Exercise 4: Event Handling</h2>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <ColorBox />
//       </div>

//       {/* Exercise 5 — Conditional Rendering */}
//       <h2 style={{ textAlign: "center" }}>Exercise 5: Conditional Rendering</h2>
//       <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
//         <TrafficLight color="red"    />
//         <TrafficLight color="yellow" />
//         <TrafficLight color="green"  />
//       </div>

//       {/* Exercise 6 — Lists & Keys */}
//       <h2 style={{ textAlign: "center" }}>Exercise 6: Lists & Keys</h2>
//       <TodoList />

//     </div>
//   );
// }


// App.jsx — Parent Component (no styles)

import Button from "./components/Button";
import Toggle from "./components/Toggle";
import MirrorInput from "./components/MirrorInputText";
import ColorBox from "./components/ColorBoxBackground";
import TrafficLight from "./components/TrafficLight";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <h2>Exercise 1: Props</h2>
      <Button label="Primary" color="#3b82f6" />
      <Button label="Success" color="#22c55e" />
      <Button label="Danger"  color="#ef4444" />
      <Button label="Warning" color="#f59e0b" />

      <hr />

      <h2>Exercise 2: useState</h2>
      <Toggle />

      <hr />

      <h2>Exercise 3: Controlled Input</h2>
      <MirrorInput />

      <hr />

      <h2>Exercise 4: Event Handling</h2>
      <ColorBox />

      <hr />

      <h2>Exercise 5: Conditional Rendering</h2>
      <TrafficLight color="red"    />
      <TrafficLight color="yellow" />
      <TrafficLight color="green"  />

      <hr />

      <h2>Exercise 6: Lists & Keys</h2>
      <TodoList />

    </div>
  );
}


