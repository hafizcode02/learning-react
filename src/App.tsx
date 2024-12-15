import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Starter from "./pages/Starter";
import CardGenerator from "./pages/CardGenerator";
import TodoList from "./pages/Todolist";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Starter />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CardGenerator" element={<CardGenerator />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
