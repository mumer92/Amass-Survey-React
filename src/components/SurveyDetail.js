import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Container, CssBaseline } from '@material-ui/core';
import Copyright from './Copyright';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SurveyDetail({ id }) {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Detail
        </Typography>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
