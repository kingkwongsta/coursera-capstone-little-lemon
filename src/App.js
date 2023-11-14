import "./App.css";
import "./index.css";
import Hero from "./pages/hero";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Menu from "./pages/menu";
import About from "./pages/about";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
