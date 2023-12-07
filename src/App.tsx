import SideBar from "./views/SideBar";
import AllPlanetListView from "./views/AllPlanetListView";
import AllSpeciesListView from "./views/AllSpeciesListView";
import Test2 from "./views/Test2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "300px" }}>
          <SideBar />
        </div>
        <div style={{ width: "80%" }}>
          <Routes>
            <Route path="/" element={<AllPlanetListView />}></Route>
            <Route
              path="/AllPlanetListView"
              element={<AllPlanetListView />}
            ></Route>
            <Route
              path="/AllSpeciesListView"
              element={<AllSpeciesListView />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
