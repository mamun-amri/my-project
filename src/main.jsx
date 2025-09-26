import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import "aos/dist/aos.css"; // You can also use <link> for styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto">
      <Navbar />
      <App />
    </div>
  </StrictMode>
);
