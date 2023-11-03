import "./App.css";
import "./index.css";
import Hero from "./pages/hero";
import NavBar from "./components/navbar";
import Menu from "./pages/menu";
import About from "./pages/about";

function App() {
  return (
    <div className="font-sans">
      <button>
        <a href="" />
      </button>
      <NavBar />
      <Hero />
      <Menu />
      <About />
    </div>
  );
}

export default App;
