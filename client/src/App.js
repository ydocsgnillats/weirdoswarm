import "./App.scss";
import Sets from "./pages/Sets";
import Songs from "./pages/Songs";
import Meetups from "./pages/Meetups";
import Games from "./pages/Games";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sets />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/meetups" element={<Meetups />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
