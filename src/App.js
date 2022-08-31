import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Navigation from "./components/Navigation";
// import ContactPage from "./pages/ContactPage";
import LogInPage from "./pages/LogInPage";
import SignupPage from "./pages/SignupPage";
import FiveByFivePage from "./pages/FiveByFivePage";

function App() {
  return (
    <div className="App-header">
      {/* <Navigation /> */}

      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/user/signuppage" element={<SignupPage />} />
        <Route path="/user/fivebyfivepage" element={<FiveByFivePage />} />
        {/* <Route path="/events" element={<h2>Events</h2>} />
        <Route path="/events/create" element={<h2>Create Events</h2>} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
