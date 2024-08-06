import React, { useState } from 'react';
import styles from './AuthForm.module.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        // Handle successful signup (e.g., redirect to login)
      } else {
        console.error('Signup failed');
        // Handle signup failure
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          className={styles.input} 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          className={styles.input} 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;