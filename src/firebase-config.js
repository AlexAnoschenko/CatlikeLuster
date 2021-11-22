import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD8n0kNH0eIdnI1SVWwutia5MVdyXuJsyg',
  authDomain: 'catlikeluster-b7e7d.firebaseapp.com',
  databaseURL:
    'https://catlikeluster-b7e7d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'catlikeluster-b7e7d',
  storageBucket: 'catlikeluster-b7e7d.appspot.com',
  messagingSenderId: '119837539579',
  appId: '1:119837539579:web:72d1858cf850f11b38045e',
  measurementId: 'G-BG6VP66HNB',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
