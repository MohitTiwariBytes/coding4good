import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
