import React, { useState } from 'react';
import ChallengeItem from './ChallengeItem';
import Confetti from 'react-confetti';

const challenges = [
  {
    id: 'photo-challenge',
    title: 'Photo Challenge',
    description: 'Capture a picture from a specific angle of a famous landmark to match a reference image.',
    reward: {
      title: 'Photo Pro',
      points: 50,
    },
  },
  {
    id: 'hidden-spot',
    title: 'Hidden Spot Challenge',
    description: 'Find a hidden mural or street art and share a picture on Instagram with a unique hashtag.',
    reward: {
      title: 'Spot Finder',
      points: 30,
    },
  },
  // Add more challenges here...
];

const ChallengeList = ({ onChallengeCompletion }) => {
  const [confetti, setConfetti] = useState(false);

  const handleComplete = (reward) => {
    onChallengeCompletion(reward);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000); // Hide confetti after 3 seconds
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {confetti && <Confetti />}
      <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <ChallengeItem key={challenge.id} challenge={challenge} onComplete={() => handleComplete(challenge.reward)} />
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;
