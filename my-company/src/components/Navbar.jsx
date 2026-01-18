import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <ul style={{
                display: 'flex',
                gap: '20px',
                listStyle: 'none',
                alignItems: 'center',
                fontFamily: 'sans-serif'
            }}>
                <li style={{
                    color: 'tomato',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '20px'
                }}>
                    <Link to={'/'} style={{ textDecoration: 'none'}}>Home</Link>
                </li>
                <li style={{
                    color: 'tomato',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '20px'
                }}>
                    <Link to={'/services'} style={{ textDecoration: 'none'}}>Service</Link>
                </li>
                <li style={{
                    color: 'tomato',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '20px'
                }}>
                    <Link to={'/contact'} style={{ textDecoration: 'none'}}>Contact</Link>
                </li>
                <li style={{
                    color: 'tomato',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    padding: '10px 15px',
                    backgroundColor: '#f0f8ff',
                    borderRadius: '20px'
                }}>
                    <Link to={'/about'} style={{ textDecoration: 'none'}}>About</Link>
                </li>
            </ul>
        </div>
    )
}
