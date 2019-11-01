import React from 'react';
import './index.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';

import Game from '../Game';
import { Grid } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Introduction = () => {
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

  return (
    <div className="introduction-container">
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          stopOnHover
          interval={2000}
          emulateTouch
          dynamicHeight
          showThumbs={false}
          infiniteLoop
        >
          <div>
            <img src={img1} alt="1" />
            <p className="legend">One</p>
          </div>
          <div>
            <img src={img2} alt="1" />
            <p className="legend">One</p>
          </div>
          <div>
            <img src={img3} alt="1" />
            <p className="legend">One</p>
          </div>
          <div>
            <img src={img4} alt="1" />
            <p className="legend">One</p>
          </div>
          <div>
            <img src={img5} alt="1" />
            <p className="legend">One</p>
          </div>
        </Carousel>
      </div>
      <div className="games-grid-wrapper">
        <div className="title-wrapper">
          <p className="section-title">Games</p>
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

export default Introduction;
