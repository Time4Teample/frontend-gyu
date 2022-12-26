import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<AdminMain />}></Route>
          <Route path="/enroll" element={<AdminEnroll />}></Route>
          <Route path="/class/register" element={<ClassRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

