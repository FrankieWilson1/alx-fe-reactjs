import UserDetails from "./UserDetails";

import React from 'react'

export default function UserInfo() {
  return (
    <div style={{ border: '2px solid black', margin: '10px'}}>
        <h5>Currently in UserInfo</h5>
    <p>Online: <span style={{color: 'red'}}>Yes</span></p>
    <UserDetails />
    </div>
    
  )
}
