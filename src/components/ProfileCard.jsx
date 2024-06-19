
import React from 'react';
import './profile.css';

const ProfileCard = ({ name, age, profilePicture, bio }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;































//import React from "react";
//import "./profile.css";


//function ProfileCard({ name, age, bio }) {
  //return (
    //<div className="profile-container">
      //<div className="top-user-profile">
        //<div className="wrap-info">
          //<div className="image-div">
            //<img src={Profile} alt="user-profile" />
          //</div>
          //<h3>Full Name: {name}</h3>
          //<p>Age: {age}</p>
        //</div>
      //</div>

      //<div className="user-bio">
        //<p>{bio}</p>
      //</div>
    //</div>
  //);
//}

//export default ProfileCard;
