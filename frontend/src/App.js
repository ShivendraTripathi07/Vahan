import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Create } from "./Create";
import { Read } from "./assets/Read";
import { Update } from "./assets/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read/:ID" element={<Read />} />
        <Route path="/edit/:ID" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// app
