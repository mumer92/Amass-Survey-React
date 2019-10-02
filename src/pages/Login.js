import React from 'react';
import Signin from '../components/Signin';
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

export default function Login({ history }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='container'>
        <Signin history={history} />
      </div>
    </MuiThemeProvider>
  );
}
