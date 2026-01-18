import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    // Get the name and value from the event target
    const { name, value } = e.target;

    // Update only the field that changed.
    setFormData(prev => ({
      ...prev,    // Keeps the existing data
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello: ${formData.username}`);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
    }}>
      <form onSubmit={handleSubmit} style={{
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 40x 6px rgb(0, 0, 0, 0.1)',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <h4 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '10px'
        }}>Welcome!, Let's get to know you before you continue</h4>
        <label style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '5px',
          fontWeight: 'bold'
        }}>Username: </label>
        <input
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            transition: 'border-color 0.3s',
            backgroundColor: '#f0f2f5'
          }}
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label style={{
          fontSize: '0.9rem',
          color: '#666',
          marginBottom: '5px',
          fontWeight: 'bold'
        }}>Password: </label>
        <input
          style={{
            padding: '10px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            transition: 'border-color 0.3s',
            backgroundColor: '#f0f2f5'
          }}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
        type='submit'
        style={{
          padding: '12px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          marginTop: '10px',
          transition: '#007baf 0.2s',
        }}
        >Submit</button>
      </form>

      {/* <h4>Hello {formData.username}</h4> */}
    </div>
  )
}

export default Login;