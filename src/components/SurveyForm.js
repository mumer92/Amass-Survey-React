import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';
import Copyright from './Copyright';

import firebase from 'firebase/app';
import 'firebase/auth';

import { currentUser, createSurvey } from '../config/firebase';

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

const randomID = () => {
  return Math.floor(Math.random() * 9999);
};

function SurveyForm({ history, addSurvey }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [items, setItems] = useState([{ id: randomID(), value: '' }]);

  return (
    <Container component='main' maxWidth='sm'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Create Survey
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              label={'Survey Name'}
              onChange={event => {
                setName(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <form className={classes.form} noValidate>
          <List dense={false}>
            {items.map((x, i) => (
              <ListItem key={i}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <TextField
                      variant='outlined'
                      required
                      fullWidth
                      label={`Question ${i + 1}`}
                      onChange={event => {
                        setItems(
                          items.map(item => {
                            if (item.id === x.id) {
                              item.value = event.target.value;
                              console.log(item);
                              return item;
                            }
                            return item;
                          }),
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      style={{ margin: 10 }}
                      onClick={() => {
                        setItems(items.filter(item => item.id !== x.id));
                      }}
                      fullWidth
                      variant='contained'
                      color='secondary'
                      className={classes.submit}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                onClick={() => {
                  setItems([...items, { id: randomID() }]);
                }}
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Add Question
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={event => {
                  event.preventDefault();
                  if (currentUser) {
                    console.log(currentUser());
                    createSurvey({ name: name, questions: items, uid: currentUser().uid }, () => {
                      history.push('/home');
                    });
                  }
                }}
              >
                Create Survey
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(
  mapStateToProps,
  actions,
)(SurveyForm);
