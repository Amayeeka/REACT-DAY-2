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


