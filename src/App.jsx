import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Add from "./Add";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>

      <p className="footer"> &copy; Copyright FPT Aptech</p>
    </div>
  );
}

export default App;
