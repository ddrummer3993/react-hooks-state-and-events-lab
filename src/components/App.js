import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkOn, setDarkOn] = useState(false);

  const appClass = darkOn ? "App dark" : "App light"

  function handleDarkClick () {
    setDarkOn(!darkOn)
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkClick} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
