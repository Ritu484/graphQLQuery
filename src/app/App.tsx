import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Stack, IStackStyles, IStackTokens } from "@fluentui/react/lib/Stack";
import { ThemeProvider, PartialTheme } from "@fluentui/react/lib/Theme";
import SideBar from "../components/SideBar";
import AllPlanetListView from "../planets/list";
import AllSpeciesListView from "../species/list";
import PlanetPanelComponent from "../planets/view";
import SpeciesPanelComponent from "../species/view";
import { useStyles } from "./index.styles";
import TitleBar from "../components/TitleBar";

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
  const styles = useStyles();
  const [isLight, setIsLight] = useState(true);
  return (
    <ThemeProvider
      style={{ padding: "8px" }}
      theme={isLight ? lightTheme : darkTheme}
    >
      <Stack.Item className={styles.titleBarContainer}>
        <TitleBar />
      </Stack.Item>
      <Stack horizontal style={{ position: "absolute", top: 0, left: 0 }}>
        <Stack.Item className={styles.sideBarContainer}>
          <SideBar />
        </Stack.Item>

        <Stack.Item className={styles.listViewContainer}>
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
