import firebase, { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDUykyITKTY7VQ-BQBs3fN9qyv_gCbUu7s",
    authDomain: "react-app-742c2.firebaseapp.com",
    databaseURL: "https://react-app-742c2-default-rtdb.firebaseio.com",
    projectId: "react-app-742c2",
    storageBucket: "react-app-742c2.appspot.com",
    messagingSenderId: "348967126421",
    appId: "1:348967126421:web:35e30446830ddf45bd629c",
    measurementId: "G-EQH7QRKZJW"
};

export default firebase.initializeApp(firebaseConfig);