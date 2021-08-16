import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbR457qUkIHqxwEBKPfLYnybvV3xp_12U",
  authDomain: "crawndb-2fd08.firebaseapp.com",
  databaseURL: "https://crawndb-2fd08.firebaseio.com",
  projectId: "crawndb-2fd08",
  storageBucket: "crawndb-2fd08.appspot.com",
  messagingSenderId: "463550830321",
  appId: "1:463550830321:web:1e482927eb80fdf097bb50",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const userexists = async (userAuth, additionaldata) => {
  if (!userAuth) return;
  else {
    var userref = firestore.doc(`users/${userAuth.uid}`);
    var snapshot = await userref.get();
    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try{
          await userref.set({
              displayName,
              email,
              createdAt,
              ...additionaldata
          })

      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userref;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
