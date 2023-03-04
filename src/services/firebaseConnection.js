import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: "AIzaSyAcAW-HHj-I72zUdx8TkmRSOTCgJGsWxTU",
  authDomain: "tarefas-7c469.firebaseapp.com",
  projectId: "tarefas-7c469",
  storageBucket: "tarefas-7c469.appspot.com",
  messagingSenderId: "427343285020",
  appId: "1:427343285020:web:ec72ca6c92fdff61dac8d9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;