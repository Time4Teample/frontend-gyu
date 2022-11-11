import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminEnroll from "./pages/AdminEnroll";
import AdminMain from "./pages/AdminMain";

function App() {
  return (
    <div
      style={{ backgroundColor: "#EFEFEF", overflow: "auto", height: "100vh" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminMain />}></Route>
          <Route path="/enroll" element={<AdminEnroll />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;