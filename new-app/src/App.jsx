import "./App.css";
import TruckCard from "./components/TruckCard";
import DISHES from "./data/dishes";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="awning" aria-hidden="true" />
        <h1>Bangkok Must-Try Dishes</h1>
      </header>

      <main className="container">
        <section className="grid" role="list" aria-label="Dishes">
          {DISHES.map((d) => (
            <TruckCard key={d.id} {...d} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Tap a card to open its Google Maps location.</p>
      </footer>
    </div>
  );
}