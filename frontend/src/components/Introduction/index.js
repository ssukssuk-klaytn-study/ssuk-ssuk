import React, { Component } from 'react';
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

const fetchAllProjects = async () => {
  const rawResponse = await fetch(
    'http://ec2-13-125-111-157.ap-northeast-2.compute.amazonaws.com:4002/api/projects',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );
  const content = await rawResponse.json();

  return content;
};

const DataGrid = ({ data }) => {
  const dataLen = data.length;
  let gridArr = [];

  for (let i = 0; i < dataLen; i++) {
    if (i % 4 === 3) {
      gridArr.push(
        <Grid container item xs={12} spacing={3} key={i}>
          <Row data={data.splice(0, 4)} />
        </Grid>
      );
    }
  }

  return <React.Fragment>{gridArr}</React.Fragment>;
};

const Row = ({ data }) => {
  if (data === undefined) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Grid container item xs={3} justify="center" alignContent="stretch">
        <Game data={data[0]} />
      </Grid>
      <Grid container item xs={3} justify="center" alignContent="stretch">
        <Game data={data[1]} />
      </Grid>
      <Grid container item xs={3} justify="center" alignContent="stretch">
        <Game data={data[2]} />
      </Grid>
      <Grid container item xs={3} justify="center" alignContent="stretch">
        <Game data={data[3]} />
      </Grid>
    </React.Fragment>
  );
};

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchAllProjects();
    this.setState({ data: fetchedData });
  }

  render() {
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
              <p className="legend">Two</p>
            </div>
            <div>
              <img src={img3} alt="1" />
              <p className="legend">Three</p>
            </div>
            <div>
              <img src={img4} alt="1" />
              <p className="legend">Four</p>
            </div>
            <div>
              <img src={img5} alt="1" />
              <p className="legend">Five</p>
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
          <Grid container spacing={2} data={this.state.data}>
            <DataGrid data={this.state.data} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default Introduction;
