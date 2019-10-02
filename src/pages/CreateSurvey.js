import React from 'react';
import SurveyForm from '../components/SurveyForm';
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

export default function CreateSurvey({ history }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='container'>
        <SurveyForm history={history} />
      </div>
    </MuiThemeProvider>
  );
}
