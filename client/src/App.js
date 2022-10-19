import "./App.scss";
import Home from "./pages/Home";
import Sets from "./pages/Sets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sets" element={<Sets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
