import React from 'react';
import ProfileNameCard from '../components/ProfileNameCard';
import './ProfileListPage.css'; 

function ProfileListPage({ profiles }) {
  return (
    <div className="profile-list-page">
      <h2>Select a Profile</h2>
      <div className="name-card-grid"> 
        {profiles.length === 0 ? (
          <p>No profiles available.</p>
        ) : (
          profiles.map(profile => (
            <ProfileNameCard key={profile.id} profile={profile} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProfileListPage;