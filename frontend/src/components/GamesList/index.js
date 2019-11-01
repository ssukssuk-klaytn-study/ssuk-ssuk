import React from 'react';
import { Grid } from '@material-ui/core';
import Game from '../Game';
import './index.css';

const Row = () => {
  return (
    <React.Fragment>
      <Grid container item xs={3} justify="center">
        <a href="/">
          <Game />
        </a>
      </Grid>
      <Grid container item xs={3} justify="center">
        <a href="/">
          <Game />
        </a>
      </Grid>
      <Grid container item xs={3} justify="center">
        <a href="/">
          <Game />
        </a>
      </Grid>
      <Grid container item xs={3} justify="center">
        <a href="/">
          <Game />
        </a>
      </Grid>
    </React.Fragment>
  );
};

const GamesList = () => {
  return (
    <div className="games-container">
      <div className="container daily-container">
        <div className="title-wrapper">
          <p className="section-title">Daily Popular</p>
          <a href="/">
            <p className="more-btn">> More</p>
          </a>
        </div>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
        </Grid>
      </div>
      <div className="container weeekly-container">
        <div className="title-wrapper">
          <p className="section-title">Weekly Popular</p>
          <a href="/">
            <p className="more-btn">> More</p>
          </a>
        </div>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
        </Grid>
      </div>
      <div className="container monthly-container">
        <div className="title-wrapper">
          <p className="section-title">Monthly Popular</p>
          <a href="/">
            <p className="more-btn">> More</p>
          </a>
        </div>
        <Grid container spacing={2}>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Row />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default GamesList;
