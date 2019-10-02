import React from 'react';
import List from '../components/List';
import ListComponent from '../components/ListComponent';
import SurveyListComponent from '../components/SurveyListComponent';

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
export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='container'>
        <SurveyListComponent />
      </div>
    </MuiThemeProvider>
  );
}
