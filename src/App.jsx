import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer";
import Todo from "./todo_comp/Todo";
import Calc from "./calc-comp/Calc";
import Whether from "./whether-comp/Whether";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      {/* Routes define karo */}
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/Calc" element={<Calc />} />
        <Route path="/whether" element={<Whether />} />
      </Routes>
    </Router>
  );
}

export default App;
