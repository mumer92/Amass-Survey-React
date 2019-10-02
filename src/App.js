import React, { useState } from 'react';
import './App.css';
import { cyan, green } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ButtonAppBar from './components/top/ButtonAppBar';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './config/firebase';

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: firebase.auth.EmailAuthProvider(),
};

export const AuthContext = React.createContext(null);

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: cyan,
    secondary: green,
    contrastText: 'white',
  },
  status: {
    danger: 'orange',
  },
});

function App({ history, user, signOut, signInWithEmail }) {
  //   const [isLoggedIn, setLoggedIn] = useState(false);

  //   history.listen((location, action) => {
  //     console.log(action, location.pathname, location.state);
  //   });

  const isUserLoggedIn = () => {
    return firebase.auth().currentUser !== null ? true : false;
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <ButtonAppBar
          history={history}
          isUserLoggedIn={isUserLoggedIn()}
          user={user}
          signOut={signOut}
        />
      </div>
    </MuiThemeProvider>
  );
}

// export default App;

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
