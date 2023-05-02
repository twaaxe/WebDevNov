import firebase from "./indexfirebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIA0-i00oLQKH0-rgh4d9bseDNxJVqWI4",
    authDomain: "clone-486c3.firebaseapp.com",
    projectId: "clone-486c3",
    storageBucket: "clone-486c3.appspot.com",
    messagingSenderId: "27991895680",
    appId: "1:27991895680:web:89477c8605f214d7ca8065",
    measurementId: "G-PYXK43HHHW"
});

// const db = firebaseApp.firestore();      dont  need right now

const auth = firebase.auth();


export { auth };
// export default { auth };