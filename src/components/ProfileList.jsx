import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';

function ProfileList({ profiles, onShowOnMap }) {
  return (
    <div className="profile-list">
      <h2>Profiles</h2>
      {profiles.length === 0 ? (
        <p>No profiles found.</p>
      ) : (
        profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onShowOnMap={onShowOnMap}
          />
        ))
      )}
    </div>
  );
}

export default ProfileList;
