import "../Styles/App.scss"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Experience/> */}
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
