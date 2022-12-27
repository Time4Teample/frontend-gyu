import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JuMain from "./pages/JuMain";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Interest from "./pages/interest";

import AdminMain from "./pages/AdminMain";
import ClassRegister from "./pages/ClassRegister";
import AdminEnroll from "./pages/AdminEnroll";

export function App() {
  return (
    <div
      style={{ backgroundColor: "#EFEFEF", overflow: "auto", height: "100vh" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<JuMain />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/interest" element={<Interest />}></Route>

          <Route path="/" element={<AdminMain />}></Route>
          <Route path="/enroll" element={<AdminEnroll />}></Route>
          <Route path="/class/register" element={<ClassRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
