import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Grid, Box, Typography, List, ListItem } from '@material-ui/core';
import QRCode from 'react-qr-code';
import Copyright from './Copyright';
import firebase from 'firebase/app';
import 'firebase/auth';

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

function SurveyListComponent({ fetchSurveys, data }) {
  const classes = useStyles();
  const [items, setItems] = useState({});
  //   Object.keys(data).map(key => {
  //     console.log(key.key());
  //   });

  //   console.log(Object.keys(data));

  Object.keys(data).map(key => {
    console.log(data[key]);
  });

  useEffect(() => {
    setTimeout(() => {
      if (firebase.auth().currentUser) {
        fetchSurveys(firebase.auth().currentUser.uid);
      }
    }, 1000);
  }, [fetchSurveys]);

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Surveys
        </Typography>
        {data ? (
          <form className={classes.form} noValidate>
            <List dense={false}>
              {Object.keys(data).map(key => (
                <ListItem key={key}>
                  <Grid container spaceing={2}>
                    <Grid item xs={8}>
                      <Typography
                        component={Link}
                        to={{ pathname: `/detail/${data[key].key}`, state: { key: data[key].key } }}
                        variant='h5'
                        key={data[key].key}
                      >
                        {data[key].name}
                      </Typography>{' '}
                    </Grid>
                    <Grid item xs={4}>
                      <QRCode style={{ width: 100, height: 100 }} value={data[key].key} />,
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </form>
        ) : (
          <Typography component='h1' variant='h5'>
            No surveys found, please create one
          </Typography>
        )}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = ({ data }) => {
  console.log(data);
  return {
    data,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(SurveyListComponent);
