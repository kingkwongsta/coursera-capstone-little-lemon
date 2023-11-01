import "./App.css";
import "./index.css";
import Hero from "./pages/hero";
import NavBar from "./components/navbar";
import Menu from "./pages/menu";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Menu />
    </div>
  );
}

export default App;
