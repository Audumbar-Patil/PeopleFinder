import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import ProfileDetailDisplay from '../components/ProfileDetailDisplay';
import MapComponent from '../components/MapComponent';
import './ProfileDetailPage.css';

function ProfileDetailPage({ profiles }) {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [mapKey, setMapKey] = useState(Date.now());

  useEffect(() => {
    const foundProfile = profiles.find(p => p.id.toString() === id);

    if (foundProfile) {
      setProfile(foundProfile);
      setMapCenter([foundProfile.coordinates.lat, foundProfile.coordinates.lng]);
      setMapKey(Date.now());
    } else {
      setProfile(null);
      setMapCenter([0, 0]);
    }
  }, [id, profiles]);

  if (!profile) {
    return (
      <div className="profile-detail-page">
        <h2>Profile Not Found</h2>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  return (
    <div className="profile-detail-page">
      <Link className="back-link" to="/">← Back to List</Link>
      <div className="detail-content-wrapper">
        <ProfileDetailDisplay profile={profile} />
        <div className="detail-map-container">
          <h3>Location</h3>
          <MapComponent
            key={mapKey}
            center={mapCenter}
            markerCoords={[profile.coordinates.lat, profile.coordinates.lng]}
            markerPopupContent={profile.name}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailPage;