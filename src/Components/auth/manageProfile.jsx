import React from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

const ProfileManagement = () => {
  return (
    <div>
      <h2>Profile Management</h2>
      <p>Welcome, User!</p>
      <Link to="/profile">View Your Profile</Link>
      <Link to="/profile/edit">Edit Your Profile</Link>
    </div>
  );
};

export default ProfileManagement;
