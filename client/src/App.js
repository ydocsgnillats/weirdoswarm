import "./App.scss";
import Sets from "./pages/Sets";
import Songs from "./pages/Songs";
import Meetups from "./pages/Meetups";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sets />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/meetups" element={<Meetups />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
