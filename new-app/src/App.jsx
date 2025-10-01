// src/App.jsx

import React, { useState } from "react";
import { dishes } from "./data/dishes";
import TruckCard from "./components/TruckCard";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("All");
  const categories = Array.from(new Set(dishes.map(d => d.category)));

  const filteredDishes =
    filter === "All" ? dishes : dishes.filter(d => d.category === filter);

  return (
    <div className="board-container">
      <header>
        <h1>Bangkok Must-Try Dishes Board</h1>
        <p>
          Dietary Friendly Edition (No pork, beef, oysters, or raw fish!)
        </p>
        <nav className="category-filter" aria-label="Filter dishes by category">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>
      <main>
        <div className="dish-grid" role="list">
          {filteredDishes.length ? (
            filteredDishes.map(dish => (
              <TruckCard key={dish.name} {...dish} />
            ))
          ) : (
            <div>No dishes found in this category.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
