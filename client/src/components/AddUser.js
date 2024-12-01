import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    userNotes: '',
  });
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    if (!user.firstName) errors.firstName = 'First name is required';
    if (!user.lastName) errors.lastName = 'Last name is required';
    if (!user.dob) errors.dob = 'Date of birth is required';
    if (!user.address1) errors.address1 = 'Address Line 1 is required';
    if (!user.city) errors.city = 'City is required';
    if (!user.postalCode) errors.postalCode = 'Postal code is required';
    if (!user.country) errors.country = 'Country is required';
    if (!user.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!/^[\d\s()+-]+$/.test(user.phoneNumber)) errors.phoneNumber = 'Phone number is invalid';
    if (!user.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(user.email)) errors.email = 'Email is invalid';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      const newUser = { ...user };

      // Ensure dob is in the correct format
      if (newUser.dob) {
        newUser.dob = new Date(newUser.dob).toISOString().split('T')[0];
      }

      const response = await axios.post('http://localhost:5000/api/users', newUser);
      console.log('User added:', response.data);

      alert('User added successfully!');
      navigate('/'); // Redirect to homepage or user list after successful add
    } catch (err) {
      console.error('Error adding user:', err);
      setError('Error adding user!');
      alert('Error adding user! Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Add New User</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            required
          />
          {formErrors.firstName && <p style={{ color: 'red' }}>{formErrors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            required
          />
          {formErrors.lastName && <p style={{ color: 'red' }}>{formErrors.lastName}</p>}
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={user.dob}
            onChange={handleInputChange}
            required
          />
          {formErrors.dob && <p style={{ color: 'red' }}>{formErrors.dob}</p>}
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            type="text"
            name="address1"
            value={user.address1}
            onChange={handleInputChange}
            required
          />
          {formErrors.address1 && <p style={{ color: 'red' }}>{formErrors.address1}</p>}
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleInputChange}
            required
          />
          {formErrors.city && <p style={{ color: 'red' }}>{formErrors.city}</p>}
        </div>
        <div>
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={user.postalCode}
            onChange={handleInputChange}
            required
          />
          {formErrors.postalCode && <p style={{ color: 'red' }}>{formErrors.postalCode}</p>}
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={handleInputChange}
            required
          />
          {formErrors.country && <p style={{ color: 'red' }}>{formErrors.country}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            required
          />
          {formErrors.phoneNumber && <p style={{ color: 'red' }}>{formErrors.phoneNumber}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            name="userNotes"
            value={user.userNotes}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;