import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Box } from '@material-ui/core';
import './index.css';

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#21252B',
    color: 'white',
    '&:hover': {
      color: '#e2325a',
    },
  },
};

const Game = ({ className, classes, data }) => {
  if (data === undefined) {
    return (
      <Paper square={false} className={clsx(classes.root, className)}>
        <Box display="flex">
          <img
            className="game-thumbnail"
            src={`https://picsum.photos/id/${Math.floor(
              Math.random() * 100
            )}/100`}
            alt="None"
          ></img>
          <p className="game-description">Loading...</p>
        </Box>
      </Paper>
    );
  }

  data = data.data;
  return (
    <Paper square={false} className={clsx(classes.root, className)}>
      <Box display="flex">
        <img
          className="game-thumbnail"
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/100`}
          alt="None"
        ></img>
        <p className="game-description">{data.descr}</p>
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(Game);
