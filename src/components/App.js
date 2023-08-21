import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar /> {/* Use the NavBar component */}
      <Home />
      <About />
    </div>
  );
}

export default App;

