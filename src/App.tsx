import HomePage from './views/HomePage'
import TestPage from './views/TestPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
 
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "300px" }}>
          <HomePage />
        </div>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/TestPage" element={<TestPage />}>
                       </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
