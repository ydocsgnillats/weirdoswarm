import "./App.scss";
import Sets from "./pages/Sets";
import Footer from "./components/Footer";
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
