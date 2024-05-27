import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
('./globals.css');
import ForumRoutes from './routes';

const App = () => {
  return (
    <Router>
      <ForumRoutes />
    </Router>
  );
};

export default App;
