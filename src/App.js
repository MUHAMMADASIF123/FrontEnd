import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Componets/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import View from "./Componets/View";
import Edit from "./Componets/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
