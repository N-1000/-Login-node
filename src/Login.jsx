import React, { useState } from 'react';
import { FaUserAstronaut } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Hello.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="input-with-icon">
          <input type="text" placeholder='Username' value={username} onChange={(event) => setUsername(event.target.value)} required />
          <FaUserAstronaut className='icon' />
          </div>
        </label>
        <label>
          <div className="input-with-icon">
          <input type="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} required/>
          <FaLock className='icon' />
          </div>
        </label>
        {error && <div className="error">{error}</div>}
        <div className='remember-forgot'>
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button className="submit-button" type="submit">Login</button>
        <div className='remember-forgot2'>
          <p>Don't have an account?  <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;