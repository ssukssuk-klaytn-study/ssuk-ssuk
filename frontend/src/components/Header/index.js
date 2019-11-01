import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import NavigationBar from '../NavigationBar';

const menu = ['List of Games', 'Testing Page'];

const Header = ({ siteTitle }) => {
  return (
    <div className="header">
      <a href="/" className="header-homelink">
        {siteTitle}
      </a>
      <NavigationBar menu={menu} />
      <div className="toolbox">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search Keyword"
          ></input>
          <div className="search-icon-wrapper">
            <SearchIcon fontSize="large" />
          </div>
        </div>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Header;
