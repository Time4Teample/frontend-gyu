import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMain from "./pages/AdminMain";
// import ClassManage from "./pages/ClassManage";
import ClassRegister from "./pages/ClassRegister";

export function App() {
  return (
    <div style={{ backgroundColor: "#FFF", overflow: "auto", height: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminMain />} />
          <Route path="/class/register" element={<ClassRegister />} />
          {/* <Route path="/class/manage" element={<ClassManage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
