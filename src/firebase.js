// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDTg3ZjwyxIf98ywFzaqQ3nntEqSP_u7wU",
    authDomain: "covid-19-leads-5565d.firebaseapp.com",
    projectId: "covid-19-leads-5565d",
    storageBucket: "covid-19-leads-5565d.appspot.com",
    messagingSenderId: "605089577359",
    appId: "1:605089577359:web:c00a3c7d18257bae9bb3fa",
    measurementId: "G-QEYJP5XMKV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db