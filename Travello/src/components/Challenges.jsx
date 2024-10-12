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
      <h3>Custom Game Component</h3>
      {gameStarted ? (
        <div>
          <p>Game in progress... (simulate your game logic here)</p>
          <button style={gameButtonStyle} onClick={completeGame}>Complete Game</button>
        </div>
      ) : (
        <button style={gameButtonStyle} onClick={startGame}>Start Game</button>
      )}
    </div>
  );
};

const CompleteChallengesPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [userPoints, setUserPoints] = useState(0);

  // Sample data for challenges and quests
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

  return (
    <div className="complete-challenges-page" style={pageStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Challenges and Quests Platform</h2>
        <div style={userProfileStyle}>
          <img src="user-profile-pic.png" alt="User" style={profilePicStyle} />
          <span>Username</span>
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
      <div style={contentStyle}>
        <GameComponent onChallengeComplete={handleChallengeCompletion} /> 
        <CustomGamificationComponent points={userPoints} />
        <div style={sectionStyle}>
          <h3>Active Challenges</h3>
          {challenges.map((challenge) => (
            <div key={challenge.id} style={challengeBoxStyle}>
              <p>{challenge.description}</p>
              <button style={completeButtonStyle} onClick={handleChallengeCompletion}>Complete Challenge</button>
            </div>
          ))}
        </div>

        <div style={sectionStyle}>
          <h3>Quests</h3>
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
          <h3>Rewards & Badges</h3>
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


const pageStyle = {
  padding: '20px',
  backgroundColor: '#f8f9fa',
  fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
};

const headingStyle = {
  fontSize: '28px',
  color: '#333',
};

const userProfileStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const profilePicStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
};

const socialShareStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const shareButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '20px',
  color: '#555',
  cursor: 'pointer',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  gap: '20px',
};

const sectionStyle = {
  backgroundColor: '#fff',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '30%',
};

const challengeBoxStyle = {
  backgroundColor: '#f1f1f1',
  padding: '10px',
  borderRadius: '8px',
  margin: '10px 0',
};

const questBoxStyle = {
  backgroundColor: '#e2e6ea',
  padding: '10px',
  borderRadius: '8px',
  margin: '10px 0',
};

const completeButtonStyle = {
  backgroundColor: '#28a745',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const badgeContainerStyle = {
  display: 'flex',
  gap: '10px',
  marginTop: '10px',
};

const badgeStyle = {
  backgroundColor: '#ffc107',
  color: '#333',
  padding: '5px 10px',
  borderRadius: '5px',
  fontSize: '14px',
};

// Inline styles for the GameComponent
const gameStyle = {
  backgroundColor: '#e0f7fa',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  width: '100%', // Full width in its section
};

const gameButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default CompleteChallengesPage;
