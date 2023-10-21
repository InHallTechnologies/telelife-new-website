import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyChjc7qPS0yopNPm-r5xLI5sdM1xkRssBU",
    authDomain: "teli-life-medi-care-fb.firebaseapp.com",
    databaseURL: "https://teli-life-medi-care-fb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "teli-life-medi-care-fb",
    storageBucket: "teli-life-medi-care-fb.appspot.com",
    messagingSenderId: "1044857018553",
    appId: "1:1044857018553:web:422ba2fdb34b43cd72e368",
    measurementId: "G-TL5215ZXFG"
};

const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
