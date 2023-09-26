import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"; // Import the Header component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      {/* Pass the toggleDarkMode function as a prop */}
      <Header onDarkModeClick={toggleDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
