import React from 'react';
import SurveyDetail from '../components/SurveyDetail';
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

export default function SurveyDetailPage({ history, match }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='container'>
        <SurveyDetail history={history} id={match.params.key} />
      </div>
    </MuiThemeProvider>
  );
}
