import React from 'react';
import './ProfileCard.css';

function ProfileCard({ profile, onShowOnMap }) {
  const handleButtonClick = () => {
    onShowOnMap(profile);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <div className="profile-info">
        <h3>{profile.name}</h3>
        <p>{profile.description}</p>
        <p><em>{profile.address}</em></p>
        <button onClick={handleButtonClick} className="summary-button">
          Show on Map
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
