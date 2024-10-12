import React, { useState, useEffect } from 'react';

const CustomGamificationComponent = ({ points }) => {
  const [level, setLevel] = useState(1);
  const [badges, setBadges] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    calculateLevel(points);
    awardBadges(points);
  }, [points]);

  // Function to calculate level based on points
  const calculateLevel = (points) => {
    const newLevel = Math.floor(points / 100); // 100 points per level
    setLevel(newLevel);
    setProgress(points % 100);
  };

  // Function to award badges based on points
  const awardBadges = (points) => {
    const newBadges = [];
    if (points >= 100) newBadges.push('Beginner Badge');
    if (points >= 500) newBadges.push('Intermediate Badge');
    if (points >= 1000) newBadges.push('Expert Badge');
    setBadges(newBadges);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto my-4">
        <>
        <h2 className="text-xl font-bold text-center text-gray-800">Level: {level}</h2>
        <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden my-2">
          <div
            className="bg-green-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-gray-600">{progress}/100 points to next level</p>
        <h3 className="text-lg font-semibold text-center text-gray-700 mt-4">Badges Earned</h3>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </>
    </div>
  );
};

export default CustomGamificationComponent;