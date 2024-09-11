import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import LoginPage from "./LoginPage";
import Signuppage from "./Signuppage";
import Dashboard from "./Dashboard";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [loggedIn, SetLoggedIn] = useState(false);

  return (
    <div className="h-screen w-screen bg-richblack-900 flex flex-col">
      <Navbar loggedIn={loggedIn} SetLoggedIn={SetLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/login"
          element={<LoginPage SetLoggedIn={SetLoggedIn} />}
        ></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute loggedIn={loggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
