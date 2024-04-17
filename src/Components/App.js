import "../Styles/App.scss"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Career from "./Career";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Career/> */}
      <Projects/>
    </div>
  );
}

export default App;
