import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Trash", "Bad", "Decent", "Good", "Great"]}
    />
    <StarRating maxRating={10} className="test" defaultRating={3} /> */}
  </React.StrictMode>
);
