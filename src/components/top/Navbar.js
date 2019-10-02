import React from 'react';
import { List, ListItem, ListItemText, Link } from '@material-ui/core';

import TypoGraphy from '@material-ui/core/Typography';

function NavBar() {
  return (
    <List component='nav'>
      <ListItem component='div'>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            <Link href={'/home'} color='inherit'>
              Surveys
            </Link>
          </TypoGraphy>
        </ListItemText>
        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            <Link href={'/create'} color='inherit'>
              Create Survey
            </Link>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color='inherit' variant='title'>
            <Link href={'/users'} color='inherit'>
              Users
            </Link>
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
