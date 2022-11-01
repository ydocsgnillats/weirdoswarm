import "./App.scss";
import Home from "./pages/Home";
import Sets from "./pages/Sets";
import Meetups from "./pages/Meetups";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sets />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/meetups" element={<Meetups />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
