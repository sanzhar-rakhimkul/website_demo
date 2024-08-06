import React, { useState } from 'react';
import styles from './AuthForm.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Handle successful login (e.g., save token, redirect)
      } else {
        console.error('Login failed');
        // Handle login failure
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;