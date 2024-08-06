import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Login />
              <p className={styles.signupLink}>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </>
          } />
          <Route path="/signup" element={
            <>
              <Signup />
              <p className={styles.signupLink}>
                Already have an account? <Link to="/">Log in</Link>
              </p>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;