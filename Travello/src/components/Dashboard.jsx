import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMapMarkedAlt, FaCamera, FaTrophy, FaShareAlt, FaUsers, FaDownload, FaComments, FaLeaf, FaHome, FaUserCircle } from 'react-icons/fa';

const Dashboard = () => {
    const showNotification = () => {
        toast.success("Welcome to the Dashboard! Explore all the amazing features!", {
            position: "top-center", // Directly use the string for position
            autoClose: 3000,
            hideProgressBar: true,
            theme: "dark",
        });        
    };

    React.useEffect(() => {
        showNotification();
    }, []);

    // Data for the features to map through
    const features = [
        {
            title: 'Hidden Attractions',
            description: 'Explore secret spots with navigation and location-based tips.',
            image: 'flight.png',
            link: '/hidden-attractions',
            icon: <FaMapMarkedAlt size={30} className="text-blue-500" />,
        },
        {
            title: 'Challenges & Quests',
            description: 'Complete exciting photo challenges and earn rewards!',
            image: 'hid2.jpg',
            link: '/challenges',
            icon: <FaCamera size={30} className="text-red-500" />,
        },
        {
            title: 'Achievements',
            description: 'Earn badges, levels, and celebrate your accomplishments.',
            image: 'hid3.jpg',
            link: '/achievements',
            icon: <FaTrophy size={30} className="text-yellow-500" />,
        },
        {
            title: 'Social Integration',
            description: 'Share your adventures on Facebook, Twitter, and Instagram!',
            image: 'hid4.jpg',
            link: '/social-integration',
            icon: <FaShareAlt size={30} className="text-green-500" />,
        },
        {
            title: 'Dynamic Leaderboards',
            description: 'Compete with friends and see how you rank!',
            image: 'hid5.jpg',
            link: '/leaderboards',
            icon: <FaUsers size={30} className="text-purple-500" />,
        },
        {
            title: 'Offline Mode',
            description: 'Download maps for offline use and explore without internet!',
            image: 'hid6.jpg',
            link: '/offline-mode',
            icon: <FaDownload size={30} className="text-teal-500" />,
        },
    ];

    return (
        <div className="min-h-screen bg-white p-6">
            <ToastContainer />

            <div className="container mx-auto">
                <motion.h1
                    className="text-5xl font-bold text-indigo-700 mb-8 text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to Travello, the adventure starts here!
                </motion.h1>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                
                    <Link to="/hidden-attraction-maps" className=" text-teal-900 font-semibold  hover:text-sky-400">Hidden Attraction Maps</Link>
                    <Link to="/socials" className="text-teal-900 font-semibold  hover:text-sky-400">Link your Socials</Link>
                    <Link to="/leaderboard" className="text-teal-900 font-semibold   hover:text-sky-400">Leaderboard</Link>
                    <Link to="/quests" className="text-teal-900 font-semibold   hover:text-sky-400">My Quests</Link>
                    <Link to="/my-itinerary" className="text-teal-900 font-semibold   hover:text-sky-400">My Itinerary</Link>
                    <Link to="/my-badges" className="text-teal-900 font-semibold  hover:text-sky-400">My Badges</Link>
                    <Link to="/challenges" className="text-teal-900 font-semibold   hover:text-sky-400">My Challenges</Link>
                    <Link to="/levels" className="text-teal-900 font-semibold hover:text-sky-400">Levels</Link>
                    <Link to="/localculture" className="text-teal-900 font-semibold  hover:text-sky-400">Explore local culture</Link>

                    <Link to="/" className="text-teal-900 flex items-center font-bold border border-red-600 p-2 hover:text-sky-400">
                        <FaHome className="mr-2" /> Home
                    </Link>
                    <Link to="/profile" className="text-teal-900 flex items-center border border-red-600 p-2 font-bold hover:text-sky-400">
                        <FaUserCircle className="mr-2" /> My Profile
                    </Link>
                </div>

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-12 border-4 border-green-500 shadow-lg rounded-lg`}
                    >
                        <div className="md:w-1/2 p-4">
                            <motion.img
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-lg w-full hover:scale-105 transition-transform"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            />
                        </div>
                        <div className="md:w-1/2 p-4 text-center md:text-left">
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center justify-center md:justify-start">
                                    {feature.icon} <span className="ml-3">{feature.title}</span>
                                </h2>
                                <p className="text-lime-600 mb-4">{feature.description}</p>
                                <Link
                                    to={feature.link}
                                    className="text-sky-400 hover:text-blue-500 underline font-semibold"
                                >
                                    Explore this feature &gt;
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                ))}

                {/* Additional Features Section */}
                <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg text-left mt-12 border-4 border-green-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Additional Fun Features</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><Link to="/culture-immersion" className="text-blue-500 hover:underline">Immerse in local culture and experiences</Link></li>
                        <li><Link to="/ai-itinerary" className="text-blue-500 hover:underline">AI-powered travel recommendations</Link></li>
                        <li><Link to="/chatbot" className="text-blue-500 hover:underline">Chat with our AI chatbot for help</Link></li>
                        <li><Link to="/eco-friendly" className="text-blue-500 hover:underline">Discover our eco-friendly services</Link></li>
                    </ul>
                    <p className="text-gray-700">
                        Join us on this journey and make your adventures unforgettable!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
