import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import AllPlanetListView from "./planets/list";
import AllSpeciesListView from "./species/list";
import PlanetPanelComponent from "./planets/view";
import SpeciesPanelComponent from "./species/view";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "300px" }}>
          <SideBar />
        </div>
        <div style={{ width: "80%" }}>
          <Routes>
            <Route path="/" element={<AllPlanetListView />} />
            <Route path="/planets/" element={<AllPlanetListView />}>
              <Route path="planet" element={<PlanetPanelComponent />} />
            </Route>
            <Route path="/species/" element={<AllSpeciesListView />}>
              <Route path="species-view" element={<SpeciesPanelComponent />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
