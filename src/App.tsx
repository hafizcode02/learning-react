import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Starter from "./pages/Starter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
