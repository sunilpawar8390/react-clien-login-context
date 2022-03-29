import React from 'react';
import Login from './LoginForm';

import './style.css';

export default function App() {
  const user = [
    {
      Username: 'Sunil',
      Password: 'sunil123',
    },
  ];

  const ThemeContext = React.createContext(user.Username);

  return (
    <ThemeContext.Provider value={user.Username}>
      <div>
        <h1>FaceBook Login </h1>
        <Login user={user} />
      </div>
    </ThemeContext.Provider>
  );
}
