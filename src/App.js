

import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { AdminRoute, PrivateRoute, PublicRoute } from "./routes/AuthRoute";
import UserDashboard from "./pages/auth/UserDashboard";
import AdminDashboard from "./pages/auth/AdminDashboard";

const App = () => {




  return (
    <>

      <Routes>
        {/* Public Routes */}

        {/* Auth routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Private Routes (Requires Login) */}
        <Route
          path="/dashboard/user"
          element={<PrivateRoute><UserDashboard /></PrivateRoute>}
        />
        <Route path="/" element={<Home />} />

        {/* admin */}
        <Route path="/dashboard/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />


        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
};

export default App;