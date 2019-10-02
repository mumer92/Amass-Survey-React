import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  Container,
  Typography,
} from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/auth';

import Copyright from './Copyright';

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup({ history }) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <form className={classes.form} noValidate autocomplete='off'>
          <TextField
            inputProps={{
              autocomplete: 'new-email',
              form: {
                autocomplete: 'off',
              },
            }}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email Address'
            autoFocus
            autoComplete='off'
            error={email.length > 0 ? !validateEmail(email) : null}
            helperText={
              email.length > 0 ? (!validateEmail(email) ? 'Please enter valid email' : ' ') : ''
            }
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            inputProps={{
              autocomplete: 'new-password',
              form: {
                autocomplete: 'off',
              },
            }}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Password'
            type='password'
            autoComplete='off'
            error={password.length > 0 ? password.length <= 4 : null}
            helperText={password <= 4 ? 'password should be atleast 6 chracters' : ' '}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                  history.push('/home');
                })
                .catch(error => {
                  //   console.log(error);
                });
            }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href='/login' variant='body2'>
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
