var firebase = require('firebase/app')
require('firebase/firestore')

// Initialize Firebase
// production keys
var config = {
  apiKey: 'AIzaSyAtvhXdtP9A5eXr6_akYBsetVhy4RwXsrQ',
  authDomain: 'lifcare-ed1e1.firebaseapp.com',
  databaseURL: 'https://lifcare-ed1e1.firebaseio.com',
  projectId: 'lifcare-ed1e1',
  storageBucket: 'lifcare-ed1e1.appspot.com',
  messagingSenderId: '1020508866684'
}

// dev keys
// var config = {
//   apiKey: 'AIzaSyCJx3lHFe3CDu9CATizZftNjnem1PUBDPs',
//   authDomain: 'lifcare-test.firebaseapp.com',
//   databaseURL: 'https://lifcare-test.firebaseio.com',
//   projectId: 'lifcare-test',
//   storageBucket: 'lifcare-test.appspot.com',
//   messagingSenderId: '10158808556'
// }

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
// firebase.initializeApp(config)

export const storage = firebase.firestore()
const settings = {timestampsInSnapshots: true}
storage.settings(settings)
