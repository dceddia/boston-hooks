import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRememberMe] = useState(false);

  return (
    <form>
      <label htmlFor="username">Username</label>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        id="username"
        type="text"
      />

      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        id="password"
        type="password"
      />

      <label htmlFor="remember">
        <input
          checked={remember}
          onChange={e =>
            setRememberMe(e.target.checked)
          }
          id="remember"
          type="checkbox"
        />
        Remember me
      </label>

      <button type="submit">Log In</button>

      <pre>
        <span>Username:</span> {username}
        <br />
        <span>Password:</span> {password}
        <br />
        <span>Remember:</span>{' '}
        {remember ? 'yes' : 'no'}
      </pre>
    </form>
  );
};

ReactDOM.render(
  <LoginForm />,
  document.querySelector('#root')
);
