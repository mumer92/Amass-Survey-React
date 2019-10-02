import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import NavBar from './Navbar';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ history, isUserLoggedIn, signOut }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='title' color='inherit' style={{ fontSize: 24 }}>
            Amass
          </Typography>

          {isUserLoggedIn ? <NavBar /> : null}

          <Typography
            style={{ display: 'flex', marginLeft: 'auto' }}
            color='inherit'
            variant='title'
          >
            {isUserLoggedIn ? (
              <Link
                color='inherit'
                onClick={() => {
                  signOut().then(() => {
                    history.push('/login');
                  });
                }}
              >
                Logout
              </Link>
            ) : (
              <Link href={'/login'} color='inherit'>
                Login
              </Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
