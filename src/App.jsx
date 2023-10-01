import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/Auth/PrivateRoute";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import LinkProduction from "./components/Admin/LinkProduction";
import { context } from "./context/Context";

function App() {
  const { user } = context();
  console.log(user?.name);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />

      <Route element={<PrivateRoute />}>
        {/* <Route path={`/${user}`} element={<LinkProduction />} /> */}
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
