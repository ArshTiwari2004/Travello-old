import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaBirthdayCake, FaKey, FaEdit } from 'react-icons/fa';

function ProfileField({ label, value, Icon }) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <Icon className="text-emerald-600 text-lg" />
      <div>
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-emerald-800">{value}</p>
      </div>
    </div>
  );
}

export default function Profile() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York City',
    country: 'United States',
    gender: 'Male',
    dob: 'January 1, 1990',
  });

  const [password, setPassword] = useState({ current: '', newPassword: '', confirmPassword: '' });

  // Handle password change form submission
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password.newPassword === password.confirmPassword) {
      alert('Password changed successfully!');
      setShowChangePassword(false);
    } else {
      alert('Passwords do not match!');
    }
  };

  // Handle profile edit form submission
  const handleProfileEdit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    setShowEditProfile(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-emerald-700 px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Profile</h1>
        </div>

        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-300 to-emerald-600 flex items-center justify-center shadow-lg">
              <span className="text-3xl text-white font-bold">JD</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <ProfileField label="First Name" value={profile.firstName} Icon={FaUser} />
              <ProfileField label="Last Name" value={profile.lastName} Icon={FaUser} />
              <ProfileField label="Email" value={profile.email} Icon={FaEnvelope} />
              <ProfileField label="Phone" value={profile.phone} Icon={FaPhone} />
            </div>

            <div className="space-y-4">
              <ProfileField label="Location" value={profile.location} Icon={FaMapMarkerAlt} />
              <ProfileField label="Country" value={profile.country} Icon={FaGlobe} />
              <ProfileField label="Gender" value={profile.gender} Icon={FaVenusMars} />
              <ProfileField label="Date of Birth" value={profile.dob} Icon={FaBirthdayCake} />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-emerald-800 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <button
                onClick={() => setShowChangePassword(true)}
                className="w-full bg-emerald-700 text-white rounded-md px-4 py-2 flex items-center justify-center space-x-2 hover:bg-emerald-600 transition-colors"
              >
                <FaKey />
                <span>Change Password</span>
              </button>
              <button
                onClick={() => setShowEditProfile(true)}
                className="w-full bg-white text-emerald-800 border border-emerald-700 rounded-md px-4 py-2 flex items-center justify-center space-x-2 hover:bg-emerald-50 transition-colors"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange}>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full mb-3 p-2 border rounded"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full mb-3 p-2 border rounded"
                value={password.newPassword}
                onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full mb-3 p-2 border rounded"
                value={password.confirmPassword}
                onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
              />
              <button type="submit" className="bg-emerald-700 text-white px-4 py-2 rounded w-full hover:bg-emerald-600">
                Submit
              </button>
              <button
                onClick={() => setShowChangePassword(false)}
                className="mt-2 w-full text-emerald-700 hover:text-emerald-900"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleProfileEdit}>
              <input
                type="text"
                placeholder="First Name"
                className="w-full mb-3 p-2 border rounded"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mb-3 p-2 border rounded"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full mb-3 p-2 border rounded"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              />
              <button type="submit" className="bg-emerald-700 text-white px-4 py-2 rounded w-full hover:bg-emerald-600">
                Save Changes
              </button>
              <button
                onClick={() => setShowEditProfile(false)}
                className="mt-2 w-full text-emerald-700 hover:text-emerald-900"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
