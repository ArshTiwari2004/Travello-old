import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ChartTooltip, Legend);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.5s, color 0.5s;
  }
`;

const lightTheme = {
    body: '#f5f5f5',
    text: '#000',
};

const darkTheme = {
    body: '#000',
    text: '#fff',
};

const LeaderboardContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: 2px solid #4caf50;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ProfileIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #4caf50;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5em;
`;

const UserRankBox = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    margin: 10px 0;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const UserProfilePic = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

const Badge = styled.span`
    background-color: #4caf50;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 10px;
`;

const CommentSection = styled.div`
    margin-top: 20px;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #eee;
    margin-top: 20px;
    //centre this and make bold
    text-align: center;
    font-weight: bold;
`;

const CommentBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const CommentInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    margin-top: 30px;
`;

const CommentButton = styled.button`
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    margin-top: 30px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const CommentList = styled.div`
    margin-top: 10px;
`;

const Comment = styled.div`
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 5px;
`;

const Leaderboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'User A', score: 100, badges: ['Top Explorer'] },
        { id: 2, name: 'User B', score: 90, badges: ['Newbie'] },
        { id: 3, name: 'User C', score: 80, badges: [] },
        { id: 4, name: 'User D', score: 70, badges: ['Achiever'] },
        { id: 5, name: 'User E', score: 60, badges: ['Leader'] },
        { id: 6, name: 'User F', score: 150, badges: ['Gold Medalist'] },
        { id: 7, name: 'User G', score: 140, badges: ['Gold Medalist'] },
        { id: 8, name: 'User H', score: 130, badges: ['Gold Medalist'] },
        { id: 9, name: 'User I', score: 120, badges: ['Silver Medalist'] },
        { id: 10, name: 'User J', score: 110, badges: ['Silver Medalist'] },
        { id: 11, name: 'User K', score: 105, badges: [] },
        { id: 12, name: 'User L', score: 95, badges: [] },
        { id: 13, name: 'User M', score: 85, badges: [] },
        { id: 14, name: 'User N', score: 75, badges: [] },
        { id: 15, name: 'User O', score: 65, badges: [] },
    ]);
    
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');

    // Function to simulate score updates
    const updateScores = () => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => ({
                ...user,
                score: user.score + Math.floor(Math.random() * 10), // Increase score by a random number
            })).sort((a, b) => b.score - a.score); // Sort users by score
        });
    };

    // Function to handle adding comments
    const addComment = () => {
        if (commentInput.trim() !== '') {
            setComments((prevComments) => [...prevComments, commentInput]);
            setCommentInput('');
        }
    };

    // Use effect to set an interval for score updates
    useEffect(() => {
        const interval = setInterval(updateScores, 5000); // Update scores every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <LeaderboardContainer>
                <Header>
                    <h1 style={{ fontSize: '3.5em', fontWeight: 'bold', color: '#4caf50' }}>Leaderboard</h1>
                    <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '40px', color: '#000000'  }} />

                    
                    


                </Header>

                <h2 style={{ marginTop: '20px', fontSize: '2em' }}>Current Rankings</h2>
                {users.map((user, index) => (
                    <UserRankBox key={user.id}>
                        <UserProfilePic>
                            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '40px', color: '#4caf50' }} />
                        </UserProfilePic>
                        <span>{index + 1}. {user.name} - {user.score} points</span>
                        <span style={{ marginLeft: 'auto' }}>Rank: {index + 1}</span>
                        {user.badges.length > 0 && user.badges.map((badge, idx) => (
                            <Badge key={idx}>{badge}</Badge>
                        ))}
                    </UserRankBox>
                ))}

                {/* Chart Component for Visual Representation */}
                <Chart
                    type='bar'
                    data={{
                        labels: users.map(user => user.name),
                        datasets: [{
                            label: 'User Scores',
                            data: users.map(user => user.score),
                            backgroundColor: 'rgba(75,192,192,1)',
                        }],
                    }}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'User Score Distribution',
                            },
                        },
                    }}
                />

                {/* Comments Section */}
                <CommentSection>
                    <h2>Add comments and engage with other travellers, Happy Travelloing!</h2>
                    <CommentBox>
                        <CommentInput
                    //want to shift this down 
                            type="text"
                            placeholder="Add a comment..."
                            value={commentInput}
                            onChange={(e) => setCommentInput(e.target.value)}
                        />
                        <CommentButton onClick={addComment}>Comment</CommentButton>
                    </CommentBox>
                    <CommentList>
                        {comments.map((comment, index) => (
                            <Comment key={index}>{comment}</Comment>
                        ))}
                    </CommentList>
                </CommentSection>
            </LeaderboardContainer>
        </ThemeProvider>
    );
};

export default Leaderboard;

