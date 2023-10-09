import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from Firebase using userId
    // Set user data in the state
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.Name}</p>
      <p>Email: {user.Email}</p>
      <Link to={`/profile/edit/${userId}`}>Edit Profile</Link>
    </div>
  );
};

export default UserProfile;
