import React from 'react';
import './index.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <a href="/games-list" className="list-link">
        List of Games
      </a>
      <a href="/registration" className="list-link">
        Registration
      </a>
    </div>
  );
};

export default NavigationBar;
