import createDataContext from './createDataContext';
import { surveysRef, todosRef } from '../config/firebase';

const surveyReducer = (state, action) => {
  switch (action.type) {
    case 'create_survey':
      return state;
    default:
      return state;
  }
};

const addSurvey = dispatch => {
  return (userId, questions, callback) => {
    const id = `${Math.floor(Math.random() * 9999)}`;
    surveysRef
      .ref(userId)
      .ref(id)
      .set(questions);

    dispatch({ type: 'create_survey', payload: { questions } });
    if (callback) {
      callback();
    }
  };
};

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const { Context, Provider } = createDataContext(surveyReducer, { addSurvey }, []);
