import logo from "./logo.svg";
import "./App.css";
import AddUser from "./Componets/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Componets/Home";
import View from "./Componets/View";
import Edit from "./Componets/Edit";
import Header from "./Componets/Header";
import Register from "./Componets/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<AddUser />} />
          <Route path="register" element={<Register />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="view/:id" element={<View />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
