import React from 'react';
import './ProfileDetailDisplay.css';

function ProfileDetailDisplay({ profile }) {
  if (!profile) return null;

  return (
    <div className="profile-detail-display">
      <img src={profile.photo} alt={profile.name} className="profile-detail-photo" />
      <div className="profile-detail-info">
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <p><strong>Address:</strong> {profile.address || 'Not specified'}</p>
      </div>
    </div>
  );
}

export default ProfileDetailDisplay;
