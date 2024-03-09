import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Toaster } from "sonner";
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route
          path="/home"
          element={authUser ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={authUser ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/home" /> : <Signup />}
        />
      </Routes>

      <Toaster />
    </div>
  );
}
