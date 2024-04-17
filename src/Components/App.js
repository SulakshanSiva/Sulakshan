import "../Styles/App.scss"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
