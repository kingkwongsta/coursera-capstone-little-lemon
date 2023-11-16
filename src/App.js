import "./App.css";
import "./index.css";
import Hero from "./pages/hero";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Menu from "./pages/menu";
import About from "./pages/about";
import Reservations from "./pages/reservations";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Menu />
      <About />
      <Reservations />
      <Footer />
    </div>
  );
}

export default App;
