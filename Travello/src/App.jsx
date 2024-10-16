import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Signup from "./components/Signup";
import Login from "./components/Signin";
import About from "./components/Aboutus";
import FeatureCarousel from "./components/Carousel";

import Footer from "./components/Footer";

import AccountCreated from "./components/Accountcreated";
import Dashboard from "./components/Dashboard";
import SocialIntegration from "./components/Socials.jsx";

import CompleteChallengesPage from "./components/Challenges.jsx";
import ProtectedRoute from './ProtectedRoutes.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { Toaster } from 'react-hot-toast';
import Profile from "./components/Profile";
import Localculture from "./components/localcultureimmersion";
import Quests from "./components/Quests";
import BlogSection from "./components/Blog";
import Newsletter from "./components/Newsletter";
import ReviewSection from "./components/Review";

import Badges from "./components/Badges";
import HiddenAttractions from "./components/Hiddenattractions";
import QuestsAndChallenges from "./components/QuestAndChalleneges";
import Quest from "./components/Quest";
import Challenge from "./components/Challenge";
import Leaderboard from "./components/Leaderboard";
import NotFoundPage from "./components/NotFoundPage";





const App = () => {
  return (
    <AuthProvider>
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
            {/* <Route path="/challenges" element={<CompleteChallengesPage />} /> */}

          
            <Route path="/challenges" element={<CompleteChallengesPage />} />

            <Route path="/profile" element={<Profile />}/>
            <Route path="/localculture" element={<Localculture />}/>

            <Route path="/quests" element={<Quests />} />
            <Route path="/Questsstwo" element = {<Quest />}/>
            <Route path="/Challenge" element = {<Challenge />}/>
            {/* <Route path="/qnc" element={<QuestsAndChallenges/>} /> */}
            <Route path="/my-badges" element={<Badges />} />
            <Route path="/hidden-attraction-maps" element={<HiddenAttractions />} />
            <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </main>
        <Footer/>
      </div>
    </Router>
    <Toaster />
    </AuthProvider>
  );
};




const Landing = () => {
  return (
    <div className="flex flex-col">
      <LandingPage />
      <About />
      <ReviewSection />
      <BlogSection />
      <Newsletter />
    </div>
  );
};

export default App;
