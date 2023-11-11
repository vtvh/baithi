import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import CharacterGreeting from "./CharacterGreeting";
import Map from "./Map";
import Dining from "./Dining";
import About from './About'
import EventDetail from "./EventDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/char" element={<CharacterGreeting />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/dining" element={<Dining />}></Route>
        <Route path="/contact" element={<About />}></Route>
        <Route path="/events/:id" element={<EventDetail />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>



    </div>
  );
}

export default App;
