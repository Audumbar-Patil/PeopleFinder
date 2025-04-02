import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileNameCard.css'; 

function ProfileNameCard({ profile }) {
  return (
    
    <Link to={`/profile/${profile.id}`} className="profile-name-card">
     
      <img src={profile.photo} alt={profile.name} className="profile-name-photo-thumbnail"/>
      <h3>{profile.name}</h3>
    </Link>
  );
}

export default ProfileNameCard;