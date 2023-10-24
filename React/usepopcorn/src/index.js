import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
// import "./index.css";

import StarRating from "./components/Global/StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
  <StarRating maxRating={5} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
  <StarRating maxRating={10} size={24} color="red" className="test" defaultRating={3} />
  <Test />
</StrictMode>);