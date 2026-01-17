import React from 'react';
import UserInfo from './UserInfo';

export default function ProfilePage() {
  return (
    <div style={{ border: '2px solid black', margin: '10px'}}>
      <h4>In ProfilePage</h4>
      <UserInfo />
    </div>
  );
}