import firebase from 'firebase';
import 'firebase/auth';

import { FirebaseConfig } from '../config/keys';
const firebaseApp = firebase.initializeApp(FirebaseConfig);

export default firebaseApp;

const databaseRef = firebaseApp.database().ref();

export const surveysRef = databaseRef.child('surveys');
export const usersRef = databaseRef.child('users');
export const todosRef = databaseRef.child('todos');

export const createSurvey = (survey, callback) => {
  surveysRef
    .push()
    .set(survey)
    .then(() => {
      if (callback) {
        callback();
      }
    });
};

export const fetchSurveyList = async uid => {
  var data = [];
  surveysRef.on('value', snapshot => {
    snapshot.forEach(child => {
      var object = {};
      Object.assign(object, child.val());

      if (child.val().uid === uid) {
        object.key = child.key;
        data.push(object);
      }
    });
  });
  return data;
};

export const signinWithEmailPassword = (email, password, callback) => {
  firebase.auth.signInWithEmailAndPassword(email, password, callback);
};

export const signupWithEmailPassword = (email, password, callback) => {
  firebase.auth().signupWithEmailPassword(email, password, callback);
};

export const currentUser = () => {
  return firebase.auth().currentUser !== null ? firebase.auth().currentUser : false;
};
