import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCpFUTab8gMLRsAfvsvENDhakZp8kWwGsk',
  authDomain: 'buzz-and-shop.firebaseapp.com',
  projectId: 'buzz-and-shop',
  storageBucket: 'buzz-and-shop.appspot.com',
  messagingSenderId: '290481998328',
  appId: '1:290481998328:web:e4b0e5f582b81bd7d3ae0d',
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
