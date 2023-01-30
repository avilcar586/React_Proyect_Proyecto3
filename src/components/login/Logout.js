import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function LogoutButton() {

  const handleLogout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <button className='LogoutButton' onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;