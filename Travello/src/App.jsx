import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import About from "./components/Aboutus";
import FeatureCarousel from "./components/Carousel";
import AccountCreated from "./components/Accountcreated";
import Dashboard from "./components/Dashboard";
import SocialIntegration from "./components/Socials.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import CompleteChallengesPage from "./components/Challenges.jsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          
          <Routes>
            {/* Landing page route */}
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/accountcreated" element={<AccountCreated />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/socials" element={<SocialIntegration />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/challenges" element={<CompleteChallengesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};


const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
      
      </div>
);
};

export default App;
