import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Stack, IStackStyles, IStackTokens } from "@fluentui/react/lib/Stack";
import { ThemeProvider, PartialTheme } from "@fluentui/react/lib/Theme";
import "./App.css";
import SideBar from "./components/SideBar";
import AllPlanetListView from "./planets/list";
import AllSpeciesListView from "./species/list";
import PlanetPanelComponent from "./planets/view";
import SpeciesPanelComponent from "./species/view";
import TopBar from "./components/TopBar";
import TitleBar from "./components/TitleBar";

const lightTheme: PartialTheme = {
  semanticColors: {
    bodyBackground: "white",
    bodyText: "black",
  },
};

const darkTheme: PartialTheme = {
  semanticColors: {
    bodyBackground: "black",
    bodyText: "white",
  },
};

function App() {
  const [stackHeight, setStackHeight] = useState<number>(420);

  // Mutating styles definition
  const stackStyles: IStackStyles = {
    root: {
      //  background: DefaultPalette.themeTertiary,
      height: stackHeight,
    },
  };
  const [isLight, setIsLight] = useState(true);
  return (
    <ThemeProvider
      style={{ padding: "8px" }}
      theme={isLight ? lightTheme : darkTheme}
    >
      <Stack.Item
        style={{
          position: "fixed",
          top: 0,
          width: "100%",

          display: "flex",
          justifyContent: "right",
        }}
      >
        <TitleBar />
      </Stack.Item>

      <Stack horizontal style={{ position: "absolute", top: 0, left: 0 }}>
        <Stack.Item
          style={{
            position: "fixed",
            height: "100vh",
            width: 200,
            backgroundColor: "white",
            zIndex: 1,
          }}
        >
          <SideBar />
        </Stack.Item>

        <Stack.Item
          style={{
            position: "fixed",
            top: "10vh",
             marginLeft: "200px",
            overflowY: "scroll",
            overflowX: "scroll",
            height: "90vh",
            width: "85vw",
            //  marginTop: 50,
            // zIndex: -1,
            alignItems: "center",
            //  overflowY: "visible",
            //   border: "1px solid #eee",
            //   flex: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<AllPlanetListView />} />
            <Route path="/planets/" element={<AllPlanetListView />}>
              <Route path="planet" element={<PlanetPanelComponent />} />
            </Route>
            <Route path="/species/" element={<AllSpeciesListView />}>
              <Route path="species-view" element={<SpeciesPanelComponent />} />
            </Route>
          </Routes>
        </Stack.Item>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
