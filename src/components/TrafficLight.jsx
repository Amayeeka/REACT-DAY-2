// TrafficLight.jsx — Exercise 5: Conditional Rendering (no styles)

function TrafficLight({ color }) {
  const getMessage = () => {
    switch (color) {
      case "red":    return "Stop";
      case "yellow": return "Slow Down";
      case "green":  return "Go!";
      default:       return "Unknown";
    }
  };

  return (
    <div>
      <p>Color: {color}</p>
      <p>Message: {getMessage()}</p>
    </div>
  );
}

export default TrafficLight;