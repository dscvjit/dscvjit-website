import firebase from 'firebase';

const firebaseConfig = {};
//place the config here
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export default firebase;
