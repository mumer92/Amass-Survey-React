import React, { useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  TextField,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  title: {
    margin: theme.spacing(4, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const randomID = () => {
  return Math.floor(Math.random() * 9999);
};

function ListComponent({ addToDo }) {
  const classes = useStyles();
  const [items, setItems] = useState([{ id: randomID(), value: '' }]);

  return (
    <Container component='main' maxWidth='lg'>
      <div>
        <Grid item xs={12} md={6}>
          <Typography variant='h6' className={classes.title}>
            Survey Questions
          </Typography>
          <div className={classes.demo}>
            <List dense={false}>
              {items.map((x, i) => (
                <ListItem key={i}>
                  <div>
                    <ListItemText primary={`Question: ${i + 1}`} />
                  </div>
                  <div>
                    <TextField
                      style={{ margin: 20 }}
                      onChange={event => {
                        setItems(
                          items.map(item => {
                            if (item.id === x.id) {
                              item.value = event.target.value;
                              return item;
                            }
                            return item;
                          }),
                        );
                      }}
                    />
                    <Button
                      variant='contained'
                      color='secondary'
                      className={classes.button}
                      onClick={() => {
                        setItems(items.filter(item => item.id !== x.id));
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
        <div>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={() => {
              setItems([...items, { id: randomID() }]);
            }}
          >
            Add Question
          </Button>

          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            onClick={event => {
              event.preventDefault();
              addToDo(items);
            }}
          >
            Create Survey
          </Button>
        </div>
      </div>
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
)(ListComponent);
