import React from 'react'
import Login from './Login'

export default function Home() {
  return (
    <div style={{
        padding: '20px',
        fontFamily: 'sans-serif'
    }}>
      <h1>Welcome To Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services</p>
      <Login />
    </div>
  )
}
