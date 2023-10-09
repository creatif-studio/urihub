import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/Auth/PrivateRoute";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LinkProduction from "./pages/LinkProduction";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path='/linktr.ee/:id' element={<LinkProduction />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
