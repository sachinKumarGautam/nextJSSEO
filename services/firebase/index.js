var firebase = require('firebase/app')
require('firebase/firestore')

// var config = {
//   apiKey: 'AIzaSyAuGpgRFE2AIEsj9knpmmx-cEEnOmVDeHM',
//   authDomain: 'lifcare-web-dev.firebaseapp.com',
//   databaseURL: 'https://lifcare-web-dev.firebaseio.com',
//   projectId: 'lifcare-web-dev',
//   storageBucket: 'lifcare-web-dev.appspot.com',
//   messagingSenderId: '994953362151'
// }

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCJx3lHFe3CDu9CATizZftNjnem1PUBDPs',
  authDomain: 'lifcare-test.firebaseapp.com',
  databaseURL: 'https://lifcare-test.firebaseio.com',
  projectId: 'lifcare-test',
  storageBucket: 'lifcare-test.appspot.com',
  messagingSenderId: '10158808556'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// firebase.initializeApp(config)

export var storage = firebase.firestore()
