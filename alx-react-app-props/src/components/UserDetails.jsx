import React, { useContext } from 'react'
import UserContext from './UserContext'

export default function UserDetails() {
  const user = useContext(UserContext);
  return (
    <div style={{ border: '2px solid green', margin: '10px'}}>
      <h6>Currently in UserDetails</h6>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
