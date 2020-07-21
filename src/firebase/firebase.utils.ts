import firebase, { User } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBWn-MYGeZ15dmS_G-yYpo9oKG-wEk1L68',
  authDomain: 'crwn-db-3f3ee.firebaseapp.com',
  databaseURL: 'https://crwn-db-3f3ee.firebaseio.com',
  projectId: 'crwn-db-3f3ee',
  storageBucket: 'crwn-db-3f3ee.appspot.com',
  messagingSenderId: '515394048872',
  appId: '1:515394048872:web:269f08ffcc9879a1e93cdd',
  measurementId: 'G-MG9H55FBTG',
};

export const createUserProfileDocument = async (userAuth: User, additionalData?: any) => {

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
