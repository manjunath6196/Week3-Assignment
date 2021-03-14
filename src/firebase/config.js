import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const Config ={
    apiKey: 'AIzaSyAErbQO0ZL_Ou_7xDRzZwuqpP7PlAqwcBU',
    authDomain: 'react-native-e12b4.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'react-native-e12b4',
    storageBucket: 'auth-react-native1994.appspot.com',
    messagingSenderId: '514230058348',
    appId: '1:514230058348:android:c897fd630125c568448749',
  };

if(!firebase.apps.length){
  firebase.initializeApp(Config);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(provider1);

export  {firebase};

