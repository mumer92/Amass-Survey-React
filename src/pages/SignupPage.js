import React from 'react';
import Signup from '../components/Signup';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { cyan, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: cyan,
    secondary: green,
  },
  status: {
    danger: 'red',
  },
});

export default function SignupPage({ history }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='container'>
        <Signup history={history} />
      </div>
    </MuiThemeProvider>
  );
}
