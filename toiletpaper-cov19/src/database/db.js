import 'firebase/database';
import firebase from 'firebase/app';
import config from '../../secret/env';

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
});


export default firebase.database();
