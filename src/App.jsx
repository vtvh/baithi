import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Add from "./Add";
import Test from './Test'
import CharacterGreeting from "./CharacterGreeting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/char" element={<CharacterGreeting />}></Route>
        <Route path="*" element={<Home />}></Route>

        <Route path="/test" element={<Test />}></Route>
      </Routes>



    </div>
  );
}

export default App;
