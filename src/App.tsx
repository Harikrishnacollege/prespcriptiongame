import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Splash from "./pages/Splash";
import Upload from "./pages/Upload";
import Game from "./pages/Game";
import Prescription from "./pages/Prescription";
import Result from "./pages/Result";
import Hari from "./pages/Hari";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/game" element={<Game />} />
      <Route path="/prescription" element={<Prescription />} />
      <Route path="/result" element={<Result />} />
      <Route path="/hari" element={<Hari />} />
    </Routes>
  );
}
