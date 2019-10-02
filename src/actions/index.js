import { todosRef, surveysRef } from '../config/firebase';
import { FETCH_TODOS, FETCH_SURVEYS } from './types';
import { fetchSurveyList } from '../config/firebase';

export const addSurvey = (id, survey, callback) => async dispatch => {
  surveysRef
    .push()
    .set(survey)
    .then(() => {
      if (callback) {
        callback();
      }
    });
};

export const fetchSurveys = uid => async dispatch => {
  var data = [];
  surveysRef.on('value', snapshot => {
    snapshot.forEach(function(child) {
      var object = {};
      Object.assign(object, child.val());

      if (child.val().uid === uid) {
        object.key = child.key;
        data.push(object);
      }
    });

    dispatch({
      type: FETCH_SURVEYS,
      payload: data,
    });
  });
};

export const addToDo = (uid, newToDo) => async dispatch => {
  todosRef
    .child('users/' + uid)
    .push()
    .set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val(),
    });
  });
};
