import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCNXHgZyQ9ZOKcu0Gfo-j5XGDcNyzeDHrk",
    authDomain: "stinkbug-cec5a.firebaseapp.com",
    projectId: "stinkbug-cec5a",
    storageBucket: "stinkbug-cec5a.appspot.com",
    messagingSenderId: "745293049264",
    appId: "1:745293049264:web:fc8ae6fe8118f40cfbba75",
    measurementId: "G-CCG3CCJFB2"
};

export const firebaseApp = initializeApp(firebaseConfig);