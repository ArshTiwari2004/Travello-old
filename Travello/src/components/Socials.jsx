import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialIntegration = () => {
  const [linkedAccounts, setLinkedAccounts] = useState({
    facebook: false,
    twitter: false,
    instagram: false,
    linkedin: false,
    google: false,
  });

  const handleConnect = (platform) => {
    // Simulating linking process with an API call placeholder
    setLinkedAccounts({ ...linkedAccounts, [platform]: true });
    toast.success(`Your ${platform.charAt(0).toUpperCase() + platform.slice(1)} account has been linked with Travello! Happy Travelloing!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-emerald-900 flex flex-col items-center justify-center p-6">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-white mb-6">Connect Your Social Accounts</h1>
      <p className="text-lg text-white font-semibold mb-10">Stay connected with your friends and share your Travello moments instantly , Happy Travelloing!</p>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg border-4 border-green-500">
          <FaFacebook size={50} className="text-blue-600 mb-4" />
          <button
            onClick={() => handleConnect('facebook')}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
          >
            Connect Facebook
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg border-4 border-green-500">
          <FaTwitter size={50} className="text-blue-400 mb-4" />
          <button
            onClick={() => handleConnect('twitter')}
            className="bg-blue-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-500"
          >
            Connect Twitter
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg border-4 border-green-500">
          <FaInstagram size={50} className="text-pink-500 mb-4" />
          <button
            onClick={() => handleConnect('instagram')}
            className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600"
          >
            Connect Instagram
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg border-4 border-green-500">
          <FaLinkedin size={50} className="text-blue-700 mb-4" />
          <button
            onClick={() => handleConnect('linkedin')}
            className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800"
          >
            Connect LinkedIn
          </button>
        </div>

        <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg border-4 border-green-500">
          <FaGoogle size={50} className="text-red-500 mb-4" />
          <button
            onClick={() => handleConnect('google')}
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600"
          >
            Connect Google
          </button>
        </div>
      </div>

      <motion.p
        className="text-lg text-gray-200 mt-10 font-bold text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Connect with your friends, share your achievements, and enjoy your journey with Travello!
      </motion.p>
    </div>
  );
};

export default SocialIntegration;
