import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import CustomGamificationComponent from './CustomGame';

// Custom GameComponent
const GameComponent = ({ onChallengeComplete }) => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const completeGame = () => {
    onChallengeComplete();
    setGameStarted(false);
  };

  return (
    <div style={gameStyle}>
      <h3 style={subHeadingStyle}>Custom Game Component</h3>
      {gameStarted ? (
        <div style={gameContentStyle}>
          <p>Game in progress... (simulate your game logic here)</p>
          <button style={gameButtonStyle} onClick={completeGame}>
            Complete Game
          </button>
        </div>
      ) : (
        <button style={gameButtonStyle} onClick={startGame}>
          Start Game
        </button>
      )}
    </div>
  );
};

const CompleteChallengesPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [userPoints, setUserPoints] = useState(0);

  const challenges = [
    { id: 1, type: 'Photo', description: 'Take a picture of a landmark' },
    { id: 2, type: 'Time-Based', description: 'Complete before sunset' },
  ];

  const quests = [
    { id: 1, name: 'Exploration Quest', tasks: ['Find the hidden spot', 'Capture a landmark photo'] },
    { id: 2, name: 'Cultural Quest', tasks: ['Experience local cuisine', 'Learn a traditional dance'] },
  ];

  const handleChallengeCompletion = () => {
    setShowConfetti(true);
    setUserPoints(userPoints + 100); // Award points for completing a challenge
  };

  useEffect(() => {
    if (showConfetti) {
      setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
    }
  }, [showConfetti]);

  const handleProfileClick = () => {
    alert('Profile Clicked!'); // Replace with actual navigation or profile logic
  };

  return (
    <div className="complete-challenges-page" style={pageStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Challenges</h2>
        <div style={userProfileStyle}>
          <button onClick={handleProfileClick} style={profileButtonStyle}>
            <img src="user-profile-pic.png" alt="User" style={profilePicStyle} />
            <span style={usernameStyle}>Username</span>
          </button>
          <div style={socialShareStyle}>
            <button style={shareButtonStyle}>Share My Ranking</button>
            <span> on </span>
            <i className="fab fa-instagram" style={iconStyle}></i>
            <i className="fab fa-twitter" style={iconStyle}></i>
            <i className="fab fa-facebook" style={iconStyle}></i>
          </div>
        </div>
      </div>

      {showConfetti && <Confetti />}

      {/* Custom Game Component at the top */}
      <GameComponent onChallengeComplete={handleChallengeCompletion} />

      {/* Main Content Sections */}
      <div style={contentStyle}>
        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Active Challenges</h3>
          {challenges.map((challenge) => (
            <div key={challenge.id} style={challengeBoxStyle}>
              <p>{challenge.description}</p>
              <button style={completeButtonStyle} onClick={handleChallengeCompletion}>
                Complete Challenge
              </button>
            </div>
          ))}
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Quests</h3>
          {quests.map((quest) => (
            <div key={quest.id} style={questBoxStyle}>
              <h4>{quest.name}</h4>
              <ul>
                {quest.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={sectionStyle}>
          <h3 style={subHeadingStyle}>Rewards & Badges</h3>
          <p>Total Points: {userPoints}</p>
          <div style={badgeContainerStyle}>
            <div style={badgeStyle}>Beginner</div>
            <div style={badgeStyle}>Explorer</div>
            <div style={badgeStyle}>Pro Adventurer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated styles
const pageStyle = {
  padding: '20px',
  background: 'linear-gradient(120deg, #f3e7d0, #66b3d1)', // Beach sand to ocean water gradient
  fontFamily: "'Poppins', sans-serif", // Modern font
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#000000', // Black text for heading
  letterSpacing: '1px',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
};

const userProfileStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const profileButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
};

const usernameStyle = {
  marginLeft: '5px',
  color: '#ffffff', // White text for username
};

const profilePicStyle = {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
};

const socialShareStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

const shareButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '6px 12px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
};

const iconStyle = {
  fontSize: '22px',
  color: '#555',
  cursor: 'pointer',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  maxWidth: '1200px',
  width: '100%',
  marginTop: '30px', // Space between the GameComponent and the content sections
};

const sectionStyle = {
  backgroundColor: '#0f172a', 
  color: '#ffffff', // White text for contrast
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // More pronounced box shadow for better depth
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const subHeadingStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#ffffff', // White text for headings
  marginBottom: '15px',
};

const challengeBoxStyle = {
  backgroundColor: '#0e7490', 
  padding: '12px',
  borderRadius: '10px',
  margin: '12px 0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const questBoxStyle = {
  backgroundColor: '#0e7490', 
  padding: '12px',
  borderRadius: '10px',
  margin: '12px 0',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
};

const completeButtonStyle = {
  backgroundColor: '#ffd60a',
  color: '#212529',
  padding: '8px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const gameStyle = {
  backgroundColor: '#0e7490', // Outer box color: cyan-950
  padding: '20px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow for depth
  marginBottom: '20px',
};

const gameContentStyle = {
  textAlign: 'center',
};

const gameButtonStyle = {
  backgroundColor: '#ff5722',
  color: '#ffffff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.3)',
};

const badgeContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '10px',
};

const badgeStyle = {
  backgroundColor: '#4caf50', // Green badge color
  color: '#ffffff',
  padding: '8px 12px',
  borderRadius: '20px',
};

export default CompleteChallengesPage;

