import { Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import Starter from "./pages/Starter";
import CardGenerator from "./pages/CardGenerator";
import TodoList from "./pages/Todolist";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoutes";
import User from "./pages/User";

function App() {
  // return (
  //   <div>
  //     <Routes>
  //       <Route path="/" element={<Starter />} />
  //       <Route path="/Game" element={<Game />} />
  //       <Route path="/CardGenerator" element={<CardGenerator />} />
  //       <Route path="/TodoList" element={<TodoList />} />
  //     </Routes>
  //   </div>
  // );

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/CardGenerator" element={<CardGenerator />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/TodoList"
            element={
              <ProtectedRoute>
                <TodoList />
              </ProtectedRoute>
            }
          />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
