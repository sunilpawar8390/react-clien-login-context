import React, {useContext} from 'react';
import App from './App';

const theme = useContext(ThemeContext);

const Dashboard = ({username}) => {
  return (
    <div>
      <h1>Welcome {username}</h1>
    </div>
  );
};

export default Dashboard;
