import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import Counter from "./SearchParams";

const App = () => {
  return (
    <div>
      <Counter />
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
