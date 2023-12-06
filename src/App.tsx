import HomePage from "./views/HomePage";
import SideBar from "./views/SideBar";
import Test2 from "./views/Test2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "300px" }}>
          <HomePage />
        </div>
        <div style={{ width: "80%" }}>
          <Routes>
            <Route path="/" element={<SideBar />}></Route>
            <Route path="/SideBar" element={<SideBar />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
