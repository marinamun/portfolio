import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
