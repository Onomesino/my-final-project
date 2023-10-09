import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    /* initial form data */
  });

  useEffect(() => {
    // Fetch user data from Firebase using userId
    // Set user data and initial form data in the state
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in Firebase
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
        />
        {/* Add more form fields for editing user information */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
