import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Paper, Box } from '@material-ui/core';
import './index.css';

const styles = {
  root: {
    backgroundColor: '#21252B',
    color: 'white',
    '&:hover': {
      color: '#e2325a',
    },
  },
};

const Game = ({ className, classes }) => {
  return (
    <Paper square={false} className={clsx(classes.root, className)}>
      <Box display="flex">
        <img
          className="game-thumbnail"
          src="https://picsum.photos/100/100"
          alt={Math.random(100)}
        ></img>
        <p className="game-description">
          Ipsum Lorepm Man Okay Got It Man. Lorem Ipsum... okay okay.., sorry
          man... Ether,,,, Bitcoin,.,, Ripple...
        </p>
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(Game);
