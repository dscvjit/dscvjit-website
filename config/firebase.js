import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWC-O6tAzaKjyPGY20uDJachxggnVjI9g',
  authDomain: 'admin-dsc-vjit.firebaseapp.com',
  databaseURL: 'https://admin-dsc-vjit.firebaseio.com',
  projectId: 'admin-dsc-vjit',
  storageBucket: 'admin-dsc-vjit.appspot.com',
  messagingSenderId: '195464616055',
  appId: '1:195464616055:web:90d9bf4ae970c362c94e72',
  measurementId: 'G-T4C6B4S4P9'
};

//place the config here
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export default firebase;
