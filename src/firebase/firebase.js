import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDtm3eQPpdq7GgW8_9qSf48GDTz-2Uk3Ew",
    authDomain: "portfolio-website-b0a55.firebaseapp.com",
    databaseURL: "https://portfolio-website-b0a55-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-b0a55",
    storageBucket: "portfolio-website-b0a55.appspot.com",
    messagingSenderId: "283449274639",
    appId: "1:283449274639:web:5b2f2a37a7367b5a26ce7a"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, addDoc };