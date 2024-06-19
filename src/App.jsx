// src/App.js
import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const users = [
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'John Doe',
      age: 30,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Software engineer with a passion for open-source projects.'
    },
    {
      name: 'Jane Smith',
      age: 25,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Front-end developer and UX/UI designer.'
    },
    {
      name: 'Michael Johnson',
      age: 35,
      profilePicture: 'https://via.placeholder.com/100',
      bio: 'Full-stack developer and tech enthusiast.'
    }
  ];

  return (
    <div className="App">
      <h1>Profile Cards</h1>
      <div className="profile-cards-container">
        {users.map((user, index) => (
          <ProfileCard
            key={index}
            name={user.name}
            age={user.age}
            profilePicture={user.profilePicture}
            bio={user.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
